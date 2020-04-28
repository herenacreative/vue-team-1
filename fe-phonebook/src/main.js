import Vue from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';
import BootstrapVue from 'bootstrap-vue'
//import 'assets/components.json';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
