import { templates } from "./templates/index.js";
import { entities } from "./entities/index.js";
import types from "./utils/types.js";
import SHOPS from "./config/shops.js";
import { initApp } from "./main/initApp.js";
import { kaczka } from "./server.js";
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
        startId: "32420",
        name: "March Peak Final",
        date: "2025.04.25",
        issueCardId: "310827",
        alarm: {
          isActive: false,
          description: "Add soon ending campaigns.",
        },
        isArchive: false,
        optimizeImg: false,
        figmaUrl:
          "https://www.figma.com/design/uIdkNdNa9xdPfexVSIkRgm/2024.11.11---Black-Week-start-newlsetter-(Copy)?t=yz2KFYtKNK6uYMID-0",
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.friday_categories,
            css: types.CSS.NS,
            background: "#FFCCB7",
            categories: [
              {
                name: "Sofas",
                background: "#FFEBE6",
                color: "#000",
                src: "https://upload.pictureserver.net/static/2025/20250214_01.png",
                href: "https://www.beliani.ch/sofas/ ",
                products: [
                  
                  {
                    id: "572265",
                     src: getImageUrl("20250407Category24.png", true),
                  },
                  {
                    id: "567392",
                    src: "https://upload.pictureserver.net/static/2025/20250214_03.png",
                  },
                  {
                    id: "566879",
                    src: "https://upload.pictureserver.net/static/2025/20250214_04.png",
                  },
                  {
                    id: "571048",
                    src: "https://upload.pictureserver.net/static/2025/20250214_05.png",
                  },
  
                ],
              },
              {
                name: "Beds ",
                background: "#750000",
                color: "#fff",
                src: "https://upload.pictureserver.net/static/2025/20250214_06.png",
                href: "https://www.beliani.ch/beds/",
                products: [
                  {
                    id: "468234",
                    src: "https://upload.pictureserver.net/static/2025/20250214_07.png",
                  },
                  {
                    id: "185103",
                    src: "https://upload.pictureserver.net/static/2025/20250214_08.png",
                  },
                  {
                    id: "412850",
                    src: "https://upload.pictureserver.net/static/2025/20250214_09.png",
                  },
                  {
                    id: "329401",
                    src: "https://upload.pictureserver.net/static/2025/20250214_10.png",
                  },
  
                ],
              },
              {
                name: "Armchairs",
                background: "#FFEBE6",
                color: "#000",
                src: "https://upload.pictureserver.net/static/2025/20250214_11.png",
                href: "https://www.beliani.ch/armchairs/",
                products: [
                  {
                    id: "578868",
                    src: "https://upload.pictureserver.net/static/2025/20250214_12.png",
                  },
                  {
                    id: "567754",
                    src: "https://upload.pictureserver.net/static/2025/20250214_13.png",
                  },
                  {
                    id: "403385",
                    src: "https://upload.pictureserver.net/static/2025/20250214_14.png",
                  },
                  {
                    id: "516366",
                    src: "https://upload.pictureserver.net/static/2025/20250214_15.png",
                  },
  
                ],
              },
              {
                name: "Sideboards",
                background: "#750000",
                color: "#fff",
                src: "https://upload.pictureserver.net/static/2025/20250214_16.png",
                href: "https://www.beliani.ch/storage/sideboards/",
                products: [
                  {
                    id: "564595",
                    src: "https://upload.pictureserver.net/static/2025/20250214_17.png",
                  },
                  {
                    id: "565392",
                    src: "https://upload.pictureserver.net/static/2025/20250214_18.png",
                  },
                  {
                    id: "341146",
                    src: "https://upload.pictureserver.net/static/2025/20250214_19.png",
                  },
                  {
                    id: "164083",
                    src: "https://upload.pictureserver.net/static/2025/20250214_20.png",
                  },
  
                ],
              },
             
             
            ],
            wrapper: types.WRAPPER,
            links: [{
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-04-25",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value:
                  getImageUrl("_title_20250425.png", true),
            
            },},
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-25",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_gif_20250425.gif", true),
                },
              },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-04-25",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-04-18",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value:
                getImageUrl("20250418b.png", true),
              },
            },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("20250417b.png", true),
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
                  placeholderPosition: "38",
                  value:
                  getImageUrl("20250214_inside_banner.png.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_1__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_2__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_3__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_4__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_5__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_6__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_7__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_8__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_9__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_10__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_11__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_12__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_13__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_14__20250425.png", true),
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
                tableName: "25.04.25 - March Peak Final reminder!",
                tableRange: "12",
                name: "intro",
                fallback: [
                  "Extra 5% off everything",
                ],
              },
              {
                tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
                tableName: "25.10.24 - October peak reminder- Friday!",
                tableRange: "38",
                name: "Shop_All_Categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "8:9",
                name: "timer",
                fallback: [
                  "Extra 5% off everything",
                ],
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.02.25 - Valentines Day!",
                tableRange: "17:20",
                name: "category_paragraph",
                fallback: [
                  "Extra 5% off everything",
                  
                ],
              },
              
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "25.04.25 - March Peak Final reminder!",
                tableRange: "45:46",
                name: "condition",
                fallback: [
                  "Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 5% additional discount on your order. The minimum order amount is €250. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 10% additional discount on your order. The minimum order amount is €500. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 15% additional discount on your order. The minimum order amount is €1000. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 20% additional discount on your order. The minimum order amount is €2500. Only one voucher is redeemable per person and order. This voucher cannot be exchanged for cash and you can only use one voucher code per order. This offer is valid till 01.12.2024 or as long as the products are in stock. This voucher cannot be used for pending orders. This offer is not valid for resellers. All items are subject to availability. All prices are subject to change without notification.",
                  'If you wish to unsubscribe from the newsletter, you can do so by clicking on the <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Unsubscribe</a> link.',
                ],
              },
            ],
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.friday_categories,
            background: "#FFCCB7",
            css: types.CSS.LP,
            categories: [
              {
                name: "Sofas",
                background: "#FFEBE6",
                color: "#000",
                src: "https://upload.pictureserver.net/static/2025/20250214_01.png",
                href: "https://www.beliani.ch/sofas/ ",
                products: [
                  
                  {
                    id: "572265",
                    src: "https://upload.pictureserver.net/static/2025/20250214_02.png",
                  },
                  {
                    id: "567392",
                    src: "https://upload.pictureserver.net/static/2025/20250214_03.png",
                  },
                  {
                    id: "566879",
                    src: "https://upload.pictureserver.net/static/2025/20250214_04.png",
                  },
                  {
                    id: "571048",
                    src: "https://upload.pictureserver.net/static/2025/20250214_05.png",
                  },
  
                ],
              },
              {
                name: "Beds ",
                background: "#750000",
                color: "#fff",
                src: "https://upload.pictureserver.net/static/2025/20250214_06.png",
                href: "https://www.beliani.ch/beds/",
                products: [
                  {
                    id: "468234",
                    src: "https://upload.pictureserver.net/static/2025/20250214_07.png",
                  },
                  {
                    id: "185103",
                    src: "https://upload.pictureserver.net/static/2025/20250214_08.png",
                  },
                  {
                    id: "412850",
                    src: "https://upload.pictureserver.net/static/2025/20250214_09.png",
                  },
                  {
                    id: "329401",
                    src: "https://upload.pictureserver.net/static/2025/20250214_10.png",
                  },
  
                ],
              },
              {
                name: "Armchairs",
                background: "#FFEBE6",
                color: "#000",
                src: "https://upload.pictureserver.net/static/2025/20250214_11.png",
                href: "https://www.beliani.ch/armchairs/",
                products: [
                  {
                    id: "578868",
                    src: "https://upload.pictureserver.net/static/2025/20250214_12.png",
                  },
                  {
                    id: "567754",
                    src: "https://upload.pictureserver.net/static/2025/20250214_13.png",
                  },
                  {
                    id: "403385",
                    src: "https://upload.pictureserver.net/static/2025/20250214_14.png",
                  },
                  {
                    id: "516366",
                    src: "https://upload.pictureserver.net/static/2025/20250214_15.png",
                  },
  
                ],
              },
              {
                name: "Sideboards",
                background: "#750000",
                color: "#fff",
                src: "https://upload.pictureserver.net/static/2025/20250214_16.png",
                href: "https://www.beliani.ch/storage/sideboards/",
                products: [
                  {
                    id: "564595",
                    src: "https://upload.pictureserver.net/static/2025/20250214_17.png",
                  },
                  {
                    id: "565392",
                    src: "https://upload.pictureserver.net/static/2025/20250214_18.png",
                  },
                  {
                    id: "341146",
                    src: "https://upload.pictureserver.net/static/2025/20250214_19.png",
                  },
                  {
                    id: "164083",
                    src: "https://upload.pictureserver.net/static/2025/20250214_20.png",
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
                value: "content/lp25-04-25",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value:
                  getImageUrl("_title_20250425.png", true),
            
            },},
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-25",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_gif_20250425.gif", true),
                },
              },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-04-25",
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-04-18",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value:
                getImageUrl("20250418b.png", true),
              },
            },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("20250417b.png", true),
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
                  placeholderPosition: "38",
                  value:
                  getImageUrl("20250214_inside_banner.png.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_1__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_2__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_3__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_4__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_5__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_6__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_7__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_8__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_9__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_10__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_11__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_12__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_13__20250425.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                  getImageUrl("_cat_14__20250425.png", true),
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
                tableName: "25.04.25 - March Peak Final reminder!",
                tableRange: "10",
                name: "tit",
                fallback: [
                  "Extra 5% off everything",
                ],
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "25.04.25 - March Peak Final reminder!",
                tableRange: "12",
                name: "intro",
                fallback: [
                  "Extra 5% off everything",
                ],
              },
              {
                tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
                tableName: "25.10.24 - October peak reminder- Friday!",
                tableRange: "38",
                name: "Shop_All_Categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "8:9",
                name: "timer",
                fallback: [
                  "Extra 5% off everything",
                ],
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "14.02.25 - Valentines Day!",
                tableRange: "17:20",
                name: "category_paragraph",
                fallback: [
                  "Extra 5% off everything",
                  
                ],
              },
              
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "25.04.25 - March Peak Final reminder!",
                tableRange: "45:46",
                name: "condition",
                fallback: [
                  "Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 5% additional discount on your order. The minimum order amount is €250. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 10% additional discount on your order. The minimum order amount is €500. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 15% additional discount on your order. The minimum order amount is €1000. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 20% additional discount on your order. The minimum order amount is €2500. Only one voucher is redeemable per person and order. This voucher cannot be exchanged for cash and you can only use one voucher code per order. This offer is valid till 01.12.2024 or as long as the products are in stock. This voucher cannot be used for pending orders. This offer is not valid for resellers. All items are subject to availability. All prices are subject to change without notification.",
                  'If you wish to unsubscribe from the newsletter, you can do so by clicking on the <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Unsubscribe</a> link.',
                ],
              },
            ],
          },
        ],
      }),
      new entities.Campaign({
              startId: "32292",
              name: "Beds",
              date: "2025-04-11",
              issueCardId: "31633",
              alarm: {
                isActive: false,
                description: "Add soon ending campaigns.",
              },
              isArchive: false,
              optimizeImg: false,
              figmaUrl:
                "https://www.figma.com/design/uIdkNdNa9xdPfexVSIkRgm/2024.11.11---Black-Week-start-newlsetter-(Copy)?t=yz2KFYtKNK6uYMID-0",
              templates: [
                {
                  name: "Newsletter",
                  type: types.NEWSLETTER,
                  template: templates.friday_standard_4_categories,
                  css: types.CSS.NS,
                  background: "#FFCCB7",
                  categories: [
                    
                    {
                      name: "beds",
                      background: "#FFCCB7",
                      color: "#000",
                      src: getImageUrl("cat_1_01_20250411.png", true),
                      href: "https://www.beliani.ch/beds/",
                      products: [{
                        id: "416846",
                        src: getImageUrl("cat_1_02_20250411.png", true),
                      },
                      {
                        id: "596984",
                        src: getImageUrl("cat_1_03_20250411.png", true),
                      },
                      {
                        id: "590220",
                        src: getImageUrl("cat_1_04_20250411.png", true),
                      },
                      {
                        id: "603161",
                        src: getImageUrl("cat_1_05_20250411.png", true),
                      },
                        
                        
                      ],
                    },
                    {
                      name: "Mattresses",
                      background: "#FD9000",
                      color: "#000",
                      src: getImageUrl("cat_2_01_20250411.png", true),
                      href: "https://www.beliani.ch/bedroom-furniture/mattresses/",
                      products: [{
                        id: "463420",
                        src: getImageUrl("cat_2_02_20250411.png", true),
                      },
                      {
                        id: "495872",
                        src: getImageUrl("cat_2_03_20250411.png", true),
                      },
                      {
                        id: "570767",
                        src: getImageUrl("cat_2_04_20250411.png", true),
                      },
                      {
                        id: "92050",
                        src: getImageUrl("cat_2_05_20250411.png", true),
                      },
                        
                        
                      ],
                    },
                    {
                      name: "Bedside tables",
                      background: "#FFCCB7",
                      color: "#000",
                      src: getImageUrl("cat_3_01_20250411.png", true),
                      href: "https://www.beliani.ch/storage/bedside-tables/",
                      products: [{
                        id: "570189",
                        src: getImageUrl("cat_3_02_20250411.png", true),
                      },
                      {
                        id: "448023",
                        src: getImageUrl("cat_3_03_20250411.png", true),
                      },
                      {
                        id: "363361",
                        src: getImageUrl("cat_3_04_20250411.png", true),
                      },
                      {
                        id: "560306",
                        src: getImageUrl("cat_3_05_20250411.png", true),
                      },
                        
                        
                      ],
                    },
                    {
                      name: "Textiles",
                      background: "#FD9000",
                      color: "#000",
                      src: getImageUrl("cat_4_01_20250411.png", true),
                      href: "https://www.beliani.ch/bedroom-furniture/textiles/",
                      products: [{
                        id: "3990",
                        src: getImageUrl("cat_4_02_20250411.png", true),
                      },
                      {
                        id: "436431",
                        src: getImageUrl("cat_4_03_20250411.png", true),
                      },
                      {
                        id: "502610",
                        src: getImageUrl("cat_4_04_20250411.png", true),
                      },
                      {
                        id: "299892",
                        src: getImageUrl("cat_4_05_20250411.png", true),
                      },
                        
                        
                      ],
                    },
                  ],
            wrapper: types.WRAPPER,
                        links: [{
                          query: true,
                          href: {
                            type: "relation",
                            relyOn: "origin",
                            placeholderPosition: "0",
                            value: "content/lp25-04-11",
                          },
                        },
                        {
                          src: {
                            type: "relation",
                            relyOn: "slug",
                            placeholderPosition: "38",
                            value: getImageUrl("_title_20250411.png", true),
                              
                        
                        },},
                          {
                            query: true,
                            href: {
                              type: "relation",
                              relyOn: "origin",
                              placeholderPosition: "0",
                              value: "content/lp25-04-11",
                            },
                          },
                          {
                            
                              
                              value: getImageUrl("top_image_20250411.png", true),
                                
                           
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
                            value: "content/lp25-04-04",
                          },
                        },
                        {
                          src: {
                            type: "relation",
                            relyOn: "slug",
                            placeholderPosition: "38",
                            value: getImageUrl("20250404b.png", true),
                             
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
                              value: 
                              getImageUrl("20250403b.png", true),
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
                              placeholderPosition: "38",
                              value: getImageUrl("uk250313.png", true),
                                
                            },
                          },
                          {
                            src: {
                              type: "relation",
                              relyOn: "slug",
                              placeholderPosition: "38",
                              value:
                                kaczka + "2025/_cat_08_20250321.png",
                            },
                          },
                          {
                            src: {
                              type: "relation",
                              relyOn: "slug",
                              placeholderPosition: "38",
                              value:
                                kaczka + "2025/_cat_07_20250321.png",
                            },
                          },
                          {
                            src: {
                              type: "relation",
                              relyOn: "slug",
                              placeholderPosition: "38",
                              value:
                                kaczka + "2025/_cat_06_20250321.png",
                            },
                          },
                          {
                            src: {
                              type: "relation",
                              relyOn: "slug",
                              placeholderPosition: "38",
                              value:
                                kaczka + "2025/_cat_05_20250321.png",
                            },
                          },
                          {
                            src: {
                              type: "relation",
                              relyOn: "slug",
                              placeholderPosition: "38",
                              value:
                                kaczka + "2025/_cat_04_20250321.png",
                            },
                          },
                          {
                            src: {
                              type: "relation",
                              relyOn: "slug",
                              placeholderPosition: "38",
                              value:
                                kaczka + "2025/_cat_03_20250321.png",
                            },
                          },
                          {
                            src: {
                              type: "relation",
                              relyOn: "slug",
                              placeholderPosition: "38",
                              value:
                                kaczka + "2025/_cat_02_20250321.png",
                            },
                          },
                          {
                            src: {
                              type: "relation",
                              relyOn: "slug",
                              placeholderPosition: "38",
                              value:
                                kaczka + "2025/_cat_01_20250321.png",
                            },
                          },{
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
                                kaczka + "2025/_20250307.png",
                            },
                          },
                          {
                            src: {
                              type: "relation",
                              relyOn: "slug",
                              placeholderPosition: "38",
                              value: getImageUrl("_cat_1_prod_20250328.png", true),
                                
                            },
                          },
                          {
                            src: {
                              type: "relation",
                              relyOn: "slug",
                              placeholderPosition: "38",
                              value:  getImageUrl("_cat_2_prod_20250328.png", true),
                               
                            },
                          },
                          {
                            src: {
                              type: "relation",
                              relyOn: "slug",
                              placeholderPosition: "38",
                              value: getImageUrl("_cat_3_prod_20250328.png", true),
                                
                            },
                          },
                          {
                            src: {
                              type: "relation",
                              relyOn: "slug",
                              placeholderPosition: "38",
                              value: getImageUrl("_cat_4_prod_20250328.png", true),
                                
                            },
                          },
              
               
                        ],
                        tableQueries: [
            
                          {
                            tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                            tableName: "11.04.25 - Bedroom!",
                            tableRange: "13:14",
                            name: "tit",
                          },
            
                          
                          {
                            tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                            tableName: "11.04.25 - Bedroom!",
                            tableRange: "16",
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
                            tableName: "11.04.25 - Bedroom!",
                            tableRange: "17:24",
                            name: "category_paragraph",
                            fallback: [
                              "Extra 5% off everything",
                              
                            ],
                          },
                
                          
                          {
                            tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                            tableName: "11.04.25 - Bedroom!",
                            tableRange: "39:40",
                            name: "condition",
                            fallback: [
                              "Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 5% additional discount on your order. The minimum order amount is €250. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 10% additional discount on your order. The minimum order amount is €500. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 15% additional discount on your order. The minimum order amount is €1000. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 20% additional discount on your order. The minimum order amount is €2500. Only one voucher is redeemable per person and order. This voucher cannot be exchanged for cash and you can only use one voucher code per order. This offer is valid till 01.12.2024 or as long as the products are in stock. This voucher cannot be used for pending orders. This offer is not valid for resellers. All items are subject to availability. All prices are subject to change without notification.",
                              'If you wish to unsubscribe from the newsletter, you can do so by clicking on the <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Unsubscribe</a> link.',
                            ],
                          },
                        ],
                      },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.friday_standard_4_categories,
            background: "#FFCCB7",
            css: types.CSS.LP,
            intro: {
              background: "#FFCCB7",
              align: "center",
            },
            categories: [
                    
              {
                name: "beds",
                background: "#FF2F00",
                color: "#fff",
                src: getImageUrl("cat_1_01_20250404.png", true),
                href: "https://www.beliani.ch/last-pieces/?sort=default",
                products: [{
                  id: "434067",
                  src: getImageUrl("cat_1_02_20250404.png", true),
                },
                {
                  id: "418129",
                  src: getImageUrl("cat_1_03_20250404.png", true),
                },
                {
                  id: "390819",
                  src: getImageUrl("cat_1_04_20250404.png", true),
                },
                {
                  id: "382876",
                  src: getImageUrl("cat_1_05_20250404.png", true),
                },
                  
                  
                ],
              },
              {
                name: "beds",
                background: "#FFCCB7",
                color: "#000",
                src: getImageUrl("cat_2_01_20250404.png", true),
                href: "https://www.beliani.ch/last-pieces/?sort=default",
                products: [{
                  id: "406733",
                  src: getImageUrl("cat_2_02_20250404.png", true),
                },
                {
                  id: "379901",
                  src: getImageUrl("cat_2_03_20250404.png", true),
                },
                {
                  id: "344605",
                  src: getImageUrl("cat_2_04_20250404.png", true),
                },
                {
                  id: "499273",
                  src: getImageUrl("cat_2_05_20250404.png", true),
                },
                  
                  
                ],
              },
              {
                name: "beds",
                background: "#FF2F00",
                color: "#fff",
                src: getImageUrl("cat_3_01_20250404.png", true),
                href: "https://www.beliani.ch/last-pieces/?sort=default",
                products: [{
                  id: "495438",
                  src: getImageUrl("cat_3_02_20250404.png", true),
                },
                {
                  id: "438129",
                  src: getImageUrl("cat_3_03_20250404.png", true),
                },
                {
                  id: "425373",
                  src: getImageUrl("cat_3_04_20250404.png", true),
                },
                {
                  id: "458785",
                  src: getImageUrl("cat_3_05_20250404.png", true),
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
                      value: "content/lp25-04-04",
                    },
                  },
                  {
                    src: {
                      type: "relation",
                      relyOn: "slug",
                      placeholderPosition: "38",
                      value: getImageUrl("_title_20250404.png", true),
                        
                  
                  },},
                    {
                      query: true,
                      href: {
                        type: "relation",
                        relyOn: "origin",
                        placeholderPosition: "0",
                        value: "content/lp25-04-04",
                      },
                    },
                    {
                      
                        
                        value: getImageUrl("gif_20250404.gif", true),
                          
                     
                    },
                   
                  {
                    query: true,
                    href: {
                      type: "relation",
                      relyOn: "origin",
                      placeholderPosition: "0",
                      value: "content/lp25-03-31",
                    },
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
                      value: getImageUrl("20250328b.png", true),
                       
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
                        value: "content/lp25-02-17",
                      },
                    },
                    {
                      src: {
                        type: "relation",
                        relyOn: "slug",
                        placeholderPosition: "38",
                        value: getImageUrl("uk250313.png", true),
                          
                      },
                    },
                    {
                      src: {
                        type: "relation",
                        relyOn: "slug",
                        placeholderPosition: "38",
                        value:
                          kaczka + "2025/_cat_08_20250321.png",
                      },
                    },
                    {
                      src: {
                        type: "relation",
                        relyOn: "slug",
                        placeholderPosition: "38",
                        value:
                          kaczka + "2025/_cat_07_20250321.png",
                      },
                    },
                    {
                      src: {
                        type: "relation",
                        relyOn: "slug",
                        placeholderPosition: "38",
                        value:
                          kaczka + "2025/_cat_06_20250321.png",
                      },
                    },
                    {
                      src: {
                        type: "relation",
                        relyOn: "slug",
                        placeholderPosition: "38",
                        value:
                          kaczka + "2025/_cat_05_20250321.png",
                      },
                    },
                    {
                      src: {
                        type: "relation",
                        relyOn: "slug",
                        placeholderPosition: "38",
                        value:
                          kaczka + "2025/_cat_04_20250321.png",
                      },
                    },
                    {
                      src: {
                        type: "relation",
                        relyOn: "slug",
                        placeholderPosition: "38",
                        value:
                          kaczka + "2025/_cat_03_20250321.png",
                      },
                    },
                    {
                      src: {
                        type: "relation",
                        relyOn: "slug",
                        placeholderPosition: "38",
                        value:
                          kaczka + "2025/_cat_02_20250321.png",
                      },
                    },
                    {
                      src: {
                        type: "relation",
                        relyOn: "slug",
                        placeholderPosition: "38",
                        value:
                          kaczka + "2025/_cat_01_20250321.png",
                      },
                    },{
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
                          kaczka + "2025/_20250307.png",
                      },
                    },
                    {
                      src: {
                        type: "relation",
                        relyOn: "slug",
                        placeholderPosition: "38",
                        value: getImageUrl("_cat_1_prod_20250328.png", true),
                          
                      },
                    },
                    {
                      src: {
                        type: "relation",
                        relyOn: "slug",
                        placeholderPosition: "38",
                        value:  getImageUrl("_cat_2_prod_20250328.png", true),
                         
                      },
                    },
                    {
                      src: {
                        type: "relation",
                        relyOn: "slug",
                        placeholderPosition: "38",
                        value: getImageUrl("_cat_3_prod_20250328.png", true),
                          
                      },
                    },
                    {
                      src: {
                        type: "relation",
                        relyOn: "slug",
                        placeholderPosition: "38",
                        value: getImageUrl("_cat_4_prod_20250328.png", true),
                          
                      },
                    },
        
         
                  ],
                  tableQueries: [
      
                    {
                      tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                      tableName: "04.04.25 - Gone for good!",
                      tableRange: "11:12",
                      name: "tit",
                    },
      
                    
                    {
                      tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                      tableName: "04.04.25 - Gone for good!",
                      tableRange: "14",
                      name: "intro",
                      fallback: [
                        "Extra 5% off everything",
                      ],
                    },
                    {
                      tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                      tableName: "04.04.25 - Gone for good!",
                      tableRange: "15",
                      name: "shop_vip",
                      fallback: [
                        "Extra 5% off everything",
                      ],
                    },
                    {
                      tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                      tableName: "03.04.25 - Easter dining!",
                      tableRange: "16:17",
                      name: "timer",
                      fallback: [
                        "Extra 5% off everything",
                      ],
                    },
                    {
                      tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                      tableName: "04.04.25 - Gone for good!",
                      tableRange: "17:21",
                      name: "category_paragraph",
                      fallback: [
                        "Extra 5% off everything",
                        
                      ],
                    },
          
                    
                    {
                      tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                      tableName: "04.04.25 - Gone for good!",
                      tableRange: "38:39",
                      name: "condition",
                      fallback: [
                        "Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 5% additional discount on your order. The minimum order amount is €250. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 10% additional discount on your order. The minimum order amount is €500. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 15% additional discount on your order. The minimum order amount is €1000. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 20% additional discount on your order. The minimum order amount is €2500. Only one voucher is redeemable per person and order. This voucher cannot be exchanged for cash and you can only use one voucher code per order. This offer is valid till 01.12.2024 or as long as the products are in stock. This voucher cannot be used for pending orders. This offer is not valid for resellers. All items are subject to availability. All prices are subject to change without notification.",
                        'If you wish to unsubscribe from the newsletter, you can do so by clicking on the <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Unsubscribe</a> link.',
                      ],
                    },
                  ],
                },
        ],
      }),
      new entities.Campaign({
        date: "2025.04.07",
        issueCardId: "350971",
        name: "Free scatter cushion",
        startId: "32082",
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
            template: templates.mondayOfferFreeebies,
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
