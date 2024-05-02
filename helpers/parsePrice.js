import { priceFormats } from "./priceFormats.js";

export function parsePrice(product) {
  return {
    ...product,
    lowPrice: priceFormats[product.country.toUpperCase()](product.lowPrice),
    highPrice:
      product.highPrice !== null
        ? priceFormats[product.country.toUpperCase()](
            product.country === "PL"
              ? Math.ceil(product.highPrice).toString()
              : product.highPrice
          )
        : "",
  };
}
