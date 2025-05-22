import { templates } from "../templates/index.js";
import { entities } from "../entities/index.js";
import types from "../utils/types.js";
import getImageUrl from "../utils/getImageUrl.js";

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
          src: getImageUrl("250605_cat1.png", true),
          href: "https://www.beliani.ch/beds/",
          products: [],
        },
        {
          name: "armchairs",
          background: "#FFDEB3",
          color: "#000",
          src: getImageUrl("250605_cat2.png", true),
          href: "https://www.beliani.ch/bedroom-furniture/armchairs/",
          products: [],
        },
        {
          name: "storage",
          background: "#FFEBE2",
          color: "#000",
          src: getImageUrl("250605_cat3.png", true),
          href: "https://www.beliani.ch/storage/",
          products: [],
        },
        {
          name: "coffee-tables",
          background: "#FFDEB3",
          color: "#000",
          src: getImageUrl("250605_cat4.png", true),
          href: "https://www.beliani.ch/home-accessories/",
          products: [],
        },
        {
          name: "lightning",
          background: "#FFDEB3",
          color: "#000",
          src: getImageUrl("250605_cat5.png", true),
          href: "https://www.beliani.ch/home-accessories/",
          products: [],
        },
      ],
      links: [
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

        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-05-26",
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-05-22",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("20250522b.png", true), // probably needs to be changed
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-05-21",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("20250521b.png", true), // probably needs to be changed
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
              "https://upload.pictureserver.net/static/2025/250403_03free.png", // hugo wi
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
            value: "https://upload.pictureserver.net/static/2025/_20250307.png", // hugo wi
          },
        },
      ],
      tableQueries: [
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "29.05.25 - Man's cave!",
          tableRange: "13",
          name: "intro",
          fallback: ["Extra 5% off everything"],
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "Voucher - 26.05.25 - Free sun lounger!",
          tableRange: "12:13",
          name: "timer",
          fallback: ["Extra 5% off everything"],
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "29.05.25 - Man's cave!",
          tableRange: "14:21",
          name: "category_paragraph",
          fallback: ["Extra 5% off everything"],
        },

        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "29.05.25 - Man's cave!",
          tableRange: "36:37",
          name: "condition",
          fallback: [
            "Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 5% additional discount on your order. The minimum order amount is €250. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 10% additional discount on your order. The minimum order amount is €500. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 15% additional discount on your order. The minimum order amount is €1000. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 20% additional discount on your order. The minimum order amount is €2500. Only one voucher is redeemable per person and order. This voucher cannot be exchanged for cash and you can only use one voucher code per order. This offer is valid till 01.12.2024 or as long as the products are in stock. This voucher cannot be used for pending orders. This offer is not valid for resellers. All items are subject to availability. All prices are subject to change without notification.",
            'If you wish to unsubscribe from the newsletter, you can do so by clicking on the <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Unsubscribe</a> link.',
          ],
        },
      ],
    },
  ],
});
