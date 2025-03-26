import { OfferPart } from "../components/OfferPart.js";
import { YouTube } from "../components/YouTube.js";
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
  Title,
  Timer,
  TopImageTitle,


} from "../components/index.js";

export async function friday_no_products_only_img({
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
  name,
  name1,
  add_utm,

 

}) {
  const gif_src = {
    CHDE:  ['https://gen.sendtric.com/countdown/m65au105mm'],
    CHFR:   ['https://gen.sendtric.com/countdown/ge79rt92yn'],
    FR:     ['https://gen.sendtric.com/countdown/ge79rt92yn'],
    UK:     ['https://gen.sendtric.com/countdown/dlm6unqa2g'],
    DE:     ['https://gen.sendtric.com/countdown/m65au105mm'],
    AT:     ['https://gen.sendtric.com/countdown/m65au105mm'],
    ES:     ['https://gen.sendtric.com/countdown/m1vrjf4qms'],
    PL:     ['https://gen.sendtric.com/countdown/1f3znph1s5'],
    NL:     ['https://gen.sendtric.com/countdown/rqb0q9ia2a'],
    PT:     ['https://gen.sendtric.com/countdown/2k1jq7cg0i'],
    IT:     ['https://gen.sendtric.com/countdown/d7zvfd943c'],
    SE:     ['https://gen.sendtric.com/countdown/xq2dl02pir'],
    HU:     ['https://gen.sendtric.com/countdown/8qnzdzzvgv'],
    DK:     ['https://gen.sendtric.com/countdown/l4t02udq9l'],
    CZ:     ['https://gen.sendtric.com/countdown/ls9pnrex33'],
    FI:     ['https://gen.sendtric.com/countdown/p3r43h8802'],
    NO:     ['https://gen.sendtric.com/countdown/7l2rdujq6k'],
    SK:     ['https://gen.sendtric.com/countdown/98slx17v40'],
    BENL:   ['https://gen.sendtric.com/countdown/rqb0q9ia2a'],
    BEFR:   ['https://gen.sendtric.com/countdown/ge79rt92yn'],
    RO:     ['https://gen.sendtric.com/countdown/fxd2lfgu2s'],
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
          : ["#FFCCB7"].includes(background)
          ? getHeader("Header asembly src")
          : getHeader("Header asembly_cosy src"),
        href: getHeader("Header asembly href"),
        exclude: true,
      },
    },
    { type }
  )}

   <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #F6E7E6; color: #000;" id='newsletter'>

 <tbody>

   ${type === "newsletter" ? 
    `<tr>
          <td align="center">
            ${ImageWithLink({
              href: links[0],
              src: links[1],
            })}
      
          </td>
      </tr>`
    : 
      `<tr>
          <td align="center">
            ${!queries.tit ?
            `
              ${ImageWithLink({
                href: links[0],
                src: links[1],
              })}` 
            :
            `${TopImageTitle({
                href: links[0],
                title1: queries.tit[0],
                title2: queries.tit[1],
                color: "#000000",
                type: "two_line_h1",
              })}`
            }
          </td>
      </tr>`
  }
  <tr>
      <td align="center">
        ${ImageWithLink({
          href: links[2],
          src: links[3],
        })}
      </td>
  </tr>

</table>

  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; color: #000; background-color: #F6E7E6;" id='newsletter'>
              <tr>
                <td align="center" style="background-color: #F6E7E6;" class="newsletterContainer">
                  ${Intro({
                    paragraph: queries.intro[0], 
                    color: "#000", 
                    align:'center',
                    title:'no_title'
                  })}
                  </td>
              </tr>
              <tr>
                <td style="background-color: #F6E7E6;" class="newsletterBottom35px"></td>
                <tr>
                <td style="background-color: #FFCCB7;" class="newsletterBottom20px"></td>
              </tr>
              </tr>
                    <tr>
                <td style="background-color: #FFCCB7">
                ${Timer({
                  
                  title: queries.timer[0],
                  subtitle: queries.timer[1],
                  
                  href: links[4],
                  imageSrc: gif_src[country],
                  style: {
                    bgColor: "#FFCCB7",
                    textColor: "#000",
                    align: "center",
                  },
                  cta: getPhrase("Shop now"),
                })}
                </td>
              </tr>
              <tr>
                <td style="background-color: #FFCCB7;" class="newsletterBottom20px"></td>
              </tr>
              <tr>
                <td style="background-color: #F6E7E6">
                      ${ImageWithLink({
                        href: links[4],
                        src: 'https://upload.pictureserver.net/static/2025/2500320_03free.png',
                      })}
                </td>
              </tr>
              <tr>
                <td style="background-color: #F6E7E6;" class="newsletterBottom60px"></td>
              </tr>
              <tr>
                    <td style="background-color:  #F6E7E6;">
                        ${Category({
                          name: queries.category_paragraph[0],
                          href: getCategoryLink(categories[0].href), 
                          src: links[11],
                          cta: getPhrase("Shop now"),
                          type: "no_products",
                          color: categories[0].color,
                        })}
                    </td>
              </tr>
             <tr>
                <td style="background-color: #F6E7E6;" class="newsletterBottom35px"></td>
              </tr>
              <tr>
                <td style="background-color: #F6E7E6;" class="newsletterContainer">${Line()}</td>
              </tr>
               <tr>
                <td style="background-color: #F6E7E6;" class="newsletterBottom35px"></td>
              </tr>
              <tr>
                    <td style="background-color:  #F6E7E6;">
                        ${Category({
                          name: queries.category_paragraph[1],
                          href: getCategoryLink(categories[1].href), 
                          src: links[12],
                          cta: getPhrase("Shop now"),
                          type: "no_products",
                          color: categories[1].color,
                        })}
                    </td>
              </tr>
            <tr>
                <td style="background-color: #F6E7E6;" class="newsletterBottom35px"></td>
              </tr>
              <tr>
                <td style="background-color: #F6E7E6;" class="newsletterContainer">${Line()}</td>
              </tr>
               <tr>
                <td style="background-color: #F6E7E6;" class="newsletterBottom35px"></td>
              </tr>
              <tr>
                    <td style="background-color:  #F6E7E6;">
                        ${Category({
                          name: queries.category_paragraph[2],
                          href: getCategoryLink(categories[2].href), 
                          src: links[13],
                          cta: getPhrase("Shop now"),
                          type: "no_products",
                          color: categories[2].color,
                        })}
                    </td>
              </tr>
             <tr>
                <td style="background-color: #F6E7E6;" class="newsletterBottom35px"></td>
              </tr>
              <tr>
                <td style="background-color: #F6E7E6;" class="newsletterContainer">${Line()}</td>
              </tr>
               <tr>
                <td style="background-color: #F6E7E6;" class="newsletterBottom35px"></td>
              </tr>
              <tr>
                    <td style="background-color:  #F6E7E6;">
                        ${Category({
                          name: queries.category_paragraph[3],
                          href: getCategoryLink(categories[3].href), 
                          src: links[14],
                          cta: getPhrase("Shop now"),
                          type: "no_products",
                          color: categories[3].color,
                        })}
                    </td>
              </tr>
             <tr>
                <td style="background-color: #F6E7E6;" class="newsletterBottom35px"></td>
              </tr>
              <tr>
                <td style="background-color: #F6E7E6;" class="newsletterContainer">${Line()}</td>
              </tr>
               <tr>
                <td style="background-color: #F6E7E6;" class="newsletterBottom35px"></td>
              </tr>
              <tr>
                    <td style="background-color:  #F6E7E6;">
                        ${Category({
                          name: queries.category_paragraph[4],
                          href: getCategoryLink(categories[4].href), 
                          src: links[15],
                          cta: getPhrase("Shop now"),
                          type: "no_products",
                          color: categories[4].color,
                        })}
                    </td>
              </tr>
             <tr>
                <td style="background-color: #F6E7E6;" class="newsletterBottom35px"></td>
              </tr>
              <tr>
                <td style="background-color: #F6E7E6;" class="newsletterContainer">${Line()}</td>
              </tr>
               <tr>
                <td style="background-color: #F6E7E6;" class="newsletterBottom35px"></td>
              </tr>
              <tr>
                    <td style="background-color:  #F6E7E6;">
                        ${Category({
                          name: queries.category_paragraph[5],
                          href: getCategoryLink(categories[5].href), 
                          src: links[16],
                          cta: getPhrase("Shop now"),
                          type: "no_products",
                          color: categories[5].color,
                        })}
                    </td>
              </tr>
             <tr>
                <td style="background-color: #F6E7E6;" class="newsletterBottom35px"></td>
              </tr>
              <tr>
                <td style="background-color: #F6E7E6;" class="newsletterContainer">${Line()}</td>
              </tr>
               <tr>
                <td style="background-color: #F6E7E6;" class="newsletterBottom35px"></td>
              </tr>
             <tr>
                    <td style="background-color:  #F6E7E6;">
                        ${Category({
                          name: queries.category_paragraph[6],
                          href: getCategoryLink(categories[6].href), 
                          src: links[17],
                          cta: getPhrase("Shop now"),
                          type: "no_products",
                          color: categories[6].color,
                        })}
                    </td>
              </tr>
             <tr>
                <td style="background-color: #F6E7E6;" class="newsletterBottom35px"></td>
              </tr>
              <tr>
                <td style="background-color: #F6E7E6;" class="newsletterContainer">${Line()}</td>
              </tr>
               <tr>
                <td style="background-color: #F6E7E6;" class="newsletterBottom35px"></td>
              </tr>
              <tr>
                    <td style="background-color:  #F6E7E6;">
                        ${Category({
                          name: queries.category_paragraph[7],
                          href: getCategoryLink(categories[7].href), 
                          src: links[18],
                          cta: getPhrase("Shop now"),
                          type: "no_products",
                          color: categories[7].color,
                        })}
                    </td>
              </tr>
             
             
             <tr>
                <td style="background-color: #F6E7E6;" class="newsletterBottom80px"></td>
              </tr>
              
              <tr>
                  <td class="newsletterContainer">
                  ${Line()}
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
            exclude: ["CHIT"].includes(country),
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
