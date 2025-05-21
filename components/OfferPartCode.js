import { Paragraph } from "./Paragraph.js";
import { Space } from "./Space.js";
import { GetCode } from "./getCode.js";

export function OfferPartCode({
  color,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  href,
  code,
  type,
}) {
  const newsletter = `
    <tr>
      <td >
        ${Paragraph(paragraph1, "center")}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(paragraph2, "center")}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${GetCode({
          color: color,
          code: code,
          link: href,
          type,
        })}
      </td>
    </tr>

    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    
    <tr>
      <td >
        ${Paragraph(paragraph3, "center")}
      </td>
    </tr>

    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    
    <tr>
      <td >
        ${Paragraph(paragraph4, "center")}
      </td>
    </tr>
  `;
  const landing = `
    <tr>
      <td >
        ${Paragraph(paragraph1, "center")}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${Paragraph(paragraph2, "center")}
      </td>
    </tr>
    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>

    <tr>
      <td >
        ${GetCode({
          color: color,
          code: code,
          link: href,
          type,
        })}
      </td>
    </tr>

    <tr>
      <td >
        ${Space({ className: "newsletterBottom35px" })}
      </td>
    </tr>
    
    <tr>
      <td >
        ${Paragraph(paragraph3, "center")}
      </td>
    </tr>
  `;
  return `
  <table cellspacing="0" cellpadding="0" border="0" width="100%">
    ${type === "newsletter" ? newsletter : landing}
  </table>
  `;
}
