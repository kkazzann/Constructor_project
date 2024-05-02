import { FreebieProduct } from "./freebieProduct.js";
import { Matrix } from "./matrix.js";

export function Freebies({ products, size = { row: 2, col: 2 } }) {
  size = {
    row: 2,
    col: 2,
    ...size,
  };

  return `
      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
        ${Matrix({
          col: size.col,
          row: size.row,
          html: products.map((product) =>
          FreebieProduct(
              {
                ...product,
              },
              product.align,
              product.style,
              product.containerAlign
            )
          ),
        })}
      </table>
    `;
}
