import { Footer } from "../components/footer.js";
import { Header } from "../components/header.js";
import {
  Line,
  Category,
  GetCode,
  Intro,
  Paragraph,
  ImageWithLink,
  Space,
  Freebies,
  Product,
  ProductWithSize,
} from "../components/index.js";
import { priceFree } from "../helpers/index.js";

export async function newsletter({
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
  type,
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
  ${Header(
    {
      id,
      assembly: {
        src: getField(queries.header, "Header asembly src"),
      },
      webVersion: {
        troubleViewing: getField(queries.header, "Trouble viewing"),
        troubleViewingHrefText: getField(
          queries.header,
          "Trouble viewing href text"
        ),
      },
      whiteList: {
        addBeliani: getField(queries.header, "Add Beliani to your"),
        whiteList: getField(queries.header, "Whitelist"),
        whitelistHref: getField(queries.header, "Whitelist href"),
      },
      advantages: {
        freeDelivery: getField(queries.header, "Free Delivery"),
        daysReturn: getField(queries.header, "365-Day Return"),
      },
      topImage: {
        src: getField(queries.header, "Top image src"),
        href: getField(queries.header, "Top image href"),
      },
      firstCategory: {
        src: getField(queries.header, "Header Category 1 src"),
        href: getField(queries.header, "Header Category 1 href"),
      },
      secondCategory: {
        src: getField(queries.header, "Header Category 2 src"),
        href: getField(queries.header, "Header Category 2 href"),
      },
      thirdCategory: {
        src: getField(queries.header, "Header Category 3 src"),
        href: getField(queries.header, "Header Category 3 href"),
      },
    },
    { country, type }
  )}
      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #ffccb7; color: #000;" >
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
                    ${ImageWithLink(
                      banners_link[country] +
                        "?utm_source=newsletter&utm_medium=email&utm_campaign=" +
                        id,
                      banners[country]
                    )}
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
                          code: queries.offer[2],
                          link: links[0],
                          type,
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
                        ...getProductById(
                          "290122",
                          "https://upload.pictureserver.net/static/2024/240422Freebie1.jpg"
                        ),
                        align: "center",
                      }),
                      priceFree({
                        ...getProductById(
                          "289996",
                          "https://upload.pictureserver.net/static/2024/240422Freebie2.jpg"
                        ),
                        align: "center",
                      }),
                      priceFree({
                        ...getProductById(
                          "290020",
                          "https://upload.pictureserver.net/static/2024/240422Freebie3.jpg"
                        ),
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
                  <td>
                    ${Space("newsletterBottom20px")}
                  </td>
                </tr>
                <tr>
                <td align="center" style="background-color: #ffccb7;" >
                ${Freebies({
                  products: [
                    priceFree({
                      ...getProductById(
                        "290014",
                        "https://upload.pictureserver.net/static/2024/240422Freebie4.jpg"
                      ),
                      align: "center",
                      containerAlign: "right",
                      style: "padding-left: 60px",
                    }),
                    priceFree({
                      ...getProductById(
                        "290047",
                        "https://upload.pictureserver.net/static/2024/240422Freebie5.jpg"
                      ),
                      align: "center",
                      containerAlign: "left",
                      style: "padding-right: 60px",
                    }),
                  ],
                  size: {
                    row: 1,
                    col: 2,
                  },
                })}
                ${Space("newsletterBottom80px")}
                </td>
              </tr>
              
              <tr>
              <td class="newsletterContainer">
              ${Line()}
              </td>
            </tr>

            <tr>
              <td style="color: #000; background-color: #ffccb7;">
                ${Space("newsletterBottom35px")}
              </td>
            </tr>

            


            <tr>
              <td class="newsletterContainer" style="color: #000; background-color: #ffccb7;" >
                ${Intro({
                  data: queries.intro,
                })}
              </td>
            </tr>

            <tr>
              <td style="color: #000; background-color: #ffccb7;">
                ${Space("newsletterBottom80px")}
              </td>
            </tr>

              <tr>
                <td style="color: #000; background-color: #ffccb7;">
                  ${Category({
                    name: queries.category[0],
                    src: "https://upload.pictureserver.net/static/2024/240422Category1.png",
                    href: getCategory(
                      "https://www.beliani.ch/beds/fabric-beds/"
                    ),
                    products: [
                      getProductById(
                        "99711",
                        "https://upload.pictureserver.net/static/2024/240422Category11.png"
                      ),
                      getProductById(
                        "452265",
                        "https://upload.pictureserver.net/static/2024/240422Category13.png"
                      ),
                      getProductById(
                        "338724",
                        "https://upload.pictureserver.net/static/2024/240422Category12.png"
                      ),
                      getProductById(
                        "329419",
                        "https://upload.pictureserver.net/static/2024/240422Category14.png"
                      ),
                    ],
                    cta: queries.shopNow,
                  })}
                </td>
              </tr>

              <tr>
                <td class="newsletterContainer">
                ${Line()}
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
                    src: "https://upload.pictureserver.net/static/2024/240422Category2.png",
                    href: getCategory(
                      "https://www.beliani.ch/beds/metal-beds/"
                    ),
                    products: [
                      getProductById(
                        "452120",
                        "https://upload.pictureserver.net/static/2024/240422Category21.png"
                      ),
                      getProductById(
                        "247925",
                        "https://upload.pictureserver.net/static/2024/240422Category22.png"
                      ),
                      getProductById(
                        "395105",
                        "https://upload.pictureserver.net/static/2024/240422Category23.png"
                      ),
                      getProductById(
                        "437782",
                        "https://upload.pictureserver.net/static/2024/240422Category24.png"
                      ),
                    ],
                    cta: queries.shopNow,
                  })}
                </td>
              </tr>

              <tr>
                <td class="newsletterContainer">
                ${Line()}
                </td>
              </tr>
              <tr>
                <td style="color: #000; background-color: #ffccb7;" class="newsletterBottom35px" >
                </td>
              </tr>

              <tr>
                <td style="color: #000; background-color: #ffccb7;">
                  ${Category({
                    name: queries.category[2],
                    src: "https://upload.pictureserver.net/static/2024/240422Category3.png",
                    href: getCategory(
                      "https://www.beliani.ch/beds/wooden-beds/"
                    ),
                    products: [
                      getProductById(
                        "410396",
                        "https://upload.pictureserver.net/static/2024/240422Category31.png"
                      ),
                      getProductById(
                        "411760",
                        "https://upload.pictureserver.net/static/2024/240422Category32.png"
                      ),
                      getProductById(
                        "57737",
                        "https://upload.pictureserver.net/static/2024/240422Category33.png"
                      ),
                      getProductById(
                        "450426",
                        "https://upload.pictureserver.net/static/2024/240422Category34.png"
                      ),
                    ],
                    cta: queries.shopNow,
                  })}
                </td>
              </tr>

              <tr>
                <td class="newsletterContainer">
                ${Line()}
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
                    src: "https://upload.pictureserver.net/static/2024/240422Category4.png",
                    href: getCategory(
                      "https://www.beliani.ch/beds/leather-beds/"
                    ),
                    products: [
                      getProductById(
                        "394734",
                        "https://upload.pictureserver.net/static/2024/240422Category41.png"
                      ),
                      getProductById(
                        "108458",
                        "https://upload.pictureserver.net/static/2024/240422Category42.png"
                      ),
                      getProductById(
                        "1331",
                        "https://upload.pictureserver.net/static/2024/240422Category43.png"
                      ),
                      getProductById(
                        "194961",
                        "https://upload.pictureserver.net/static/2024/240422Category44.png"
                      ),
                    ],
                    cta: queries.shopNow,
                  })}
                </td>
              </tr>
          <tbody>
      </table>

      <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;">
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
      ${Footer(
        {
          id,
          assembly: {
            src: getField(queries.footer, "Asembly src"),
          },
          firstCategory: {
            src: getField(queries.footer, "Category src 1"),
            href: getField(queries.footer, "Category href 1"),
          },
          secondCategory: {
            src: getField(queries.footer, "Category src 2"),
            href: getField(queries.footer, "Category href 2"),
          },
          thirdCategory: {
            src: getField(queries.footer, "Category src 3"),
            href: getField(queries.footer, "Category href 3"),
          },
          foutrthCategory: {
            src: getField(queries.footer, "Category src 4"),
            href: getField(queries.footer, "Category href 4"),
          },
          fifthCategory: {
            src: getField(queries.footer, "Category src 5"),
            href: getField(queries.footer, "Category href 5"),
          },
          sixthCategory: {
            src: getField(queries.footer, "Category src 6"),
            href: getField(queries.footer, "Category href 6"),
          },
          seventhCategory: {
            src: getField(queries.footer, "Category src 7"),
            href: getField(queries.footer, "Category href 7"),
          },
          eigthCategory: {
            src: getField(queries.footer, "Category src 8"),
            href: getField(queries.footer, "Category href 8"),
          },
          klarna: {
            src: getField(queries.footer, "Klarna src"),
            href: getField(queries.footer, "Klarna href"),
          },
          socials: {
            title: getField(queries.footer, "Socials Title"),
            instagram: {
              src: getField(queries.footer, "Instagram src"),
              href: getField(queries.footer, "Instagram href"),
            },
            facebook: {
              src: getField(queries.footer, "Facebook src"),
              href: getField(queries.footer, "Facebook href"),
            },
            youtube: {
              src: getField(queries.footer, "Youtube src"),
              href: getField(queries.footer, "Youtube href"),
            },
            pinterest: {
              src: getField(queries.footer, "Pinterest src"),
              href: getField(queries.footer, "Pinterest href"),
            },
          },
          firstAdvantage: {
            src: getField(queries.footer, "Advantages src 1"),
            href: getField(queries.footer, "Advantages href 1"),
          },
          secondAdvantage: {
            src: getField(queries.footer, "Advantages src 2"),
            href: getField(queries.footer, "Advantages href 2"),
          },
          thirdAdvantage: {
            src: getField(queries.footer, "Advantages src 3"),
            href: getField(queries.footer, "Advantages href 3"),
          },
          fourthAdvantage: {
            src: getField(queries.footer, "Advantages src 4"),
            href: getField(queries.footer, "Advantages href 4"),
          },
          companyDetails: {
            title: getField(queries.footer, "Title"),
            address: getField(queries.footer, "Address"),
            mobileNumber: getField(queries.footer, "Mobile number"),
            emailAddress: getField(queries.footer, "Email address"),
            mailTo: getField(queries.footer, "Mail to"),
            email: getField(queries.footer, "Email"),
            commercialRegister: getField(queries.footer, "Commercial register"),
            vat: getField(queries.footer, "VAT"),
          },
          title: getField(queries.footer, "Title"),
          conditionsTitle: getField(queries.footer, "Conditions title"),
          conditionsText: queries.condition[0] + " " + queries.condition[1],
          unsubscribeTitle: getField(queries.footer, "Unsubscribe title"),
        },
        { country, type }
      )}
    `;
}