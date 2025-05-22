import { templates } from "../templates/index.js";
import { entities } from "../entities/index.js";
import types from "../utils/types.js";
import getImageUrl from "../utils/getImageUrl.js";

export default new entities.Campaign({
  date: "2025.05.29",
  name: "aktualna",
  issueCardId: 365041,
  startId: 33575,
  figmaUrl:
    "https://www.figma.com/design/IjK9bpuYSsDvyYGnJwhnQG/2025.04.07-Free-scatter-cushion-(Copy)?m=auto&fuid=1328681953229888224",
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
          background: "#FFEBE2",
          color: "#000",
          src: getImageUrl("250529_cat1.png", true),
          href: "https://www.beliani.ch/beds/",
          products: [
            {
              id: "394960",
              src: getImageUrl("250529_04.png", true),
            },
            {
              id: "610509",
              src: getImageUrl("250529_05.png", true),
            },
            {
              id: "567297",
              src: getImageUrl("250529_06.png", true),
            },
            {
              id: "596926",
              src: getImageUrl("250529_07.png", true),
            },
          ],
        },
        {
          name: "wooden-beds",
          background: "#FFDEB3",
          color: "#000",
          src: getImageUrl("250529_cat2.png", true),
          href: "https://www.beliani.ch/bedroom-furniture/armchairs/",
          products: [
            {
              id: "12463",
              src: getImageUrl("250529_08.png", true),
            },
            {
              id: "391979",
              src: getImageUrl("250529_09.png", true),
            },
            {
              id: "595654",
              src: getImageUrl("250529_10.png", true),
            },
            {
              id: "580182",
              src: getImageUrl("250529_11.png", true),
            },
          ],
        },
        {
          name: "fabric-beds",
          background: "#FFEBE2",
          color: "#000",
          src: getImageUrl("250529_cat3.png", true),
          href: "https://www.beliani.ch/storage/",
          products: [
            {
              id: "341146",
              src: getImageUrl("250529_12.png", true),
            },
            {
              id: "170608",
              src: getImageUrl("250529_13.png", true),
            },
            {
              id: "443190",
              src: getImageUrl("250529_14.png", true),
            },
            {
              id: "182695",
              src: getImageUrl("250529_15.png", true),
            },
          ],
        },
        {
          name: "metal-beds",
          background: "#FFDEB3",
          color: "#000",
          src: getImageUrl("250529_cat4.png", true),
          href: "https://www.beliani.ch/home-accessories/",
          products: [
            {
              id: "521138",
              src: getImageUrl("250529_16.png", true),
            },
            {
              id: "69641",
              src: getImageUrl("250529_17.png", true),
            },
            {
              id: "376905",
              src: getImageUrl("250529_18.png", true),
            },
            {
              id: "249180",
              src: getImageUrl("250529_19.png", true),
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
            value: "content/lp25-05-29",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("250529_01.png", true),
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-05-29",
          },
        },
        {
          value: getImageUrl("250529gif_top.gif", true),
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
            value: getImageUrl("20250522b.png", true),
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
            value: getImageUrl("20250521b.png", true),
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
            value: "https://upload.pictureserver.net/static/2025/_20250307.png",
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
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.CategoriesRowsOfferPart,
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
          name: "beds",
          background: "#FFEBE2",
          color: "#000",
          src: getImageUrl("250529_cat1.png", true),
          href: "https://www.beliani.ch/beds/",
          products: [
            {
              id: "394960",
              src: getImageUrl("250529_04.png", true),
            },
            {
              id: "610509",
              src: getImageUrl("250529_05.png", true),
            },
            {
              id: "567297",
              src: getImageUrl("250529_06.png", true),
            },
            {
              id: "596926",
              src: getImageUrl("250529_07.png", true),
            },
          ],
        },
        {
          name: "wooden-beds",
          background: "#FFDEB3",
          color: "#000",
          src: getImageUrl("250529_cat2.png", true),
          href: "https://www.beliani.ch/bedroom-furniture/armchairs/",
          products: [
            {
              id: "12463",
              src: getImageUrl("250529_08.png", true),
            },
            {
              id: "391979",
              src: getImageUrl("250529_09.png", true),
            },
            {
              id: "595654",
              src: getImageUrl("250529_10.png", true),
            },
            {
              id: "580182",
              src: getImageUrl("250529_11.png", true),
            },
          ],
        },
        {
          name: "fabric-beds",
          background: "#FFEBE2",
          color: "#000",
          src: getImageUrl("250529_cat3.png", true),
          href: "https://www.beliani.ch/storage/",
          products: [
            {
              id: "341146",
              src: getImageUrl("250529_12.png", true),
            },
            {
              id: "170608",
              src: getImageUrl("250529_13.png", true),
            },
            {
              id: "443190",
              src: getImageUrl("250529_14.png", true),
            },
            {
              id: "182695",
              src: getImageUrl("250529_15.png", true),
            },
          ],
        },
        {
          name: "metal-beds",
          background: "#FFDEB3",
          color: "#000",
          src: getImageUrl("250529_cat4.png", true),
          href: "https://www.beliani.ch/home-accessories/",
          products: [
            {
              id: "521138",
              src: getImageUrl("250529_16.png", true),
            },
            {
              id: "69641",
              src: getImageUrl("250529_17.png", true),
            },
            {
              id: "376905",
              src: getImageUrl("250529_18.png", true),
            },
            {
              id: "249180",
              src: getImageUrl("250529_19.png", true),
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
            value: "content/lp25-05-29",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("250529_01.png", true),
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-05-29",
          },
        },
        {
          value: getImageUrl("250529gif_top.gif", true),
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
            value: getImageUrl("20250522b.png", true),
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
            value: getImageUrl("20250521b.png", true),
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
            value: "https://upload.pictureserver.net/static/2025/_20250307.png",
          },
        },
      ],
      tableQueries: [
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "29.05.25 - Man's cave!",
          tableRange: "11",
          name: "tit",
        },
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
});
