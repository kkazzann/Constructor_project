import { newsletter } from "./campaigns/newsletter.js";
import { landing } from "./campaigns/landing.js";
import { wintersaleLP } from "./campaigns/wintersaleLP.js";
import { wintersaleNS } from "./campaigns/wintersaleNS.js";
import { initApp } from "./main/initApp.js";

initApp({
  optimizeImg: true,
  token:
    "ya29.a0AXooCgvOiU0WYxfc9VxX8j7b_LNpgrxCJupmXNkpFjqXH9Mh7Ma-NVr75kljPsk8FZdoKhKwM1g0EXh2zBfkpLItbJf8UEDa1M7nu2Uxs5iYrBMrpDz7Y1PRjS27PH2ixrkGP4GygOexHRSvBPg4S9EVjBTw67t-u-0faCgYKAfcSARMSFQHGX2Miu7SJLawT8r46UFCDe4LLcg0171",
  campaigns: [
    {
      startId: "22555",
      name: "Fathers day",
      templates: [
        {
          name: "Fathers day - Newsletter",
          type: "newsletter",
          template: newsletter,
          links: [
            {
              value: (origin, country) => origin + "content/lp24-04-01",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}240401_01.jpg`,
            },
            {
              value: (origin, country) => origin + "content/lp24-04-01",
              query: true,
            },
            {
              value: () =>
                "https://upload.pictureserver.net/static/2024/240104gif.gif",
            },
            {
              value: (origin, country) => origin + "content/lp24-03-22",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://beliani.info/newsletter/2024/${country}20240322b.png`,
            },
            {
              value: (origin, country) => origin + "content/lp24-03-21",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://beliani.info/newsletter/2024/${country}20240321b.png`,
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "19:23",
              name: "offer",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "24:25",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "26:29",
              name: "category",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "30",
              name: "code",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "33",
              name: "shopNow",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "36",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "38:39",
              name: "condition",
            },
            {
              tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
              tableName: "Categories!",
              tableRange: "A:JW?majorDimension=COLUMNS",
              name: "categories",
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
          name: "Fathers day - Landing",
          type: "landing",
          template: landing,
          links: [
            {
              value: (origin, country) => origin + "content/lp24-04-01",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}240401_01.jpg`,
            },
            {
              value: (origin, country) => origin + "content/lp24-04-01",
              query: true,
            },
            {
              value: () =>
                "https://upload.pictureserver.net/static/2024/240104gif.gif",
            },
            {
              value: (origin, country) => origin + "content/lp24-03-22",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://beliani.info/newsletter/2024/${country}20240322b.png`,
            },
            {
              value: (origin, country) => origin + "content/lp24-03-21",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://beliani.info/newsletter/2024/${country}20240321b.png`,
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "19:23",
              name: "offer",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "24:25",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "26:29",
              name: "category",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "30",
              name: "code",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "33",
              name: "shopNow",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "36",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "38:39",
              name: "condition",
            },
            // {
            //   tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
            //   tableName: "Categories",
            //   tableRange: "A:JW?majorDimension=COLUMNS",
            //   name: "categories",
            //   tableColumns: false,
            // }
          ],
        },
      ],
    },
    {
      startId: "22745",
      name: "Winter Sale",
      templates: [
        {
          name: "Winter Sale - Newsletter",
          type: "newsletter",
          template: wintersaleNS,
          links: [
            {
              value: (origin, country) => origin + "content/lp24-04-01",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}240401_01.jpg`,
            },
            {
              value: (origin, country) => origin + "content/lp24-04-01",
              query: true,
            },
            {
              value: () =>
                "https://upload.pictureserver.net/static/2024/240104gif.gif",
            },
            {
              value: (origin, country) => origin + "content/lp24-03-22",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://beliani.info/newsletter/2024/${country}20240322b.png`,
            },
            {
              value: (origin, country) => origin + "content/lp24-03-21",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://beliani.info/newsletter/2024/${country}20240321b.png`,
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "19:23",
              name: "offer",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "24:25",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "26:29",
              name: "category",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "30",
              name: "code",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "33",
              name: "shopNow",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "36",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "38:39",
              name: "condition",
            },
            {
              tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
              tableName: "Categories!",
              tableRange: "A:JW?majorDimension=COLUMNS",
              name: "categories",
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
          name: "Winter Sale - Landing",
          type: "landing",
          template: wintersaleLP,
          links: [
            {
              value: (origin, country) => origin + "content/lp24-04-01",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}240401_01.jpg`,
            },
            {
              value: (origin, country) => origin + "content/lp24-04-01",
              query: true,
            },
            {
              value: () =>
                "https://upload.pictureserver.net/static/2024/240104gif.gif",
            },
            {
              value: (origin, country) => origin + "content/lp24-03-22",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://beliani.info/newsletter/2024/${country}20240322b.png`,
            },
            {
              value: (origin, country) => origin + "content/lp24-03-21",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://beliani.info/newsletter/2024/${country}20240321b.png`,
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "19:23",
              name: "offer",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "24:25",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "26:29",
              name: "category",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "30",
              name: "code",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "33",
              name: "shopNow",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "36",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "38:39",
              name: "condition",
            },
            // {
            //   tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
            //   tableName: "Categories",
            //   tableRange: "A:JW?majorDimension=COLUMNS",
            //   name: "categories",
            //   tableColumns: false,
            // }
          ],
        },
      ],
    },
  ],
  tableColumns: {
    UK: "F",
    PL: "H",
    DE: "J",
    AT: "L",
    CHDE: "N",
    NL: "P",
    FR: "R",
    CHFR: "T",
    ES: "V",
    PT: "X",
    IT: "Z",
    DK: "AB",
    NO: "AD",
    FI: "AF",
    SE: "AH",
    CZ: "AJ",
    SK: "AL",
    HU: "AN",
  },
});
