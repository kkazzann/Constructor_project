import origins from "../data/templates/origins.js";
import { getState, setState } from "../main/initApp.js";
import categoriesDB from "../data/templates/categories.js";

export function parseCategory() {
  const categories = getState("categories");
  const country = getState("country");
  const newCategories = [];
  for (const category of categories) {
    let collectedCategory = origins[country];
    const categoriesArr = category.category
      .split("/")
      .filter((c) => c.length > 0);
    categoriesArr.forEach((element) => {
      if (element in categoriesDB) {
        collectedCategory += categoriesDB[element][country] + "/";
      }
    });

    newCategories.push({
      ...category,
      src:
        typeof category.src === "function"
          ? category.src(country)
          : category.src,
      href: collectedCategory,
    });
  }
  setState("categories", newCategories);
}
