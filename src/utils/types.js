import cgb_desktop from "../assets/styles/cgb/desktop.css?inline"
import cgb_mobile from "../assets/styles/cgb/mobile.css?inline"
import lp_blackweek from "../assets/styles/lp/blackweek.css?inline"
import lp_mattress from "../assets/styles/lp/mattress.css?inline"
import lp_regular from "../assets/styles/lp/regular.css?inline"
import nslt_blackweek from "../assets/styles/nslt/blackweek.css?inline"
import nslt_mattress from "../assets/styles/nslt/mattress.css?inline"
import nslt_regular from "../assets/styles/nslt/regular.css?inline"
import html_wrapper from "../assets/wrapper/index.html?raw"

export default {
  NEWSLETTER: "newsletter",
  LANDINGPAGE: "landing",
  BANNER: "banner",
  CSS: {
    NS: nslt_regular,
    NS_BLACK_WEEK: nslt_blackweek,
    NS_MATTRESS: nslt_mattress,
    LP: lp_regular,
    LP_BLACK_WEEK: lp_blackweek,
    LP_MATTRESS: lp_mattress,
    CGB: {
      DESKTOP: cgb_desktop,
      MOBILE: cgb_mobile,
    },
  },
  WRAPPER: html_wrapper,
}
