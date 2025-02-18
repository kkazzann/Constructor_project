import { isAllowToRender, optimize } from "../helpers/optimizeImage.js";
import { Space } from "../components/Space.js";

export const TopImageTitle = isAllowToRender(
  optimize(({ href, title1, title2, color, type }) => {
    if (!type) {
      return "Please specify type of TiT.";
    }

    if (type === "up_to") {
        const titleClassH1 = title1.includes('%') ? 'newsletterTitleH1' : 'newsletterTitleH2';
        const titleClassH2 = title2.includes('%') ? 'newsletterTitleH1' : 'newsletterTitleH2';
        return `
          <table border="0" cellspacing="0" cellpadding="0" width="100%">
              <tbody>
                  <tr>
                      <td>
                          <a class="newsletterHrefTit" style="color:${color};" href="${href}">
                              ${Space()}
                              <h4 class="${titleClassH1}">${title1}</h4>
                              <h5 class="${titleClassH2}">${title2}</h5>
                              ${Space()}
                          </a>
                      </td>
                  </tr>
              </tbody>
          </table>
        `
    }
    if (type === "standard") {
        return `
          <table border="0" cellspacing="0" cellpadding="0" width="100%">
              <tbody>
                  <tr>
                      <td>
                          <a class="newsletterHrefTit" style="color:${color};" href="${href}">
                              ${Space()}
                              <h5 class="newsletterTitleH1">${title1}</h5>
                              <h4 class="newsletterTitleH2">${title2}</h4>
                              ${Space()}
                          </a>
                      </td>
                  </tr>
              </tbody>
          </table>
        `;
    }
    if (type === "singleLine") {
        return `
          <table border="0" cellspacing="0" cellpadding="0" width="100%">
              <tbody>
                  <tr>
                      <td>
                          <a class="newsletterHrefTit" style="color:${color};" href="${href}">
                              ${Space()}
                              <h4 class="newsletterTitleH1">${title1}</h4>
                              ${Space()}
                          </a>
                      </td>
                  </tr>
              </tbody>
          </table>
        `;
    }
  })
);