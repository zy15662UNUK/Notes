import Vue from 'vue'
import VueResource from "vue-resource"
import App from './App.vue'
Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-request-af190.firebaseio.com/';
// all the data is sent to this root
Vue.http.interceptors.push(function(request,next){
  // next is a function to allow the request to continue travel on
  console.log(request);
  if(request.method=="POST"){
    request.method="PUT";
    // if the request method is "POST", change it to "PUT"
    //"PUT" override the old data, "POST" create the new data
  }
  next(function(response){
    // override the .jason()function
    response.json = function(){
      return {message: response.body};
      // reconstruct the response to be an object with an key, to enable to fetch() work again
    };
  });
});
new Vue({
  el: '#app',
  render: h => h(App)
});
