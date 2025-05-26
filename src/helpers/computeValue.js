import { getState } from "../main/initApp.js";

const types = {
  relation: handleRelation,
};

export function computeValue(value) {
  for (const iterator in value) {
    let item = value[iterator];

    if (typeof item === "object" && item.type === "relation") {
      value[iterator] = types[item.type](item);
    }
  }
  return value;
}

function handleRelation(relation) {
  const shop = getState("shop");
  const country = getState("country");
  const { value, placeholderPosition, relyOn } = relation;

  let relyOnValue = "";
  if (relyOn === "slug") {
    relyOnValue = country;
  }

  if (relyOn === "origin") {
    relyOnValue = shop.origin;
  }

  const arrayValue = value.split("");
  const splitted = arrayValue.toSpliced(
    placeholderPosition,
    0,
    relyOnValue.toLowerCase(),
  );
  const newValue = splitted.join("");

  return newValue;
}
