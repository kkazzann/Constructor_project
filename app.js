// import campaigns data from /@campaigns directive (vite.config.js)
import campaign_365041 from "@campaigns/20250529-Man-s-cave.js"
import campaign_359290 from "@campaigns/20250605-Living-Room.js"

// import main styles from @styles directive (vite.config.js)
import "@styles/main.css"
import "@styles/spin.css"
import "@styles/toast.css"

import SHOPS from "./src/config/shops.js"
import { entities } from "./src/entities/index.js"
import { initApp } from "./src/main/initApp.js"
import { GoogleAuth } from "./src/services/GoogleAuth.js"
import { templates } from "./src/templates/index.js"
import ShowToast from "./src/utils/notifications.js"
import types from "./src/utils/types.js"

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
  ShowToast(error.message || "Something went wrong. More details in console.")
}

const btn = document.querySelector("#login")
btn.addEventListener("click", GoogleAuth.login)

const access = location.hash.split("&")[0].split("=")[1]
if (access) {
  localStorage.setItem("token", access)
  window.location.href = window.location.origin
  ShowToast("Token successfully setted.")
}
