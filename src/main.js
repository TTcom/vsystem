import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/css/reset.scss'
import './common/css/index.scss'
import { 
  breadcrumbItem,Button, Select,Message,breadcrumb,table,tableColumn,pagination,Row,Input,
  Col,Card,Drawer,Dialog,MessageBox,Form,
  Radio,Upload,
  RadioGroup,
  RadioButton,
  FormItem,Option,Popover,Popconfirm
} from 'element-ui';
import Global from './common/js/global'



Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;


Vue.config.productionTip = false
Vue.use(Global)
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
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Upload);
Vue.use(Popover);
Vue.use(Popconfirm);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
