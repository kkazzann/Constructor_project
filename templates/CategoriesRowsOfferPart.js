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

export async function CategoriesRowsOfferPart({
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
}) {
  const gif_src = {
    CHDE: ["https://gen.sendtric.com/countdown/w9l8f1omf8"],
    CHFR: ["https://gen.sendtric.com/countdown/3p17ck3pvw"],
    FR: ["https://gen.sendtric.com/countdown/3p17ck3pvw"],
    UK: ["https://gen.sendtric.com/countdown/fxtnsgo0fx"],
    DE: ["https://gen.sendtric.com/countdown/w9l8f1omf8"],
    AT: ["https://gen.sendtric.com/countdown/w9l8f1omf8"],
    ES: ["https://gen.sendtric.com/countdown/b3ru3vll6a"],
    PL: ["https://gen.sendtric.com/countdown/zb56v8dq04"],
    NL: ["https://gen.sendtric.com/countdown/bvp49p3e68"],
    PT: ["https://gen.sendtric.com/countdown/vjqr3oin25"],
    IT: ["https://gen.sendtric.com/countdown/6pkuvupu1r"],
    SE: ["https://gen.sendtric.com/countdown/0ok9zlukek"],
    HU: ["https://gen.sendtric.com/countdown/92yp440zij"],
    DK: ["https://gen.sendtric.com/countdown/4tq7ansa8h"],
    CZ: ["https://gen.sendtric.com/countdown/011t0t79wa"],
    FI: ["https://gen.sendtric.com/countdown/p2aj9qw5c0"],
    NO: ["https://gen.sendtric.com/countdown/yyydhgkju3"],
    SK: ["https://gen.sendtric.com/countdown/roqdny6pg9"],
    BENL: ["https://gen.sendtric.com/countdown/bvp49p3e68"],
    BEFR: ["https://gen.sendtric.com/countdown/3p17ck3pvw"],
    RO: ["https://gen.sendtric.com/countdown/i1p536cv68"],
  };

  const cat1 = {
    CHDE: [
      "https://www.beliani.ch/wohnzimmer-moebel/alle+produkte/?Farbe=Braun,Beige,Grun&sort=default",
    ],
    CHFR: [
      "https://www.beliani.ch/meubles-de-salon/tous+les+produits/?Couleur=Marron,Beige,Vert&sort=default",
    ],
    FR: [
      "https://www.beliani.fr/meubles-de-salon/tous+les+produits/?Couleur=Marron,Beige,Vert&sort=default",
    ],
    UK: [
      "https://www.beliani.co.uk/living-room-furniture/all+products/?Colour=Brown,Beige,Green&sort=default",
    ],
    DE: [
      "https://www.beliani.de/wohnzimmer-moebel/alle+produkte/?Farbe=Braun,Beige,Grun&sort=default",
    ],
    AT: [
      "https://www.beliani.at/wohnzimmer-moebel/alle+produkte/?Farbe=Braun,Beige,Grun&sort=default",
    ],
    ES: [""],
    PL: [
      "https://www.beliani.pl/meble-do-salonu/wszystkie+produkty/?Kolor=Brazowy,Bezowy,Zielony&sort=default",
    ],
    NL: [
      "https://www.beliani.nl/woonkamer/alle+producten/?Kleur=Bruin,Beige,Groen&sort=default",
    ],
    PT: [
      "https://www.beliani.pt/sala/todos+os+produtos/?Cor=Castanho,Creme,Verde&sort=default",
    ],
    IT: [
      "https://www.beliani.it/soggiorno/tutti+i+prodotti/?Colore=Marrone,Beige,Verde&sort=default",
    ],
    SE: [
      "https://www.beliani.se/vardagsrumsmobler/alla+produkter/?Farg=Brun,Beige,Gron&sort=default",
    ],
    HU: [
      "https://www.beliani.hu/nappali-butorok/minden+termek/?Szin=Barna,Bezs,Zold&sort=default",
    ],
    DK: [
      "https://www.beliani.dk/spisestuemobler/alle+produkter/?Farve=Brun,Beige,Gron&sort=default",
    ],
    CZ: [
      "https://www.beliani.cz/nabytek-do-obyvaku/vsechny+produkty/looks/?Barva=Hneda,Bezova,Zelena&sort=default",
    ],
    FI: [
      "https://www.beliani.fi/olohuoneen-kalusteet/kaikki+tuotteet/looks/?Vari=Ruskea,Beige,Vihrea&sort=default",
    ],
    NO: [
      "https://www.beliani.no/stuemoebler/alle+produkter/?Farge=Brun,Beige,Gronn&sort=default",
    ],
    SK: [
      "https://www.beliani.sk/nabytok-do-obyvacky/zobrazit+vsetky+produkty/?Farba=Hneda,Bezova,Zelena&sort=default",
    ],
    BENL: [
      "https://www.beliani.be/woonkamer/alle+producten/?Kleur=Bruin,Beige,Groen&sort=default",
    ],
    BEFR: [
      "https://www.beliani.be/meubles-de-salon/tous+les+produits/?Couleur=Marron,Beige,Vert&sort=default",
    ],
    RO: [
      "https://www.beliani.ro/camera-de-zi/toate+produsele/?Culoare=Maro,Bej,Verde&sort=default",
    ],
  };

  const cat2 = {
    CHDE: [
      "https://www.beliani.ch/wohnzimmer-moebel/alle+produkte/?Farbe=Braun&sort=default",
    ],
    CHFR: [
      "https://www.beliani.ch/meubles-de-salon/tous+les+produits/?Couleur=Marron&sort=default",
    ],
    FR: [
      "https://www.beliani.fr/meubles-de-salon/tous+les+produits/?Couleur=Marron&sort=default",
    ],
    UK: [
      "https://www.beliani.co.uk/living-room-furniture/all+products/?Colour=Brown&sort=default",
    ],
    DE: [
      "https://www.beliani.de/wohnzimmer-moebel/alle+produkte/?Farbe=Braun&sort=default",
    ],
    AT: [
      "https://www.beliani.at/wohnzimmer-moebel/alle+produkte/?Farbe=Braun&sort=default",
    ],
    ES: [""],
    PL: [
      "https://www.beliani.pl/meble-do-salonu/wszystkie+produkty/?Kolor=Brazowy&sort=default",
    ],
    NL: [
      "https://www.beliani.nl/woonkamer/alle+producten/?Kleur=Bruin&sort=default",
    ],
    PT: [
      "https://www.beliani.pt/sala/todos+os+produtos/?Cor=Castanho&sort=default",
    ],
    IT: [
      "https://www.beliani.it/soggiorno/tutti+i+prodotti/?Colore=Marrone&sort=default",
    ],
    SE: [
      "https://www.beliani.se/vardagsrumsmobler/alla+produkter/?Farg=Brun&sort=default",
    ],
    HU: [
      "https://www.beliani.hu/nappali-butorok/minden+termek/?Szin=Barna&sort=default",
    ],
    DK: [
      "https://www.beliani.dk/spisestuemobler/alle+produkter/?Farve=Brun&sort=default",
    ],
    CZ: [
      "https://www.beliani.cz/nabytek-do-obyvaku/vsechny+produkty/looks/?Barva=Hneda&sort=default",
    ],
    FI: [
      "https://www.beliani.fi/olohuoneen-kalusteet/kaikki+tuotteet/looks/?Vari=Ruskea&sort=default",
    ],
    NO: [
      "https://www.beliani.no/stuemoebler/alle+produkter/?Farge=Brun&sort=default",
    ],
    SK: [
      "https://www.beliani.sk/nabytok-do-obyvacky/zobrazit+vsetky+produkty/?Farba=Hneda&sort=default",
    ],
    BENL: [
      "https://www.beliani.be/woonkamer/alle+producten/?Kleur=Bruin&sort=default",
    ],
    BEFR: [
      "https://www.beliani.be/meubles-de-salon/tous+les+produits/?Couleur=Marron&sort=default",
    ],
    RO: [
      "https://www.beliani.ro/camera-de-zi/toate+produsele/?Culoare=Maro&sort=default",
    ],
  };

  const cat3 = {
    CHDE: [
      "https://www.beliani.ch/wohnzimmer-moebel/alle+produkte/?Farbe=Blau&sort=default",
    ],
    CHFR: [
      "https://www.beliani.ch/meubles-de-salon/tous+les+produits/?Couleur=Bleu&sort=default",
    ],
    FR: [
      "https://www.beliani.fr/meubles-de-salon/tous+les+produits/?Couleur=Bleu&sort=default",
    ],
    UK: [
      "https://www.beliani.co.uk/living-room-furniture/all+products/?Colour=Blue&sort=default",
    ],
    DE: [
      "https://www.beliani.de/wohnzimmer-moebel/alle+produkte/?Farbe=Blau&sort=default",
    ],
    AT: [
      "https://www.beliani.at/wohnzimmer-moebel/alle+produkte/?Farbe=Blau&sort=default",
    ],
    ES: [""],
    PL: [
      "https://www.beliani.pl/meble-do-salonu/wszystkie+produkty/?Kolor=Niebieski&sort=default",
    ],
    NL: [
      "https://www.beliani.nl/woonkamer/alle+producten/?Kleur=Blauw&sort=default",
    ],
    PT: [
      "https://www.beliani.pt/sala/todos+os+produtos/?Cor=Azul&sort=default",
    ],
    IT: [
      "https://www.beliani.it/soggiorno/tutti+i+prodotti/?Colore=Blu&sort=default",
    ],
    SE: [
      "https://www.beliani.se/vardagsrumsmobler/alla+produkter/?Farg=Bla&sort=default",
    ],
    HU: [
      "https://www.beliani.hu/nappali-butorok/minden+termek/?Szin=Kek&sort=default",
    ],
    DK: [
      "https://www.beliani.dk/spisestuemobler/alle+produkter/?Farve=Bla&sort=default",
    ],
    CZ: [
      "https://www.beliani.cz/nabytek-do-obyvaku/vsechny+produkty/looks/?Barva=Modra&sort=default",
    ],
    FI: [
      "https://www.beliani.fi/olohuoneen-kalusteet/kaikki+tuotteet/looks/?Vari=Sininen&sort=default",
    ],
    NO: [
      "https://www.beliani.no/stuemoebler/alle+produkter/?Farge=Bla&sort=default",
    ],
    SK: [
      "https://www.beliani.sk/nabytok-do-obyvacky/zobrazit+vsetky+produkty/?Farba=Modra",
    ],
    BENL: [
      "https://www.beliani.be/woonkamer/alle+producten/?Kleur=Blauw&sort=default",
    ],
    BEFR: [
      "https://www.beliani.be/meubles-de-salon/tous+les+produits/?Couleur=Bleu&sort=default",
    ],
    RO: [
      "https://www.beliani.ro/camera-de-zi/toate+produsele/?Culoare=Albastru&sort=default",
    ],
  };

  function add_utm(link) {
    let link_with_utm =
      link + "?utm_source=newsletter&utm_medium=email&utm_campaign=" + id;
    return link_with_utm;
  }

  const a = categories[3].products.map((item) =>
    getProductById(item.id, item.src)
  );
  console.log(a);
  console.log(queries.category_paragraph[1]);
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
          ? ["#FFCCB7"].includes(background)
            ? getHeader("Header delivery_cosy src")
            : getHeader("Header delivery src")
          : ["#FBF4F3"].includes(background)
          ? getHeader("Header asembly src")
          : getHeader("Header asembly_cosy src"),
        href: getHeader("Header asembly href"),
        exclude: true,
      },
    },
    { type }
  )}

   <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #FBF4F3; color: #000;" id='newsletter'>


   

   ${
     type === "newsletter"
       ? `<tr>
          <td align="center">
            ${ImageWithLink({
              href: links[0],
              src: links[1],
            })}
      
          </td>
      </tr>`
       : `<tr>
          <td align="center">
            ${
              !queries.tit
                ? `
              ${ImageWithLink({
                href: links[0],
                src: links[1],
              })}`
                : `${TopImageTitle({
                    href: links[0],
                    title1: queries.tit[0],
                    title2: queries.tit[0],
                    color: "#000000",
                    type: "singleLine",
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
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; color: #FFCCB7;" id='newsletter'>
              <tr>
                <td align="center" style="background-color: #FFCCB7;" class="newsletterContainer">
                  ${Intro({
                    paragraph: queries.intro[0],
                    color: "#000",
                    align: "center",
                    title: "no_title",
                  })}
                  </td>
              </tr>
              <tr>
                <td style="background-color: #FFCCB7;" class="newsletterBottom35px"></td>
              </tr>
                        <tr>
                <td style="background-color: #FD9000;" class="newsletterBottom20px"></td>
              </tr>
           <tr>
                <td style="background-color: #FD9000">
                ${Timer({
                  title: queries.timer[0],
                  subtitle: queries.timer[1],

                  href: links[4],
                  imageSrc: gif_src[country],
                  style: {
                    bgColor: "#FD9000",
                    textColor: "#000",
                    align: "center",
                  },
                  cta: getPhrase("Shop now"),
                })}
                </td>
              </tr>

             <tr>
                <td style="background-color: #FD9000;" class="newsletterBottom20px"></td>
              </tr>
              <tr>
                <td style="background-color: #FFCCB7">
                      ${ImageWithLink({
                        href: links[4],
                        src: "https://upload.pictureserver.net/static/2025/250530_freebis.png",
                      })}
                </td>
              </tr>
                   <tr>
                <td style="background-color: #FFCCB7;padding-bottom:35px;"></td>
              </tr>
              <tr>
                    <td style="background-color:  #FECCB7;">
                        ${Category({
                          href: getCategoryLink(categories[0].href),
                          name: queries.category_paragraph[0],
                          name1: queries.category_paragraph[1],
                          src: categories[0].src,
                          cta: getPhrase("Shop now"),
                          type: "no_products",
                          color: categories[0].color,
                          products: categories[0].products.map((item) =>
                            getProductById(item.id, item.src)
                          ),
                        })}
                    </td>
              </tr>
        
              <tr>
                    <td style="background-color: #FECCB7;">
                        ${Category({
                          href: cat2[country],
                          href: getCategoryLink(categories[1].href),
                          name: queries.category_paragraph[2],
                          name1: queries.category_paragraph[3],
                          src: categories[1].src,
                          cta: getPhrase("Shop now"),
                          type: "no_products",
                          color: categories[1].color,
                          products: categories[1].products.map((item) =>
                            getProductById(item.id, item.src)
                          ),
                        })}
                    </td>
              </tr>
    
              <tr>
                    <td style="background-color:  #FECCB7;">
                        ${Category({
                          href: getCategoryLink(categories[2].href),
                          name: queries.category_paragraph[4],
                          name1: queries.category_paragraph[5],
                          src: categories[2].src,
                          cta: getPhrase("Shop now"),
                          type: "no_products",
                          color: categories[2].color,
                          products: categories[2].products.map((item) =>
                            getProductById(item.id, item.src)
                          ),
                        })}
                    </td>
              </tr>
        
              <tr>
                    <td style="background-color: #FECCB7;">
                        ${Category({
                          href: getCategoryLink(categories[3].href),
                          name: queries.category_paragraph[6],
                          name1: queries.category_paragraph[7],
                          src: categories[3].src,
                          cta: getPhrase("Shop now"),
                          type: "no_products",
                          color: categories[3].color,
                          products: categories[3].products.map((item) =>
                            getProductById(item.id, item.src)
                          ),
                        })}
                    </td>
              </tr>
              <tr>
                  <td style="background-color: #fff;" class="newsletterContainer">
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
            // exclude: ["HU"].includes(country),
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
