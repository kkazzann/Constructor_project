export const Paragraph = ({paragraph, color, align = "left"}) => {
    return `
    <table cellspacing="0" cellpadding="0" border="0" width="100%">
        <tbody>
            <tr>
                <td align="${align}" class="newsletterContainer" style="color: ${color || "#000000"}">
                    <span class="newsletterParagraph">
                        ${paragraph}
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `;
  };
  