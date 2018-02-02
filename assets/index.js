import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'

Vue.use(VueRouter)

const router = new VueRouter({routes})

const vm=new Vue({
    router,
    render:h=>h(App)
}).$mount("#app")