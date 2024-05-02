export function Footer(
  {
    id,
    title,
    assembly,
    firstCategory,
    secondCategory,
    thirdCategory,
    foutrthCategory,
    fifthCategory,
    sixthCategory,
    seventhCategory,
    eigthCategory,
    klarna,
    socials,
    firstAdvantage,
    secondAdvantage,
    thirdAdvantage,
    fourthAdvantage,
    companyDetails,
    conditionsTitle,
    conditionsText,
    unsubscribeTitle
  },
  { type, country }
) {
  if (type === "landing") {
    return `
        <!-- FOOTER -->
        <table id="newsletter" style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterContainer" cellspacing="0" cellpadding="0" border="0" align="center">
            <tbody>
                <tr>
                    <td>
                        <img loading="lazy" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;"  alt="">
                    </td>
                </tr>
                <tr>
                    <td class="newsletterTopBottomContainer">
                        <span class="newsletterFooterTitle">
                            ${title}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td class="newsletterBottom35px">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" >
                            <tbody>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFT">
                                        <a
                                            href="${firstCategory.href}">
                                            <img loading="lazy" src="${firstCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHT">
                                        <a
                                            href="${secondCategory.href}">
                                            <img loading="lazy" src="${secondCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFT">
                                        <a
                                            href="${thirdCategory.href}">
                                            <img loading="lazy" src="${thirdCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHT">
                                        <a
                                            href="${foutrthCategory.href}">
                                            <img loading="lazy" src="${foutrthCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFT">
                                        <a
                                            href="${fifthCategory.href}">
                                            <img loading="lazy" src="${fifthCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHT">
                                        <a
                                            href="${sixthCategory.href}">
                                            <img loading="lazy" src="${sixthCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFTBottom">
                                        <a
                                            href="${seventhCategory.href}">
                                            <img loading="lazy" src="${seventhCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHTBottom">
                                        <a
                                            href="${eigthCategory.href}">
                                            <img loading="lazy" src="${eigthCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;"  /></td>
            </tr>
            <!--KLARNA-->
            <tr>
                <td class="newsletterTopBottomContainer">
                    <a href="${klarna.href}">
                        <img alt="" border="0"  src="${klarna.src}" style="display:block; max-width: 100%;"/>
                    </a>
                </td>
            </tr>
                <tr>
                    <td>
                        <img loading="lazy" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;"  alt="">
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tbody>
                                <tr>
                                    <td align="left" class="footer">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tbody>
                                                <tr>
                                                    <td class="newsletterTopBottomContainer">
                                                        <span class="newsletterFooterTitle">
                                                              Folge uns auf
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tbody>
                                                <tr>
                                                    <td class="newsletterSocialIcon">
                                                        <a
                                                            href="${socials.instagram.href}">
                                                            <img loading="lazy" src="${socials.instagram.src}"
                                                                 border="0" style="display:block; max-width: 100%;"
                                                                alt="Instagram">
                                                        </a>
                                                    </td>
                                                    <td class="newsletterSocialIcon">
                                                        <a
                                                            href="${socials.facebook.href}">
                                                            <img loading="lazy" src="${socials.facebook.src}"
                                                                 border="0" style="display:block; max-width: 100%;"
                                                                alt="Facebook">
                                                        </a>
                                                    </td>
                                                    <td class="newsletterSocialIcon">
                                                        <a
                                                            href="${socials.youtube.href}">
                                                            <img loading="lazy" src="${socials.youtube.src}"
                                                                 border="0" style="display:block; max-width: 100%;"
                                                                alt="YouTube">
                                                        </a>
                                                    </td>
                                                    <td class="newsletterSocialIcon">
                                                        <a
                                                            href="${socials.pinterest.href}">
                                                            <img loading="lazy" src="${socials.pinterest.src}"
                                                                 border="0" style="display:block; max-width: 100%;"
                                                                alt="Pinterest">
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img loading="lazy" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;"  alt="">
                    </td>
                </tr>
                <tr>
                    <td class="newsletterTopBottomContainer" align="left">
                        <span class="newsletterConditions" style="color: #000000;">${conditionsTitle} ${conditionsText}</span>
                    </td>
                </tr>
            </tbody>
        </table>
        `;
  }

  if (type === "newsletter") {
    return `
        <!-- FOOTER -->
        <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterContainer" cellspacing="0" cellpadding="0" border="0" align="center">
            <tbody>
                <tr>
                    <td>
                        <img loading="lazy" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;"  alt="">
                    </td>
                </tr>
                <tr>
                    <td class="newsletterTopBottomContainer">
                        <span class="newsletterFooterTitle">
                            Tausende weitere Möbel
                        </span>
                    </td>
                </tr>
                <tr>
                    <td class="newsletterBottom35px">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" >
                            <tbody>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFT">
                                        <a
                                            href="${firstCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${firstCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHT">
                                        <a
                                            href="${secondCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${secondCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFT">
                                        <a
                                            href="${thirdCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${thirdCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHT">
                                        <a
                                            href="${foutrthCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${foutrthCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFT">
                                        <a
                                            href="${fifthCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${fifthCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHT">
                                        <a
                                            href="${sixthCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${sixthCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="newsletterFooterCategoryLEFTBottom">
                                        <a
                                            href="${seventhCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${seventhCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                    <td class="newsletterFooterCategoryRIGHTBottom">
                                        <a
                                            href="${eigthCategory.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${eigthCategory.src}" alt=""
                                                style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;"  /></td>
            </tr>
            <!--KLARNA-->
            <tr>
                <td class="newsletterTopBottomContainer">
                    <a href="${klarna.href}">
                        <img alt="" border="0"  src="${klarna.src}" style="display:block; max-width: 100%;"/>
                    </a>
                </td>
            </tr>
                <tr>
                    <td>
                        <img loading="lazy" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;"  alt="">
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tbody>
                                <tr>
                                    <td align="left" class="footer">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tbody>
                                                <tr>
                                                    <td class="newsletterTopBottomContainer">
                                                        <span class="newsletterFooterTitle">
                                                              ${socials.title}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tbody>
                                                <tr>
                                                    <td class="newsletterSocialIcon">
                                                        <a
                                                            href="${socials.instagram.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                            <img loading="lazy" src="${socials.instagram.src}"
                                                                 border="0" style="display:block; max-width: 100%;"
                                                                alt="Instagram">
                                                        </a>
                                                    </td>
                                                    <td class="newsletterSocialIcon">
                                                        <a
                                                            href="${socials.facebook.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                            <img loading="lazy" src="${socials.facebook.src}"
                                                                 border="0" style="display:block; max-width: 100%;"
                                                                alt="Facebook">
                                                        </a>
                                                    </td>
                                                    <td class="newsletterSocialIcon">
                                                        <a
                                                            href="${socials.youtube.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                            <img loading="lazy" src="${socials.youtube.src}"
                                                                 border="0" style="display:block; max-width: 100%;"
                                                                alt="YouTube">
                                                        </a>
                                                    </td>
                                                    <td class="newsletterSocialIcon">
                                                        <a
                                                            href="${socials.pinterest.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                            <img loading="lazy" src="${socials.pinterest.src}"
                                                                 border="0" style="display:block; max-width: 100%;"
                                                                alt="Pinterest">
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img loading="lazy" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;"  alt="">
                    </td>
                </tr>
                <!-- ADVANTAGES -->
                <tr>
                    <td class="newsletterTopBottomContainer">
                        <table cellspacing="0" cellpadding="0" border="0"  style="background-color: #f5f5f5;">
                            <tbody>
                                <tr>
                                    <td>
                                        <a
                                            href="${firstAdvantage.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${firstAdvantage.src}"
                                                alt="" style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="${secondAdvantage.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${secondAdvantage.src}"
                                                alt="" style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="${thirdAdvantage.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${thirdAdvantage.src}"
                                                alt="" style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            href="${fourthAdvantage.href}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                            <img loading="lazy" src="${fourthAdvantage.src}"
                                                alt="" style="display:block; max-width: 100%;"  border="0" />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img loading="lazy" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block; max-width: 100%;"  alt="">
                    </td>
                </tr>
                <tr>
                    <td class="newsletterTopBottomContainer" align="left">
                        <span class="newsletterConditions" style="color: #000000;">${conditionsTitle} ${conditionsText}</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <table cellspacing="0" cellpadding="0" border="0" align="center">
            <tbody>
                <tr>
                    <td align="center" class="newsletterFooterCompanyDetails">
                        <span style="color: #000000;text-align: center; font-size:11px;">
                            <b><font style="font-size: 10px;">${companyDetails.title}</font></b>
                            <br />${companyDetails.address}<br />${companyDetails.mobileNumber} ${companyDetails.emailAddress}
                            <a href="${companyDetails.mailTo}">${companyDetails.email}</a>
                            <br />${companyDetails.commercialRegister}<br />${companyDetails.vat}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
        `;
  }
}
