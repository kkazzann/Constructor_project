import { Footer } from "../components/footer.js";
import { Header } from "../components/header.js";
import {
  Line,
  Category,
  Intro,
  Paragraph,
  ImageWithLink,
  Space,
  Product,
  OfferPartCodes,
  Timer,
  TopImageTitle,
  AdditionalCategories,
  CategoryOneBannerWhite,
  CategoryOneBanner,
  CategoryOneLast,
} from "../components/index.js";
import { OfferPart } from "../components/OfferPart.js";
import { OfferPartCode } from "../components/OfferPartCode.js";
import { priceFree } from "../helpers/priceFree.js";
import templates from "../main/data/templates.js";
import { getCodes } from "../utils/getCodes.js";

export async function RegularWednesdayNslt({
  links,
  getProductById,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getFooter,
  getHeader,
  queries,
  id,
  origin,
  country,
  type,
  categories,
  background,
  header,
  offerPart,
  intro,
  timer,
  data,
  item,
  add_utm
}) {
  const codes = getCodes(queries);
  const timer_link = {
    CHDE: [""],
    CHFR: [""],
    UK: [""],
    DE: [""],
    FR: [""],
    AT: [""],
    ES: [""],
    PL: [""],
    NL: [""],
    PT: [""],
    IT: [""],
    SE: [""],
    HU: [""],
    DK: [""],
    CZ: [""],
    FI: [""],
    NO: [""],
    SK: [""],
  };
  return `
  ${Header(
    {
      id,
      advantages: {
        freeDelivery: getHeader("Free Delivery"),
        daysReturn: getHeader("365-Day Return"),
      },
      paragraph: {
        troubleViewing: getHeader("Trouble viewing"),
        troubleViewingHrefText: getHeader("Trouble viewing href text"),
        addBeliani: getHeader("Add Beliani to your"),
        whiteList: getHeader("Whitelist"),
        whitelistHref: getHeader("Whitelist href"),
      },
      topImage: {
        src: getHeader("Top image src"),
        href: getHeader("Top image href"),
      },
      categories: {
        firstCategory: {
          src: getHeader("Header Category 1 src"),
          href: getHeader("Header Category 1 href"),
        },
        secondCategory: {
          src: getHeader("Header Category 2 src"),
          href: getHeader("Header Category 2 href"),
        },
        thirdCategory: {
          src: getHeader("Header Category 3 src"),
          href: getHeader("Header Category 3 href"),
        },
      },
      assembly: {
        src: ["AT", "PL", "FR", "UK"].includes(country)
          ? ["#fd9000"].includes(background)
            ? getHeader("Header delivery_cosy src")
            : getHeader("Header delivery src")
          : ["#750000"].includes(background)
          ? getHeader("Header asembly src")
          : getHeader("Header asembly_cosy src"),
        href: getHeader("Header asembly href"),
        exclude: true,
      },
    },
    { type }
  )}
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: ${background}; color: #000;" id="newsletter">
        <tbody>
            ${type === "newsletter"
              ? `
                <tr>
                    <td align="center">
                      ${ImageWithLink({
                        href: links[0],
                        src: links[1],
                      })}
                    </td>
                </tr>
              `
              : `
                <tr>
                    <td align="center">
                      ${!queries.tit ?
                      `
                        ${ImageWithLink({
                          href: links[0],
                          src: links[1],
                        })}
                      `
                      :
                      `
                        ${TopImageTitle({
                          href: links[0],
                          title1: queries.tit[0],
                          title2: queries.tit[1],
                          color: "#000000",
                          type: "up_to",
                        })}
                      `
                      }
                    </td>
                </tr>
                  
              `
            }
            <tr>
                <td style="background-color: ${categories[0]?.background || background}; color: ${categories[0]?.color || "#000000"}">
                    <tbody>
                        <tr>
                            <td style="background-color: #FEB24D; color: #000000;">
                              ${CategoryOneBanner({
                                href: getCategoryLink(categories[0].href),
                                name: queries.categories[0],
                                color: categories[0].color,
                                desc: queries.categories[1],
                                src: categories[0].src,
                                hrefSecond: links[3],
                                srcSecond: links[4],
                                cta: getPhrase("Shop now"),
                                type: "wednesday",
                                products: categories[0].products?.map((item) =>
                                  getProductById(item.id, item.src)
                                ) || [],
                              })}
                            </td>
                        </tr>
                    </tbody>  
                </td>
            </tr>
            <tr>
                <td style="background-color: ${categories[0]?.background || background}; color: ${categories[0]?.color || "#000000"}">
                    <tbody>
                        <tr>
                            <td style="background-color: #831A1A; color: #ffffff;">
                              ${Category({
                                href: getCategoryLink(categories[1].href),
                                name: queries.categories[2],
                                color: categories[1].color,
                                desc: queries.categories[3],
                                src: categories[1].src,
                                cta: getPhrase("Shop now"),
                                type: "wednesday",
                                products: categories[1].products?.map((item) =>
                                  getProductById(item.id, item.src)
                                ) || [],
                              })}
                            </td>
                        </tr>
                    </tbody>  
                </td>
            </tr>
            <tr>
                <td style="background-color: ${categories[0]?.background || background}; color: ${categories[0]?.color || "#000000"}">
                    <tbody>
                        <tr>
                            <td style="background-color: #FEB24D; color: #000000;">
                              ${Category({
                                href: getCategoryLink(categories[2].href),
                                name: queries.categories[4],
                                color: categories[2].color,
                                desc: queries.categories[5],
                                src: categories[2].src,
                                cta: getPhrase("Shop now"),
                                type: "wednesday",
                                products: categories[2].products?.map((item) =>
                                  getProductById(item.id, item.src)
                                ) || [],
                              })}
                            </td>
                        </tr>
                    </tbody>  
                </td>
            </tr>
            <tr>
                <td style="background-color: ${categories[0]?.background || background}; color: ${categories[0]?.color || "#000000"}">
                    <tbody>
                        <tr>
                            <td style="background-color: #831A1A; color: #ffffff;">
                              ${CategoryOneLast({
                                href: getCategoryLink(categories[3].href),
                                name: queries.categories[6],
                                color: categories[3].color,
                                desc: queries.categories[7],
                                src: categories[3].src,
                                cta: getPhrase("Shop now"),
                                type: "wednesday",
                                products: categories[3].products?.map((item) =>
                                  getProductById(item.id, item.src)
                                ) || [],
                              })}
                            </td>
                        </tr>
                    </tbody>  
                </td>
            </tr>
            <tr>
                <td style="background-color: #ffffff; color: #000000;">
                    ${AdditionalCategories({
                      text1: queries.additional[0],
                      text2: queries.additional[1],
                      text3: queries.additional[2],
                      text4: queries.additional[3],
                      text5: queries.additional[4],
                      href1: categories[4].href,
                      href2: categories[5].href,
                      href3: categories[6].href,
                      href4: categories[7].href,
                      src1: categories[4].src,
                      src2: categories[5].src,
                      src3: categories[6].src,
                      src4: categories[7].src,
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
                                      <span class="newsletterFooterTitle">${getPhrase(
                                        "Shop limited-time deals"
                                      )}</span>
                                  </td>
                              </tr>
                              <tr>
                                  <td align="left" class="newsletterBottom20px">
                                      <a href=${links[5]}>
                                          <img loading="lazy" src=${
                                            links[6]
                                          } style="display: block;" width="100%">
                                      </a>
                                  </td>
                              </tr>
                              <tr>
                                  <td align="left" class="newsletterBottom35px">
                                      <a href=${links[7]}>
                                          <img loading="lazy" src=${
                                            links[8]
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
            src: ["AT", "PL", "FR", "UK"].includes(country)
              ? getFooter("Delivery src")
              : getFooter("Asembly src"),
            href: getFooter("Asembly href"),
            exclude: ["CHIT"].includes(
              country
            ),
          },
          workBanner: {
            src: getFooter("Job src"),
            href: getFooter("Job href"),
            exclude: !["PL"].includes(country),
          },
          thousandsMore: {
            title: getFooter("Title"),
            firstCategory: {
              src: getFooter("Category src 1"),
              href: getFooter("Category href 1"),
            },
            secondCategory: {
              src: getFooter("Category src 2"),
              href: getFooter("Category href 2"),
            },
            thirdCategory: {
              src: getFooter("Category src 3"),
              href: getFooter("Category href 3"),
            },
            foutrthCategory: {
              src: getFooter("Category src 4"),
              href: getFooter("Category href 4"),
            },
            fifthCategory: {
              src: getFooter("Category src 5"),
              href: getFooter("Category href 5"),
            },
            sixthCategory: {
              src: getFooter("Category src 6"),
              href: getFooter("Category href 6"),
            },
            seventhCategory: {
              src: getFooter("Category src 7"),
              href: getFooter("Category href 7"),
            },
            eigthCategory: {
              src: getFooter("Category src 8"),
              href: getFooter("Category href 8"),
            },
          },
          klarna: {
            src: getFooter("Klarna src"),
            href: getFooter("Klarna href"),
            exclude: ["SK", "HU", "BEFR", "BENL"].includes(country),
          },
          socials: {
            title: getFooter("Socials Title"),
            instagram: {
              src: getFooter("Instagram src"),
              href: getFooter("Instagram href"),
            },
            facebook: {
              src: getFooter("Facebook src"),
              href: getFooter("Facebook href"),
            },
            youtube: {
              src: getFooter("Youtube src"),
              href: getFooter("Youtube href"),
            },
            pinterest: {
              src: getFooter("Pinterest src"),
              href: getFooter("Pinterest href"),
            },
            Xsocial: {
              src: getFooter("X src"),
              href: getFooter("X href"),
            },
            Tiktok: {
              src: getFooter("Tiktok src"),
              href: getFooter("Tiktok href"),
            },
          },
          advantages: {
            firstAdvantage: {
              src: getFooter("Advantages src 1"),
              href: getFooter("Advantages href 1"),
            },
            secondAdvantage: {
              src: getFooter("Advantages src 2"),
              href: getFooter("Advantages href 2"),
            },
            thirdAdvantage: {
              src: getFooter("Advantages src 3"),
              href: getFooter("Advantages href 3"),
            },
            fourthAdvantage: {
              src: getFooter("Advantages src 4"),
              href: getFooter("Advantages href 4"),
            },
          },
          conditions: {
            conditionsTitle: getFooter("Conditions title"),
            conditionsText: queries.condition,
          },
          companyDetails: {
            title: getFooter("Company Details"),
            address: getFooter("Address"),
            mobileNumber: getFooter("Mobile number"),
            emailAddress: getFooter("Email address"),
            mailTo: getFooter("Mail to"),
            email: getFooter("Email"),
            commercialRegister: getFooter("Commercial register"),
            vat: getFooter("VAT"),
          },
        },
        { type }
      )}
    `;
}