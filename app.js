import { templates } from "./src/templates/index.js"
import { entities } from "./src/entities/index.js"
import types from "./src/utils/types.js"
import SHOPS from "./src/config/shops.js"
import { initApp } from "./src/main/initApp.js"

// import main styles from @styles directive (vite.config.js)
import "@styles/main.css"
import "@styles/toast.css"
import "@styles/spin.css"

// import campaigns data from /@campaigns directive (vite.config.js)
import campaign_359290 from "@campaigns/359290.js"
import campaign_365041 from "@campaigns/365041.js"

try {
  initApp({
    campaigns: [campaign_365041, campaign_359290],
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
  })
} catch (error) {
  console.log(error)
  Toastify({
    text: error.message || "Something went wrong. More details in console.",
    escapeMarkup: false,
    duration: 3000,
  }).showToast()
}
