import { heightTransition } from "./vuetransition"
import highcode from "./highcode"
import moment from "moment"
export default {
  install(Vue) {
    Vue.component("hetransition", heightTransition)
    Vue.component("highcode", highcode)
    Vue.prototype.$fliterTime = val => {
      return moment(val).format("YYYY-MM-DD HH:mm:ss")
    }
  }
}
