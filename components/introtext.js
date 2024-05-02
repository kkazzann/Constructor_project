export function IntroText({ offerParts, type, style = {} }) {
  function newsletterIntro(item, i) {
    return `
    ${
      "title" in item
        ? `
        <tr>
            <td align="center">
                <span class="newsletterTitleBlackWeek">
                    ${item.title}
                </span>
            </td>
        </tr>
        `
        : ""
    }
    ${
      "paragraph" in item
        ? `
        <tr>
            <td align="center" ${
              offerParts.length - 1 !== i
                ? 'class="newsletterIntroSectionItem"'
                : ""
            }>
                <span class="newsletterParagraph">
                    ${item.paragraph}
                </span>
            </td>
        </tr>
        `
        : ""
    }
    ${
      "code" in item
        ? `
        <tr>
            <td align="center" ${
              offerParts.length - 1 !== i
                ? 'class="newsletterCodesPadding"'
                : 'class="newsletterIntroSectionItem"'
            } >
                <span class="newsletterParagraph">
                    ${item.code}
                </span>
            </td>
        </tr>
        `
        : ""
    }
    `;
  }

  function landingIntro(item, i) {
    return `
    ${
      "title" in item
        ? `
        <tr>
            <td align="center">
                <span class="newsletterTitleBlackWeek" >
                    ${item.title}
                </span>
            </td>
        </tr>
        `
        : ""
    }
    ${
      "paragraph" in item
        ? `
        <tr>
            <td align="center" class="newsletterBottom20px">
                <span class="newsletterParagraph">
                    ${item.paragraph}
                </span>
            </td>
        </tr>
        `
        : ""
    }
    ${
      "code" in item
        ? `
        <tr>
            <td align="center" ${
              offerParts.length - 1 !== i
                ? 'class="newsletterCodesPadding"'
                : 'class="newsletterIntroSectionItem"'
            } >
                <span class="newsletterParagraph">
                    ${item.code}
                </span>
            </td>
        </tr>
        `
        : ""
    }
    `;
  }

  return `
    <tr>
        <td class="newsletterIntroSection" ${
          "container" in style ? 'style="${style?.container}"' : ""
        }>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                  ${offerParts
                    .map((item, i) => {
                      if (type === "newsletter") {
                        return newsletterIntro(item, i);
                      }

                      if (type === "landing") {
                        return landingIntro(item, i);
                      }
                    })
                    .join("")}
                </tbody>
            </table>
        </td>
    </tr>
    `;
}
