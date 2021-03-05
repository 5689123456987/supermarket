// import Vue from 'vue'
// import App from './App.vue'
//
//
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
//
// import Vue from 'vue'
// import App from './App'
// import router from './router'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// Vue.use(ElementUI)
//
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
