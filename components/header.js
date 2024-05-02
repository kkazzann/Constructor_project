export function Header(
  {
    id,
    topImage,
    advantages,
    webVersion,
    firstCategory,
    secondCategory,
    thirdCategory,
    whiteList,
    assembly,
  },
  { country, type }
) {
  if (country === "UK") {
    return `
        <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#ececec">
        </v:background>
        <![endif]-->
        <p class="title-advantages">
            <span class="title-advantages-item">✔️ ${advantages.freeDelivery}</span>
            <span class="title-advantages-item">✔️ ${advantages.daysReturn}</span>
        </p>
        <p class="newsletterRecommendationHeader">
            ${webVersion.troubleViewing} <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">${webVersion.troubleViewingHrefText}</a> dir die Online-Version an.
            ${whiteList.addBeliani} <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="${whiteList.whitelistHref}">${whiteList.whiteList}</a>
        </p>
        <table align="center" cellspacing="0" cellpadding="0" border="0"
            style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
            <tbody>
                <tr>
                    <th>
                        <a href="${topImage.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                            <img src="${topImage.src}" border="0" alt="Beliani" style="display:block; max-width: 100%;" />
                        </a>
                    </th>
                </tr>
            </tbody>
        </table>
        <table align="center" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
            <tbody>
                <tr>
                    <th><a
                            href="${firstCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                                src="${firstCategory.src}" border="0"
                                alt="M&ouml;bel" style="display:block; max-width: 100%;" /></a></th>
                    <th><a
                            href="${secondCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                                src="${secondCategory.src}" border="0"
                                alt="Accessoires" style="display:block; max-width: 100%;" /></a></th>
                    <th><a
                            href="${thirdCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                                src="${thirdCategory.src}" border="0"
                                alt="Garten" style="display:block; max-width: 100%;" /></a></th>
                </tr>
            </tbody>
        </table>
        <table align="center" cellspacing="0" cellpadding="0" border="0"  style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <td>
                    <img src="${assembly.src}" border="0" alt="M&ouml;bel" style="display:block; max-width: 100%;" />
                </td>
            </tr>
        </tbody>
    </table>
        `;
  }
  return `
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ ${advantages.freeDelivery}</span>
        <span class="title-advantages-item">✔️ ${advantages.daysReturn}</span>
    </p>
    <p class="newsletterRecommendationHeader">
        ${webVersion.troubleViewing} <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">${webVersion.troubleViewingHrefText}</a> dir die Online-Version an.
        ${whiteList.addBeliani} <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="${whiteList.whitelistHref}">${whiteList.whiteList}</a>
    </p>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th>
                    <a href="${topImage.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                        <img src="${topImage.src}" border="0" alt="Beliani" style="display:block; max-width: 100%;" />
                    </a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="${firstCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="${firstCategory.src}" border="0"
                            alt="M&ouml;bel" style="display:block; max-width: 100%;" /></a></th>
                <th><a
                        href="${secondCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="${secondCategory.src}" border="0"
                            alt="Accessoires" style="display:block; max-width: 100%;" /></a></th>
                <th><a
                        href="${thirdCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="${thirdCategory.src}" border="0"
                            alt="Garten" style="display:block; max-width: 100%;" /></a></th>
            </tr>
        </tbody>
    </table>
    `;
}
