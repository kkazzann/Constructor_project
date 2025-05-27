import { templates } from "../templates/index.js"
import { entities } from "../entities/index.js"
import types from "../utils/types.js"
import getImageUrl from "../utils/getImageUrl.js"

export default new entities.Campaign({
  date: "2025.06.05",
  name: "Living Room",
  issueCardId: 359290,
  startId: 33744,
  figmaUrl:
    "https://www.figma.com/design/Fha1mLYyD3KK5a0HCxZviz/Living-room---2025.06.05?node-id=0-1&p=f&t=vObidotB7l8gcJVc-0",
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
      background: "#FFCCB7",
      wrapper: types.WRAPPER,
      css: types.CSS.NS,
      offerPart: {
        type: "code",
        color: "#000000",
        background: "#FFCCB7",
      },
      inside: {
        color: "#000000",
        background: "#FFCCB7",
      },
      intro: {
        background: "#FFCCB7",
        color: "#000000",
      },
      categories: [
        {
          name: "sofas",
          background: "#FFEBE2",
          color: "#000",
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("250605_cat1.png", true),
          },
          href: "https://www.beliani.ch/living-room-furniture/sofas/",
          products: [],
        },
        {
          name: "armchairs",
          background: "#FFDEB3",
          color: "#000",

          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("250605_cat2.png", true),
          },
          href: "https://www.beliani.ch/living-room-furniture/armchairs/",
          products: [],
        },
        {
          name: "storage",
          background: "#FFEBE2",
          color: "#000",

          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("250605_cat3.png", true),
          },
          href: "https://www.beliani.ch/living-room-furniture/storage/",
          products: [],
        },
        {
          name: "coffee-tables",
          background: "#FFDEB3",
          color: "#000",

          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("250605_cat4.png", true),
          },
          href: "https://www.beliani.ch/tables/coffee-tables/",
          products: [],
        },
        {
          name: "lightning",
          background: "#FFDEB3",
          color: "#000",

          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("250605_cat5.png", true),
          },
          href: "https://www.beliani.ch/living-room-furniture/lighting/",
          products: [],
        },
      ],
      links: [
        // TOP IMAGE TITLE
        // TOP IMAGE TITLE
        // TOP IMAGE TITLE
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-06-05",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("20250605_01.png", true),
          },
        },
        // TOP IMAGE TITLE GIF
        // TOP IMAGE TITLE GIF
        // TOP IMAGE TITLE GIF
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-06-05",
          },
        },
        {
          value: getImageUrl("250605gif_top.gif", true),
        },

        // TIMER
        // TIMER
        // TIMER
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-06-03",
          },
        },

        // BANNER 1
        // BANNER 1
        // BANNER 1
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-05-16", // link href
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("20250516b.png", true), // img src
          },
        },

        // BANNER 2
        // BANNER 2
        // BANNER 2
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-05-15", // link href
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("20250515b.png", true), // img src
          },
        },
      ],
      tableQueries: [
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "05.06.25 - Beliani Birthday Living Room",
          tableRange: "15:15",
          name: "intro",
          fallback: ["Extra 5% off everything"],
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "Voucher - 26.05.25 - Free sun lounger",
          tableRange: "12:13",
          name: "timer",
          fallback: ["Extra 5% off everything"],
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "05.06.25 - Beliani Birthday Living Room",
          tableRange: "16:20",
          name: "category_paragraph",
          fallback: ["Extra 5% off everything"],
        },

        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "05.06.25 - Beliani Birthday Living Room",
          tableRange: "25:26",
          name: "condition",
          fallback: [
            "Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 5% additional discount on your order. The minimum order amount is €250. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 10% additional discount on your order. The minimum order amount is €500. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 15% additional discount on your order. The minimum order amount is €1000. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 20% additional discount on your order. The minimum order amount is €2500. Only one voucher is redeemable per person and order. This voucher cannot be exchanged for cash and you can only use one voucher code per order. This offer is valid till 01.12.2024 or as long as the products are in stock. This voucher cannot be used for pending orders. This offer is not valid for resellers. All items are subject to availability. All prices are subject to change without notification.",
            'If you wish to unsubscribe from the newsletter, you can do so by clicking on the <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Unsubscribe</a> link.',
          ],
        },
      ],
    },
    {
      name: "Landing Page",
      type: types.LANDINGPAGE,
      template: templates.CategoriesRowsOfferPart,
      background: "#FFCCB7",
      wrapper: types.WRAPPER,
      css: types.CSS.LP,
      offerPart: {
        type: "code",
        color: "#000000",
        background: "#FFCCB7",
      },
      inside: {
        color: "#000000",
        background: "#FFCCB7",
      },
      intro: {
        background: "#FFCCB7",
        color: "#000000",
      },
      categories: [
        {
          name: "sofas",
          background: "#FFEBE2",
          color: "#000",
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("250605_cat1.png", true),
          },
          href: "https://www.beliani.ch/living-room-furniture/sofas/",
          products: [],
        },
        {
          name: "armchairs",
          background: "#FFDEB3",
          color: "#000",

          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("250605_cat2.png", true),
          },
          href: "https://www.beliani.ch/living-room-furniture/armchairs/",
          products: [],
        },
        {
          name: "storage",
          background: "#FFEBE2",
          color: "#000",

          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("250605_cat3.png", true),
          },
          href: "https://www.beliani.ch/living-room-furniture/storage/",
          products: [],
        },
        {
          name: "coffee tables",
          background: "#FFDEB3",
          color: "#000",

          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("250605_cat4.png", true),
          },
          href: "https://www.beliani.ch/tables/coffee-tables/",
          products: [],
        },
        {
          name: "lightning",
          background: "#FFDEB3",
          color: "#000",

          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("250605_cat5.png", true),
          },
          href: "https://www.beliani.ch/living-room-furniture/lighting/",
          products: [],
        },
      ],
      links: [
        // TOP IMAGE TITLE
        // TOP IMAGE TITLE
        // TOP IMAGE TITLE
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-06-05",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("20250605_01.png", true),
          },
        },
        // TOP IMAGE TITLE GIF
        // TOP IMAGE TITLE GIF
        // TOP IMAGE TITLE GIF
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-06-05",
          },
        },
        {
          value: getImageUrl("250605gif_top.gif", true),
        },

        // TIMER
        // TIMER
        // TIMER
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-06-03",
          },
        },

        // BANNER 1
        // BANNER 1
        // BANNER 1
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-05-28", // link href
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("20250528b.png", true), // img src
          },
        },

        // BANNER 2
        // BANNER 2
        // BANNER 2
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-05-29", // link href
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("20250529b.png", true), // img src
          },
        },
      ],
      tableQueries: [
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "05.06.25 - Beliani Birthday Living Room",
          tableRange: "15:15",
          name: "intro",
          fallback: ["Extra 5% off everything"],
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "05.06.25 - Beliani Birthday Living Room",
          tableRange: "12:13",
          name: "tit",
          fallback: ["Extra 5% off everything"],
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "Voucher - 26.05.25 - Free sun lounger",
          tableRange: "12:13",
          name: "timer",
          fallback: ["Extra 5% off everything"],
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "05.06.25 - Beliani Birthday Living Room",
          tableRange: "16:20",
          name: "category_paragraph",
          fallback: ["Extra 5% off everything"],
        },

        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "05.06.25 - Beliani Birthday Living Room",
          tableRange: "25:26",
          name: "condition",
          fallback: [
            "Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 5% additional discount on your order. The minimum order amount is €250. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 10% additional discount on your order. The minimum order amount is €500. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 15% additional discount on your order. The minimum order amount is €1000. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 20% additional discount on your order. The minimum order amount is €2500. Only one voucher is redeemable per person and order. This voucher cannot be exchanged for cash and you can only use one voucher code per order. This offer is valid till 01.12.2024 or as long as the products are in stock. This voucher cannot be used for pending orders. This offer is not valid for resellers. All items are subject to availability. All prices are subject to change without notification.",
            'If you wish to unsubscribe from the newsletter, you can do so by clicking on the <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Unsubscribe</a> link.',
          ],
        },
      ],
    },
  ],
})
