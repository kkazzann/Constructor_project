import { swapImage } from "../helpers/swapImage.js";
import { getState } from "../main/initApp.js";

export const ImageWithLink = (link, src, alt = "") => {
  const isNeedToOptimizeImg = getState("optimizeImg");
  let newSrc = src;
  if (isNeedToOptimizeImg) {
    newSrc =
      getState("template") === "newsletter"
        ? src
        : swapImage({ format: ".webp", src: src });
  }
  return `
  <table cellspacing="0" cellpadding="0" style="max-width: 650px; width: 100%;">
        <tbody>
            <tr>
                <td>
                    <a href="${link}">
                        <img alt="${alt}" src="${newSrc}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
  `;
};
