









export function ThisMayInterestYou({title, categories}) {





  return `
  <tr>
      <td align="center">
          <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
              <tr>
                  <td align="center" class="newsletterBottom35px" >
                      <span class="newsletterTitle">
                          ${title}
                      </span>
                  </td>
              </tr>
          </table>
      </td>
  </tr>
  <tr>
      <td>
          <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
              <tr>
                  <td style="width: 50%" class="newsletterInterestYouContainer">
                      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                          <tbody>
                              <tr>
                                  <td class="newsletterBottom35px">
                                      <a href=${categories[0].href}>
                                          <img src=${categories[0].src} style="display: block;" width="100%">
                                      </a>
                                  </td>
                              </tr>
                              <tr>
                                  <td align="center" style="text-align: center;">
                                      <a href=${categories[0].href} style="color: #000000; text-decoration: underline;" class="newsletterInterestYouCta">${categories[0].name}</a>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
                  <td style="width: 50%" class="newsletterInterestYouContainer">
                      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                          <tbody>
                              <tr>
                                  <td class="newsletterBottom35px">
                                      <a href=${categories[1].href}>
                                          <img src=${categories[1].src} style="display: block;" width="100%">
                                      </a>
                                  </td>
                              </tr>
                              <tr>
                                  <td align="center" style="text-align: center;">
                                      <a href=${categories[1].href} style="color: #000000; text-decoration: underline;" class="newsletterInterestYouCta">${categories[1].name}</a>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
              <tr>
                  <td style="width: 50%" class="newsletterInterestYouContainer">
                      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                          <tbody>
                              <tr>
                                  <td class="newsletterBottom35px">
                                      <a href=${categories[2].href}>
                                          <img src=${categories[2].src} style="display: block;" width="100%">
                                      </a>
                                  </td>
                              </tr>
                              <tr>
                                  <td align="center" style="text-align: center;">
                                      <a href=${categories[2].href} style="color: #000000; text-decoration: underline;" class="newsletterInterestYouCta">${categories[2].name}</a>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
                  <td style="width: 50%" class="newsletterInterestYouContainer">
                      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                          <tbody>
                              <tr>
                                  <td class="newsletterBottom35px">
                                      <a href=${categories[3].href}>
                                          <img src=${categories[3].src} style="display: block;" width="100%">
                                      </a>
                                  </td>
                              </tr>
                              <tr>
                                  <td align="center" style="text-align: center;">
                                      <a href=${categories[3].href} style="color: #000000; text-decoration: underline;" class="newsletterInterestYouCta">${categories[3].name}</a>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </table>
      </td>
  </tr>
  `;
}
