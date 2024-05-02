export const Image = (src, alt = "") => {
  const isNeedToOptimizeImg = getState("optimizeImg");
  let newSrc = src;
  if (isNeedToOptimizeImg) {
    newSrc =
      getState("template") === "newsletter"
        ? src
        : swapImage({ format: ".webp", src: src });
  }
  return `
  <table cellspacing="0" cellpadding="0" style="width: 100%; ">
    <tbody>
        <tr>
            <td>
                <img alt="${alt}" src="${newSrc}" loading="lazy" style="display: block; width: 100%">
            </td>
        </tr>
    </tbody>
  </table>
  `;
};
