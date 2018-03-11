##### Accessing Http via vue-resource
- http://www.cnblogs.com/keepfool/p/5657065.html
- cdn(in single page ):
`<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.0"></script>`
- but in webpack we have to install it by run `npm install vue-resource`
- Then set up vue-resource in main.js: 1st import, 2nd Vue.use()

```
import Vue from 'vue'
import VueResource from "vue-resource"
import App from './App.vue'
Vue.use(VueResource);
new Vue({
  el: '#app',
  render: h => h(App)
});
```
- set up backend in the firebase
- Then we can use it in any function of the App.vue by:

```
this.$http.post('https://vuejs-http-request-af190.firebaseio.com/data.json',this.user)
.then(function(response){
  console.log(response);
  },function(error){
    console.log(error);
    });
```
- this.$http.post(URL/data.json,dataTo Post).then(cb(response){},cb(error){});
- In response.body.name: unique node name for the newly posted data in "data" at the firebase

##### GETting and Transforming Data (Sending a GET Request)

```
fetchData(){
   this.$http.get('https://vuejs-http-request-af190.firebaseio.com/data.json').then(
     function(response){
       return response.json();
       // .json() is to parse the jason
       // The response is a promise not object
     }
   )
   // Get response data is Async, need another .then() to accept the data
   .then(function(data){
     console.log(data);
     var result = [];
     for(var k in data){
       result.push(data[k]);
     }
     this.users = result;
   });
}
```

##### Configuring vue-resource Globally
- Centrallize the root: in main.js:

```
Vue.http.options.root = 'https://vuejs-http-request-af190.firebaseio.com/data.json';
// all the data is sent to this root
```
- Then in App.vue:

```
methods: {
  submit() {
    this.$http.post('',this.user)
    .then(function(response){console.log(response);},function(error){console.log(error);});
   // send the request.then() is the action after sending the request
 },
 fetchData(){
    this.$http.get('').then(
      function(response){
        return response.json();
        // .json() is to parse the jason
        // The response is a promise not object
      }
    )
    // Get response data is Async, need another .then() to accept the data
    .then(function(data){
      console.log(data);
      var result = [];
      for(var k in data){
        result.push(data[k]);
      }
      this.users = result;
    });
 }
}
```
- Only empty str is needed for the get() and post()

##### Intercepting Requests
- Created in main.js
- interceptors: an array of functions we want to excute on each request
- In the main.js:

```
Vue.http.interceptors.push(function(request,next){
  // next is a function to allow the request to continue travel on
  console.log(request);
  if(request.method=="POST"){
    request.method="PUT";
    // if the request method is "POST", change it to "PUT"
    //"PUT" override the old data, "POST" create the new data
  }
  next();
});
```

##### Intercepting Responses
- In main.js, manipulating the next() in interceptors:

```
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
```

##### Where the "resource" in vue-resource Comes From
- set up a new resource and POST the data with single .save() method

```
<script>
    export default {
      data: function(){
        return {
          user: {
            username: "",
            email: ""
          },
          users: [],
          resource: {}
        };
      },
      methods: {
        submit() {
          // this.$http.post("data.json",this.user)
          // .then(function(response){console.log(response);},function(error){console.log(error);});
         // send the request.then() is the action after sending the request
         this.resource.save({},this.user);
         // A shorter way than the previous code to submit
         // {} means any parameters we want to pass to the URL
       },
       fetchData(){
          this.$http.get("data.json").then(
            function(response){
              return response.json();
              // .json() is to parse the jason
              // The response is a promise not object
            }
          )
          // Get response data is Async, need another .then() to accept the data
          .then(function(data){
            console.log(data);
            var result = [];
            for(var k in data){
              result.push(data[k]);
            }
            this.users = result;
          });
       }
     },
     created() {
       this.resource = this.$resource("data.json",{});
       // pass data field into $resource
     }
    }
</script>
```

##### Creating Custom Resources
- **Anyway Resources is just an alternative way for the methods like get and post**

```
<script>
    export default {
      data: function(){
        return {
          user: {
            username: "",
            email: ""
          },
          users: [],
          resource: {}
        };
      },
      methods: {
        submit() {
         this.resource.saveAlt(this.user);
         // submit to the "alternative" resource
       },
       fetchData(){
          this.$http.get("data.json").then(
            function(response){
              return response.json();
              // .json() is to parse the jason
              // The response is a promise not object
            }
          )
          // Get response data is Async, need another .then() to accept the data
          .then(function(data){
            console.log(data);
            var result = [];
            for(var k in data){
              result.push(data[k]);
            }
            this.users = result;
          });
       }
     },
     created() {
       const customAction={
         saveAlt:{method: "POST",url:"alternative.json"}
       };
       // create quick resources with new URL
       this.resource = this.$resource("data.json",{},customAction);
       // pass data field into $resource
     }
    }
</script>

```

##### template URLS:

```
<script>
    export default {
      data: function(){
        return {
          user: {
            username: "",
            email: ""
          },
          users: [],
          resource: {},
          node: "data"
        };
      },
      methods: {
       fetchData(){
          this.resource.getData({node: this.node})
          <!-- Replace the node by node in data -->
          .then(
            function(response){
              return response.json();
              // .json() is to parse the jason
              // The response is a promise not object
            }
          )
          .then(function(data){
            console.log(data);
            var result = [];
            for(var k in data){
              result.push(data[k]);
            }
            this.users = result;

          });
       }
     },
     created() {
       const customAction={
         saveAlt:{method: "POST",url:"alternative.json"},
         getData: {method: "GET"}
       };
       // create quick resources with new URL
       this.resource = this.$resource("{node}.json",{},customAction);
       // pass data field into $resource by {node}
     }
    }
</script>
```
