export function Intro({ title, paragraph, data, align = "left" }) {
  return `
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
  <tbody>
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
            <tr>
              <td align="${align}" class="newsletterBottom35px">
                <span class="newsletterTitle">
                  ${data ? data[0] : title}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
            <tr>
              <td align="${align}" >
                <span class="newsletterParagraph">
                  ${data ? data[1] : paragraph}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
    `;
}