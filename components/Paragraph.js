export const Paragraph = (paragraph, align = "left") => {
  return `
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
      <tbody>
          <tr>
              <td align="${align}">
                  <span class="newsletterParagraph">
                      ${paragraph}
                  </span>
              </td>
          </tr>
      </tbody>
  </table>
  `;
};
