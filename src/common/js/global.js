import { heightTransition } from "./vuetransition"
import know from "./know"
import moment from "moment"
export default {
  install(Vue) {
    Vue.component("hetransition", heightTransition)
    Vue.component("know", know)
    Vue.prototype.$fliterTime = val => {
      return moment(val).format("YYYY-MM-DD HH:mm:ss")
    }
  }
}
