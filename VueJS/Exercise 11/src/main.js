import Vue from 'vue'
import App from './App.vue'

Vue.filter('myFilter2', function(value) {
    if (value != "") {
      return value+" ("+value.length+")";
    }
});

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
