import { OfferPartCode } from "../components/OfferPartCode.js"
import { Footer } from "../components/footer.js"
import { Header } from "../components/header.js"
import {
  Category,
  Freebies,
  GetCode,
  ImageWithLink,
  Intro,
  Line,
  Paragraph,
  Product,
  ProductWithSize,
  Space,
} from "../components/index.js"
import { priceFree } from "../helpers/priceFree.js"

export async function mondayCategories({
  links,
  getProductById,
  getCategoryLink,
  getCategoryTitle,
  getPhrase,
  getFooter,
  getHeader,
  queries,
  id,
  shop,
  country,
  type,
  categories,
  background,
  freebies,
}) {
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
              <tr>
                  <td align="center">
                    ${ImageWithLink({
                      href: links[0],
                      src: links[1],
                    })}
                  </td>
              </tr>
              <tr>
                  <td align="center">
                    ${ImageWithLink({
                      href: links[2],
                      src: links[3],
                    })}
                  </td>
              </tr>

              <tr>
                  <td style="background-color: ${background};">
                      ${Space()}
                  </td>
              </tr>

              <tr>
                  <td align="center" class="newsletterContainer">
                  ${OfferPartCode({
                    type,
                    paragraph1: queries.offer[0],
                    paragraph2: queries.offer[1],
                    paragraph3: queries.offer[2],
                    paragraph4: getPhrase("Choose from:"),
                    code:
                      type === "newsletter"
                        ? getPhrase("Get code")
                        : queries.code,
                    href: links[0],
                  })}
                  </td>
              </tr>


              <tr>
                <td class="newsletterContainer" style="background-color: ${background}; ">
                    ${Space()}
                </td>
              </tr>

              <tr>
                <td style="background-color: ${background}; ">
                    ${Freebies({
                      products: freebies[0].products.map((item) => ({
                        ...item,
                        ...priceFree(getProductById(item.id, item.src)),
                      })),
                      size: freebies[0].size,
                    })}
                </td>
              </tr>

              <tr>
                <td>
                    ${Space({ className: "newsletterBottom20px" })}
                </td>
              </tr>
                            
              <tr>
                <td style="background-color: ${background}; ">
                    ${Freebies({
                      products: freebies[1].products.map((item) => ({
                        ...item,
                        ...priceFree(getProductById(item.id, item.src)),
                      })),
                      size: freebies[1].size,
                    })}
                </td>
              </tr>

              <tr>
                <td>
                    ${Space({ className: "newsletterBottom80px" })}
                </td>
              </tr>

              <tr>
                <td class="newsletterContainer" style="background-color: ${background}; ">
                    ${Line()}
                    ${Space()}
                    ${Intro({ data: queries.intro })}
                    ${Space({ className: "newsletterBottom80px" })}
                </td>
              </tr>
              
              <tr>
                  <td style="background-color: ${background};">
                      ${Category({
                        href: getCategoryLink(categories[0].href),
                        name: queries?.categories[0]
                          ? queries.categories[0]
                          : getCategoryTitle(categories[0].name),
                        src: categories[0].src,
                        cta: getPhrase("Shop now"),
                        type: "monday",
                        products: categories[0].products.map((item) =>
                          getProductById(item.id, item.src)
                        ),
                      })}
                  </td>
              </tr>

                <tr>
                    <td class="newsletterContainer">
                        ${Line()}
                    </td>
                </tr>

                <tr>
                    <td style="background-color: ${background};">
                        ${Space()}
                    </td>
                </tr>

                <tr>
                    <td style="background-color: ${background};">
                        ${Category({
                          href: getCategoryLink(categories[1].href),
                          name: queries?.categories
                            ? queries.categories[1]
                            : getCategoryTitle(categories[1].name),
                          src: categories[1].src,
                          cta: getPhrase("Shop now"),
                          type: "monday",
                          products: categories[1].products.map((item) =>
                            getProductById(item.id, item.src)
                          ),
                        })}
                    </td>
                </tr>

                <tr>
                    <td class="newsletterContainer">
                        ${Line()}
                    </td>
                </tr>

                <tr>
                    <td style="background-color: ${background};">
                        ${Space()}
                    </td>
                </tr>

                <tr>
                    <td style="background-color: ${background};">
                        ${Category({
                          href: getCategoryLink(categories[2].href),
                          name: queries?.categories
                            ? queries.categories[2]
                            : getCategoryTitle(categories[2].name),
                          src: categories[2].src,
                          cta: getPhrase("Shop now"),
                          type: "monday",
                          products: categories[2].products.map((item) =>
                            getProductById(item.id, item.src)
                          ),
                        })}
                    </td>
                </tr>

                <tr>
                    <td class="newsletterContainer">
                        ${Line()}
                    </td>
                </tr>

                
                <tr>
                    <td style="background-color: ${background};">
                        ${Space()}
                    </td>
                </tr>

                <tr>
                    <td style="background-color: ${background};">
                        ${Category({
                          href: getCategoryLink(categories[3].href),
                          name: queries?.categories
                            ? queries.categories[3]
                            : getCategoryTitle(categories[3].name),
                          src: categories[3].src,
                          cta: getPhrase("Shop now"),
                          type: "monday",
                          products: categories[3].products.map((item) =>
                            getProductById(item.id, item.src)
                          ),
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
            src: ["AT", "PL", "FR", "UK"].includes(country)
              ? getFooter("Delivery src")
              : getFooter("Asembly src"),
            href: getFooter("Asembly href"),
            exclude: ["SK", "CHIT", "SE", "NO", "FI", "BEFR", "BENL"].includes(
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
    `
}
