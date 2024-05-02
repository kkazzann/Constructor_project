import categories from "../../data/categories/data.js";
import { handleProduct } from "./index.js";
import { getProduct } from "../../api/product.js";
import { getQueryLink } from "../../helpers/getQueryLink.js";
import origins from "../../data/templates/origins.js";
import { setState } from "../initApp.js";

export class TemplateHandlers {

  constructor({ country, products, translations }) {
    this.country = country;
    this.products = products;
    this.translations = translations;
  }
  getProductByName = (productName, src) => {
    const country_products = this.products.filter(
      (product) => product.country === this.country.toLowerCase()
    );
    const product = country_products.find(
      (product) => product.name === productName
    );

    if (!product) {
      return {
        name: `Product ${productName} not found`,
        lowPrice: "00.00",
        highPrice: "00.00",
        src: src,
      };
    }
    return handleProduct(src ? { ...product, src } : product);
  }

  getProductById = (productId, src) => {
    const country_products = this.products.filter(
      (product) => product.country === this.country.toLowerCase()
    );
    const product = country_products.find(
      (product) => Number(product.main_id) === Number(productId)
    );

    if (!product) {
      return {
        name: `Product ${productId} not found`,
        lowPrice: "00.00",
        highPrice: "00.00",
        src: src,
      };
    }
    return handleProduct(src ? { ...product, src } : product);
  }

  getCategory = (category) => {
    let new_link = new URL(origins[this.country]);
    const category_url = new URL(category);
    for (const [key, value] of category_url.searchParams.entries()) {
      new_link.searchParams.append(key, value);
    }

    let country_categories;
    if (!this.translations.categories) {
      country_categories = categories.find(
        (category) => category.slug === this.country.toLowerCase()
      );
    } else {
      const [slugs, ...categoriesDB] = this.translations.categories;
      const parsed_categories = [];
      for (let index = 0; index < slugs.length; index++) {
        const slug = slugs[index];
        let parsed_category = {};
        for (const categoryArray of categoriesDB) {
          const key = categoryArray[0];
          parsed_category = {
            slug: slug,
            [key]: categoryArray[index],
            ...parsed_category,
          };
        }
        parsed_categories.push(parsed_category);
      }

      country_categories = parsed_categories.find(
        (category) => category.slug === this.country.toLowerCase()
      );
    }

    const pathnames = category_url.pathname
      .split("/")
      .filter((pathname) => pathname.length > 0);
    const parsed_country_categories = [];
    for (const category of pathnames) {
      const categoryCandidate = country_categories[category];
      if (categoryCandidate) {
        parsed_country_categories.push(categoryCandidate);
      } else {
        Toastify({
          text: `Category <a target="_blank" style="weight: semibold; color: white;" href="https://www.prologistics.info/shop_cats.php?shop_id=1">${category}</a> not found in <a href="https://docs.google.com/spreadsheets/d/1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8/edit#gid=0" target="_blank" style="weight: semibold; color: white;">data/categories/data.js</a>`,
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
      }
    }
    new_link.pathname += parsed_country_categories.join("/");
    return getQueryLink(new_link);
  }

  getField = (data, field) => {
    const [slugs, ...categoriesDB] = data;
    const parsed_categories = [];
    for (let index = 0; index < slugs.length; index++) {
      const slug = slugs[index];
      let parsed_category = {};
      for (const categoryArray of categoriesDB) {
        const key = categoryArray[0];
        parsed_category = {
          slug: slug,
          [key]: categoryArray[index],
          ...parsed_category,
        };
      }
      parsed_categories.push(parsed_category);
    }

    const filterToSelectedCountry = parsed_categories.find(
      (item) => item.slug.toLowerCase() === this.country.toLowerCase()
    );
    if (filterToSelectedCountry) {
      return filterToSelectedCountry[field];
    }
    return "Not found";
  }

  getProductFromServer = async (productId) => {
    const country_products = products.filter(
      (product) => product.country === this.country.toLowerCase()
    );
    const product = country_products.find(
      (product) => Number(product.main_id) === Number(productId)
    );

    setState("loading", true);
    const serverProducts = await getProduct([
      {
        main_id: productId,
        src: product?.src ?? "",
      },
    ]);

    const serverProductCountry = serverProducts.filter(
      (product) => product.country === this.country.toLowerCase()
    );

    const serverProduct = serverProductCountry.find(
      (product) => Number(product.main_id) === Number(productId)
    );

    setState("false", true);
    return handleProduct(serverProduct);
  }
}
