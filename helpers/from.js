import od from "../data/templates/from.js"
import {getState} from "../main/initApp.js"

export function priceFrom(product) {
  const country = getState("country")
  return country === "HU" ? {...product, lowPrice: product.lowPrice + od[country]} : {...product, lowPrice: od[country] + " " + product.lowPrice}
}