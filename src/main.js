import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from "vue-resource"

// 开启debug模式
// Vue.config.debug = true;
//
Vue.use(VueRouter);
Vue.use(VueResource);

const First = { template: '<div><h2>我是第一个子页面</h2></div>' }
import secondcomponent from './component/secondcomponent.vue'

// 创建一个路由器实例
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})

// 现在我们可以启用应用了
// 路由器会创建一个APP实例，并且挂载到选择符 #app 匹配的元素上
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app")

new Vue({
  el: 'body',
  components: { App }
})
