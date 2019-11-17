import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/css/reset.scss'
import { 
  breadcrumbItem,Button, Select,Message,breadcrumb,table,tableColumn,pagination,Row,Input,
  Col,Card,Drawer,Dialog,MessageBox,Form,
  FormItem,Option,
} from 'element-ui';


Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)
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
Vue.use(Drawer)
Vue.use(Dialog)
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Option);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
