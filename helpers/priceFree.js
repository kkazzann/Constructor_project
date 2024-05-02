import {getState} from "../main/initApp.js"

const free = {
  UK: "FREE",
  PL: "GRATIS",
  DE: "GRATIS",
  AT: "GRATIS",
  CHDE: "GRATIS",
  NL: "GRATIS",
  FR: "GRATUIT",
  CHFR: "GRATUIT",
  ES: "GRATIS",
  PT: "GRÁTIS",
  IT: "GRATIS",
  DK: "GRATIS",
  NO: "GRATIS",
  FI: "ILMAINEN",
  SE: "GRATIS",
  CZ: "ZDARMA",
  SK: "GRÁTIS",
  HU: "AJÁNDÉK",
}

export function priceFree(product) {
  const country = getState("country")
  return {...product, lowPrice: free[country], highPrice: product.lowPrice}
}