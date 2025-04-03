import { templates } from "./templates/index.js";
import { entities } from "./entities/index.js";
import types from "./utils/types.js";
import SHOPS from "./config/shops.js";
import { initApp } from "./main/initApp.js";

const config = {
  server_url: "https://pictureserver.net/static/2024/",
  campaign_url: "https://www.prologistics.info/news_email.php?id=",
  issue_url: "https://www.prologistics.info/react/logs/issue_logs/",
  alarm_days: 7,
  confetti: true,
  replaceToBrs: true,
  emptyCell: (message) =>
    `<span style='font-size: 20px; background: #ff0000;'>${
      message || "Cell is empty"
    }</span>`,
};

/**
 * Aktualizuje rok w konfiguracji na podstawie aktualnego roku systemowego
 * @param {Object} config - Obiekt konfiguracyjny
 * @returns {Object} - Zaktualizowany obiekt konfiguracyjny
 */
function updateConfigWithCurrentYear(config) {
  const currentYear = new Date().getFullYear();
  config.server_url = config.server_url.replace(/\d{4}/, currentYear);
  return config;
}

/**
 * Pobiera i inkrementuje numer wersji dla danego obrazu
 * @param {string} imageName - Nazwa obrazu
 * @returns {number} - Zaktualizowany numer wersji
 */
function getImageVersion(imageName) {
  // Klucz do przechowywania wersji w localStorage
  const storageKey = 'image_versions';
  
  // Pobierz zapisane wersje z localStorage
  let versionsMap = {};
  try {
    const storedVersions = localStorage.getItem(storageKey);
    if (storedVersions) {
      versionsMap = JSON.parse(storedVersions);
    }
  } catch (error) {
    console.warn('Błąd podczas odczytu wersji obrazów:', error);
  }
  
  // Sprawdź aktualną wersję obrazu lub ustaw domyślną wartość 1
  const currentVersion = versionsMap[imageName] || 1;
  
  // Inkrementuj wersję
  const newVersion = currentVersion + 1;
  
  // Zapisz zaktualizowaną wersję
  versionsMap[imageName] = newVersion;
  try {
    localStorage.setItem(storageKey, JSON.stringify(versionsMap));
  } catch (error) {
    console.warn('Błąd podczas zapisu wersji obrazów:', error);
  }
  
  return newVersion;
}

/**
 * Generuje URL obrazu z automatyczną inkrementacją numeru wersji
 * @param {string} imageName - Nazwa obrazu
 * @param {boolean|string} version - Wersja obrazu: 
 *   - true/undefined: automatyczna inkrementacja
 *   - false: używa wersji 1
 *   - string/number: używa konkretnej wersji
 * @returns {string} - Pełny URL obrazu z parametrem wersji
 */
function getImageUrl(imageName, version) {
  // Aktualizacja roku w konfiguracji
  const updatedConfig = updateConfigWithCurrentYear(config);
  
  // Obsługa różnych przypadków wersji
  let versionParam;
  
  // Jeśli wersja jest stringiem lub liczbą, użyj jej bezpośrednio
  if (typeof version === 'string' || typeof version === 'number') {
    versionParam = version;
  }
  // Jeśli wersja jest false, użyj stałej wartości 1
  else if (version === false) {
    versionParam = 1;
  }
  // W przeciwnym razie (wersja jest undefined, true lub inną wartością) użyj automatycznego wersjonowania
  else {
    versionParam = getImageVersion(imageName);
  }
  
  // Zwróć pełny URL z parametrem wersji
  return updatedConfig.server_url + imageName + "?ver=" + versionParam;
}

try {
  initApp({
    campaigns: [

      new entities.Campaign({
        date: "2025.04.07",
        startId: "32260",
        name: "aktualna",
        startId: "32260",
        figmaUrl: "https://www.figma.com/design/IjK9bpuYSsDvyYGnJwhnQG/2025.04.07-Free-scatter-cushion-(Copy)?m=auto&fuid=1328681953229888224",
        alarm: {
          isActive: false,
        },
        isArchive: false,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.CategoriesRowsOfferPart,
            background: "#FD9000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            inside: {
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "beds",
                background: "#FFEDE6",
                color: "#000",
                src: getImageUrl("250410_cat1.png", true),
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
                products: [
                  
                  {
                    id:  "59126",
                    src: getImageUrl("250410_04.png", true),
                  },
                  {
                    id: "6954",
                    src: getImageUrl("250410_05.png", true),
                  },
                  {
                    id: "431804",
                    src: getImageUrl("250410_06.png", true),
                  },
                  {
                    id: "417176",
                    src: getImageUrl("250410_07.png", true),
                  },
  
                ],
              },
              {
                name: "wooden-beds",
                background: "#B37373",
                color: "#fff",
                src: getImageUrl("250410_cat2.png", true),
                href: "ttps://www.beliani.ch/bathroom-furniture/storage/",
                products: [
                  {
                    id: "580771",
                    src: getImageUrl("250410_08.png", true),
                  },
                  {
                    id: "310626",
                    src: getImageUrl("250410_09.png", true),
                  },
                  {
                    id: "588752",
                    src: getImageUrl("250410_10.png", true),
                  },
                  {
                    id: "571961",
                    src: getImageUrl("250410_11.png", true),
                  },
  
                ],
              },
              {
                name: "fabric-beds",
                background: "#FFEDE6",
                color: "#000",
                src: getImageUrl("250410_cat3.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/bathroom-accessories/",
                products: [
                  {
                    id: "561414",
                    src: getImageUrl("250410_12.png", true),
                  },
                  {
                    id: "515471",
                    src: getImageUrl("250410_13.png", true),
                  },
                  {
                    id: "329293",
                    src: getImageUrl("250410_14.png", true),
                  },
                  {
                    id: "320374",
                    src: getImageUrl("250410_15.png", true),
                  },
  
                ],
              },
              {
                name: "metal-beds",
                background: "#B37373",
                color: "#fff",
                src: getImageUrl("250410_cat4.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/mirrors/",
                products: [
                  {
                    id: "580790",
                    src: getImageUrl("250410_16.png", true),
                  },
                  {
                    id: "161417",
                    src: getImageUrl("250410_17.png", true),
                  },
                  {
                    id: "523081",
                    src: getImageUrl("250410_18.png", true),
                  },
                  {
                    id: "203129",
                    src: getImageUrl("250410_19.png", true),
                  },
  
                ],
              },
             
            ],
            links: [{
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-04-10",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("250410_01.png", true),
            
            },},
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-10",
                },
              },
              {
                
                  
                value: getImageUrl("250410_02.png", true),

               
              },
             
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-04-07",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-04-03",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250403b.png", true),
              },
            },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-02",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250402b.png", true),
                },
              },
              
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/250403_03free.png",
                },
              },

              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/_20250307.png",
                },
              },


  
   
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "10.04.25 - Wellness bathroom!",
                tableRange: "13",
                name: "intro",
                fallback: [
                  "Extra 5% off everything",
                ],
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "10.04.25 - Wellness bathroom!",
                tableRange: "14:15",
                name: "timer",
                fallback: [
                  "Extra 5% off everything",
                ],
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "10.04.25 - Wellness bathroom!",
                tableRange: "16:23",
                name: "category_paragraph",
                fallback: [
                  "Extra 5% off everything",
                  
                ],
              },
    
              
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "10.04.25 - Wellness bathroom!",
                tableRange: "38:39",
                name: "condition",
                fallback: [
                  "Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 5% additional discount on your order. The minimum order amount is €250. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 10% additional discount on your order. The minimum order amount is €500. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 15% additional discount on your order. The minimum order amount is €1000. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 20% additional discount on your order. The minimum order amount is €2500. Only one voucher is redeemable per person and order. This voucher cannot be exchanged for cash and you can only use one voucher code per order. This offer is valid till 01.12.2024 or as long as the products are in stock. This voucher cannot be used for pending orders. This offer is not valid for resellers. All items are subject to availability. All prices are subject to change without notification.",
                  'If you wish to unsubscribe from the newsletter, you can do so by clicking on the <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Unsubscribe</a> link.',
                ],
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "358248",
                      src: getImageUrl("20250407Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "357493",
                      src: getImageUrl("20250407Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "357745",
                      src: getImageUrl("20250407Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "357826",
                      src: getImageUrl("20250407Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "358029",
                      src: getImageUrl("20250407Freebie5.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "358108",
                      src: getImageUrl("20250407Freebie6.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferFreeebies,
            background: "#FD9000",
            css: types.CSS.LP,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FD9000",
            },
            inside: {
              color: "#000000",
              background: "#FD9000",
            },
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Living room",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250407Category1.png", true),
                href: "https://www.beliani.ch/living-room-furniture/",
                products: [
                  {
                    id: "306283",
                    src: getImageUrl("20250407Category11.png", true),
                  },
                  {
                    id: "421836",
                    src: getImageUrl("20250407Category12.png", true),
                  },
                  {
                    id: "383651",
                    src: getImageUrl("20250407Category13.png", true),
                  },
                  {
                    id: "290095",
                    src: getImageUrl("20250407Category14.png", true),
                  },
                ],
              },
              {
                name: "Bedroom",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250407Category2.png", true),
                href: "https://www.beliani.ch/bedroom-furniture/",
                products: [
                  {
                    id: "92894",
                    src: getImageUrl("20250407Category21.png", true),
                  },
                  {
                    id: "440882",
                    src: getImageUrl("20250407Category22.png", true),
                  },
                  {
                    id: "363379",
                    src: getImageUrl("20250407Category23.png", true),
                  },
                  {
                    id: "71096",
                    src: getImageUrl("20250407Category24.png", true),
                  },
                ],
              },
              {
                name: "Dining room",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250407Category3.png", true),
                href: "https://www.beliani.ch/dining-room-furniture/",
                products: [
                  {
                    id: "567944",
                    src: getImageUrl("20250407Category31.png", true),
                  },
                  {
                    id: "216522",
                    src: getImageUrl("20250407Category32.png", true),
                  },
                  {
                    id: "330604",
                    src: getImageUrl("20250407Category33.png", true),
                  },
                  {
                    id: "438918",
                    src: getImageUrl("20250407Category34.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250407Category4.png", true),
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
                products: [
                  {
                    id: "319891",
                    src: getImageUrl("20250407Category41.png", true),
                  },
                  {
                    id: "555070",
                    src: getImageUrl("20250407Category42.png", true),
                  },
                  {
                    id: "527231",
                    src: getImageUrl("20250407Category43.png", true),
                  },
                  {
                    id: "523836",
                    src: getImageUrl("20250407Category44.png", true),
                  },
                ],
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250407_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-07",
                },
              },
              {
                value: getImageUrl("20250407_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250328b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-27",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250327b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("_20250307.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 07.04.2025 - Free scatter cushion!",
                tableRange: "42:44",
                name: "condition",
              },
              {
                tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesTitles",
                tableColumns: false,
              },
              {
                tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
                tableName: "Categories",
                tableRange: "?majorDimension=COLUMNS",
                name: "categoriesLinks",
                tableColumns: false,
              },
              {
                tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
                tableName: "Header",
                tableRange: "?majorDimension=COLUMNS",
                name: "header",
                tableColumns: false,
              },
              {
                tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
                tableName: "Footer",
                tableRange: "?majorDimension=COLUMNS",
                name: "footer",
                tableColumns: false,
              },
            ],
            freebies: {
              options: {
                color: "#000000",
                background: "#FD9000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "358248",
                      src: getImageUrl("20250407Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "357493",
                      src: getImageUrl("20250407Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "357745",
                      src: getImageUrl("20250407Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "357826",
                      src: getImageUrl("20250407Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "358029",
                      src: getImageUrl("20250407Freebie5.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "358108",
                      src: getImageUrl("20250407Freebie6.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
    ],
    shops: SHOPS,
    config: {
      server_url: "https://pictureserver.net/static/2024/",
      campaign_url: "https://www.prologistics.info/news_email.php?id=",
      issue_url: "https://www.prologistics.info/react/logs/issue_logs/",
      alarm_days: 7,
      confetti: true,
      replaceToBrs: true,
      emptyCell: (message) =>
        `<span style='font-size: 20px; background: #ff0000;'>${
          message || "Cell is empty"
        }</span>`,
    },
  });
} catch (error) {
  console.log(error);
  Toastify({
    text: error.message || "Something went wrong. More details in console.",
    escapeMarkup: false,
    duration: 3000,
  }).showToast();
}
