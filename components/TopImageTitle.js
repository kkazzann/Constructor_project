import { isAllowToRender, optimize } from "../helpers/optimizeImage.js";
import { Space } from "../components/Space.js";

export const TopImageTitle = isAllowToRender(
  optimize(({ href, title1, title2, color, type = "standard", idx, len }) => {
    if (!type) {
      return "Please specify type of TiT.";
    }
    if (type === "standard") {
      if (idx === len) {
        return `
          <table border="0" cellspacing="0" cellpadding="0" width="100%" >
              <tbody>
                  <tr>
                      <td>
                          <a class="newsletterHrefTit" " href="${href}">
                              ${Space()}
                              <h4 style="color:${color};" class="newsletterTitleH1">${title1}</h4>
                              <h5 style="color:${color};" class="newsletterTitleH2">${title2}</h5>
                              ${Space()}
                          </a>
                      </td>
                  </tr>
              </tbody>
          </table>
        `;
      }
    }
    if (type === "equals") {
      if (idx === len) {
        return `
          <table border="0" cellspacing="0" cellpadding="0" width="100%" >
              <tbody>
                  <tr>
                      <td>
                          <a class="newsletterHrefTit" href="${href}">
                              ${Space()}
                              <h4 style="color:${color};" class="newsletterTitleH1">${title1}</h4>
                              <h4 style="color:${color};" class="newsletterTitleH1">${title2}</h4>
                              ${Space()}
                          </a>
                      </td>
                  </tr>
              </tbody>
          </table>
        `;
      }
    }
    if (type === "inverse") {
      if (idx === len) {
        return `
          <table border="0" cellspacing="0" cellpadding="0" width="100%" >
              <tbody>
                  <tr>
                      <td>
                          <a class="newsletterHrefTit" href="${href}">
                              ${Space()}
                              <h5 style="color:${color};" class="newsletterTitleH2">${title1}</h5>
                              <h4 style="color:${color};" class="newsletterTitleH1">${title2}</h4>
                              ${Space()}
                          </a>
                      </td>
                  </tr>
              </tbody>
          </table>
        `;
      }
    }
    if (type === "singleLine") {
      if (idx === len) {
        return `
          <table border="0" cellspacing="0" cellpadding="0" width="100%" >
              <tbody>
                  <tr>
                      <td>
                          <a class="newsletterHrefTit" style="color:${color};" href="${href}">
                              ${Space()}
                              <h4 style="color:${color};" class="newsletterTitleH1">${title1}</h4>
                              ${Space()}
                          </a>
                      </td>
                  </tr>
              </tbody>
          </table>
        `;
      }
    }
  })
);