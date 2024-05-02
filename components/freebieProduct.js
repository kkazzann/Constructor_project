import { ImageWithLink } from "./ImageWithLink.js";

export function FreebieProduct(
  product,
  align = "left",
  style,
  containerAlign = "center"
) {
  return `
  <table cellspacing="0" cellpadding="0" style="width: 100%; ${style ?? ""}" align=${containerAlign}>
    <tbody>
      <tr>
        <td align=${containerAlign} style="padding-top: 0px; padding-left: 0px; padding-right: 0px;">
          <table cellspacing="0" cellpadding="0" align=${containerAlign}>
              <tr>
                <td align=${containerAlign}>
                  ${ImageWithLink(product.href, product.src, product.name)}
                <td>
              </tr>
              <tr>
                  <td align="center">
                    <table cellspacing="0" cellpadding="0" style="width: 100%;">
                      <tbody>
                      <tr>
                        <td class="newsletterBottom20px">
                        </td>
                      </tr>
                        <tr>
                          <td align="${align}" style="padding-top: 0px; padding-left: 0px; padding-right: 0px; padding-bottom: 0px;">
                            <span class="newsletterProductTitleFreebie">${
                              product.name
                            }</span>
                          </td>
                        </tr>
                        ${
                          "size" in product
                            ? `<tr>
                            <td align="${align}" style="padding-top: 0px; padding-left: 0px; padding-right: 0px; padding-bottom: 0px;">
                              <span class="newsletterProductTitleFreebie">${product.size}</span>
                            </td>
                          </tr>`
                            : ""
                        }
                        <tr>
                          <td align="${align}" style="color: #000">
                            <span class="newsletterProductLowPrice" >${
                              product.lowPrice
                            } </span>
                            <span class="newsletterProductHightPrice" >${
                              product.highPrice
                            }</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
            </table>
        </td>
      </tr>
    </tbody>
  </table>
    `;
}
