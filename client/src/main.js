import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import TopHeader from "@/components/TopHeader.vue"
import BottomFooter from "@/components/BottomFooter.vue"
import SystemHead from "@/components/SystemHead.vue"
import SystemSaid from "@/components/SystemSaid.vue"



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueVideoPlayer from "vue-video-player";



Vue.use(ElementUI);

Vue.config.productionTip = false;

//定义全局axios 的公用服务端口
axios.defaults.baseURL="http://localhost:81";
//向原型上追加通用方法
Vue.prototype.axios=axios;

//定义全局组件
Vue.component("top-header", TopHeader);
Vue.component("bottom-footer", BottomFooter);
Vue.component("system-head", SystemHead);
Vue.component("system-said", SystemSaid);

Vue.component("video-player",VueVideoPlayer);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
