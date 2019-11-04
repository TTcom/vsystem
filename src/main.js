import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/css/reset.scss'
import { 
  breadcrumbItem,Button, Select,Message,breadcrumb,table,tableColumn,pagination,Row,Input,
  Col,Card
} from 'element-ui';

Message.install = function (Vue, options) {
  Vue.prototype.$message = Message
}
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)
Vue.use(Message)
Vue.use(breadcrumb)
Vue.use(breadcrumbItem)
Vue.use(table)
Vue.use(tableColumn)
Vue.use(pagination)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Input)
Vue.use(Button)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
