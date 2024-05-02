import { copyNewsletterWithHeaderAndStyles } from "../helpers/copyNewsletter.js";
import { getCss } from "../helpers/getCss.js";
import { incrementId } from "../helpers/index.js";
import { setState } from "./initApp.js";

function copyHandlerTemplate(e, copyTemplate, html, state) {
  if (state.template === "newsletter") {
    Promise.resolve()
      .then(() => getCss(state.template))
      .then((css) => {
        navigator.clipboard.writeText(
          copyNewsletterWithHeaderAndStyles(html, css)
        );
        copyTemplate.textContent = "Copied to clipboard";
        let id = setTimeout(() => {
          copyTemplate.textContent = "Copy template";
          clearInterval(id);
        }, 2000);
      });
  }

  if (state.template === "landing") {
    Promise.resolve()
      .then(() => getCss(state.template))
      .then((css) => {
        navigator.clipboard.writeText(
          `
            <style>
                ${css}
            </style>` + html
        );
        copyTemplate.textContent = "Copied to clipboard";
        let id = setTimeout(() => {
          copyTemplate.textContent = "Copy template";
          clearInterval(id);
        }, 2000);
      });
  }
}

function openCampaignHandler(id) {
  window.open("https://www.prologistics.info/news_email.php?id=" + id, "blank");
}

function selectCampaignHandler(ev, campaigns) {
  const selectedCampaign = campaigns.find(
    (campaign) => campaign.startId === ev.target.value
  );

  if (!selectedCampaign) {
    Toastify({
      text: `Campaign startId ${ev.target.value} not found.`,
      escapeMarkup: false,
      duration: 3000,
    }).showToast();
  }
  const { startId, name, templates } = selectedCampaign;
  setState("ids", incrementId(startId));
  return templates;
}

function handleSlugChange(ev) {
  setState("country", ev.target.value);
}

export {
  handleSlugChange,
  selectCampaignHandler,
  copyHandlerTemplate,
  openCampaignHandler,
};
