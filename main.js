import Vue from 'vue'
import App from './App.vue'  // 根组件
import router from './router' // 路由（如果使用）

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')