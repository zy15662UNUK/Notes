import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import {routes} from "./routes.js"
Vue.use(VueRouter);
const router = new VueRouter({
  routes
  // The imported routes object
});
router.beforeEach(function(to,from,next){
  console.log("global beforeEach")
  next();//allow routing to continue, next(false) abort the routing or next({path:}) for redirection
});
// execute before each routing action
new Vue({
  el: '#app',
  router,
  // The new VueRouter instance
  render: h => h(App)
})
// Only one instance for single page application
