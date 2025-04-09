export function AdditionalCategories({
    href,
    src,
    name,
}) {
    return `
        <td style="width: 50%" class="newsletterProductContainer70px">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tbody>
                    <tr>
                        <td>
                            <a href="${href}">
                                <img src="${src}" style="display: block;" width="100%">
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="text-align: center;" class="newsletterProductTitleContainer">
                            <a href="${href}" style="color: #000000; text-decoration: underline;" class="newsletterProductTitleLast">
                                ${name}
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    `;
}