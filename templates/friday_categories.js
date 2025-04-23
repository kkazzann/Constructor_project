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

export async function friday_categories({
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
    CHDE:  ['https://gen.sendtric.com/countdown/uvubayadv3'],
    CHFR:   ['https://gen.sendtric.com/countdown/n0pi1z1cbd'],
    FR:     ['https://gen.sendtric.com/countdown/n0pi1z1cbd'],
    UK:     ['https://gen.sendtric.com/countdown/trczmx0wvh'],
    DE:     ['https://gen.sendtric.com/countdown/uvubayadv3'],
    AT:     ['https://gen.sendtric.com/countdown/uvubayadv3'],
    ES:     ['https://gen.sendtric.com/countdown/6qby18rulw'],
    PL:     ['https://gen.sendtric.com/countdown/28wi2tb690'],
    NL:     ['https://gen.sendtric.com/countdown/00r15pumkn'],
    PT:     ['https://gen.sendtric.com/countdown/7xqsr0t7co'],
    IT:     ['https://gen.sendtric.com/countdown/wd325ba31n'],
    SE:     ['https://gen.sendtric.com/countdown/r3airer4lx'],
    HU:     ['https://gen.sendtric.com/countdown/fofki0hd1y'],
    DK:     ['https://gen.sendtric.com/countdown/7gqabq16w7'],
    CZ:     ['https://gen.sendtric.com/countdown/j1nnzjgrul'],
    FI:     ['https://gen.sendtric.com/countdown/hlk6xydgkm'],
    NO:     ['https://gen.sendtric.com/countdown/fyqjeotq4y'],
    SK:     ['https://gen.sendtric.com/countdown/ojrf1z0m0h'],
    BENL:   ['https://gen.sendtric.com/countdown/00r15pumkn'],
    BEFR:   ['https://gen.sendtric.com/countdown/n0pi1z1cbd'],
    RO:     ['https://gen.sendtric.com/countdown/vwcj3t1bv5'],
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

   <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #FF2F00; color: #000;" id='newsletter'>

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
          <td align="center" class="newsletterContainer">
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
                color: "#ffffff",
                type: "singleLine",
              })}`
            }
          </td>
      </tr>`
  }
   <tr>
                <td style="background-color: #FF2F00">
                ${Timer({
                  type: 'only_timer',
                  href: links[4],
                  imageSrc: gif_src[country],
                  style: {
                    bgColor: "#FF2F00",
                    textColor: "#000",
                    align: "center",
                  },
                })}
                </td>
              </tr>
              <tr>
                <td align="center" style="background-color: #FF2F00;">
                    ${Space({ className: "newsletterBottom20px" })}
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

</table>

  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; color: #000;" id='newsletter'>
              <tr>
                <td align="center" style="background-color: #FFCCB7;" class="newsletterContainer">
                  ${Intro({
                    paragraph: queries.intro[0], 
                    color: "#000", 
                    align:'center',
                    title:'no_title'
                  })}
                  </td>
              </tr>
              <tr>
                <td style="background-color: #FFCCB7;" class="newsletterBottom35px"></td>
              </tr>
              <table cellspacing="0" cellpadding="0" border="0" align="center" id="newsletter" style="max-width: 650px;" width="100%" style="background-color: #FFCCB7;">
        <tbody>
           <tr>
                <td style="background-color: ${background};" class="newsletterContainer">
        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #FFCCB7;">
          <tbody>
            <tr>
              <td style="background-color: #FFCCB7;">
                <table cellspacing="0" cellpadding="0" border="0" width="100%" >
                  <tbody>
                    <tr>
                      <td>
                        </td><td align="left" width="50%" style="padding-right:5px">
                          <a href="${getCategoryLink('https://www.beliani.ch/garden-furniture/outdoor-furniture/')}">
                              <img alt="" src="${links[11]}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                          </a>
                        </td>
                        <td align="right" width="50%" style="padding-left:5px">
                          <a href="${getCategoryLink('https://www.beliani.ch/sofas/')}">
                              <img alt="" src="${links[12]}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                          </a>
                        </td>
                    </tr>
                     <tr><td class="newsletterBottom10px"></td></tr>
                  </tbody>
                </table>
                 <table cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tbody>
                    <tr>
                      <td>
                        </td><td align="left" width="50%" style="padding-right:5px">
                          <a href="${getCategoryLink('https://www.beliani.ch/beds/')}">
                              <img alt="" src="${links[13]}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                          </a>
                        </td>
                        <td align="right" width="50%" style="padding-left:5px">
                        
                          <a href="${getCategoryLink('https://www.beliani.ch/armchairs/')}">
                              <img alt="" src="${links[14]}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                          </a>
                        </td>
                    </tr>
                    <tr><td class="newsletterBottom10px"></td></tr>
                  </tbody>
                </table>
                 <table cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tbody>
                    <tr>
                      <td>
                        </td><td align="left" width="50%" style="padding-right:5px">
                          <a href="${getCategoryLink('https://www.beliani.ch/chairs/')}">
                              <img alt="" src="${links[15]}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                          </a>
                        </td>
                        <td align="right" width="50%" style="padding-left:5px">
                          <a href="${getCategoryLink('https://www.beliani.ch/tables/')}">
                              <img alt="" src="${links[16]}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                          </a>
                        </td>
                    </tr>
                    <tr><td class="newsletterBottom10px"></td></tr>
                  </tbody>
                </table>
                 <table cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tbody>
                    <tr>
                      <td>
                        </td><td align="left" width="50%" style="padding-right:5px">
                          <a href="${getCategoryLink('https://www.beliani.ch/storage/')}">
                              <img alt="" src="${links[17]}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                          </a>
                        </td>
                        <td align="right" width="50%" style="padding-left:5px">
                          <a href="${getCategoryLink('https://www.beliani.ch/children-room/')}">
                              <img alt="" src="${links[18]}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                          </a>
                        </td>
                    </tr>
                    <tr><td class="newsletterBottom10px"></td></tr>
                  </tbody>
                </table>
                 <table cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tbody>
                    <tr>
                      <td>
                        </td><td align="left" width="50%" style="padding-right:5px">
                          <a href="${getCategoryLink('https://www.beliani.ch/textiles/')}">
                              <img alt="" src="${links[19]}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                          </a>
                        </td>
                        <td align="right" width="50%" style="padding-left:5px">
                          <a href="${getCategoryLink('https://www.beliani.ch/lighting/')}">
                              <img alt="" src="${links[20]}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                          </a>
                        </td>
                    </tr>
                    <tr><td class="newsletterBottom10px"></td></tr>
                  </tbody>
                </table>
                <table cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tbody>
                    <tr>
                      <td>
                        </td><td align="left" width="50%" style="padding-right:5px">
                          <a href="${getCategoryLink('https://www.beliani.ch/bathtubs-hot-tubs/')}">
                              <img alt="" src="${links[21]}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                          </a>
                        </td>
                        <td align="right" width="50%" style="padding-left:5px">
                          <a href="${getCategoryLink('https://www.beliani.ch/office-furniture/desks-eng/')}">
                              <img alt="" src="${links[22]}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                          </a>
                        </td>
                         <tr><td class="newsletterBottom10px"></td></tr>
                    </tr>
                  </tbody>
                </table>
                <table cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tbody>
                    <tr>
                      <td>
                        </td><td align="left" width="50%" style="padding-right:5px">
                          <a href="${getCategoryLink('https://www.beliani.ch/rugs/')}">
                              <img alt="" src="${links[23]}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                          </a>
                        </td>
                        <td align="right" width="50%" style="padding-left:5px">
                          <a href="${getCategoryLink('https://www.beliani.ch/home-accessories/accessories-decor/')}">
                              <img alt="" src="${links[24]}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                          </a>
                        </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
               <tr>
                <td align="center" style="background-color: ${background};">
                    ${Space({ className: "newsletterBottom35px" })}
                </td>
              </tr>
               <tr>
                  <td align="center" style="background-color: ${background};">
                  
                        <a href="${getCategoryLink('https://www.beliani.ch')}" style="color:#000; text-decoration: underline; background-color: ${background};">
                          <span class="newsletterCta">${queries.Shop_All_Categories}</span>
                        </a>
                  </td>
               </tr>
               <tr>
                <td align="center" style="background-color: ${background};">
                    ${Space({ className: "newsletterBottom35px" })}
                </td>
              </tr>
              
              <tr>
                  <td class="newsletterContainer">
                  ${Line()}
                  </td>
              </tr>
        </tbody>
      </table>
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
            // exclude: ["SK", "HU", "BEFR", "BENL"].includes(country),
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
