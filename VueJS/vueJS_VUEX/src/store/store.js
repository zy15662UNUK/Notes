import Vue from "vue";
import Vuex from "vuex";
// Import the modules for vuex
import counter from "./module/counter.js";
Vue.use(Vuex);
export const store = new Vuex.Store({
  modules: {
    counter: counter,
  }
});//Main task is to store the state of the app
