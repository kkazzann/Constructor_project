import {
  Line,
  Category,
  ThisMayInterestYou,
  Freebies,
  Intro,
  Product,
  Timer,
  GetCode,
  Paragraph,
  Space,
  ImageWithLink,
} from "../components/index.js";
import { priceFree } from "../helpers/index.js";

export async function wintersaleLP({
  links,
  getProductFromServer,
  getProductByName,
  getProductById,
  getCategory,
  queries,
  getField,
  id,
  origin,
  country,
  template,
}) {
  const banners = {
    CHDE: "https://upload.pictureserver.net/static/2024/chde240311StaticBanner.png",
    FR: "https://upload.pictureserver.net/static/2024/fr240311StaticBanner.png",
    HU: "https://upload.pictureserver.net/static/2024/hu240311StaticBanner.png",
    IT: "https://upload.pictureserver.net/static/2024/it240311StaticBanner.png",
    NL: "https://upload.pictureserver.net/static/2024/nl240311StaticBanner.png",
    NO: "https://upload.pictureserver.net/static/2024/no240311StaticBanner.png",
    PL: "https://upload.pictureserver.net/static/2024/pl240311StaticBanner.png",
    PT: "https://upload.pictureserver.net/static/2024/pt240311StaticBanner.png",
    SE: "https://upload.pictureserver.net/static/2024/se240311StaticBanner.png",
    SK: "https://upload.pictureserver.net/static/2024/sk240311StaticBanner.png",
    ES: "https://upload.pictureserver.net/static/2024/es240311StaticBanner.png",
    UK: "https://upload.pictureserver.net/static/2024/uk240311StaticBanner.png",
    CHFR: "https://upload.pictureserver.net/static/2024/chfr240311StaticBanner.png",
    AT: "https://upload.pictureserver.net/static/2024/at240311StaticBanner.png",
    CZ: "https://upload.pictureserver.net/static/2024/cz240311StaticBanner.png",
    DE: "https://upload.pictureserver.net/static/2024/de240311StaticBanner.png",
    DK: "https://upload.pictureserver.net/static/2024/dk240311StaticBanner.png",
    FI: "https://upload.pictureserver.net/static/2024/fi240311StaticBanner.png",
  };

  const banners_link = {
    CHDE: "https://www.beliani.ch/content/lp24-03-04",
    CHFR: "https://www.beliani.ch/content/lp24-03-04",
    UK: "https://www.beliani.co.uk/content/lp24-03-04",
    DE: "https://www.beliani.de/content/lp24-03-04",
    AT: "https://www.beliani.at/content/lp24-03-04",
    ES: "https://www.beliani.es/content/lp24-03-04",
    PL: "https://www.beliani.pl/content/lp24-03-04",
    NL: "https://www.beliani.nl/content/lp24-03-04",
    IT: "https://www.beliani.it/content/lp24-03-04",
    PT: "https://www.beliani.pt/content/lp24-03-04",
    HU: "https://www.beliani.hu/content/lp24-03-04",
    DK: "https://www.beliani.dk/content/lp24-03-04",
    CZ: "https://www.beliani.cz/content/lp24-03-04",
    FI: "https://www.beliani.fi/content/lp24-03-04",
    NO: "https://www.beliani.no/content/lp24-03-04",
    SK: "https://www.beliani.sk/content/lp24-03-04",
    SE: "https://www.beliani.se/content/lp24-03-04",
    FR: "https://www.beliani.fr/content/lp24-03-04",
  };
  return `
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #ffccb7; color: #000;" id="newsletter">
  <tbody>
      <tr>
          <td align="center">
            ${ImageWithLink(links[0], links[1])}
          </td>
      </tr>
      <tr>
          <td align="center" class="newsletterBottom35px">
            ${ImageWithLink(links[2], links[3])}
          </td>
      </tr>

      <tr>
          <td align="center">
            ${ImageWithLink(banners_link[country], banners[country])}
          </td>
      </tr>

      <tr>
        <td class="newsletterContainer"style="background-color: #ffccb7; ">
          <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
            <tr>
              <td>
                ${Space("newsletterBottom35px")}
              </td>
            </tr>
            <tr>
              <td align="center" >
                  ${Paragraph(queries.offer[0], "center")}
              </td>
            </tr>
            <tr>
              <td>
                ${Space("newsletterBottom35px")}
              </td>
            </tr>
            <tr>
                <td align="center" >
                    ${Paragraph(queries.offer[1], "center")}
                </td>
            </tr>
            <tr>
              <td>
                ${Space("newsletterBottom35px")}
              </td>
            </tr>
            <tr>
              <td align="center"  >
                ${GetCode({
                  code: queries.code,
                  link: links[0],
                  type: template,
                })}
              </td>
            </tr>
            <tr>
              <td>
                ${Space("newsletterBottom35px")}
              </td>
            </tr>
            <tr>
                <td align="center"  >
                  ${Paragraph(queries.offer[3], "center")}
                </td>
            </tr>
            <tr>
              <td>
                ${Space("newsletterBottom35px")}
              </td>
            </tr>
            <tr>
                <td align="center"  >
                  ${Paragraph(queries.offer[4], "center")}
                </td>
            </tr>

            <tr>
              <td>
                ${Space("newsletterBottom35px")}
              </td>
            </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center" class="newsletterFreebieContainer" style="background-color: #ffccb7;" >
          ${Freebies({
            products: [
              priceFree({
                ...getProductById("189862"),
                align: "center",
                containerAlign: "right",
              }),
              priceFree({
                ...getProductById("194038"),
                align: "center",
                containerAlign: "left",
              }),
              priceFree({
                ...getProductById("170246"),
                align: "center",
                containerAlign: "left",
              }),
            ],
            size: {
              row: 1,
              col: 3,
            },
          })}
          </td>
        </tr>
        <tr>
        <td align="center" class="newsletterFreebieContainer" style="background-color: #ffccb7;" >
        ${Freebies({
          products: [
            priceFree({
              ...getProductById("355890"),
              align: "center",
            }),
            priceFree({
              ...getProductById("359971"),
              align: "center",
            }),
            priceFree({
              ...getProductById("355801"),
              align: "center",
            }),
          ],
          size: {
            row: 1,
            col: 3,
          },
        })}
        </td>
      </tr>
      <tr>
      <td align="center" class="newsletterFreebieContainer" style="background-color: #ffccb7;" >
      ${Freebies({
        products: [
          priceFree({
            ...getProductById("159092"),

            align: "center",
          }),
          priceFree({
            ...getProductById("185596"),

            align: "center",
          }),
          priceFree({
            ...getProductById("185567"),

            align: "center",
          }),
        ],
        size: {
          row: 1,
          col: 3,
        },
      })}
      ${Space("newsletterBottom80px")}
      </td>
    </tr>

    <tr>
      <td style="color: #fff; background-color: #750000;">
        ${Space("newsletterBottom35px")}
      </td>
    </tr>

    <tr>
      <td class="newsletterContainer" style="color: #fff; background-color: #750000;" >
        ${Intro({
          data: queries.intro,
        })}
      </td>
    </tr>

    <tr>
      <td style="color: #fff; background-color: #750000;">
        ${Space("newsletterBottom80px")}
      </td>
    </tr>

      <tr>
        <td style="color: #fff; background-color: #750000;">
          ${Category({
            name: queries.category[0],
            src: "https://upload.pictureserver.net/static/2024/240401Category1.png",
            href: getCategory(
              "https://www.beliani.ch/garden-furniture/outdoor-furniture/balcony-furniture/"
            ),
            products: [
              getProductById("294750"),
              getProductById("245423"),
              getProductById("294785"),
              getProductById("392813"),
            ],
            cta: queries.shopNow,
            ctaComponent: (href, cta) => `
            <a href="${href}" style="color:#fff; text-decoration: underline;">
              <span class="newsletterCta">${cta}</span>
            </a>
            `,
          })}
        </td>
      </tr>

      <tr>
        <td class="newsletterBottom35px" >
        </td>
      </tr>

      <tr>
        <td style="color: #000">
          ${Category({
            name: queries.category[1],
            src: "https://upload.pictureserver.net/static/2024/240401Category2.png",
            href: getCategory(
              "https://www.beliani.ch/garden-furniture/outdoor-furniture/garden-chairs/"
            ),
            products: [
              getProductById("248864"),
              getProductById("405140"),
              getProductById("351365"),
              getProductById("311704"),
            ],
            cta: queries.shopNow,
          })}
        </td>
      </tr>
      <tr>
        <td style="color: #fff; background-color: #750000;" class="newsletterBottom35px" >
        </td>
      </tr>

      <tr>
        <td style="color: #fff; background-color: #750000;">
          ${Category({
            name: queries.category[2],
            src: "https://upload.pictureserver.net/static/2024/240401Category3.png",
            href: getCategory(
              "https://www.beliani.ch/garden-furniture/garden-accessories/garden-lanterns/"
            ),
            products: [
              getProductById("121559"),
              getProductById("106078"),
              getProductById("199504"),
              getProductById("305825"),
            ],
            cta: queries.shopNow,
            ctaComponent: (href, cta) => `
            <a href="${href}" style="color:#fff; text-decoration: underline;">
              <span class="newsletterCta">${cta}</span>
            </a>
            `,
          })}
        </td>
      </tr>

      <tr>
        <td class="newsletterBottom35px" >
        </td>
      </tr>
      
      <tr>
        <td style="color: #000">
          ${Category({
            name: queries.category[3],
            src: "https://upload.pictureserver.net/static/2024/240401Category4.png",
            href: getCategory(
              "https://www.beliani.ch/garden-furniture/garden-rugs/"
            ),
            products: [
              getProductById("185967"),
              getProductById("185861"),
              getProductById("97540"),
              getProductById("377473"),
            ],
            cta: queries.shopNow,
          })}
        </td>
      </tr>
  <tbody>
</table>

        <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
            <tbody>
                <tr>
                    <td align="left">
                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                              <td class="newsletterBottom35px" >
                                ${Line()}
                              </td>
                            </tr>
                                <tr>
                                    <td align="left" class="newsletterBottom35px">
                                        <span class="newsletterSoonEndingTitle">${
                                          queries.soonEnding
                                        }</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" class="newsletterBottom20px">
                                        <a href=${links[4]}>
                                            <img loading="lazy" src=${
                                              links[5]
                                            } style="display: block;" width="100%">
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" class="newsletterBottom35px">
                                        <a href=${links[6]}>
                                            <img loading="lazy" src=${
                                              links[7]
                                            } style="display: block;" width="100%">
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
  ${footer[country](queries.condition[0], template, id)}
`;
}
