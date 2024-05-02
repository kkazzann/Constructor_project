import {
  selectCampaignHandler,
  copyHandlerTemplate,
  openCampaignHandler,
  handleSlugChange,
} from "./events.js";
import { attachCss } from "../helpers/index.js";
import { SpinnerInit } from "../helpers/spinner/spinerOptions.js";
import origins from "../data/templates/origins.js";
import products from "../data/products/data.js";

import { fetchTranslations } from "../api/fetch/fetch.js";
import { addParams } from "../helpers/getQueryLink.js";
import { TemplateHandlers } from "./handlers/handlers.js";

const root = document.querySelector("#app");
const state = {
  country: "DE",
  loading: false,
  template: "newsletter",
  ids: {},

  links: [],
  products: [],
  categories: [],
  productsIds: [],
  translations: [],
  token: "",
};

export function setState(key, value) {
  state[key] = value;

  if (key === "template") {
    attachCss(state);
  }

  if (key === "loading" && value === true) {
    root.innerHTML = "";
    SpinnerInit.spin(root);
  }

  if (key === "loading" && value === false) {
    SpinnerInit.stop(root);
  }
}

export function getState(key) {
  if (key in state) {
    return state[key];
  } else {
    return undefined;
  }
}

export function initApp({ tableColumns, token, campaigns, optimizeImg }) {
  function initCampaigns() {
    return campaigns.map((campaign) => {
      const option = document.createElement("option");
      option.value = campaign.startId;
      option.textContent = campaign.name;
      return option;
    });
  }

  setState("optimizeImg", optimizeImg);
  setState("token", token);
  setEvents();

  async function render(templateToRender) {
    setState("template", templateToRender.type);

    const country = getState("country");
    const translations = getState("translations");
    const ids = getState("ids");
    const handlers = new TemplateHandlers({ translations, country, products });

    if (templateToRender.tableQueries.length > 0) {
      try {
        setState("loading", true);
        const translationsResult = await fetchTranslations({
          tableQueries: templateToRender.tableQueries,
          tableColumns,
        });
        setState("loading", false);
        const queries = {};
        for (const translation of translationsResult) {
          queries[translation.name] = translation.data;
        }
        setState("queries", queries);
      } catch (error) {
        Toastify({
          text: "Translations failed." + error,
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
      }
    }

    // addParams check the link on "query" key and execute with origin.
    const links = addParams({
      links: templateToRender.links,
      type: templateToRender.type,
    });
    setState("links", links);

    try {
      const html = await templateToRender.template({
        ...state,
        country,
        origin: origins[country],
        id: ids[country],
        type: templateToRender.type,
        getProductByName: handlers.getProductByName,
        getProductById: handlers.getProductById,
        getCategory: handlers.getCategory,
        getField: handlers.getField,
        getProductFromServer: handlers.getProductFromServer,
      });
      if (html.includes("undefined")) {
        if (confirm("Do you want to render template with undefined value?")) {
          return (root.innerHTML = html);
        } else {
          Toastify({
            text: "Error rendering. HTML code has undefined value.",
            escapeMarkup: false,
            duration: 3000,
          }).showToast();
        }
      } else {
        root.innerHTML = html;
      }
    } catch (error) {
      console.log(error);
      Toastify({
        text: "Please check console. " + error.message,
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
    }
  }

  function setEvents() {
    const app = document.querySelector("#app");

    const slugs = document.querySelector("#slug");
    const selectCampaigns = document.querySelector("#campaigns");
    const selectTemplates = document.querySelector("#templates");
    const copyTemplate = document.querySelector(".copyTemplate");
    const openCampaign = document.querySelector(".openCampaign");

    openCampaign.addEventListener("click", (e) =>
      openCampaignHandler(state.ids[state.country])
    );
    slugs.addEventListener("change", (ev) => {
      handleSlugChange(ev);
      render(getState("selectedTemplate"));
    });

    copyTemplate.addEventListener("click", (e) =>
      copyHandlerTemplate(e, copyTemplate, app.innerHTML, state)
    );
    selectCampaigns.addEventListener("change", (ev) => {
      const templates = selectCampaignHandler(ev, campaigns);

      root.innerHTML = ""
      selectTemplates.innerHTML = '<option value="">Select template</option>'
      selectTemplates.append(...renderAvailableTemplates(templates));

      setState("selectedTemplates", templates);
    });
    selectCampaigns.append(...initCampaigns());
    selectTemplates.addEventListener("change", (ev) => {
      setSelectedTemplate(ev);
      render(getState("selectedTemplate"));
    });
  }

  function setSelectedTemplate(ev) {
    const selectedTemplates = getState("selectedTemplates");
    const selectedTemplate = selectedTemplates.find(
      (template) => template.type + "_" + template.name === ev.target.value
    );
    if (!selectedTemplate) {
      Toastify({
        text: `Template ${ev.target.value} not found.`,
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
    }
    setState("selectedTemplate", selectedTemplate);
    return selectedTemplate;
  }

  function renderAvailableTemplates(templates) {
    return templates.map((template) => {
      const option = document.createElement("option");
      option.value = template.type + "_" + template.name;
      option.textContent = template.name
        ? template.name
        : template.type === "newsletter"
        ? "Newsletter"
        : "Landing";
      return option;
    });
  }
}
