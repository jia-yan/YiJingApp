import Vue from 'vue'
import App from './App.vue'
import router from './router'


//导入mui
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'
//import mui from './assets/dist/js/mui.js'
//个人建议不要导入mui的js否则会出现各种各样难以解决的错误
// import mui from './assets/mui/js/mui.min.js'
// Vue.prototype.mui = mui

//导入所有的组件
import MintUI from 'mint-ui'
//这里可以省略node-modules目录
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// import SlideOut from '@hyjiacan/vue-slideout'
// import '@hyjiacan/vue-slideout/lib/slideout.css'
// Vue.use(SlideOut, {
//   // set props here
// })
import {DrawerLayout} from 'vue-drawer-layout'
Vue.component(DrawerLayout.name, DrawerLayout)

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
Vue.use(ViewUI);

Vue.config.productionTip = false

vm = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
window.vm = vm
