import { priceFree } from "../helpers/priceFree.js"
import { Space } from "./Space.js"
import { Freebies } from "./freebies.js"

const FreebiesGenerator = ({ freebies, getProductById }) => {
  return freebies
    .map((freebie, idx) => {
      if (idx === freebies.length - 1) {
        return `
        ${Freebies({
          products: freebie.products.map((item) => ({
            ...item,
            ...priceFree(getProductById(item.id, item.src)),
          })),
          size: freebie.size,
        })}
        ${Space({ className: "newsletterBottom80px" })}
        `
      }

      return `
        ${Freebies({
          products: freebie.products.map((item) => ({
            ...item,
            ...priceFree(getProductById(item.id, item.src)),
          })),
          size: freebie.size,
        })}
        ${Space({ className: "newsletterBottom20px" })}
        `
    })
    .join("")
}

export default FreebiesGenerator
