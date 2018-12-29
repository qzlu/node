import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios';
Vue.prototype.$ajax= axios;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css';
import './assets/css/common.css';
import './assets/iconfont/iconfont.css'
Vue.use(ElementUI);
Vue.config.productionTip = false
import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'http://127.0.0.1:3001');
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')