import { heightTransition } from "./vuetransition"
import moment from "moment"
export default {
  install(Vue) {
    Vue.component("hetransition", heightTransition)
    Vue.prototype.$fliterTime = val => {
      return moment(val).format("YYYY-MM-DD HH:mm:ss")
    }
  }
}
