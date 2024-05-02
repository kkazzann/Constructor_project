



export const Timer = ({ title, subtitle, imageHref, imageSrc, ctaHref, ctaText, style, className }) => {

  style = {
    bgColor: "#ffffff",
    align: "center",
    textColor: "#ffffff",
    ...style,
  }

  className = className ? className : "newsletterGifContainer"

  return `
      <tr>
          <td align="${style.align}" class="${className}" style="background-color: ${style.bgColor};">
              <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                  <td align="center">
                      <span class="newsletterSummerSale" style="color: ${style.textColor}; font-weight: 600;">${title}</span>
                      <br/>
                      <span class="newsletterSummerSale" style="color: ${style.textColor};">${subtitle}</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" class="newsletterCounter" style="padding-top: 20px; padding-left: 140px; padding-right: 140px;">
                    <a href=${imageHref}>
                        <img width="100%" src="${imageSrc}" style="display: block;">
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center" >
                      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                          <tr>
                              <td align="center" style="padding-top: 20px">
                                  <a href=${ctaHref} style="color: ${style.textColor}; text-decoration: underline;" class="newsletterCta">
                                      <span>${ctaText}</span>
                                  </a>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
              </table>
          </td>
      </tr>
  `
}
