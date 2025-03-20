import { templates } from "./templates/index.js";
import { entities } from "./entities/index.js";
import types from "./utils/types.js";
import SHOPS from "./config/shops.js";
import { initApp } from "./main/initApp.js";

try {
  initApp({
    campaigns: [

      new entities.Campaign({
      startId: "30425",
      name: "March Peak reminder",
      date: "2025.04-14",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250414Cat1.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250414Cat2.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250414Cat3.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250414Cat4.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250414Cat5.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250414Cat6.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250414Cat7.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250414Cat8.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250303_01.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250414_gif.gif",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250404b.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250403b.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250414Cat1.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250414Cat2.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250414Cat3.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250414Cat4.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250414Cat5.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250414Cat6.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250414Cat7.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250414Cat8.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250303_01.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250414_gif.gif",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250404b.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250403b.png",
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
              tableName: "03.03.25 - March Peak Start!",
              tableRange: "16",
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
        date: "2025.03.31",
        issueCardId: "347548",
        name: "Free picnic blanket",
        startId: "31985",
        figmaUrl: "https://www.figma.com/design/68HlN7mNSJbis5cCSv0STr/2025.03.31---Newsletter---Free-picnic-blanket-(Copy)?node-id=8001-3604&p=f&t=SFSV70dWPMFhyYW0-0",
        alarm: {
          isActive: false,
        },
        isArchive: false,
        optimizeImg: false,
        templates: [
          {
            name: "Newsletter",
            type: types.NEWSLETTER,
            template: templates.mondayOfferFreeebiesCategoryFilters,
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
                src: "https://upload.pictureserver.net/static/2025/20250331Category1.png",
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/?sort=newest",
                products: [
                  {
                    id: "465437",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category11.png",
                  },
                  {
                    id: "393959",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category12.png",
                  },
                  {
                    id: "368029",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category13.png",
                  },
                  {
                    id: "330865",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category14.png",
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#FD9000",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250331Category2.png",
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/?sort=newest",
                products: [
                  {
                    id: "582048",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category21.png",
                  },
                  {
                    id: "338111",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category22.png",
                  },
                  {
                    id: "196119",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category23.png",
                  },
                  {
                    id: "128772",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category24.png",
                  },
                ],
              },
              {
                name: "Beds",
                background: "#FFCCB7",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250331Category3.png",
                href: "https://www.beliani.ch/garden-accessories/fire-pits/?sort=newest",
                products: [
                  {
                    id: "573785",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category31.png",
                  },
                  {
                    id: "526429",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category32.png",
                  },
                  {
                    id: "508878",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category33.png",
                  },
                  {
                    id: "322972",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category34.png",
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FD9000",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250331Category4.png",
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/?sort=newest",
                products: [
                  {
                    id: "517828",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category41.png",
                  },
                  {
                    id: "586120",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category42.png",
                  },
                  {
                    id: "414452",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category43.png",
                  },
                  {
                    id: "259633",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category44.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250331_01.png",
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
                value:
                  "https://upload.pictureserver.net/static/2025/20250331_gif.gif",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250321b.png",
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-22",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250306b.png",
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
                      src: "https://upload.pictureserver.net/static/2025/20250331Freebie1.png",
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "568836",
                      src: "https://upload.pictureserver.net/static/2025/20250331Freebie2.png",
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "564575",
                      src: "https://upload.pictureserver.net/static/2025/20250331Freebie3.png",
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
                      src: "https://upload.pictureserver.net/static/2025/20250331Freebie4.png",
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "564422",
                      src: "https://upload.pictureserver.net/static/2025/20250331Freebie5.png",
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "564442",
                      src: "https://upload.pictureserver.net/static/2025/20250331Freebie6.png",
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
            template: templates.mondayOfferFreeebiesCategoryFilters,
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
                src: "https://upload.pictureserver.net/static/2025/20250331Category1.png",
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/?sort=newest",
                products: [
                  {
                    id: "465437",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category11.png",
                  },
                  {
                    id: "393959",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category12.png",
                  },
                  {
                    id: "368029",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category13.png",
                  },
                  {
                    id: "330865",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category14.png",
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#FD9000",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250331Category2.png",
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/?sort=newest",
                products: [
                  {
                    id: "582048",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category21.png",
                  },
                  {
                    id: "338111",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category22.png",
                  },
                  {
                    id: "196119",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category23.png",
                  },
                  {
                    id: "128772",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category24.png",
                  },
                ],
              },
              {
                name: "Beds",
                background: "#FFCCB7",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250331Category3.png",
                href: "https://www.beliani.ch/garden-accessories/fire-pits/?sort=newest",
                products: [
                  {
                    id: "573785",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category31.png",
                  },
                  {
                    id: "526429",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category32.png",
                  },
                  {
                    id: "508878",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category33.png",
                  },
                  {
                    id: "322972",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category34.png",
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FD9000",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250331Category4.png",
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/?sort=newest",
                products: [
                  {
                    id: "517828",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category41.png",
                  },
                  {
                    id: "586120",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category42.png",
                  },
                  {
                    id: "414452",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category43.png",
                  },
                  {
                    id: "259633",
                    src: "https://upload.pictureserver.net/static/2025/20250331Category44.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250331_01.png",
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
                value:
                  "https://upload.pictureserver.net/static/2025/20250331_gif.gif",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250321b.png",
                },
              },
              {
                query: true,
                href: {
                  type: "relation",
                  relyOn: "origin",
                  placeholderPosition: "0",
                  value: "content/lp25-03-22",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250306b.png",
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
                      src: "https://upload.pictureserver.net/static/2025/20250331Freebie1.png",
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "568836",
                      src: "https://upload.pictureserver.net/static/2025/20250331Freebie2.png",
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "564575",
                      src: "https://upload.pictureserver.net/static/2025/20250331Freebie3.png",
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
                      src: "https://upload.pictureserver.net/static/2025/20250331Freebie4.png",
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "564422",
                      src: "https://upload.pictureserver.net/static/2025/20250331Freebie5.png",
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "564442",
                      src: "https://upload.pictureserver.net/static/2025/20250331Freebie6.png",
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
      isArchive: false,
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat1.png",
              },
              href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat2.png",
              },
              href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat3.png",
              },
              href: "https://www.beliani.ch/outdoor-furniture/sun-loungers/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat4.png",
              },
              href: "https://www.beliani.ch/outdoor-furniture/garden-benches/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat5.png",
              },
              href: "https://www.beliani.ch/outdoor-furniture/patio-daybeds/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat6.png",
              },
              href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat7.png",
              },
              href: "https://www.beliani.ch/outdoor-furniture/swings/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat8.png",
              },
              href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat9.png",
              },
              href: "https://www.beliani.ch/garden-accessories/pots-and-planters/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat10.png",
              },
              href: "https://www.beliani.ch/garden-accessories/fire-pits/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat11.png",
              },
              href: "https://www.beliani.ch/garden-furniture/parasols/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat12.png",
              },
              href: "https://www.beliani.ch/garden-furniture/garden-rugs/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat13.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250303_01.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/202503024_gif.gif",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250320b.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250313b.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat1.png",
              },
              href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat2.png",
              },
              href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat3.png",
              },
              href: "https://www.beliani.ch/outdoor-furniture/sun-loungers/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat4.png",
              },
              href: "https://www.beliani.ch/outdoor-furniture/garden-benches/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat5.png",
              },
              href: "https://www.beliani.ch/outdoor-furniture/patio-daybeds/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat6.png",
              },
              href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat7.png",
              },
              href: "https://www.beliani.ch/outdoor-furniture/swings/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat8.png",
              },
              href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat9.png",
              },
              href: "https://www.beliani.ch/garden-accessories/pots-and-planters/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat10.png",
              },
              href: "https://www.beliani.ch/garden-accessories/fire-pits/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat11.png",
              },
              href: "https://www.beliani.ch/garden-furniture/parasols/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat12.png",
              },
              href: "https://www.beliani.ch/garden-furniture/garden-rugs/ ",
            },
            {
              isCategoriesDB: true,
              background: "#FFCCB7",
              src:{
                type: "relation",
                relyOn: "slug",
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250324Cat13.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250303_01.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/202503024_gif.gif",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250320b.png",
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
                placeholderPosition: "45",
                value:
                  "https://upload.pictureserver.net/static/2025/20250313b.png",
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
            template: templates.mondayOfferFreeebiesCategoryFilters,
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
                src: "https://upload.pictureserver.net/static/2025/20250317Category1.png",
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/?sort=newest",
                products: [
                  {
                    id: "566687",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category11.png",
                  },
                  {
                    id: "569789",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category12.png",
                  },
                  {
                    id: "440319",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category13.png",
                  },
                  {
                    id: "341074",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category14.png",
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#FFCCB7",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250317Category2.png",
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/?sort=newest",
                products: [
                  {
                    id: "564289",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category21.png",
                  },
                  {
                    id: "392016",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category22.png",
                  },
                  {
                    id: "567546",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category23.png",
                  },
                  {
                    id: "402616",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category24.png",
                  },
                ],
              },
              {
                name: "Beds",
                background: "#F6E7E6",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250317Category3.png",
                href: "https://www.beliani.ch/garden-accessories/fire-pits/?sort=newest",
                products: [
                  {
                    id: "514638",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category31.png",
                  },
                  {
                    id: "469323",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category32.png",
                  },
                  {
                    id: "148274",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category33.png",
                  },
                  {
                    id: "341548",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category34.png",
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FFCCB7",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250317Category4.png",
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/?sort=newest",
                products: [
                  {
                    id: "346247",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category41.png",
                  },
                  {
                    id: "261953",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category42.png",
                  },
                  {
                    id: "199476",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category43.png",
                  },
                  {
                    id: "409469",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category44.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250317_01.png",
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
                value:
                  "https://upload.pictureserver.net/static/2025/20250317_gif.gif",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250307b.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250306b.png",
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
                      src: "https://upload.pictureserver.net/static/2025/20250317Freebie1.png",
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "291248",
                      src: "https://upload.pictureserver.net/static/2025/20250317Freebie2.png",
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
                      src: "https://upload.pictureserver.net/static/2025/20250317Freebie3.png",
                      style: "padding-right: 6px; padding-left: 6px;",
                    },
                    {
                      id: "189198",
                      src: "https://upload.pictureserver.net/static/2025/20250317Freebie4.png",
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
            template: templates.mondayOfferFreeebiesCategoryFilters,
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
                src: "https://upload.pictureserver.net/static/2025/20250317Category1.png",
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/?sort=newest",
                products: [
                  {
                    id: "566687",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category11.png",
                  },
                  {
                    id: "569789",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category12.png",
                  },
                  {
                    id: "440319",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category13.png",
                  },
                  {
                    id: "341074",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category14.png",
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#FFCCB7",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250317Category2.png",
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/?sort=newest",
                products: [
                  {
                    id: "564289",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category21.png",
                  },
                  {
                    id: "392016",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category22.png",
                  },
                  {
                    id: "567546",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category23.png",
                  },
                  {
                    id: "402616",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category24.png",
                  },
                ],
              },
              {
                name: "Beds",
                background: "#F6E7E6",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250317Category3.png",
                href: "https://www.beliani.ch/garden-accessories/fire-pits/?sort=newest",
                products: [
                  {
                    id: "514638",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category31.png",
                  },
                  {
                    id: "469323",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category32.png",
                  },
                  {
                    id: "148274",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category33.png",
                  },
                  {
                    id: "341548",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category34.png",
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FFCCB7",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250317Category4.png",
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/?sort=newest",
                products: [
                  {
                    id: "346247",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category41.png",
                  },
                  {
                    id: "261953",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category42.png",
                  },
                  {
                    id: "199476",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category43.png",
                  },
                  {
                    id: "409469",
                    src: "https://upload.pictureserver.net/static/2025/20250317Category44.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250317_01.png",
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
                value:
                  "https://upload.pictureserver.net/static/2025/20250317_gif.gif",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250307b.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250306b.png",
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
                      src: "https://upload.pictureserver.net/static/2025/20250317Freebie1.png",
                      style: "padding-right: 6px; padding-left: 6px; display: inline-flex;",
                    },
                    {
                      id: "291248",
                      src: "https://upload.pictureserver.net/static/2025/20250317Freebie2.png",
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
                      src: "https://upload.pictureserver.net/static/2025/20250317Freebie3.png",
                      style: "padding-right: 6px; padding-left: 6px; display: inline-flex;",
                    },
                    {
                      id: "189198",
                      src: "https://upload.pictureserver.net/static/2025/20250317Freebie4.png",
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
                src: "https://upload.pictureserver.net/static/2025/20250310Category1.png",
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/?sort=newest",
                products: [
                  {
                    id: "574032",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category11.png",
                  },
                  {
                    id: "523214",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category12.png",
                  },
                  {
                    id: "519685",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category13.png",
                  },
                  {
                    id: "573785",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category14.png",
                  },
                ],
              },
              {
                name: "Dining sets",
                background: "#FFCCB7",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250310Category2.png",
                href: "https://www.beliani.ch/outdoor-furniture/garden-chairs/?sort=newest",
                products: [
                  {
                    id: "555717",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category21.png",
                  },
                  {
                    id: "523724",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category22.png",
                  },
                  {
                    id: "511075",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category23.png",
                  },
                  {
                    id: "585356",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category24.png",
                  },
                ],
              },
              {
                name: "Fire pits",
                background: "#FD9000",
                color: "#000000",
                src: origin = ["PT","RO"] ? "https://upload.pictureserver.net/static/2025/other20250310Category3.png" : "https://upload.pictureserver.net/static/2025/20250310Category3.png",
                href: "https://www.beliani.ch/garden-accessories/fire-pits/?sort=newest",
                products: [
                  {
                    id: origin = ["PT","RO"] ? "85075" : "584193",
                    src: origin = ["PT","RO"] ? "https://upload.pictureserver.net/static/2025/other20250310Category31.png" : "https://upload.pictureserver.net/static/2025/20250310Category31.png",
                  },
                  {
                    id: origin = ["PT","RO"] ? "86988" : "584867",
                    src: origin = ["PT","RO"] ? "https://upload.pictureserver.net/static/2025/other20250310Category32.png" : "https://upload.pictureserver.net/static/2025/20250310Category32.png",
                  },
                  {
                    id: origin = ["PT","RO"] ? "197884" : "584370",
                    src: origin = ["PT","RO"] ? "https://upload.pictureserver.net/static/2025/other20250310Category33.png" : "https://upload.pictureserver.net/static/2025/20250310Category33.png",
                  },
                  {
                    id: origin = ["PT","RO"] ? "197909" : "584274",
                    src: origin = ["PT","RO"] ? "https://upload.pictureserver.net/static/2025/other20250310Category34.png" : "https://upload.pictureserver.net/static/2025/20250310Category34.png",
                  },
                ],
              },
              {
                name: "Outdoor kitchen",
                background: "#FFCCB7",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250310Category4.png",
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/?sort=newest",
                products: [
                  {
                    id: "522129",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category41.png",
                  },
                  {
                    id: "524199",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category42.png",
                  },
                  {
                    id: "526467",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category43.png",
                  },
                  {
                    id: "405331",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category44.png",
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
                  //value: origin = ["PT","IT","ES"] ? "content/lp25-03-18" : "content/lp25-03-19",
                },
              },
              {
                src: {
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250310_01.png",
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
                value:
                  "https://upload.pictureserver.net/static/2025/20250310_gif.gif",
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
                    "https://upload.pictureserver.net/static/2025/20250303b.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250228b.png",
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
                      src: "https://upload.pictureserver.net/static/2025/202500310Freebie1.png",
                      style: "padding-right: 6px; padding-left: 6px;",
                      size: "145 x 110 x 80 cm",
                    },
                    {
                      id: "258740",
                      src: "https://upload.pictureserver.net/static/2025/202500310Freebie2.png",
                      style: "padding-right: 6px; padding-left: 6px;",
                      size: "160 x 160 x 90 cm",
                    },
                    {
                      id: "258743",
                      src: "https://upload.pictureserver.net/static/2025/202500310Freebie3.png",
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
                      src: "https://upload.pictureserver.net/static/2025/202500310Freebie4.png",
                      style: "padding-right: 6px; padding-left: 60px;",
                      size: "150 x 120 x 70 cm",
                    },
                    {
                      id: "258739",
                      src: "https://upload.pictureserver.net/static/2025/202500310Freebie5.png",
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
                src: "https://upload.pictureserver.net/static/2025/20250310Category1.png",
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/?sort=newest",
                products: [
                  {
                    id: "574032",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category11.png",
                  },
                  {
                    id: "523214",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category12.png",
                  },
                  {
                    id: "519685",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category13.png",
                  },
                  {
                    id: "573785",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category14.png",
                  },
                ],
              },
              {
                name: "Dining sets",
                background: "#FFCCB7",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250310Category2.png",
                href: "https://www.beliani.ch/outdoor-furniture/garden-chairs/?sort=newest",
                products: [
                  {
                    id: "555717",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category21.png",
                  },
                  {
                    id: "523724",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category22.png",
                  },
                  {
                    id: "511075",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category23.png",
                  },
                  {
                    id: "585356",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category24.png",
                  },
                ],
              },
              {
                name: "Fire pits",
                background: "#FD9000",
                color: "#000000",
                src: origin = ["PT","RO"] ? "https://upload.pictureserver.net/static/2025/other20250310Category3.png" : "https://upload.pictureserver.net/static/2025/20250310Category3.png",
                href: "https://www.beliani.ch/garden-accessories/fire-pits/?sort=newest",
                products: [
                  {
                    id: origin = ["PT","RO"] ? "85075" : "584193",
                    src: origin = ["PT","RO"] ? "https://upload.pictureserver.net/static/2025/other20250310Category31.png" : "https://upload.pictureserver.net/static/2025/20250310Category31.png",
                  },
                  {
                    id: origin = ["PT","RO"] ? "86988" : "584867",
                    src: origin = ["PT","RO"] ? "https://upload.pictureserver.net/static/2025/other20250310Category32.png" : "https://upload.pictureserver.net/static/2025/20250310Category32.png",
                  },
                  {
                    id: origin = ["PT","RO"] ? "197884" : "584370",
                    src: origin = ["PT","RO"] ? "https://upload.pictureserver.net/static/2025/other20250310Category33.png" : "https://upload.pictureserver.net/static/2025/20250310Category33.png",
                  },
                  {
                    id: origin = ["PT","RO"] ? "197909" : "584274",
                    src: origin = ["PT","RO"] ? "https://upload.pictureserver.net/static/2025/other20250310Category34.png" : "https://upload.pictureserver.net/static/2025/20250310Category34.png",
                  },
                ],
              },
              {
                name: "Outdoor kitchen",
                background: "#FFCCB7",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250310Category4.png",
                href: "https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/?sort=newest",
                products: [
                  {
                    id: "522129",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category41.png",
                  },
                  {
                    id: "524199",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category42.png",
                  },
                  {
                    id: "526467",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category43.png",
                  },
                  {
                    id: "405331",
                    src: "https://upload.pictureserver.net/static/2025/20250310Category44.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250310_01.png",
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
                value:
                  "https://upload.pictureserver.net/static/2025/20250310_gif.gif",
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
                    "https://upload.pictureserver.net/static/2025/20250303b.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250228b.png",
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
                      src: "https://upload.pictureserver.net/static/2025/202500310Freebie1.png",
                      style: "padding-right: 6px; padding-left: 6px; display: inline-flex;",
                      size: "145 x 110 x 80 cm",
                    },
                    {
                      id: "258740",
                      src: "https://upload.pictureserver.net/static/2025/202500310Freebie2.png",
                      style: "padding-right: 6px; padding-left: 6px; display: inline-flex;",
                      size: "160 x 160 x 90 cm",
                    },
                    {
                      id: "258743",
                      src: "https://upload.pictureserver.net/static/2025/202500310Freebie3.png",
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
                      src: "https://upload.pictureserver.net/static/2025/202500310Freebie4.png",
                      style: "padding-right: 6px; padding-left: 60px; display: inline-flex;",
                      size: "150 x 120 x 70 cm",
                    },
                    {
                      id: "258739",
                      src: "https://upload.pictureserver.net/static/2025/202500310Freebie5.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat1.png",
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat2.png",
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat3.png",
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat4.png",
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat5.png",
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat6.png",
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat7.png",
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat8.png",
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat9.png",
                },
                href: "https://www.beliani.ch/lighting/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat10.png",
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat11.png",
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat12.png",
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat13.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303_01.png",
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
                    "https://upload.pictureserver.net/static/2025/20250303_gif.gif",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250220b.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250213b.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat1.png",
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat2.png",
                },
                href: "https://www.beliani.ch/sofas/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat3.png",
                },
                href: "https://www.beliani.ch/beds/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat4.png",
                },
                href: "https://www.beliani.ch/armchairs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat5.png",
                },
                href: "https://www.beliani.ch/chairs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat6.png",
                },
                href: "https://www.beliani.ch/tables/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat7.png",
                },
                href: "https://www.beliani.ch/storage/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat8.png",
                },
                href: "https://www.beliani.ch/textiles/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat9.png",
                },
                href: "https://www.beliani.ch/lighting/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat10.png",
                },
                href: "https://www.beliani.ch/bathtubs-hot-tubs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat11.png",
                },
                href: "https://www.beliani.ch/office-furniture/desks-eng/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat12.png",
                },
                href: "https://www.beliani.ch/rugs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFCCB7",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303Cat13.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250303_01.png",
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
                    "https://upload.pictureserver.net/static/2025/20250303_gif.gif",
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
                src: "https://upload.pictureserver.net/static/2025/20250224Category1.png",
                href: "https://www.beliani.ch/children-room/kids-beds/",
                products: [
                  {
                    id: "570248",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category11.png",
                  },
                  {
                    id: "560617",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category12.png",
                  },
                  {
                    id: "553500",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category13.png",
                  },
                  {
                    id: "494188",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category14.png",
                  },
                ],
              },
              {
                name: "Storage",
                background: "#FD9000",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250224Category2.png",
                href: "https://www.beliani.ch/children-room/kids-storage/",
                products: [
                  {
                    id: "575287",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category21.png",
                  },
                  {
                    id: "571428",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category22.png",
                  },
                  {
                    id: "525454",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category23.png",
                  },
                  {
                    id: "574696",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category24.png",
                  },
                ],
              },
              {
                name: "Chairs and tables",
                background: "#FFCCB7",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250224Category3.png",
                href: "https://www.beliani.ch/children-room/kids-chairs/",
                products: [
                  {
                    id: "571941",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category31.png",
                  },
                  {
                    id: "574110",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category32.png",
                  },
                  {
                    id: "580048",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category33.png",
                  },
                  {
                    id: "522357",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category34.png",
                  },
                ],
              },
              {
                name: "Decor",
                background: "#FD9000",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250224Category4.png",
                href: "https://www.beliani.ch/children-room/kids-decor/",
                products: [
                  {
                    id: "563320",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category41.png",
                  },
                  {
                    id: "346059",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category42.png",
                  },
                  {
                    id: "438813",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category43.png",
                  },
                  {
                    id: "367235",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category44.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250224_01.png",
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
                value:
                  "https://upload.pictureserver.net/static/2025/20250224_gif.gif",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250213b.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250212b.png",
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
                      src: "https://upload.pictureserver.net/static/2025/202500224Freebie1.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "356263",
                      src: "https://upload.pictureserver.net/static/2025/202500224Freebie2.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "337836",
                      src: "https://upload.pictureserver.net/static/2025/202500224Freebie3.png",
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
                      src: "https://upload.pictureserver.net/static/2025/202500224Freebie4.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "315163",
                      src: "https://upload.pictureserver.net/static/2025/202500224Freebie5.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "406189",
                      src: "https://upload.pictureserver.net/static/2025/202500224Freebie6.png",
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
                src: "https://upload.pictureserver.net/static/2025/20250224Category1.png",
                href: "https://www.beliani.ch/children-room/kids-beds/",
                products: [
                  {
                    id: "570248",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category11.png",
                  },
                  {
                    id: "560617",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category12.png",
                  },
                  {
                    id: "553500",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category13.png",
                  },
                  {
                    id: "494188",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category14.png",
                  },
                ],
              },
              {
                name: "Storage",
                background: "#FD9000",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250224Category2.png",
                href: "https://www.beliani.ch/children-room/kids-storage/",
                products: [
                  {
                    id: "575287",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category21.png",
                  },
                  {
                    id: "571428",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category22.png",
                  },
                  {
                    id: "525454",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category23.png",
                  },
                  {
                    id: "574696",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category24.png",
                  },
                ],
              },
              {
                name: "Chairs and tables",
                background: "#FFCCB7",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250224Category3.png",
                href: "https://www.beliani.ch/children-room/kids-chairs/",
                products: [
                  {
                    id: "571941",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category31.png",
                  },
                  {
                    id: "574110",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category32.png",
                  },
                  {
                    id: "580048",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category33.png",
                  },
                  {
                    id: "522357",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category34.png",
                  },
                ],
              },
              {
                name: "Decor",
                background: "#FD9000",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250224Category4.png",
                href: "https://www.beliani.ch/children-room/kids-decor/",
                products: [
                  {
                    id: "563320",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category41.png",
                  },
                  {
                    id: "346059",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category42.png",
                  },
                  {
                    id: "438813",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category43.png",
                  },
                  {
                    id: "367235",
                    src: "https://upload.pictureserver.net/static/2025/20250224Category44.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250224_01.png",
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
                value:
                  "https://upload.pictureserver.net/static/2025/20250224_gif.gif",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250213b.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250212b.png",
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
                      src: "https://upload.pictureserver.net/static/2025/202500224Freebie1.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "356263",
                      src: "https://upload.pictureserver.net/static/2025/202500224Freebie2.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "337836",
                      src: "https://upload.pictureserver.net/static/2025/202500224Freebie3.png",
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
                      src: "https://upload.pictureserver.net/static/2025/202500224Freebie4.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "315163",
                      src: "https://upload.pictureserver.net/static/2025/202500224Freebie5.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "406189",
                      src: "https://upload.pictureserver.net/static/2025/202500224Freebie6.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category1.png",
                },
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category2.png",
                },
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category3.png",
                },
                href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/sun-loungers/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category4.png",
                },
                href: "https://www.beliani.ch/outdoor-furniture/garden-benches/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category5.png",
                },
                href: "https://www.beliani.ch/outdoor-furniture/patio-daybeds/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category6.png",
                },
                href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category7.png",
                },
                href: "https://www.beliani.ch/outdoor-furniture/swings/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category8.png",
                },
                href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category9.png",
                },
                href: "https://www.beliani.ch/garden-accessories/pots-and-planters/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category10.png",
                },
                href: "https://www.beliani.ch/garden-accessories/fire-pits/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category11.png",
                },
                href: "https://www.beliani.ch/garden-accessories/patio-heaters/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category12.png",
                },
                href: "https://www.beliani.ch/garden-furniture/parasols/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category13.png",
                },
                href: "https://www.beliani.ch/garden-furniture/garden-rugs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category14.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219_01.png",
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
                    "https://upload.pictureserver.net/static/2025/20250219GIF.gif",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250212b.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250207b.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category1.png",
                },
                href: "https://www.beliani.ch/outdoor-furniture/lounge-sets",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category2.png",
                },
                href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category3.png",
                },
                href: "https://www.beliani.ch/outdoor-furniture/sun-loungers/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category4.png",
                },
                href: "https://www.beliani.ch/outdoor-furniture/garden-benches/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category5.png",
                },
                href: "https://www.beliani.ch/outdoor-furniture/patio-daybeds/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category6.png",
                },
                href: "https://www.beliani.ch/outdoor-furniture/storage-boxes/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category7.png",
                },
                href: "https://www.beliani.ch/outdoor-furniture/swings/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category8.png",
                },
                href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category9.png",
                },
                href: "https://www.beliani.ch/garden-accessories/pots-and-planters/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category10.png",
                },
                href: "https://www.beliani.ch/garden-accessories/fire-pits/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category11.png",
                },
                href: "https://www.beliani.ch/garden-accessories/patio-heaters/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category12.png",
                },
                href: "https://www.beliani.ch/garden-furniture/parasols/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category13.png",
                },
                href: "https://www.beliani.ch/garden-furniture/garden-rugs/",
              },
              {
                isCategoriesDB: true,
                background: "#FFF4E6",
                src:{
                  type: "relation",
                  relyOn: "slug",
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219Category14.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250219_01.png",
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
                    "https://upload.pictureserver.net/static/2025/20250219GIF.gif",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250212b.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250207b.png",
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
                src: "https://upload.pictureserver.net/static/2025/20250217Category1.png",
                href: "https://www.beliani.ch/sofas/",
                products: [
                  {
                    id: "306304",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category11.png",
                  },
                  {
                    id: "372692",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category12.png",
                  },
                  {
                    id: "129456",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category13.png",
                  },
                  {
                    id: "561262",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category14.png",
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#FD9000",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250217Category2.png",
                href: "https://www.beliani.ch/armchairs/",
                products: [
                  {
                    id: "201302",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category21.png",
                  },
                  {
                    id: "410138",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category22.png",
                  },
                  {
                    id: "383583",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category23.png",
                  },
                  {
                    id: "392053",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category24.png",
                  },
                ],
              },
              {
                name: "Scatter cushions",
                background: "#FFCCB7",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250217Category3.png",
                href: "https://www.beliani.ch/accessories-decor/home-scatter-cushions/",
                products: [
                  {
                    id: "328593",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category31.png",
                  },
                  {
                    id: "348602",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category32.png",
                  },
                  {
                    id: "381698",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category33.png",
                  },
                  {
                    id: "204409",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category34.png",
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FD9000",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250217Category4.png",
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
                products: [
                  {
                    id: "523725",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category41.png",
                  },
                  {
                    id: "562922",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category42.png",
                    name: "ALZIRA/UTIEL",
                  },
                  {
                    id: "527250",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category43.png",
                  },
                  {
                    id: "437677",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category44.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250217_01.png",
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
                value:
                  "https://upload.pictureserver.net/static/2025/20250217GIF.gif",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250207b.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250206b.png",
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
                      src: "https://upload.pictureserver.net/static/2025/20250217Freebies1.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "119655",
                      src: "https://upload.pictureserver.net/static/2025/20250217Freebies2.png",
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
                      src: "https://upload.pictureserver.net/static/2025/20250217Freebies3.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "194763",
                      src: "https://upload.pictureserver.net/static/2025/20250217Freebies4.png",
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
                src: "https://upload.pictureserver.net/static/2025/20250217Category1.png",
                href: "https://www.beliani.ch/sofas/",
                products: [
                  {
                    id: "306304",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category11.png",
                  },
                  {
                    id: "372692",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category12.png",
                  },
                  {
                    id: "129456",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category13.png",
                  },
                  {
                    id: "561262",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category14.png",
                  },
                ],
              },
              {
                name: "Armchairs",
                background: "#FD9000",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250217Category2.png",
                href: "https://www.beliani.ch/armchairs/",
                products: [
                  {
                    id: "201302",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category21.png",
                  },
                  {
                    id: "410138",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category22.png",
                  },
                  {
                    id: "383583",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category23.png",
                  },
                  {
                    id: "392053",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category24.png",
                  },
                ],
              },
              {
                name: "Scatter cushions",
                background: "#FFCCB7",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250217Category3.png",
                href: "https://www.beliani.ch/accessories-decor/home-scatter-cushions/",
                products: [
                  {
                    id: "328593",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category31.png",
                  },
                  {
                    id: "348602",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category32.png",
                  },
                  {
                    id: "381698",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category33.png",
                  },
                  {
                    id: "204409",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category34.png",
                  },
                ],
              },
              {
                name: "Accessories",
                background: "#FD9000",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250217Category4.png",
                href: "https://www.beliani.ch/home-accessories/accessories-decor/",
                products: [
                  {
                    id: "523725",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category41.png",
                  },
                  {
                    id: "562922",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category42.png",
                    name: "ALZIRA/UTIEL",
                  },
                  {
                    id: "527250",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category43.png",
                  },
                  {
                    id: "437677",
                    src: "https://upload.pictureserver.net/static/2025/20250217Category44.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250217_01.png",
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
                value:
                  "https://upload.pictureserver.net/static/2025/20250217GIF.gif",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250207b.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250206b.png",
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
                      src: "https://upload.pictureserver.net/static/2025/20250217Freebies1.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "119655",
                      src: "https://upload.pictureserver.net/static/2025/20250217Freebies2.png",
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
                      src: "https://upload.pictureserver.net/static/2025/20250217Freebies3.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "194763",
                      src: "https://upload.pictureserver.net/static/2025/20250217Freebies4.png",
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
                src: "https://upload.pictureserver.net/static/2025/20250210Category1.png",
                href: "https://www.beliani.ch/bathroom-furniture/bathtubs-hot-tubs/",
                products: [
                  {
                    id: "415278",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category11.png",
                  },
                  {
                    id: "59969",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category12.png",
                  },
                  {
                    id: "303990",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category13.png",
                  },
                  {
                    id: "200441",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category14.png",
                  },
                ],
              },
              {
                name: "Showers",
                background: "#F6E7E6",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250210Category2.png",
                href: "https://www.beliani.ch/bathroom-furniture/showers/",
                products: [
                  {
                    id: "568228",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category21.png",
                  },
                  {
                    id: "567335",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category22.png",
                  },
                  {
                    id: "231147",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category23.png",
                  },
                  {
                    id: "567506",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category24.png",
                  },
                ],
              },
              {
                name: "Fittings",
                background: "#750000",
                color: "#FFFFFF",
                src: "https://upload.pictureserver.net/static/2025/20250210Category3.png",
                href: "https://www.beliani.ch/bathroom-furniture/bathroom-fittings/",
                products: [
                  {
                    id: "193860",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category31.png",
                  },
                  {
                    id: "198082",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category32.png",
                  },
                  {
                    id: "198206",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category33.png",
                  },
                  {
                    id: "93729",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category34.png",
                  },
                ],
              },
              {
                name: "Storage",
                background: "#F6E7E6",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250210Category4.png",
                href: "https://www.beliani.ch/bathroom-furniture/storage/",
                products: [
                  {
                    id: "571961",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category41.png",
                  },
                  {
                    id: "527059",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category42.png",
                    name: "ALZIRA/UTIEL",
                  },
                  {
                    id: "257939",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category43.png",
                  },
                  {
                    id: "370307",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category44.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250210_01.png",
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
                value:
                  "https://upload.pictureserver.net/static/2025/20250210_gif.gif",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250130b.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250123b.png",
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
                      src: "https://upload.pictureserver.net/static/2025/202500210Freebie1.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "320593",
                      src: "https://upload.pictureserver.net/static/2025/202500210Freebie2.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "320574",
                      src: "https://upload.pictureserver.net/static/2025/202500210Freebie3.png",
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
                      src: "https://upload.pictureserver.net/static/2025/202500210Freebie4.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "320503",
                      src: "https://upload.pictureserver.net/static/2025/202500210Freebie5.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "316805",
                      src: "https://upload.pictureserver.net/static/2025/202500210Freebie6.png",
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
                src: "https://upload.pictureserver.net/static/2025/20250210Category1.png",
                href: "https://www.beliani.ch/bathroom-furniture/bathtubs-hot-tubs/",
                products: [
                  {
                    id: "415278",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category11.png",
                  },
                  {
                    id: "59969",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category12.png",
                  },
                  {
                    id: "303990",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category13.png",
                  },
                  {
                    id: "200441",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category14.png",
                  },
                ],
              },
              {
                name: "Showers",
                background: "#F6E7E6",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250210Category2.png",
                href: "https://www.beliani.ch/bathroom-furniture/showers/",
                products: [
                  {
                    id: "568228",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category21.png",
                  },
                  {
                    id: "567335",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category22.png",
                  },
                  {
                    id: "231147",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category23.png",
                  },
                  {
                    id: "567506",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category24.png",
                  },
                ],
              },
              {
                name: "Fittings",
                background: "#750000",
                color: "#FFFFFF",
                src: "https://upload.pictureserver.net/static/2025/20250210Category3.png",
                href: "https://www.beliani.ch/bathroom-furniture/bathroom-fittings/",
                products: [
                  {
                    id: "193860",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category31.png",
                  },
                  {
                    id: "198082",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category32.png",
                  },
                  {
                    id: "198206",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category33.png",
                  },
                  {
                    id: "93729",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category34.png",
                  },
                ],
              },
              {
                name: "Storage",
                background: "#F6E7E6",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250210Category4.png",
                href: "https://www.beliani.ch/bathroom-furniture/storage/",
                products: [
                  {
                    id: "571961",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category41.png",
                  },
                  {
                    id: "527059",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category42.png",
                  },
                  {
                    id: "257939",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category43.png",
                  },
                  {
                    id: "370307",
                    src: "https://upload.pictureserver.net/static/2025/20250210Category44.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250210_01.png",
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
                value:
                  "https://upload.pictureserver.net/static/2025/20250210_gif.gif",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250130b.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250123b.png",
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
                      src: "https://upload.pictureserver.net/static/2025/202500210Freebie1.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "320593",
                      src: "https://upload.pictureserver.net/static/2025/202500210Freebie2.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "320574",
                      src: "https://upload.pictureserver.net/static/2025/202500210Freebie3.png",
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
                      src: "https://upload.pictureserver.net/static/2025/202500210Freebie4.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "320503",
                      src: "https://upload.pictureserver.net/static/2025/202500210Freebie5.png",
                      style: "padding-right: 10px; padding-left: 10px;",
                    },
                    {
                      id: "316805",
                      src: "https://upload.pictureserver.net/static/2025/202500210Freebie6.png",
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
                src: "https://upload.pictureserver.net/static/2025/20250203Category1.png",
                href: "https://www.beliani.ch/living-room-furniture/",
                products: [
                  {
                    id: "576282",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category11.png",
                  },
                  {
                    id: "571047",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category12.png",
                  },
                  {
                    id: "460136",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category13.png",
                  },
                  {
                    id: "563149",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category14.png",
                  },
                ],
              },
              {
                name: "Bedroom",
                background: "#750000",
                color: "#FFFFFF",
                src: "https://upload.pictureserver.net/static/2025/20250203Category2.png",
                href: "https://www.beliani.ch/bedroom-furniture/",
                products: [
                  {
                    id: "565888",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category21.png",
                  },
                  {
                    id: "571124",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category22.png",
                  },
                  {
                    id: "580448",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category23.png",
                  },
                  {
                    id: "419977",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category24.png",
                  },
                ],
              },
              {
                name: "Dining room",
                background: "#FFCCB7",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250203Category3.png",
                href: "https://www.beliani.ch/dining-room-furniture/",
                products: [
                  {
                    id: "563777",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category31.png",
                  },
                  {
                    id: "579839",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category32.png",
                  },
                  {
                    id: "394733",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category33.png",
                  },
                  {
                    id: "311077",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category34.png",
                  },
                ],
              },
              {
                name: "Bathroom",
                background: "#750000",
                color: "#FFFFFF",
                src: "https://upload.pictureserver.net/static/2025/20250203Category4.png",
                href: "https://www.beliani.ch/bathroom-furniture/",
                products: [
                  {
                    id: "572170",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category41.png",
                  },
                  {
                    id: "568020",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category42.png",
                  },
                  {
                    id: "561339",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category43.png",
                  },
                  {
                    id: "522969",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category44.png",
                  },
                ],
              },
              {
                name: "FUZZY",
                type: "one_freebie",
                color: "#ffffff",
                src: "https://upload.pictureserver.net/static/2025/202500203Freebie1.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250203_01.png",
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
                value:
                  "https://upload.pictureserver.net/static/2025/20250203_gif.gif",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250116b.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250115b.png",
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
                      src: "https://upload.pictureserver.net/static/2025/202500203Freebie1.png",
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
                src: "https://upload.pictureserver.net/static/2025/20250203Category1.png",
                href: "https://www.beliani.ch/living-room-furniture/",
                products: [
                  {
                    id: "576282",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category11.png",
                  },
                  {
                    id: "571047",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category12.png",
                  },
                  {
                    id: "460136",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category13.png",
                  },
                  {
                    id: "563149",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category14.png",
                  },
                ],
              },
              {
                name: "Bedroom",
                background: "#750000",
                color: "#FFFFFF",
                src: "https://upload.pictureserver.net/static/2025/20250203Category2.png",
                href: "https://www.beliani.ch/bedroom-furniture/",
                products: [
                  {
                    id: "565888",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category21.png",
                  },
                  {
                    id: "571124",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category22.png",
                  },
                  {
                    id: "580448",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category23.png",
                  },
                  {
                    id: "419977",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category24.png",
                  },
                ],
              },
              {
                name: "Dining room",
                background: "#FFCCB7",
                color: "#000000",
                src: "https://upload.pictureserver.net/static/2025/20250203Category3.png",
                href: "https://www.beliani.ch/dining-room-furniture/",
                products: [
                  {
                    id: "563777",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category31.png",
                  },
                  {
                    id: "579839",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category32.png",
                  },
                  {
                    id: "394733",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category33.png",
                  },
                  {
                    id: "311077",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category34.png",
                  },
                ],
              },
              {
                name: "Bathroom",
                background: "#750000",
                color: "#FFFFFF",
                src: "https://upload.pictureserver.net/static/2025/20250203Category4.png",
                href: "https://www.beliani.ch/bathroom-furniture/",
                products: [
                  {
                    id: "572170",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category41.png",
                  },
                  {
                    id: "568020",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category42.png",
                  },
                  {
                    id: "561339",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category43.png",
                  },
                  {
                    id: "522969",
                    src: "https://upload.pictureserver.net/static/2025/20250203Category44.png",
                  },
                ],
              },
              {
                name: "FUZZY",
                type: "one_freebie",
                color: "#ffffff",
                src: "https://upload.pictureserver.net/static/2025/202500203Freebie1.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250203_01.png",
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
                value:
                  "https://upload.pictureserver.net/static/2025/20250203_gif.gif",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250116b.png",
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
                  placeholderPosition: "45",
                  value:
                    "https://upload.pictureserver.net/static/2025/20250115b.png",
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
                      src: "https://upload.pictureserver.net/static/2025/202500203Freebie1.png",
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
      server_url: "https://upload.pictureserver.net/static/2024/",
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
