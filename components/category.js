import { ImageWithLink, Product, Title } from "./index.js";

export function Category({
  name,
  href,
  src,
  products,
  ctaComponent,
  cta = "CTA",
  type = "monday",
}) {
  if (!type) {
    return "Please specify type for category. Monday, Wednesday";
  }

  if (type === "monday") {
    return `
  <table cellspacing="0" cellpadding="0" width="100%">
    <thead>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          ${Title(name, "left")}
        </td>
      </tr>
      <tr>
        <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px;" class="newsletterBottom35px"></td>
      </tr>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px;">
          ${ImageWithLink(href, src, name)}
        </td>
      </tr>
      <tr>
        <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px;" class="newsletterBottom35px"></td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px;" class="newsletterContainer">
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tr>
              <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px;" class="newsletterBottom20px">
                <!-- 1-2 Products table -->
                <table cellspacing="0" cellpadding="0" style="width: 100%; ">
                  <tr>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
                      ${Product(products[0])}
                    </td>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
                      ${Product(products[1])}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px;">
                <!-- 3-4 Products table -->
                <table cellspacing="0" cellpadding="0" style="width: 100%; ">
                  <tr>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-left: 0px; vertical-align: top; width: 50%" class="newsletterRight10px">
                      ${Product(products[2])}
                    </td>
                    <!-- vertical align top added for reason when product have only 1 price on mobile product grid will differ for another one-->
                    <td style="padding-top: 0px; padding-right: 0px; vertical-align: top; width: 50%" class="newsletterLeft10px">
                      ${Product(products[3])}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px;" class="newsletterBottom35px">
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px;" class="newsletterBottom80px">
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px; text-align: center;">
                  ${ctaComponent
        ?
        ctaComponent(href, cta)
        :
        `
                      <a href="${href}" style="color:#000; text-decoration: underline;">
                        <span class="newsletterCta">${cta}</span>
                      </a>
                    `
      }
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
        `;
  }
}
