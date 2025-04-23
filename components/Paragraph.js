export const Paragraph = ({paragraph, color,mark, align = "left", style, type= "standard"}) => {
    if (type === "standard") {
        return `
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tbody>
                    <tr>
                        <td class="newsletterContainer" align="${align}" style="color: ${color}">
                            <span class="newsletterParagraph">
                                ${paragraph}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
      `;
    }
    if (type === "split") {
        return `
            
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                <tbody>
                    <tr>
                        <td class="newsletterContainer" align="${align}" style="color: ${color}">
                            <p class="newsletterMarkTitle" >
                               &#10003; ${paragraph[0]}
                            </p>
                            <p class="newsletterMarkTitle" >
                                &#10003; ${paragraph[1]}
                            </p>
                            <p class="newsletterMarkTitle"  >
                                &#10003; ${paragraph[2]}
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
      `;
    }

};

