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
    CHDE:  ['https://gen.sendtric.com/countdown/34t7kf6xs7'],
    CHFR:   ['https://gen.sendtric.com/countdown/uyiz1c2i4u'],
    FR:     ['https://gen.sendtric.com/countdown/uyiz1c2i4u'],
    UK:     ['https://gen.sendtric.com/countdown/mxe6zlfopn'],
    DE:     ['https://gen.sendtric.com/countdown/34t7kf6xs7'],
    AT:     ['https://gen.sendtric.com/countdown/34t7kf6xs7'],
    ES:     ['5https://gen.sendtric.com/countdown/haq2jun62s'],
    PL:     ['https://gen.sendtric.com/countdown/z9y4udxov3'],
    NL:     ['https://gen.sendtric.com/countdown/mt1iy8gaxh'],
    PT:     ['https://gen.sendtric.com/countdown/af3kk62zyq'],
    IT:     ['https://gen.sendtric.com/countdown/w0gnodevql'],
    SE:     ['https://gen.sendtric.com/countdown/hjlwj4dp2c'],
    HU:     ['https://gen.sendtric.com/countdown/ipr1aafagl'],
    DK:     ['https://gen.sendtric.com/countdown/35l8dd0noe'],
    CZ:     ['https://gen.sendtric.com/countdown/uno0rjh7wt'],
    FI:     ['https://gen.sendtric.com/countdown/mc7fv7allc'],
    NO:     ['https://gen.sendtric.com/countdown/td4y8jackt'],
    SK:     ['https://gen.sendtric.com/countdown/fkyxypkg2d'],
    BENL:   ['https://gen.sendtric.com/countdown/mt1iy8gaxh'],
    BEFR:   ['https://gen.sendtric.com/countdown/uyiz1c2i4u'],
    RO:     ['https://gen.sendtric.com/countdown/8h2n03qwl9'],
  };




  const cat1 = {
    CHDE:  ['https://www.beliani.ch/wohnzimmer-moebel/sofas/alle+produkte/?Merkmale=Stauraum&sort=default'],
    CHFR:   ['https://www.beliani.ch/canapes/tous+les+produits/?Caracteristiques=Rangement'],
    FR:     ['https://www.beliani.fr/canapes/tous+les+produits/?Caracteristiques=Rangement'],
    UK:     ['https://www.beliani.co.uk/sofas/all+products/?Features=With_Storage&sort=default'],
    DE:     ['https://www.beliani.de/wohnzimmer-moebel/sofas/alle+produkte/?Merkmale=Stauraum&sort=default'],
    AT:     ['https://www.beliani.at/wohnzimmer-moebel/sofas/alle+produkte/?Merkmale=Stauraum&sort=default'],
    ES:     ['https://www.beliani.es/sofas/todos+los+productos/?Caracteristicas=Almacenamiento&sort=default'],
    PL:     ['https://www.beliani.pl/sofy/wszystkie+produkty/?Cechy=Ze_skrzynia&sort=default'],
    NL:     ['https://www.beliani.nl/woonkamer/banken/alle+producten/?Eigenschappen=Opbergruimte&sort=default'],
    PT:     ['https://www.beliani.pt/sofas/todos+os+produtos/looks/?Caracteristicas=Arrumacao&sort=default'],
    IT:     ['https://www.beliani.it/divani/tutti+i+prodotti/?Caratteristiche=Contenitore&sort=default'],
    SE:     ['https://www.beliani.se/vardagsrumsmobler/soffor/alla+produkter/looks/?Egenskaper=Forvaring&sort=default'],
    HU:     ['https://www.beliani.hu/kanapek/minden+term%C3%A9k/?Fobb_jellemzok=Tarolasi_funkcio&sort=default'],
    DK:     ['https://www.beliani.dk/sofaer/alle+produkter/looks/?Funktioner=Opbevaring&sort=default '],
    CZ:     ['https://www.beliani.cz/pohovky/vsechny+produkty/?Vlastnosti=Ulozny_prostor&sort=default'],
    FI:     ['https://www.beliani.fi/sohvat/kaikki+tuotteet/?Ominaisuudet=Sailytystila'],
    NO:     ['https://www.beliani.no/sofaer/alle+produkter/?Egenskaper=Med_oppbevaring&sort=defaul'],
    SK:     ['https://www.beliani.sk/pohovky/zobrazit+vsetky+produkty/?Vlastnosti=Ulozny_priestor&sort=default'],
    BENL:   ['https://www.beliani.be/woonkamer/banken/alle+producten/?Eigenschappen=Opbergruimte&sort=default'],
    BEFR:   ['https://www.beliani.be/canapes/tous+les+produits/?Caracteristiques=Rangement'],
    RO:     ['https://www.beliani.ro/camera-de-zi/canapele/toate+produsele/?Caracteristici=Cu_depozitare&sort=default'],

  };




  const cat2 = {
    CHDE:  ['https://www.beliani.ch/schlafzimmer-moebel/betten/alle+produkte/?Merkmale=Stauraum&sort=default'],
    CHFR:   ['https://www.beliani.ch/lits/tous+les+produits/?Caracteristiques=Rangement'],
    FR:     ['https://www.beliani.fr/lits/tous+les+produits/?Caracteristiques=Rangement'],
    UK:     ['https://www.beliani.co.uk/bedroom-furniture/beds/all+products/?Features=With_Storage'],
    DE:     ['https://www.beliani.de/schlafzimmer-moebel/betten/alle+produkte/?Merkmale=Stauraum&sort=default'],
    AT:     ['https://www.beliani.at/schlafzimmer-moebel/betten/alle+produkte/?Merkmale=Stauraum&sort=default'],
    ES:     ['https://www.beliani.es/camas/todos+los+productos/?Caracteristicas=Almacenamiento&sort=default'],
    PL:     ['https://www.beliani.pl/meble-do-sypialni/lozka/wszystkie+produkty/?Cechy=Z_pojemnikiem&sort=default'],
    NL:     ['https://www.beliani.nl/slaapkamer/bedden/alle+producten/?Eigenschappen=Opbergruimte&sort=default'],
    PT:     ['https://www.beliani.pt/camas/todos+os+produtos/?Caracteristicas=Arrumacao&sort=default'],
    IT:     ['https://www.beliani.it/letti/tutti+i+prodotti/?Caratteristiche=Contenitore&sort=default'],
    SE:     ['https://www.beliani.se/sangar/sangar-med-forvaring/looks/'],
    HU:     ['https://www.beliani.hu/agyak/minden+term%C3%A9k/?Fobb_jellemzok=Tarolasi_funkcio&sort=default'],
    DK:     ['https://www.beliani.dk/senge/alle+produkter/?Funktioner=Opbevaring&sort=default '],
    CZ:     ['https://www.beliani.cz/nabytek-do-loznice/postele/vsechny+produkty/?Vlastnosti=Ulozny_prostor&sort=default'],
    FI:     ['https://www.beliani.fi/sangyt/kaikki+tuotteet/?Ominaisuudet=Sailytystila'],
    NO:     ['https://www.beliani.no/senger/alle+produkter/?Egenskaper=Med_oppbevaring&sort=default'],
    SK:     ['https://www.beliani.sk/postele/zobrazit+vsetky+produkty/?Vlastnosti=Ulozny_priestor&sort=default'],
    BENL:   ['https://www.beliani.be/slaapkamer/bedden/alle+producten/?Eigenschappen=Opbergruimte&sort=default'],
    BEFR:   ['https://www.beliani.be/lits/tous+les+produits/?Caracteristiques=Rangement'],
    RO:     ['https://www.beliani.ro/dormitor/paturi/toate+produsele/?Caracteristici=Cu_depozitare&sort=default'],
  };


  const cat4 = {
    CHDE:  ['https://www.beliani.ch/bueromoebel/buerotische/alle+produkte/?Merkmale=Schubladen,Mit_Fachern&sort=default'],
    CHFR:   ['https://www.beliani.ch/bureaux/tous+les+produits/looks/?Caracteristiques=Tiroirs,Avec_etageres'],
    FR:     ['https://www.beliani.fr/bureaux/tous+les+produits/looks/?Caracteristiques=Tiroirs,Avec_etageres'],
    UK:     ['https://www.beliani.co.uk/office-furniture/desks-eng/all+products/?Features=With_Drawers,With_Shelves&sort=default'],
    DE:     ['https://www.beliani.de/bueromoebel/buerotische/alle+produkte/?Merkmale=Schubladen,Mit_Fachern&sort=default'],
    AT:     ['https://www.beliani.at/bueromoebel/buerotische/alle+produkte/?Merkmale=Schubladen,Mit_Fachern&sort=default'],
    ES:     ['https://www.beliani.es/escritorios/todos+los+productos/?Caracteristicas=Con_cajones,Con_estantes&sort=default'],
    PL:     ['https://www.beliani.pl/meble-biurowe/biurka/wszystkie+produkty/?Cechy=Z_szufladami,Z_polkami&sort=default'],
    NL:     ['https://www.beliani.nl/werkkamer/bureaus/alle+producten/looks/?Eigenschappen=Met_lades,Met_planken&sort=default'],
    PT:     ['https://www.beliani.pt/secretarias-pt/todos+os+produtos/looks/?Caracteristicas=Gavetas,Com_prateleiras&sort=default'],
    IT:     ['https://www.beliani.it/scrivanie-it/tutti+i+prodotti/?Caratteristiche=Cassetti,Con_ripiani&sort=default'],
    SE:     ['https://www.beliani.se/kontorsmobler/kontorsbord/alla+produkter/looks/?Egenskaper=Lador,Med_hyllor&sort=default'],
    HU:     ['https://www.beliani.hu/iroasztalok-hu/iroasztalok/?Fobb_jellemzok=Fiokos_asztal,Asztal_polcokkal&sort=default'],
    DK:     ['https://www.beliani.dk/alle-skriveborde/alle+produkter/?Funktioner=Med_skuffer,Med_hylder&sort=default '],
    CZ:     ['https://www.beliani.cz/nabytek-do-kancelare/kancelarske-stoly/vsechny+produkty/looks/?Vlastnosti=Zasuvky,S_policemi&sort=default'],
    FI:     ['https://www.beliani.fi/toimistokalusteet/tyopoydat/kaikki+tuotteet/?Ominaisuudet=Laatikot,Hyllyt'],
    NO:     ['https://www.beliani.no/skrivebord/alle+produkter/?Egenskaper=Med_skuffer,Med_hyller&sort=default'],
    SK:     ['https://www.beliani.sk/nabytok-do-kancelarie/pisacie-stoly-sk/zobrazit+vsetky+produkty/?Vlastnosti=So_zasuvkami,S_policami&sort=default'],
    BENL:   ['https://www.beliani.be/werkkamer/bureaus/alle+producten/looks/?Eigenschappen=Met_lades,Met_planken&sort=default'],
    BEFR:   ['https://www.beliani.be/bureaux/tous+les+produits/looks/?Caracteristiques=Tiroirs,Avec_etageres'],
    RO:     ['https://www.beliani.ro/birou/birouri/toate+produsele/?Caracteristici=Cu_sertare,Cu_rafturi&sort=default'],
  };

  function add_utm(link){
    let link_with_utm = link + '?utm_source=newsletter&utm_medium=email&utm_campaign=' + id
    return link_with_utm
}




  const a = categories[3].products.map((item) =>
    getProductById(item.id, item.src)
    )
    console.log(a)
    console.log(queries.category_paragraph[1])
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

   <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #FEE3BF; color: #000;" id='newsletter'>


   


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
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; color: #000;" id='newsletter'>
              <tr>
                <td align="center" style="background-color: #FEE3BF;" class="newsletterContainer">
                  ${Intro({
                    paragraph: queries.intro[0], 
                    color: "#000", 
                    align:'left',
                    title:'no_title'
                  })}
                  </td>
              </tr>
              <tr>
                <td style="background-color: #FEE3BF;" class="newsletterBottom35px"></td>
              </tr>
              <tr>
                <td style="background-color: #FFCCB7;" class="newsletterBottom20px"></td>
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
                <td style="background-color: #FFCCB7">
                      ${ImageWithLink({
                        href: links[4],
                        src: 'https://upload.pictureserver.net/static/2025/2500320_03free.png',
                      })}
                </td>
              </tr>
              <tr>
                <td style="background-color: #FEE3BF;" class="newsletterBottom60px"></td>
              </tr>
              <tr>
                    <td style="background-color:  #FEE3BF;">
                        ${Category({
                          href: getCategoryLink(categories[0].href),
                          name: queries.category_paragraph[0],
                          name1: queries.category_paragraph[1],
                          src: categories[0].src,
                          cta: getPhrase("Shop now"),
                          type: "monday",
                          color: categories[0].color,
                          products: categories[0].products.map((item) =>
                            getProductById(item.id, item.src)
                          ),
                        

                        })}
                    </td>
              </tr>
             <tr>
                <td style="background-color: #F7E8E7;" class="newsletterBottom35px"></td>
              </tr>
              <tr>
                    <td style="background-color: #F7E8E7;">
                        ${Category({
                          href: getCategoryLink(categories[1].href),
                          name: queries.category_paragraph[2],
                          name1: queries.category_paragraph[3],
                          src: categories[1].src,
                          cta: getPhrase("Shop now"),
                          type: "monday",
                          color: categories[1].color,
                          products: categories[1].products.map((item) =>
                            getProductById(item.id, item.src)
                          ),
                        

                        })}
                    </td>
              </tr>
              <tr>
                <td style="background-color: #FEE3BF;" class="newsletterBottom35px"></td>
              </tr>
              <tr>
                    <td style="background-color:  #FEE3BF;">
                        ${Category({
                          href: getCategoryLink(categories[2].href),
                          name: queries.category_paragraph[4],
                          name1: queries.category_paragraph[5],
                          src: categories[2].src,
                          cta: getPhrase("Shop now"),
                          type: "monday",
                          color: categories[2].color,
                          products: categories[2].products.map((item) =>
                            getProductById(item.id, item.src)
                          ),
                        })}
                    </td>
              </tr>
              <tr>
                <td style="background-color: #F6E7E6;" class="newsletterBottom35px"></td>
              </tr>
              <tr>
                    <td style="background-color:  #F6E7E6;">
                        ${Category({
                          href: getCategoryLink(categories[3].href),
                          name: queries.category_paragraph[6],
                          name1: queries.category_paragraph[7],
                          src: categories[3].src,
                          cta: getPhrase("Shop now"),
                          type: "monday",
                          color: categories[3].color,
                          products: categories[3].products.map((item) =>
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
