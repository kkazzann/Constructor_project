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
        date: "2025.04.28",
        issueCardId: "357067",
        name: "Free fire pit",
        startId: "32676",
        figmaUrl: "https://www.figma.com/design/WHq6Ct6hUbUP4IS35T8uRz/2025.04.28--Free-fire-pit--Copy-?node-id=6061-772&t=SIHDcr1oxf6X2bOo-0",
        alarm: {
          isActive: false,
        },
        isArchive: false,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#F6E7E6",
              color: "#000000",
            },
            categories: [
              {
                name: "Cosy for Two",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250428Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
                products: [
                  {
                    id: "522681", //origin.includes("HU") ? "306283" : "231605",
                    src: getImageUrl("20250428Category11.png", true), //origin.includes("HU") ? getImageUrl("20250428Category11.png", true) : getImageUrl("20250428huCategory11.png", true),
                  },
                  {
                    id: "596587",
                    src: getImageUrl("20250428Category12.png", true),
                  },
                  {
                    id: "557385",
                    src: getImageUrl("20250428Category13.png", true),
                  },
                  {
                    id: "294544",
                    src: getImageUrl("20250428Category14.png", true),
                  },
                ],
              },
              {
                name: "Ideal for four",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250428Category2.png", true),
                href: "",
                products: [
                  {
                    id: "588436",
                    src: getImageUrl("20250428Category21.png", true),
                  },
                  {
                    id: "525622",
                    src: getImageUrl("20250428Category22.png", true),
                  },
                  {
                    id: "257696",
                    src: getImageUrl("20250428Category23.png", true),
                  },
                  {
                    id: "569903",
                    src: getImageUrl("20250428Category24.png", true),
                  },
                ],
              },
              {
                name: "Spacious for six",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250428Category3.png", true),
                href: "",
                products: [
                  {
                    id: "585606",
                    src: getImageUrl("20250428Category31.png", true),
                  },
                  {
                    id: "523743",
                    src: getImageUrl("20250428Category32.png", true),
                  },
                  {
                    id: "419180",
                    src: getImageUrl("20250428Category33.png", true),
                  },
                  {
                    id: "294731",
                    src: getImageUrl("20250428Category34.png", true),
                  },
                ],
              },
              {
                name: "Ultimate 8-seater sets",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250428Category4.png", true),
                href: "",
                products: [
                  {
                    id: "192221",
                    src: getImageUrl("20250428Category41.png", true),
                  },
                  {
                    id: "140721",
                    src: getImageUrl("20250428Category42.png", true),
                  },
                  {
                    id: "146646",
                    src: getImageUrl("20250428Category43.png", true),
                  },
                  {
                    id: "71531",
                    src: getImageUrl("20250428Category44.png", true),
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
                  value: "content/lp25-04-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250428_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-28",
                },
              },
              {
                value: getImageUrl("20250428_gif.gif", true),
              },
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
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250410b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250306b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "38",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "35:37",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
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
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "197902",
                      src: getImageUrl("20250428Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "197914",
                      src: getImageUrl("20250428Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "197884",
                      src: getImageUrl("20250428Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "197917",
                      src: getImageUrl("20250428Freebie4.png", true),
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
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            css: types.CSS.LP,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#F6E7E6",
              color: "#000000",
            },
            categories: [
              {
                name: "Cosy for Two",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250428Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
                products: [
                  {
                    id: "522681", //origin.includes("HU") ? "306283" : "231605",
                    src: getImageUrl("20250428Category11.png", true), //origin.includes("HU") ? getImageUrl("20250428Category11.png", true) : getImageUrl("20250428huCategory11.png", true),
                  },
                  {
                    id: "596587",
                    src: getImageUrl("20250428Category12.png", true),
                  },
                  {
                    id: "557385",
                    src: getImageUrl("20250428Category13.png", true),
                  },
                  {
                    id: "294544",
                    src: getImageUrl("20250428Category14.png", true),
                  },
                ],
              },
              {
                name: "Ideal for four",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250428Category2.png", true),
                href: "",
                products: [
                  {
                    id: "588436",
                    src: getImageUrl("20250428Category21.png", true),
                  },
                  {
                    id: "525622",
                    src: getImageUrl("20250428Category22.png", true),
                  },
                  {
                    id: "257696",
                    src: getImageUrl("20250428Category23.png", true),
                  },
                  {
                    id: "569903",
                    src: getImageUrl("20250428Category24.png", true),
                  },
                ],
              },
              {
                name: "Spacious for six",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250428Category3.png", true),
                href: "",
                products: [
                  {
                    id: "585606",
                    src: getImageUrl("20250428Category31.png", true),
                  },
                  {
                    id: "523743",
                    src: getImageUrl("20250428Category32.png", true),
                  },
                  {
                    id: "419180",
                    src: getImageUrl("20250428Category33.png", true),
                  },
                  {
                    id: "294731",
                    src: getImageUrl("20250428Category34.png", true),
                  },
                ],
              },
              {
                name: "Ultimate 8-seater sets",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250428Category4.png", true),
                href: "",
                products: [
                  {
                    id: "192221",
                    src: getImageUrl("20250428Category41.png", true),
                  },
                  {
                    id: "140721",
                    src: getImageUrl("20250428Category42.png", true),
                  },
                  {
                    id: "146646",
                    src: getImageUrl("20250428Category43.png", true),
                  },
                  {
                    id: "71531",
                    src: getImageUrl("20250428Category44.png", true),
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
                  value: "content/lp25-04-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250428_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-28",
                },
              },
              {
                value: getImageUrl("20250428_gif.gif", true),
              },
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
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250410b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250306b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "38",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
                tableRange: "35:37",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 28.04.25 - Free fire pit!",
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
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "197902",
                      src: getImageUrl("20250428Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "197914",
                      src: getImageUrl("20250428Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "197884",
                      src: getImageUrl("20250428Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "197917",
                      src: getImageUrl("20250428Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.04.21",
        issueCardId: "334022",
        name: "March Peak - Earth Day",
        startId: "32388",
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
            template: templates.MondayEarthDayNslt,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            earth: {
              background: "#FFCCB7",
              color: "#000000",
            },
            EarthDaySrc: [
              {
                src: getImageUrl("20250421Earth1.png", true),
              },
              {
                src: getImageUrl("20250421Earth2.png", true),
              },
              {
                src: getImageUrl("20250421Earth3.png", true),
              },
            ],
            categories: [
              {
                name: "Natural materials",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250421Category1.png", true),
                href: "",
                type: "mondaywithparagraph",
                products: [
                  {
                    id: "514447",
                    src: getImageUrl("20250421Category11.png", true),
                  },
                  {
                    id: "371401",
                    src: getImageUrl("20250421Category12.png", true),
                  },
                  {
                    id: "408516",
                    src: getImageUrl("20250421Category13.png", true),
                  },
                  {
                    id: "433272",
                    src: getImageUrl("20250421Category14.png", true),
                  },
                ],
              },
              {
                name: "Outdoor spaces",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250421Category2.png", true),
                href: "",
                type: "mondaywithparagraph",
                products: [
                  {
                    id: "76376",
                    src: getImageUrl("20250421Category21.png", true),
                  },
                  {
                    id: "207309",
                    src: getImageUrl("20250421Category22.png", true),
                  },
                  {
                    id: "598184",
                    src: getImageUrl("20250421Category23.png", true),
                  },
                  {
                    id: "587558",
                    src: getImageUrl("20250421Category24.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250421Category3.png", true),
                href: "",
                type: "mondaywithparagraph",
                products: [
                  {
                    id: "315442",
                    src: getImageUrl("20250421Category31.png", true),
                  },
                  {
                    id: "426151",
                    src: getImageUrl("20250421Category32.png", true),
                  },
                  {
                    id: "437955",
                    src: getImageUrl("20250421Category33.png", true),
                  },
                  {
                    id: "558373",
                    src: getImageUrl("20250421Category34.png", true),
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
                  value: "content/lp25-04-21",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-21",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250421_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-14",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250414b.png", true),
                },
              },
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
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250411b.png", true),
                },
              },
              // {
              //   query: true,
              //   href: {
              //     type: "relation",
              //     relyOn: "origin",
              //     placeholderPosition: "0",
              //     value: "content/lp25-03-03",
              //   },
              // },
              // {
              //   src: {
              //     type: "relation",
              //     relyOn: "slug",
              //     placeholderPosition: "38",
              //     value:
              //       getImageUrl("_20250307.png", true),
              //   },
              // },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "13",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "17:18",
                name: "introEarth",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "19:22",
                name: "EarthDayPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "24",
                name: "earthHref",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "23",
                name: "earthCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "31",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "25:30",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "14:16",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "36:37",
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
            footer_cat: [
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("_cat_01.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("_cat_02.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("_cat_03.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("_cat_04.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("_cat_05.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("_cat_06.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("_cat_07.png", true),
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("_cat_08.png", true),
                },
              },
            ]
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.MondayEarthDayNslt,
            background: "#FFCCB7",
            css: types.CSS.LP,
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            earth: {
              background: "#FFCCB7",
              color: "#000000",
            },
            EarthDaySrc: [
              {
                src: getImageUrl("20250421Earth1.png", true),
              },
              {
                src: getImageUrl("20250421Earth2.png", true),
              },
              {
                src: getImageUrl("20250421Earth3.png", true),
              },
            ],
            categories: [
              {
                name: "Natural materials",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250421Category1.png", true),
                href: "",
                type: "mondaywithparagraph",
                products: [
                  {
                    id: "514447",
                    src: getImageUrl("20250421Category11.png", true),
                  },
                  {
                    id: "371401",
                    src: getImageUrl("20250421Category12.png", true),
                  },
                  {
                    id: "408516",
                    src: getImageUrl("20250421Category13.png", true),
                  },
                  {
                    id: "433272",
                    src: getImageUrl("20250421Category14.png", true),
                  },
                ],
              },
              {
                name: "Outdoor spaces",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250421Category2.png", true),
                href: "",
                type: "mondaywithparagraph",
                products: [
                  {
                    id: "76376",
                    src: getImageUrl("20250421Category21.png", true),
                  },
                  {
                    id: "207309",
                    src: getImageUrl("20250421Category22.png", true),
                  },
                  {
                    id: "598184",
                    src: getImageUrl("20250421Category23.png", true),
                  },
                  {
                    id: "587558",
                    src: getImageUrl("20250421Category24.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250421Category3.png", true),
                href: "",
                type: "mondaywithparagraph",
                products: [
                  {
                    id: "315442",
                    src: getImageUrl("20250421Category31.png", true),
                  },
                  {
                    id: "426151",
                    src: getImageUrl("20250421Category32.png", true),
                  },
                  {
                    id: "437955",
                    src: getImageUrl("20250421Category33.png", true),
                  },
                  {
                    id: "558373",
                    src: getImageUrl("20250421Category34.png", true),
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
                  value: "content/lp25-04-21",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-21",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250421_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-04-14",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250414b.png", true),
                },
              },
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
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250411b.png", true),
                },
              },
              // {
              //   query: true,
              //   href: {
              //     type: "relation",
              //     relyOn: "origin",
              //     placeholderPosition: "0",
              //     value: "content/lp25-03-03",
              //   },
              // },
              // {
              //   src: {
              //     type: "relation",
              //     relyOn: "slug",
              //     placeholderPosition: "38",
              //     value:
              //       getImageUrl("_20250307.png", true),
              //   },
              // },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "13",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "11",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "17:18",
                name: "introEarth",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "19:22",
                name: "EarthDayPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "24",
                name: "earthHref",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "23",
                name: "earthCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "31",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "25:30",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "14:16",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "21.04.25 - March Peak - Earth Day!",
                tableRange: "36:37",
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
          },
        ],
      }),
      new entities.Campaign({
      startId: "30425",
      name: "March Peak reminder",
      date: "2025.04.14",
      issueCardId: "334000",
      figmaUrl: "https://www.figma.com/design/8GAjaJthNDBZ4lmRYLah23/2025-MarchPeak-(Copy)?t=EtPECgGgl5ApEN30-0",
      optimizeImg: false,
      alarm: {
        isActive: false,
      },
      isArchive: false,
      templates: [
        {
          name: "Newsletter",
          type: types.NEWSLETTER,
          template: templates.CategoriesRows,
          background: "#FFCCB7",
          wrapper: types.WRAPPER,
          css: types.CSS.NS,
          intro: {
            background: "#FFCCB7",
            align: "center",
          },
          categories: [
            {
              isCategoriesDB: true,
              name: "Outdoor ",
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250414Cat1.png", true),
              },
              href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
            },
            {
              isCategoriesDB: true,
              name: "Living Room",
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250414Cat2.png", true),
              },
              href: "https://www.beliani.ch/living-room-furniture/",
            },
            {
              isCategoriesDB: true,
              name: "Dining Room ",
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250414Cat3.png", true),
              },
              href: "https://www.beliani.ch/dining-room-furniture/",
            },
            {
              isCategoriesDB: true,
              name: "Bedroom",
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250414Cat4.png", true),
              },
              href: "https://www.beliani.ch/bedroom-furniture/",
            },
            {
              isCategoriesDB: true,
              name: "Hallway ",
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250414Cat5.png", true),
              },
              href: "https://www.beliani.ch/hallway/",
            },
            {
              isCategoriesDB: true,
              name: "Bathroom",
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250414Cat6.png", true),
              },
              href: "https://www.beliani.ch/bathroom-furniture/",
            },
            {
              isCategoriesDB: true,
              name: "Kids ",
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250414Cat7.png", true),
              },
              href: "https://www.beliani.ch/children-room/",
            },
            {
              isCategoriesDB: true,
              name: "Office",
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250414Cat8.png", true),
              },
              href: "https://www.beliani.ch/office-furniture/",
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-04-14",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250303_01.png", true),
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-04-14",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250414_gif.gif", true),
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
                value: getImageUrl("20250403b.png", true),
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              tableName: "14.04.25 - March Peak reminder!",
              tableRange: "12",
              name: "intro",
            },
            {
              tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              tableName: "14.04.25 - March Peak reminder!",
              tableRange: "21",
              name: "cta",
            },
            {
              tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              tableName: "14.04.25 - March Peak reminder!",
              tableRange: "25:26",
              name: "condition",
            },
            {
              tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              tableName: "14.04.25 - March Peak reminder!",
              tableRange: "13:20",
              name: "category",
            },
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
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
        },
        {
          name: "Landing",
          type: types.LANDINGPAGE,
          template: templates.CategoriesRows,
          background: "#FFCCB7",
          css: types.CSS.LP,
          intro: {
            background: "#FFCCB7",
            align: "center",
          },
          categories: [
            {
              isCategoriesDB: true,
              name: "Outdoor ",
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250414Cat1.png", true),
              },
              href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
            },
            {
              isCategoriesDB: true,
              name: "Living Room",
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250414Cat2.png", true),
              },
              href: "https://www.beliani.ch/living-room-furniture/",
            },
            {
              isCategoriesDB: true,
              name: "Dining Room ",
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250414Cat3.png", true),
              },
              href: "https://www.beliani.ch/dining-room-furniture/",
            },
            {
              isCategoriesDB: true,
              name: "Bedroom",
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250414Cat4.png", true),
              },
              href: "https://www.beliani.ch/bedroom-furniture/",
            },
            {
              isCategoriesDB: true,
              name: "Hallway ",
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250414Cat5.png", true),
              },
              href: "https://www.beliani.ch/hallway/",
            },
            {
              isCategoriesDB: true,
              name: "Bathroom",
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250414Cat6.png", true),
              },
              href: "https://www.beliani.ch/bathroom-furniture/",
            },
            {
              isCategoriesDB: true,
              name: "Kids ",
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250414Cat7.png", true),
              },
              href: "https://www.beliani.ch/children-room/",
            },
            {
              isCategoriesDB: true,
              name: "Office",
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250414Cat8.png", true),
              },
              href: "https://www.beliani.ch/office-furniture/",
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-04-14",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250303_01.png", true),
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-04-14",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250414_gif.gif", true),
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
                value: getImageUrl("20250403b.png", true),
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              tableName: "14.04.25 - March Peak reminder!",
              tableRange: "12",
              name: "intro",
            },
            {
              tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              tableName: "14.04.25 - March Peak reminder!",
              tableRange: "10",
              name: "tit",
            },
            {
              tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              tableName: "14.04.25 - March Peak reminder!",
              tableRange: "21",
              name: "cta",
            },
            {
              tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              tableName: "14.04.25 - March Peak reminder!",
              tableRange: "25:26",
              name: "condition",
            },
            {
              tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              tableName: "14.04.25 - March Peak reminder!",
              tableRange: "13:20",
              name: "category",
            },
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
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
        isArchive: true,
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
                    id: origin.includes("HU") ? "306283" : "231605", //id: "306283",
                    src: origin.includes("HU") ? getImageUrl("20250407Category11.png", true) : getImageUrl("20250407huCategory11.png", true),
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
                    id: origin.includes("HU") ? "306283" : "231605", //id: "306283",
                    src: origin.includes("HU") ? getImageUrl("20250407Category11.png", true) : getImageUrl("20250407huCategory11.png", true),
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
      new entities.Campaign({
        date: "2025.03.31",
        issueCardId: "347548",
        name: "Free picnic blanket",
        startId: "31985",
        figmaUrl: "https://www.figma.com/design/68HlN7mNSJbis5cCSv0STr/2025.03.31---Newsletter---Free-picnic-blanket-(Copy)?node-id=8001-3604&p=f&t=SFSV70dWPMFhyYW0-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
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
                name: "Sofas",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250331Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/?sort=newest",
                products: [
                  {
                    id: "465437",
                    src: getImageUrl("20250331Category11.png", true),
                  },
                  {
                    id: "393959",
                    src: getImageUrl("20250331Category12.png", true),
                  },
                  {
                    id: "368029",
                    src: getImageUrl("20250331Category13.png", true),
                  },
                  {
                    id: "330865",
                    src: getImageUrl("20250331Category14.png", true),
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250331Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/?sort=newest",
                products: [
                  {
                    id: "582048",
                    src: getImageUrl("20250331Category21.png", true),
                  },
                  {
                    id: "338111",
                    src: getImageUrl("20250331Category22.png", true),
                  },
                  {
                    id: "196119",
                    src: getImageUrl("20250331Category23.png", true),
                  },
                  {
                    id: "128772",
                    src: getImageUrl("20250331Category24.png", true),
                  },
                ],
              },
              {
                name: "Beds",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250331Category3.png", true),
                href: "https://www.beliani.ch/garden-accessories/fire-pits/?sort=newest",
                products: [
                  {
                    id: "573785",
                    src: getImageUrl("20250331Category31.png", true),
                  },
                  {
                    id: "526429",
                    src: getImageUrl("20250331Category32.png", true),
                  },
                  {
                    id: "508878",
                    src: getImageUrl("20250331Category33.png", true),
                  },
                  {
                    id: "322972",
                    src: getImageUrl("20250331Category34.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250331Category4.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/?sort=newest",
                products: [
                  {
                    id: "517828",
                    src: getImageUrl("20250331Category41.png", true),
                  },
                  {
                    id: "586120",
                    src: getImageUrl("20250331Category42.png", true),
                  },
                  {
                    id: "414452",
                    src: getImageUrl("20250331Category43.png", true),
                  },
                  {
                    id: "259633",
                    src: getImageUrl("20250331Category44.png", true),
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
                  value: "content/lp25-03-31",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value: getImageUrl("20250331_01.png", true),
                },
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
                value: getImageUrl("20250331_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-24",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250324b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-21",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250321b.png", true),
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
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "24:28",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "31",
                name: "ChooseFrom",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "33:34",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "39:42",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "43",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "30",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "28",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "35:38",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "49:51",
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
                      id: "564537",
                      src: getImageUrl("20250331Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "568836",
                      src: getImageUrl("20250331Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "564575",
                      src: getImageUrl("20250331Freebie3.png", true),
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
                      id: "564499",
                      src: getImageUrl("20250331Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "564422",
                      src: getImageUrl("20250331Freebie5.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "564442",
                      src: getImageUrl("20250331Freebie6.png", true),
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
            template: templates.mondayRegularNslt,
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
                name: "Sofas",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250331Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/?sort=newest",
                products: [
                  {
                    id: "465437",
                    src: getImageUrl("20250331Category11.png", true),
                  },
                  {
                    id: "393959",
                    src: getImageUrl("20250331Category12.png", true),
                  },
                  {
                    id: "368029",
                    src: getImageUrl("20250331Category13.png", true),
                  },
                  {
                    id: "330865",
                    src: getImageUrl("20250331Category14.png", true),
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250331Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/?sort=newest",
                products: [
                  {
                    id: "582048",
                    src: getImageUrl("20250331Category21.png", true),
                  },
                  {
                    id: "338111",
                    src: getImageUrl("20250331Category22.png", true),
                  },
                  {
                    id: "196119",
                    src: getImageUrl("20250331Category23.png", true),
                  },
                  {
                    id: "128772",
                    src: getImageUrl("20250331Category24.png", true),
                  },
                ],
              },
              {
                name: "Beds",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250331Category3.png", true),
                href: "https://www.beliani.ch/garden-accessories/fire-pits/?sort=newest",
                products: [
                  {
                    id: "573785",
                    src: getImageUrl("20250331Category31.png", true),
                  },
                  {
                    id: "526429",
                    src: getImageUrl("20250331Category32.png", true),
                  },
                  {
                    id: "508878",
                    src: getImageUrl("20250331Category33.png", true),
                  },
                  {
                    id: "322972",
                    src: getImageUrl("20250331Category34.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250331Category4.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/?sort=newest",
                products: [
                  {
                    id: "517828",
                    src: getImageUrl("20250331Category41.png", true),
                  },
                  {
                    id: "586120",
                    src: getImageUrl("20250331Category42.png", true),
                  },
                  {
                    id: "414452",
                    src: getImageUrl("20250331Category43.png", true),
                  },
                  {
                    id: "259633",
                    src: getImageUrl("20250331Category44.png", true),
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
                  value: "content/lp25-03-31",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250331_01.png", true),
                },
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
                value: getImageUrl("20250331_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-24",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250324b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-21",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250321b.png", true),
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
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "24:27",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "21:22",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "33:34",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "39:42",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "43",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "30",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "28",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "35:38",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 31.03.25 - Free picnic blanket!",
                tableRange: "49:51",
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
                      id: "564537",
                      src: getImageUrl("20250331Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "568836",
                      src: getImageUrl("20250331Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "564575",
                      src: getImageUrl("20250331Freebie3.png", true),
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
                      id: "564499",
                      src: getImageUrl("20250331Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "564422",
                      src: getImageUrl("20250331Freebie5.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "564442",
                      src: getImageUrl("20250331Freebie6.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        startId: "30264",
      name: "March Peak reminder outdoor",
      date: "2025.03.24",
      issueCardId: "333992",
      figmaUrl: "https://www.figma.com/design/8GAjaJthNDBZ4lmRYLah23/2025-MarchPeak-(Copy)?t=EtPECgGgl5ApEN30-0",
      optimizeImg: false,
      alarm: {
        isActive: false,
      },
      isArchive: true,
      templates: [
        {
          name: "Newsletter",
          type: types.NEWSLETTER,
          template: templates.mondayOfferLines,
          background: "#FFCCB7",
          wrapper: types.WRAPPER,
          css: types.CSS.NS,
          intro: {
            background: "#FFCCB7",
            align: "center",
          },
          categories: [
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat1.png", true),
              },
              href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat2.png", true),
              },
              href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat3.png", true),
              },
              href: "https://www.beliani.ch/outdoor-furniture/sun-loungers/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat4.png", true),
              },
              href: "https://www.beliani.ch/outdoor-furniture/garden-benches/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat5.png", true),
              },
              href: "https://www.beliani.ch/outdoor-furniture/patio-daybeds/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat6.png", true),
              },
              href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat7.png", true),
              },
              href: "https://www.beliani.ch/outdoor-furniture/swings/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat8.png", true),
              },
              href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat9.png", true),
              },
              href: "https://www.beliani.ch/garden-accessories/pots-and-planters/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat10.png", true),
              },
              href: "https://www.beliani.ch/garden-accessories/fire-pits/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat11.png", true),
              },
              href: "https://www.beliani.ch/garden-furniture/parasols/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat12.png", true),
              },
              href: "https://www.beliani.ch/garden-furniture/garden-rugs/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat13.png", true),
              },
              href: "https://www.beliani.ch/garden-furniture/outdoor-textiles/ ",
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-03-24",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250303_01.png", true),
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-03-24",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("202503024_gif.gif", true),
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-03-20",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250320b.png", true),
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-03-13",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250313b.png", true),
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              tableName: "03.03.25 - March Peak Start!",
              tableRange: "18",
              name: "intro",
            },
            {
              tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              tableName: "03.03.25 - March Peak Start!",
              tableRange: "63",
              name: "cta",
            },
            {
              tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              tableName: "03.03.25 - March Peak Start!",
              tableRange: "67:68",
              name: "condition",
            },
            {
              tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              tableName: "03.03.25 - March Peak Start!",
              tableRange: "19:45",
              name: "category",
            },
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
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
        },
        {
          name: "Landing",
          type: types.LANDINGPAGE,
          template: templates.mondayOfferLines,
          background: "#FFCCB7",
          css: types.CSS.LP,
          intro: {
            background: "#FFCCB7",
            align: "center",
          },
          categories: [
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat1.png", true),
              },
              href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat2.png", true),
              },
              href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat3.png", true),
              },
              href: "https://www.beliani.ch/outdoor-furniture/sun-loungers/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat4.png", true),
              },
              href: "https://www.beliani.ch/outdoor-furniture/garden-benches/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat5.png", true),
              },
              href: "https://www.beliani.ch/outdoor-furniture/patio-daybeds/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat6.png", true),
              },
              href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat7.png", true),
              },
              href: "https://www.beliani.ch/outdoor-furniture/swings/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat8.png", true),
              },
              href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat9.png", true),
              },
              href: "https://www.beliani.ch/garden-accessories/pots-and-planters/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat10.png", true),
              },
              href: "https://www.beliani.ch/garden-accessories/fire-pits/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat11.png", true),
              },
              href: "https://www.beliani.ch/garden-furniture/parasols/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat12.png", true),
              },
              href: "https://www.beliani.ch/garden-furniture/garden-rugs/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250324Cat13.png", true),
              },
              href: "https://www.beliani.ch/garden-furniture/outdoor-textiles/ ",
            },
          ],
          links: [
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-03-24",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250303_01.png", true),
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-03-24",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("202503024_gif.gif", true),
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-03-20",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250320b.png", true),
              },
            },
            {
              query: true,
              href: {
                type: "relation",
                relyOn: "origin",
                placeholderPosition: "0",
                value: "content/lp25-03-13",
              },
            },
            {
              src: {
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "38",
                value: getImageUrl("20250313b.png", true),
              },
            },
          ],
          tableQueries: [
            {
              tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              tableName: "03.03.25 - March Peak Start!",
              tableRange: "18",
              name: "intro",
            },
            {
              tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              tableName: "03.03.25 - March Peak Start!",
              tableRange: "16",
              name: "tit",
            },
            {
              tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              tableName: "03.03.25 - March Peak Start!",
              tableRange: "63",
              name: "cta",
            },
            {
              tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              tableName: "03.03.25 - March Peak Start!",
              tableRange: "67:68",
              name: "condition",
            },
            {
              tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
              tableName: "03.03.25 - March Peak Start!",
              tableRange: "19:45",
              name: "category",
            },
            {
              tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
              tableName: "Templates",
              tableRange: "?majorDimension=COLUMNS",
              name: "templates",
              tableColumns: false,
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
        },
      ],
      }),
      new entities.Campaign({
        date: "2025.03.17",
        issueCardId: "344481",
        name: "Free gift",
        startId: "31472",
        figmaUrl: "https://www.figma.com/design/d2XPbTDDNIt82s3guRFQJp/2025.03.17---Newsletter---Free-gift-(Copy)?t=BlBdPm1wSLDVexuy-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#F6E7E6",
              color: "#000000",
            },
            categories: [
              {
                name: "Sofas",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250317Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/?sort=newest",
                products: [
                  {
                    id: "566687",
                    src: getImageUrl("20250317Category11.png", true),
                  },
                  {
                    id: "569789",
                    src: getImageUrl("20250317Category12.png", true),
                  },
                  {
                    id: "440319",
                    src: getImageUrl("20250317Category13.png", true),
                  },
                  {
                    id: "341074",
                    src: getImageUrl("20250317Category14.png", true),
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250317Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/?sort=newest",
                products: [
                  {
                    id: "564289",
                    src: getImageUrl("20250317Category21.png", true),
                  },
                  {
                    id: "392016",
                    src: getImageUrl("20250317Category22.png", true),
                  },
                  {
                    id: "567546",
                    src: getImageUrl("20250317Category23.png", true),
                  },
                  {
                    id: "402616",
                    src: getImageUrl("20250317Category24.png", true),
                  },
                ],
              },
              {
                name: "Beds",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250317Category3.png", true),
                href: "https://www.beliani.ch/garden-accessories/fire-pits/?sort=newest",
                products: [
                  {
                    id: "514638",
                    src: getImageUrl("20250317Category31.png", true),
                  },
                  {
                    id: "469323",
                    src: getImageUrl("20250317Category32.png", true),
                  },
                  {
                    id: "148274",
                    src: getImageUrl("20250317Category33.png", true),
                  },
                  {
                    id: "341548",
                    src: getImageUrl("20250317Category34.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250317Category4.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/?sort=newest",
                products: [
                  {
                    id: "346247",
                    src: getImageUrl("20250317Category41.png", true),
                  },
                  {
                    id: "261953",
                    src: getImageUrl("20250317Category42.png", true),
                  },
                  {
                    id: "199476",
                    src: getImageUrl("20250317Category43.png", true),
                  },
                  {
                    id: "409469",
                    src: getImageUrl("20250317Category44.png", true),
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
                  value: "content/lp25-03-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250317_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-17",
                },
              },
              {
                value: getImageUrl("20250317_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250307b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250306b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "35:38",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "39",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "46:48",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
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
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "290338",
                      src: getImageUrl("20250317Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "291248",
                      src: getImageUrl("20250317Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "247880",
                      src: getImageUrl("20250317Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "189198",
                      src: getImageUrl("20250317Freebie4.png", true),
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
            template: templates.mondayRegularNslt,
            background: "#FFCCB7",
            css: types.CSS.LP,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#F6E7E6",
              color: "#000000",
            },
            categories: [
              {
                name: "Sofas",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250317Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/?sort=newest",
                products: [
                  {
                    id: "566687",
                    src: getImageUrl("20250317Category11.png", true),
                  },
                  {
                    id: "569789",
                    src: getImageUrl("20250317Category12.png", true),
                  },
                  {
                    id: "440319",
                    src: getImageUrl("20250317Category13.png", true),
                  },
                  {
                    id: "341074",
                    src: getImageUrl("20250317Category14.png", true),
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250317Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/?sort=newest",
                products: [
                  {
                    id: "564289",
                    src: getImageUrl("20250317Category21.png", true),
                  },
                  {
                    id: "392016",
                    src: getImageUrl("20250317Category22.png", true),
                  },
                  {
                    id: "567546",
                    src: getImageUrl("20250317Category23.png", true),
                  },
                  {
                    id: "402616",
                    src: getImageUrl("20250317Category24.png", true),
                  },
                ],
              },
              {
                name: "Beds",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250317Category3.png", true),
                href: "https://www.beliani.ch/garden-accessories/fire-pits/?sort=newest",
                products: [
                  {
                    id: "514638",
                    src: getImageUrl("20250317Category31.png", true),
                  },
                  {
                    id: "469323",
                    src: getImageUrl("20250317Category32.png", true),
                  },
                  {
                    id: "148274",
                    src: getImageUrl("20250317Category33.png", true),
                  },
                  {
                    id: "341548",
                    src: getImageUrl("20250317Category34.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250317Category4.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/?sort=newest",
                products: [
                  {
                    id: "346247",
                    src: getImageUrl("20250317Category41.png", true),
                  },
                  {
                    id: "261953",
                    src: getImageUrl("20250317Category42.png", true),
                  },
                  {
                    id: "199476",
                    src: getImageUrl("20250317Category43.png", true),
                  },
                  {
                    id: "409469",
                    src: getImageUrl("20250317Category44.png", true),
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
                  value: "content/lp25-03-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250317_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-17",
                },
              },
              {
                value: getImageUrl("20250317_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250307b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250306b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "35:38",
                name: "filters",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "39",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.03.25 - Free gift!",
                tableRange: "46:50",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
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
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "290338",
                      src: getImageUrl("20250317Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display: inline-flex;",
                    },
                    {
                      id: "291248",
                      src: getImageUrl("20250317Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display: inline-flex;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "247880",
                      src: getImageUrl("20250317Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display: inline-flex;",
                    },
                    {
                      id: "189198",
                      src: getImageUrl("20250317Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display: inline-flex;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.03.10",
        issueCardId: "338780",
        name: "Free cover",
        startId: "31280",
        figmaUrl: "",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferFreeebies,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FD9000",
              color: "#000000",
            },
            categories: [
              {
                name: "Lounge sets",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250310Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/?sort=newest",
                products: [
                  {
                    id: "574032",
                    src: getImageUrl("20250310Category11.png", true),
                  },
                  {
                    id: "523214",
                    src: getImageUrl("20250310Category12.png", true),
                  },
                  {
                    id: "519685",
                    src: getImageUrl("20250310Category13.png", true),
                  },
                  {
                    id: "573785",
                    src: getImageUrl("20250310Category14.png", true),
                  },
                ],
              },
              {
                name: "Dining sets",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250310Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-chairs/?sort=newest",
                products: [
                  {
                    id: "555717",
                    src: getImageUrl("20250310Category21.png", true),
                  },
                  {
                    id: "523724",
                    src: getImageUrl("20250310Category22.png", true),
                  },
                  {
                    id: "511075",
                    src: getImageUrl("20250310Category23.png", true),
                  },
                  {
                    id: "585356",
                    src: getImageUrl("20250310Category24.png", true),
                  },
                ],
              },
              {
                name: "Fire pits",
                background: "#FD9000",
                color: "#000000",
                src: origin = ["PT","RO"] ? getImageUrl("other20250310Category3.png", true) : getImageUrl("20250310Category3.png", true),
                href: "https://www.beliani.ch/garden-accessories/fire-pits/?sort=newest",
                products: [
                  {
                    id: origin = ["PT","RO"] ? "85075" : "584193",
                    src: origin = ["PT","RO"] ? getImageUrl("other20250310Category31.png", true) : getImageUrl("20250310Category31.png", true),
                  },
                  {
                    id: origin = ["PT","RO"] ? "86988" : "584867",
                    src: origin = ["PT","RO"] ? getImageUrl("other20250310Category32.png", true) : getImageUrl("20250310Category32.png", true),
                  },
                  {
                    id: origin = ["PT","RO"] ? "197884" : "584370",
                    src: origin = ["PT","RO"] ? getImageUrl("other20250310Category33.png", true) : getImageUrl("20250310Category33.png", true),
                  },
                  {
                    id: origin = ["PT","RO"] ? "197909" : "584274",
                    src: origin = ["PT","RO"] ? getImageUrl("other20250310Category34.png", true) : getImageUrl("20250310Category34.png", true),
                  },
                ],
              },
              {
                name: "Outdoor kitchen",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250310Category4.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/?sort=newest",
                products: [
                  {
                    id: "522129",
                    src: getImageUrl("20250310Category41.png", true),
                  },
                  {
                    id: "524199",
                    src: getImageUrl("20250310Category42.png", true),
                  },
                  {
                    id: "526467",
                    src: getImageUrl("20250310Category43.png", true),
                  },
                  {
                    id: "405331",
                    src: getImageUrl("20250310Category44.png", true),
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
                  //value: "content/lp25-03-10",
                  value: origin = ["PT","IT","ES"] ? "content/lp25-03-18" : "content/lp25-03-19",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250310_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-10",
                },
              },
              {
                value: getImageUrl("20250310_gif.gif", true),
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
                    getImageUrl("20250303b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250228b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "38:40",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
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
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "258744",
                      src: getImageUrl("202500310Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                      size: "145 x 110 x 80 cm",
                    },
                    {
                      id: "258740",
                      src: getImageUrl("202500310Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                      size: "160 x 160 x 90 cm",
                    },
                    {
                      id: "258743",
                      src: getImageUrl("202500310Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px;",
                      size: "110 x 100 x 70 cm",
                    },
                  ],
                },
              ],
              items1: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "258741",
                      src: getImageUrl("202500310Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 60px;",
                      size: "150 x 120 x 70 cm",
                    },
                    {
                      id: "258739",
                      src: getImageUrl("202500310Freebie5.png", true),
                      style: "padding-right: 60px; padding-left: 6px;",
                      size: "120 x 90 x 65 cm",
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
            background: "#FFCCB7",
            css: types.CSS.LP,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#FFCCB7",
            },
            intro: {
              background: "#FD9000",
              color: "#000000",
            },
            categories: [
              {
                name: "Lounge sets",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250310Category1.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/?sort=newest",
                products: [
                  {
                    id: "574032",
                    src: getImageUrl("20250310Category11.png", true),
                  },
                  {
                    id: "523214",
                    src: getImageUrl("20250310Category12.png", true),
                  },
                  {
                    id: "519685",
                    src: getImageUrl("20250310Category13.png", true),
                  },
                  {
                    id: "573785",
                    src: getImageUrl("20250310Category14.png", true),
                  },
                ],
              },
              {
                name: "Dining sets",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250310Category2.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/garden-chairs/?sort=newest",
                products: [
                  {
                    id: "555717",
                    src: getImageUrl("20250310Category21.png", true),
                  },
                  {
                    id: "523724",
                    src: getImageUrl("20250310Category22.png", true),
                  },
                  {
                    id: "511075",
                    src: getImageUrl("20250310Category23.png", true),
                  },
                  {
                    id: "585356",
                    src: getImageUrl("20250310Category24.png", true),
                  },
                ],
              },
              {
                name: "Fire pits",
                background: "#FD9000",
                color: "#000000",
                src: origin = ["PT","RO"] ? getImageUrl("other20250310Category3.png", true) : getImageUrl("20250310Category3.png", true),
                href: "https://www.beliani.ch/garden-accessories/fire-pits/?sort=newest",
                products: [
                  {
                    id: origin = ["PT","RO"] ? "85075" : "584193",
                    src: origin = ["PT","RO"] ? getImageUrl("other20250310Category31.png", true) : getImageUrl("20250310Category31.png", true),
                  },
                  {
                    id: origin = ["PT","RO"] ? "86988" : "584867",
                    src: origin = ["PT","RO"] ? getImageUrl("other20250310Category32.png", true) : getImageUrl("20250310Category32.png", true),
                  },
                  {
                    id: origin = ["PT","RO"] ? "197884" : "584370",
                    src: origin = ["PT","RO"] ? getImageUrl("other20250310Category33.png", true) : getImageUrl("20250310Category33.png", true),
                  },
                  {
                    id: origin = ["PT","RO"] ? "197909" : "584274",
                    src: origin = ["PT","RO"] ? getImageUrl("other20250310Category34.png", true) : getImageUrl("20250310Category34.png", true),
                  },
                ],
              },
              {
                name: "Outdoor kitchen",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250310Category4.png", true),
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/?sort=newest",
                products: [
                  {
                    id: "522129",
                    src: getImageUrl("20250310Category41.png", true),
                  },
                  {
                    id: "524199",
                    src: getImageUrl("20250310Category42.png", true),
                  },
                  {
                    id: "526467",
                    src: getImageUrl("20250310Category43.png", true),
                  },
                  {
                    id: "405331",
                    src: getImageUrl("20250310Category44.png", true),
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
                  value: "content/lp25-03-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250310_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-10",
                },
              },
              {
                value: getImageUrl("20250310_gif.gif", true),
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
                    getImageUrl("20250303b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-28",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250228b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 10.03.25 - Free rain cover!",
                tableRange: "38:41",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
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
                background: "#FFCCB7",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "258744",
                      src: getImageUrl("202500310Freebie1.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display: inline-flex;",
                      size: "145 x 110 x 80 cm",
                    },
                    {
                      id: "258740",
                      src: getImageUrl("202500310Freebie2.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display: inline-flex;",
                      size: "160 x 160 x 90 cm",
                    },
                    {
                      id: "258743",
                      src: getImageUrl("202500310Freebie3.png", true),
                      style: "padding-right: 6px; padding-left: 6px; display: inline-flex;",
                      size: "110 x 100 x 70 cm",
                    },
                  ],
                },
              ],
              items1: [
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "258741",
                      src: getImageUrl("202500310Freebie4.png", true),
                      style: "padding-right: 6px; padding-left: 60px; display: inline-flex;",
                      size: "150 x 120 x 70 cm",
                    },
                    {
                      id: "258739",
                      src: getImageUrl("202500310Freebie5.png", true),
                      style: "padding-right: 60px; padding-left: 6px; display: inline-flex;",
                      size: "120 x 90 x 65 cm",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        startId: "30008",
        name: "March Peak Start",
        date: "2025.03.03",
        issueCardId: "333957",
        figmaUrl: "https://www.figma.com/design/8GAjaJthNDBZ4lmRYLah23/2025-MarchPeak-(Copy)?t=EtPECgGgl5ApEN30-0",
        optimizeImg: false,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferLines,
            background: "#FFCCB7",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FFCCB7",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat2.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat3.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat4.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat5.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat6.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat7.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat8.png", true),
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat9.png", true),
                },
                href: "https://www.beliani.ch/lighting/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat10.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat11.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat12.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat13.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
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
                    getImageUrl("20250303_01.png", true),
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
                    getImageUrl("20250303_gif.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-20",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250220b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-13",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250213b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "18",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "63",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "67:68",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "19:45",
                name: "category",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
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
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferLines,
            background: "#FFCCB7",
            css: types.CSS.LP,
            intro: {
              background: "#FFCCB7",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat1.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat2.png", true),
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat3.png", true),
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat4.png", true),
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat5.png", true),
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat6.png", true),
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat7.png", true),
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat8.png", true),
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat9.png", true),
                },
                href: "https://www.beliani.ch/lighting/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat10.png", true),
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat11.png", true),
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat12.png", true),
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250303Cat13.png", true),
                },
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
              },
            ],
            links: [
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
                    getImageUrl("20250303_01.png", true),
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
                    getImageUrl("20250303_gif.gif", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "18",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "63",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "67:68",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "03.03.25 - March Peak Start!",
                tableRange: "19:45",
                name: "category",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
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
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.02.24",
        issueCardId: "338780",
        name: "Free table lamp",
        startId: "30653",
        figmaUrl: "",
        alarm: {
          isActive: false,
        },
        isArchive: true,
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
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Beds",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250224Category1.png", true),
                href: "https://www.beliani.ch/children-room/kids-beds/",
                products: [
                  {
                    id: "570248",
                    src: getImageUrl("20250224Category11.png", true),
                  },
                  {
                    id: "560617",
                    src: getImageUrl("20250224Category12.png", true),
                  },
                  {
                    id: "553500",
                    src: getImageUrl("20250224Category13.png", true),
                  },
                  {
                    id: "494188",
                    src: getImageUrl("20250224Category14.png", true),
                  },
                ],
              },
              {
                name: "Storage",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250224Category2.png", true),
                href: "https://www.beliani.ch/children-room/kids-storage/",
                products: [
                  {
                    id: "575287",
                    src: getImageUrl("20250224Category21.png", true),
                  },
                  {
                    id: "571428",
                    src: getImageUrl("20250224Category22.png", true),
                  },
                  {
                    id: "525454",
                    src: getImageUrl("20250224Category23.png", true),
                  },
                  {
                    id: "574696",
                    src: getImageUrl("20250224Category24.png", true),
                  },
                ],
              },
              {
                name: "Chairs and tables",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250224Category3.png", true),
                href: "https://www.beliani.ch/children-room/kids-chairs/",
                products: [
                  {
                    id: "571941",
                    src: getImageUrl("20250224Category31.png", true),
                  },
                  {
                    id: "574110",
                    src: getImageUrl("20250224Category32.png", true),
                  },
                  {
                    id: "580048",
                    src: getImageUrl("20250224Category33.png", true),
                  },
                  {
                    id: "522357",
                    src: getImageUrl("20250224Category34.png", true),
                  },
                ],
              },
              {
                name: "Decor",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250224Category4.png", true),
                href: "https://www.beliani.ch/children-room/kids-decor/",
                products: [
                  {
                    id: "563320",
                    src: getImageUrl("20250224Category41.png", true),
                  },
                  {
                    id: "346059",
                    src: getImageUrl("20250224Category42.png", true),
                  },
                  {
                    id: "438813",
                    src: getImageUrl("20250224Category43.png", true),
                  },
                  {
                    id: "367235",
                    src: getImageUrl("20250224Category44.png", true),
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
                  value: "content/lp25-02-24",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250224_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-24",
                },
              },
              {
                value: getImageUrl("20250224_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-13",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250213b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-12",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250212b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "38:40",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
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
                      id: "358561",
                      src: getImageUrl("202500224Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "356263",
                      src: getImageUrl("202500224Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "337836",
                      src: getImageUrl("202500224Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
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
                      id: "337874",
                      src: getImageUrl("202500224Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "315163",
                      src: getImageUrl("202500224Freebie5.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "406189",
                      src: getImageUrl("202500224Freebie6.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
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
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Beds",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250224Category1.png", true),
                href: "https://www.beliani.ch/children-room/kids-beds/",
                products: [
                  {
                    id: "570248",
                    src: getImageUrl("20250224Category11.png", true),
                  },
                  {
                    id: "560617",
                    src: getImageUrl("20250224Category12.png", true),
                  },
                  {
                    id: "553500",
                    src: getImageUrl("20250224Category13.png", true),
                  },
                  {
                    id: "494188",
                    src: getImageUrl("20250224Category14.png", true),
                  },
                ],
              },
              {
                name: "Storage",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250224Category2.png", true),
                href: "https://www.beliani.ch/children-room/kids-storage/",
                products: [
                  {
                    id: "575287",
                    src: getImageUrl("20250224Category21.png", true),
                  },
                  {
                    id: "571428",
                    src: getImageUrl("20250224Category22.png", true),
                  },
                  {
                    id: "525454",
                    src: getImageUrl("20250224Category23.png", true),
                  },
                  {
                    id: "574696",
                    src: getImageUrl("20250224Category24.png", true),
                  },
                ],
              },
              {
                name: "Chairs and tables",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250224Category3.png", true),
                href: "https://www.beliani.ch/children-room/kids-chairs/",
                products: [
                  {
                    id: "571941",
                    src: getImageUrl("20250224Category31.png", true),
                  },
                  {
                    id: "574110",
                    src: getImageUrl("20250224Category32.png", true),
                  },
                  {
                    id: "580048",
                    src: getImageUrl("20250224Category33.png", true),
                  },
                  {
                    id: "522357",
                    src: getImageUrl("20250224Category34.png", true),
                  },
                ],
              },
              {
                name: "Decor",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250224Category4.png", true),
                href: "https://www.beliani.ch/children-room/kids-decor/",
                products: [
                  {
                    id: "563320",
                    src: getImageUrl("20250224Category41.png", true),
                  },
                  {
                    id: "346059",
                    src: getImageUrl("20250224Category42.png", true),
                  },
                  {
                    id: "438813",
                    src: getImageUrl("20250224Category43.png", true),
                  },
                  {
                    id: "367235",
                    src: getImageUrl("20250224Category44.png", true),
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
                  value: "content/lp25-02-24",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250224_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-24",
                },
              },
              {
                value: getImageUrl("20250224_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-13",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250213b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-12",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250212b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "20:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 24.02.25 - Free table lamp!",
                tableRange: "38:41",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
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
                      id: "358561",
                      src: getImageUrl("202500224Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "356263",
                      src: getImageUrl("202500224Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "337836",
                      src: getImageUrl("202500224Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
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
                      id: "337874",
                      src: getImageUrl("202500224Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "315163",
                      src: getImageUrl("202500224Freebie5.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "406189",
                      src: getImageUrl("202500224Freebie6.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        startId: "31070",
        name: "Gardenshopopening",
        date: "2025.02.19",
        issueCardId: "323851",
        figmaUrl: "https://www.figma.com/design/nF95r6ICvR9kgwWrYJrQ5w/2025.02.19-Garden-shop-opening-(Copy)?node-id=0-1&p=f&t=Uklzgdb5sEKg4tN3-0",
        optimizeImg: false,
        alarm: {
          isActive: false,
        },
        isArchive: true,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferLines,
            background: "#FFF4E6",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            intro: {
              background: "#FFF4E6",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category1.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category2.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category3.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/sun-loungers/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category4.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/garden-benches/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category5.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/patio-daybeds/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category6.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category7.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/swings/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category8.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category9.png", true),
                },
                href: "https://www.beliani.ch/garden-accessories/pots-and-planters/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category10.png", true),
                },
                href: "https://www.beliani.ch/garden-accessories/fire-pits/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category11.png", true),
                },
                href: "https://www.beliani.ch/garden-accessories/patio-heaters/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category12.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/parasols/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category13.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/garden-rugs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category14.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-textiles/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-19",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-19",
                },
              },
              {
                src: {
                  type: "relation",
                  value:
                    getImageUrl("20250219GIF.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-12",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250212b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250207b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "19.02.25-Garden shop opening!",
                tableRange: "12",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "19.02.25-Garden shop opening!",
                tableRange: "28",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "19.02.25-Garden shop opening!",
                tableRange: "32:33",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "19.02.25-Garden shop opening!",
                tableRange: "13:26",
                name: "category",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
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
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferLines,
            background: "#FFF4E6",
            css: types.CSS.LP,
            intro: {
              background: "#FFF4E6",
              align: "center",
            },
            categories: [
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category1.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category2.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category3.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/sun-loungers/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category4.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/garden-benches/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category5.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/patio-daybeds/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category6.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category7.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/swings/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category8.png", true),
                },
                href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category9.png", true),
                },
                href: "https://www.beliani.ch/garden-accessories/pots-and-planters/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category10.png", true),
                },
                href: "https://www.beliani.ch/garden-accessories/fire-pits/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category11.png", true),
                },
                href: "https://www.beliani.ch/garden-accessories/patio-heaters/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category12.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/parasols/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category13.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/garden-rugs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219Category14.png", true),
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-textiles/",
              },
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-19",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250219_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-19",
                },
              },
              {
                src: {
                  type: "relation",
                  value:
                    getImageUrl("20250219GIF.gif", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-12",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250212b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250207b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "19.02.25-Garden shop opening!",
                tableRange: "12",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "19.02.25-Garden shop opening!",
                tableRange: "28",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "19.02.25-Garden shop opening!",
                tableRange: "32:33",
                name: "condition",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "19.02.25-Garden shop opening!",
                tableRange: "13:26",
                name: "category",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
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
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.02.17",
        issueCardId: "337508",
        name: "Newsletter Mix & match",
        startId: "30621",
        figmaUrl: "https://www.figma.com/design/5mpqATyBA5uPWx8OqNRgvx/2025.02.17--Mix-%26-match-(Copy)?t=0hWOrao9GwzCv6Pn-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
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
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Sofas",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250217Category1.png", true),
                href: "https://www.beliani.ch/sofas/",
                products: [
                  {
                    id: "306304",
                    src: getImageUrl("20250217Category11.png", true),
                  },
                  {
                    id: "372692",
                    src: getImageUrl("20250217Category12.png", true),
                  },
                  {
                    id: "129456",
                    src: getImageUrl("20250217Category13.png", true),
                  },
                  {
                    id: "561262",
                    src: getImageUrl("20250217Category14.png", true),
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250217Category2.png", true),
                href: "https://www.beliani.ch/armchairs/",
                products: [
                  {
                    id: "201302",
                    src: getImageUrl("20250217Category21.png", true),
                  },
                  {
                    id: "410138",
                    src: getImageUrl("20250217Category22.png", true),
                  },
                  {
                    id: "383583",
                    src: getImageUrl("20250217Category23.png", true),
                  },
                  {
                    id: "392053",
                    src: getImageUrl("20250217Category24.png", true),
                  },
                ],
              },
              {
                name: "Scatter cushions",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250217Category3.png", true),
                href: "https://www.beliani.ch/accessories-decor/home-scatter-cushions/",
                products: [
                  {
                    id: "328593",
                    src: getImageUrl("20250217Category31.png", true),
                  },
                  {
                    id: "348602",
                    src: getImageUrl("20250217Category32.png", true),
                  },
                  {
                    id: "381698",
                    src: getImageUrl("20250217Category33.png", true),
                  },
                  {
                    id: "204409",
                    src: getImageUrl("20250217Category34.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250217Category4.png", true),
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
                products: [
                  {
                    id: "523725",
                    src: getImageUrl("20250217Category41.png", true),
                  },
                  {
                    id: "562922",
                    src: getImageUrl("20250217Category42.png", true),
                    name: "ALZIRA/UTIEL",
                  },
                  {
                    id: "527250",
                    src: getImageUrl("20250217Category43.png", true),
                  },
                  {
                    id: "437677",
                    src: getImageUrl("20250217Category44.png", true),
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
                  value: "content/lp25-02-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250217_01.png", true),
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
                value: getImageUrl("20250217GIF.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250207b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250206b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "20:23",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "28:29",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "34",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "25",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "23",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "30:33",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "37:39",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
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
                    col: 2,
                  },
                  products: [
                    {
                      id: "195998",
                      src: getImageUrl("20250217Freebies1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "119655",
                      src: getImageUrl("20250217Freebies2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "194769",
                      src: getImageUrl("20250217Freebies3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "194763",
                      src: getImageUrl("20250217Freebies4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
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
            intro: {
              background: "#FFCCB7",
              color: "#000000",
            },
            categories: [
              {
                name: "Sofas",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250217Category1.png", true),
                href: "https://www.beliani.ch/sofas/",
                products: [
                  {
                    id: "306304",
                    src: getImageUrl("20250217Category11.png", true),
                  },
                  {
                    id: "372692",
                    src: getImageUrl("20250217Category12.png", true),
                  },
                  {
                    id: "129456",
                    src: getImageUrl("20250217Category13.png", true),
                  },
                  {
                    id: "561262",
                    src: getImageUrl("20250217Category14.png", true),
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250217Category2.png", true),
                href: "https://www.beliani.ch/armchairs/",
                products: [
                  {
                    id: "201302",
                    src: getImageUrl("20250217Category21.png", true),
                  },
                  {
                    id: "410138",
                    src: getImageUrl("20250217Category22.png", true),
                  },
                  {
                    id: "383583",
                    src: getImageUrl("20250217Category23.png", true),
                  },
                  {
                    id: "392053",
                    src: getImageUrl("20250217Category24.png", true),
                  },
                ],
              },
              {
                name: "Scatter cushions",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250217Category3.png", true),
                href: "https://www.beliani.ch/accessories-decor/home-scatter-cushions/",
                products: [
                  {
                    id: "328593",
                    src: getImageUrl("20250217Category31.png", true),
                  },
                  {
                    id: "348602",
                    src: getImageUrl("20250217Category32.png", true),
                  },
                  {
                    id: "381698",
                    src: getImageUrl("20250217Category33.png", true),
                  },
                  {
                    id: "204409",
                    src: getImageUrl("20250217Category34.png", true),
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FD9000",
                color: "#000000",
                src: getImageUrl("20250217Category4.png", true),
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
                products: [
                  {
                    id: "523725",
                    src: getImageUrl("20250217Category41.png", true),
                  },
                  {
                    id: "562922",
                    src: getImageUrl("20250217Category42.png", true),
                    name: "ALZIRA/UTIEL",
                  },
                  {
                    id: "527250",
                    src: getImageUrl("20250217Category43.png", true),
                  },
                  {
                    id: "437677",
                    src: getImageUrl("20250217Category44.png", true),
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
                  value: "content/lp25-02-17",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250217_01.png", true),
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
                value: getImageUrl("20250217GIF.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-07",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250207b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-06",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250206b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "17:18",
                name: "tit",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "20:23",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "28:29",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "34",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "25",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "23",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "30:33",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 17.02.25-Mix&Match!",
                tableRange: "37:39",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
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
                    col: 2,
                  },
                  products: [
                    {
                      id: "195998",
                      src: getImageUrl("20250217Freebies1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "119655",
                      src: getImageUrl("20250217Freebies2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
                {
                  size: {
                    row: 1,
                    col: 2,
                  },
                  products: [
                    {
                      id: "194769",
                      src: getImageUrl("20250217Freebies3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "194763",
                      src: getImageUrl("20250217Freebies4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.02.10",
        issueCardId: "335604",
        name: "Free bathroom set",
        startId: "30489",
        figmaUrl: "",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferFreeebies,
            background: "#F6E7E6",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#F6E7E6",
            },
            intro: {
              background: "#750000",
              color: "#FFFFFF",
            },
            categories: [
              {
                name: "Baths",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250210Category1.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/bathtubs-hot-tubs/",
                products: [
                  {
                    id: "415278",
                    src: getImageUrl("20250210Category11.png", true),
                  },
                  {
                    id: "59969",
                    src: getImageUrl("20250210Category12.png", true),
                  },
                  {
                    id: "303990",
                    src: getImageUrl("20250210Category13.png", true),
                  },
                  {
                    id: "200441",
                    src: getImageUrl("20250210Category14.png", true),
                  },
                ],
              },
              {
                name: "Showers",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250210Category2.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/showers/",
                products: [
                  {
                    id: "568228",
                    src: getImageUrl("20250210Category21.png", true),
                  },
                  {
                    id: "567335",
                    src: getImageUrl("20250210Category22.png", true),
                  },
                  {
                    id: "231147",
                    src: getImageUrl("20250210Category23.png", true),
                  },
                  {
                    id: "567506",
                    src: getImageUrl("20250210Category24.png", true),
                  },
                ],
              },
              {
                name: "Fittings",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250210Category3.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/bathroom-fittings/",
                products: [
                  {
                    id: "193860",
                    src: getImageUrl("20250210Category31.png", true),
                  },
                  {
                    id: "198082",
                    src: getImageUrl("20250210Category32.png", true),
                  },
                  {
                    id: "198206",
                    src: getImageUrl("20250210Category33.png", true),
                  },
                  {
                    id: "93729",
                    src: getImageUrl("20250210Category34.png", true),
                  },
                ],
              },
              {
                name: "Storage",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250210Category4.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/storage/",
                products: [
                  {
                    id: "571961",
                    src: getImageUrl("20250210Category41.png", true),
                  },
                  {
                    id: "527059",
                    src: getImageUrl("20250210Category42.png", true),
                    name: "ALZIRA/UTIEL",
                  },
                  {
                    id: "257939",
                    src: getImageUrl("20250210Category43.png", true),
                  },
                  {
                    id: "370307",
                    src: getImageUrl("20250210Category44.png", true),
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
                  value: "content/lp25-02-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250210_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-10",
                },
              },
              {
                value: getImageUrl("20250210_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-01-30",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250130b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-01-23",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250123b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "20:23",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "28:29",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "34",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "25",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "23",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "30:33",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "39:41",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
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
                background: "#F6E7E6",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "316613",
                      src: getImageUrl("202500210Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "320593",
                      src: getImageUrl("202500210Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "320574",
                      src: getImageUrl("202500210Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
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
                      id: "320521",
                      src: getImageUrl("202500210Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "320503",
                      src: getImageUrl("202500210Freebie5.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "316805",
                      src: getImageUrl("202500210Freebie6.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
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
            background: "#750000",
            css: types.CSS.LP,
            offerPart: {
              type: "code",
              color: "#000000",
              background: "#F6E7E6",
            },
            intro: {
              background: "#750000",
              color: "#FFFFFF",
            },
            categories: [
              {
                name: "Baths",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250210Category1.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/bathtubs-hot-tubs/",
                products: [
                  {
                    id: "415278",
                    src: getImageUrl("20250210Category11.png", true),
                  },
                  {
                    id: "59969",
                    src: getImageUrl("20250210Category12.png", true),
                  },
                  {
                    id: "303990",
                    src: getImageUrl("20250210Category13.png", true),
                  },
                  {
                    id: "200441",
                    src: getImageUrl("20250210Category14.png", true),
                  },
                ],
              },
              {
                name: "Showers",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250210Category2.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/showers/",
                products: [
                  {
                    id: "568228",
                    src: getImageUrl("20250210Category21.png", true),
                  },
                  {
                    id: "567335",
                    src: getImageUrl("20250210Category22.png", true),
                  },
                  {
                    id: "231147",
                    src: getImageUrl("20250210Category23.png", true),
                  },
                  {
                    id: "567506",
                    src: getImageUrl("20250210Category24.png", true),
                  },
                ],
              },
              {
                name: "Fittings",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250210Category3.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/bathroom-fittings/",
                products: [
                  {
                    id: "193860",
                    src: getImageUrl("20250210Category31.png", true),
                  },
                  {
                    id: "198082",
                    src: getImageUrl("20250210Category32.png", true),
                  },
                  {
                    id: "198206",
                    src: getImageUrl("20250210Category33.png", true),
                  },
                  {
                    id: "93729",
                    src: getImageUrl("20250210Category34.png", true),
                  },
                ],
              },
              {
                name: "Storage",
                background: "#F6E7E6",
                color: "#000000",
                src: getImageUrl("20250210Category4.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/storage/",
                products: [
                  {
                    id: "571961",
                    src: getImageUrl("20250210Category41.png", true),
                  },
                  {
                    id: "527059",
                    src: getImageUrl("20250210Category42.png", true),
                  },
                  {
                    id: "257939",
                    src: getImageUrl("20250210Category43.png", true),
                  },
                  {
                    id: "370307",
                    src: getImageUrl("20250210Category44.png", true),
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
                  value: "content/lp25-02-10",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250210_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-10",
                },
              },
              {
                value: getImageUrl("20250210_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-01-30",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250130b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-01-23",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250123b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "20:23",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "28:29",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "34",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "25",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "23",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "30:33",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 02.10.25 - Free bathroom set!",
                tableRange: "39:41",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
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
                background: "#F6E7E6",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 3,
                  },
                  products: [
                    {
                      id: "316613",
                      src: getImageUrl("202500210Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "320593",
                      src: getImageUrl("202500210Freebie2.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "320574",
                      src: getImageUrl("202500210Freebie3.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
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
                      id: "320521",
                      src: getImageUrl("202500210Freebie4.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "320503",
                      src: getImageUrl("202500210Freebie5.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "316805",
                      src: getImageUrl("202500210Freebie6.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      new entities.Campaign({
        date: "2025.02.03",
        issueCardId: "333236",
        name: "Free bean bag cove",
        startId: "29976",
        figmaUrl: "https://www.figma.com/design/CaysvOMPkrgsrV7nT8a2nG/Newsletter-Free-bean-bag-cover---Monday-2025.02.03_v2?node-id=0-1&p=f&t=clsJLQorJPlZDjaG-0",
        alarm: {
          isActive: false,
        },
        isArchive: true,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferSingleFreeebies,
            background: "#750000",
            wrapper: types.WRAPPER,
            css: types.CSS.NS,
            offerPart: {
              type: "code",
              color: "#FFFFFF",
              background: "#750000",
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
                src: getImageUrl("20250203Category1.png", true),
                href: "https://www.beliani.ch/living-room-furniture/",
                products: [
                  {
                    id: "576282",
                    src: getImageUrl("20250203Category11.png", true),
                  },
                  {
                    id: "571047",
                    src: getImageUrl("20250203Category12.png", true),
                  },
                  {
                    id: "460136",
                    src: getImageUrl("20250203Category13.png", true),
                  },
                  {
                    id: "563149",
                    src: getImageUrl("20250203Category14.png", true),
                  },
                ],
              },
              {
                name: "Bedroom",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250203Category2.png", true),
                href: "https://www.beliani.ch/bedroom-furniture/",
                products: [
                  {
                    id: "565888",
                    src: getImageUrl("20250203Category21.png", true),
                  },
                  {
                    id: "571124",
                    src: getImageUrl("20250203Category22.png", true),
                  },
                  {
                    id: "580448",
                    src: getImageUrl("20250203Category23.png", true),
                  },
                  {
                    id: "419977",
                    src: getImageUrl("20250203Category24.png", true),
                  },
                ],
              },
              {
                name: "Dining room",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250203Category3.png", true),
                href: "https://www.beliani.ch/dining-room-furniture/",
                products: [
                  {
                    id: "563777",
                    src: getImageUrl("20250203Category31.png", true),
                  },
                  {
                    id: "579839",
                    src: getImageUrl("20250203Category32.png", true),
                  },
                  {
                    id: "394733",
                    src: getImageUrl("20250203Category33.png", true),
                  },
                  {
                    id: "311077",
                    src: getImageUrl("20250203Category34.png", true),
                  },
                ],
              },
              {
                name: "Bathroom",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250203Category4.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/",
                products: [
                  {
                    id: "572170",
                    src: getImageUrl("20250203Category41.png", true),
                  },
                  {
                    id: "568020",
                    src: getImageUrl("20250203Category42.png", true),
                  },
                  {
                    id: "561339",
                    src: getImageUrl("20250203Category43.png", true),
                  },
                  {
                    id: "522969",
                    src: getImageUrl("20250203Category44.png", true),
                  },
                ],
              },
              {
                name: "FUZZY",
                type: "one_freebie",
                color: "#ffffff",
                src: getImageUrl("202500203Freebie1.png", true),
                href: "https://www.beliani.ch/bean-bags-eng/bean-bag-covers/",
              }
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250203_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-03",
                },
              },
              {
                value: getImageUrl("20250203_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-01-16",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250116b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-01-15",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250115b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "21:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "24",
                name: "codeCTA",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "40:42",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
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
                color: "#FFFFFF",
                background: "#750000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 1,
                  },
                  products: [
                    {
                      id: "324975",
                      src: getImageUrl("202500203Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Landing",
            type: types.LANDINGPAGE,
            template: templates.mondayOfferSingleFreeebies,
            background: "#750000",
            css: types.CSS.LP,
            offerPart: {
              type: "code",
              color: "#FFFFFF",
              background: "#750000",
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
                src: getImageUrl("20250203Category1.png", true),
                href: "https://www.beliani.ch/living-room-furniture/",
                products: [
                  {
                    id: "576282",
                    src: getImageUrl("20250203Category11.png", true),
                  },
                  {
                    id: "571047",
                    src: getImageUrl("20250203Category12.png", true),
                  },
                  {
                    id: "460136",
                    src: getImageUrl("20250203Category13.png", true),
                  },
                  {
                    id: "563149",
                    src: getImageUrl("20250203Category14.png", true),
                  },
                ],
              },
              {
                name: "Bedroom",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250203Category2.png", true),
                href: "https://www.beliani.ch/bedroom-furniture/",
                products: [
                  {
                    id: "565888",
                    src: getImageUrl("20250203Category21.png", true),
                  },
                  {
                    id: "571124",
                    src: getImageUrl("20250203Category22.png", true),
                  },
                  {
                    id: "580448",
                    src: getImageUrl("20250203Category23.png", true),
                  },
                  {
                    id: "419977",
                    src: getImageUrl("20250203Category24.png", true),
                  },
                ],
              },
              {
                name: "Dining room",
                background: "#FFCCB7",
                color: "#000000",
                src: getImageUrl("20250203Category3.png", true),
                href: "https://www.beliani.ch/dining-room-furniture/",
                products: [
                  {
                    id: "563777",
                    src: getImageUrl("20250203Category31.png", true),
                  },
                  {
                    id: "579839",
                    src: getImageUrl("20250203Category32.png", true),
                  },
                  {
                    id: "394733",
                    src: getImageUrl("20250203Category33.png", true),
                  },
                  {
                    id: "311077",
                    src: getImageUrl("20250203Category34.png", true),
                  },
                ],
              },
              {
                name: "Bathroom",
                background: "#750000",
                color: "#FFFFFF",
                src: getImageUrl("20250203Category4.png", true),
                href: "https://www.beliani.ch/bathroom-furniture/",
                products: [
                  {
                    id: "572170",
                    src: getImageUrl("20250203Category41.png", true),
                  },
                  {
                    id: "568020",
                    src: getImageUrl("20250203Category42.png", true),
                  },
                  {
                    id: "561339",
                    src: getImageUrl("20250203Category43.png", true),
                  },
                  {
                    id: "522969",
                    src: getImageUrl("20250203Category44.png", true),
                  },
                ],
              },
              {
                name: "FUZZY",
                type: "one_freebie",
                color: "#ffffff",
                src: getImageUrl("202500203Freebie1.png", true),
                href: "https://www.beliani.ch/bean-bags-eng/bean-bag-covers/",
              }
            ],
            links: [
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-03",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250203_01.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-02-03",
                },
              },
              {
                value: getImageUrl("20250203_gif.gif", true),
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-01-16",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250116b.png", true),
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-01-15",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "38",
                  value:
                    getImageUrl("20250115b.png", true),
                },
              },
            ],
            tableQueries: [
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "21:24",
                name: "offerPart",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "29:30",
                name: "intro",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "35",
                name: "cta",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "26",
                name: "code",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "31:34",
                name: "categories",
              },
              {
                tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
                tableName: "Voucher - 03.02.25 - Free bean bag!",
                tableRange: "40:42",
                name: "condition",
              },
              {
                tableId: "1nY4WvP88r6uL5f89oc8Xp7wZwuerBnQii_ZIIm7BMBk",
                tableName: "Templates",
                tableRange: "?majorDimension=COLUMNS",
                name: "templates",
                tableColumns: false,
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
                color: "#FFFFFF",
                background: "#750000",
              },
              items: [
                {
                  size: {
                    row: 1,
                    col: 1,
                  },
                  products: [
                    {
                      id: "324975",
                      src: getImageUrl("202500203Freebie1.png", true),
                      style: "padding-right: 10px; padding-left: 10px;",
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