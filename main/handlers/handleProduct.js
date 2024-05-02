import { addParamsProduct } from "../../helpers/getQueryLink.js";
import { parsePrice } from "../../helpers/parsePrice.js";

export function handleProduct(product) {
  return addParamsProduct(parsePrice(product));
}
