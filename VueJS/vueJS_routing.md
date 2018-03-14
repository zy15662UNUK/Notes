##### Installing the vue-router:
- `npm install --save vue-router`
- vue-router is to switch different components in an single page
##### Setting Up and Loading Routes
- first write the route object in the routes.js:

```
import User from "./components/user/User.vue";
import Home from "./components/Home.vue";
// import components
export const routes = [
  {path: "/user",component: User},
  // Whenever we visit our domain/user, load the component "User"
  {path: "",component: Home}
  // Whenever we visit our domain, load the component "User"
];
```
- Then introduce and set up routes in main.js:

```
import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import {routes} from "./routes.js"
Vue.use(VueRouter);
const router = new VueRouter({
  routes
  // The imported routes object
});
new Vue({
  el: '#app',
  router,
  // The new VueRouter instance
  render: h => h(App)
})
// Only one instance for single page application
```
- Finally introduces router in to App.vue by <router-view>

```
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <router-view ></router-view>
            </div>
        </div>
    </div>
</template>
```

##### Understanding Routing Modes (Hash vs History)
- `http://localhost:8080/#/User`--->default mode
  1. `http://localhost:8080` is sent to the server side
  2. `User`is handed  over to the running js application and maybe handled by application
- history mode: without the /#/ hash tage

##### Navigating with Router Links: switch between different routers by link
- Create a Header component, the router is navigated by <router-link to="/pageLink">

```
<template>
  <ul class="nav justify-content-end">
    <li class="nav-item">
      <router-link to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/User">User</router-link>
    </li>
    <!-- click link doesn't reload the page, better than <a></a> -->
  </ul>
</template>
```
- Introduce Header component into App.vue:

```
<appHeader></appHeader>
<script>
    import Header from "./components/Header.vue"
    export default {
      components: {
        appHeader: Header
      }
    }
</script>
```

##### Styling Active Links
- In App.vue:

```
<router-link tag="li" to="/" exact active-class="active"><a>Home</a></router-link>
<router-link tag="li" to="/User" active-class="active"><a>User</a></router-link>
```
- tag = "li" styles the <router-link> as <li>
- <a>Home</a> the anchor has no href attr
- `exact` set the to="/" to be exact match of "/", make sure the active class gets attached only when necessary
- `active-class="active"` set the class when link is actived

##### Navigating from Code (Imperative Navigation)
- In Home.vue:

```
<template>
  <div class="">
    <h1>The User Page</h1>
    <hr>
    <button @click="navigateToHome" class="btn btn-primary" type="button" name="button">To Home</button>
  </div>
</template>
<script>
  export default{
    methods: {
      navigateToHome() {
        this.$router.push("/");
        // push the next route to the stack of route
      }
    }
  }
</script>
```
- `this.$router.push("URLtarget")`

##### Setting Up Route Parameters
- Make the routes dynamic
- In routes.js:

```
export const routes = [
  {path: "/user/:id",component: User},
  // Whenever we visit our domain/user, load the component "User"
  // "/user/:id" means anything after user/ is the id name
  {path: "",component: Home}
  // Whenever we visit our domain, load the component "User"
];
```
- "/user/:id" means anything after user/ is the id name
- Now in the Header.vue. If we set
`<router-link tag="li" to="/User/19" active-class="active"><a>User</a></router-link>`
Then the URL of User component will be "/User/19" rather than "/User"

##### Fetching and Using Route Parameters
- In User.vue:

```
data: function(){
  return {
    id: this.$route.params.id
    // id here is the path: "/user/:id" in routes.js
  };
},
```
- Now if we manully change the id in browser, the id in data will also be updated

##### Reacting to Changes in Route Parameters
- If we have to links targets to one component, they will have the same id demonstrated, since the component is the same
- Need to "watch" the $route change in User.vue:

```
watch: {
  "$route": function(to,from){
    this.id = to.params.id;
  }
},
```
- Once $route is changed, execute the function

##### Setting Up Child Routes (Nested Routes)
- nested routes as sub-routes in one route
- First: set up children routes in routes.js, by adding 'children:[]' in parents routes

```
import User from "./components/user/User.vue";
import UserStart from "./components/user/UserStart.vue";
import UserEdit from "./components/user/UserEdit.vue";
import UserDetail from "./components/user/UserDetail.vue";
import Home from "./components/Home.vue";
// import components
export const routes = [
  {path: "/user",component: User,children: [
    {path:"",component:UserStart},//This is the default one "http://localhost:8080/#/User"
    {path:":id",component:UserDetail},//access by "http://localhost:8080/#/User/AnyNum"
    {path:":id/edit",component:UserEdit}//access by"http://localhost:8080/#/User/AnyNum/edit"
    // three sub components for the user componenet
    // Now User.vue has three sub-routes
  ]},
  // Whenever we visit our domain/user, load the component "User"
  // "/user/:id" means anything after user/ is the id name
  {path: "",component: Home}
  // Whenever we visit our domain, load the component "User"
];
```
- Then add <router-view> in User.vue, the default page will then be shown

```
<template>
  <div class="">
    <h1>The User Page</h1>
    <hr>
    <button @click="navigateToHome" class="btn btn-primary" type="button" name="button">To Home</button>
    <hr>
    <router-view></router-view>
    <!-- To load sub-routes of User.vue -->
  </div>
</template>
```

##### Navigating to Nested Routes
- In UserStart(default page) use <route-link> to navigate

```
<ul class="list-group">
    <router-link tag="li" to="/user/1"class="list-group-item" style="cursor: pointer">User 1</router-link>
    <router-link tag="li" to="/user/2"class="list-group-item" style="cursor: pointer">User 2</router-link>
    <router-link tag="li" to="/user/3"class="list-group-item" style="cursor: pointer">User 3</router-link>
    <!-- they are all targed to UserDetail component, since {path:":id",component:UserDetail} was set for UserDetail -->
</ul>
```
- If we want to see the id for each page, in UserDetail.vue, use `{{$route.params.id}}`:

```
<template>
  <div class="">
    <h3>Some User Details</h3>
    <hr>
    <p>User loaded ID: {{$route.params.id}}</p>
    <!-- Extract ids in the URL -->
  </div>
</template>
```
##### Making Router Links more Dynamic
- <route-link> as a button, and :to="JS string". In UserDetail.vue:

```
<template>
  <div class="">
    <h3>Some User Details</h3>
    <hr>
    <p>User loaded ID: {{$route.params.id}}</p>
    <!-- Extract ids in the URL -->
    <router-link :to="'/user/'+$route.params.id+'/edit'" class="btn btn-primary" tag="button">UserEdit</router-link>
  </div>
</template>
```

##### A Better Way of Creating Links - With Named Routes
- We can give each route a name, and we can navigate through link
- In routes.js we give name for each sub-route

```
export const routes = [
  {path: "/user",component: User,children: [
    {path:"",component:UserStart,name:"UserStart"},//This is the default one "http://localhost:8080/#/User"
    {path:":id",component:UserDetail,name:"UserDetail"},//access by "http://localhost:8080/#/User/AnyNum"
    {path:":id/edit",component:UserEdit,name:"UserEdit"}//access by"http://localhost:8080/#/User/AnyNum/edit"
    // three sub components for the user componenet
    // Now User.vue has three sub-routes
  ]},
  // Whenever we visit our domain/user, load the component "User"
  // "/user/:id" means anything after user/ is the id name
  {path: "",component: Home,name:"Home"}
  // Whenever we visit our domain, load the component "User"
];
```
- We can use the name in different places:
- In UserDetail.vue:

```
<template>
  <div class="">
    <h3>Some User Details</h3>
    <hr>
    <p>User loaded ID: {{$route.params.id}}</p>
    <!-- Extract ids in the URL -->
    <router-link :to="'/user/'+$route.params.id+'/edit'" class="btn btn-primary" tag="button">UserEdit</router-link>
    <router-link :to="{ name: 'UserEdit', params: {id: $route.params.id}}" class="btn btn-primary">UserEdit2</router-link>
  </div>
</template>
```
- To buttons have the same function, but the second one is more brief
- In User.vue:

```
methods: {
  navigateToHome() {
    this.$router.push({name: "Home"});
    // push to the stack of route
  }
}
```
- can also use {name: "name"} on this.$router.push()

##### Using Query Parameters
- `&b=oedbe` at the end of URL
- optional data you pass with route
- Set up query Parameters: In <route-link>

```
<router-link :to="{ name: 'UserEdit', params: {id: $route.params.id},query: {locale:'en',q:100}}" class="btn btn-primary">UserEdit2</router-link>
```
- Extract query Parameters: `{{$route.query.papaName}}`

```
<p>locale: {{$route.query.locale}}</p>
<p>Analytics: {{$route.query.q}}</p>
```

##### Multiple Router Views (Named Router Views)
- we can name our <router-view> to have multiple <router-view> in App.vue:

```
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <router-view name="header-top"></router-view>
                <router-view ></router-view>
                <!-- This will be the default route to be shown -->
                <router-view name="header-bottom"></router-view>

            </div>
        </div>
    </div>
</template>
```
- Then we can assign diff components to these routes in different routes in routes.js:

```
import Header from "./components/Header.vue";
export const routes = [
  {path: "/user",components: {
    default: User,
    'header-bottom': Header
    // Header component is placed in 'header-bottom' <router-view>
  },children: [
    {path:"",component:UserStart,name:"UserStart"},//This is the default one "http://localhost:8080/#/User"
    {path:":id",component:UserDetail,name:"UserDetail"},//access by "http://localhost:8080/#/User/AnyNum"
    {path:":id/edit",component:UserEdit,name:"UserEdit"}//access by"http://localhost:8080/#/User/AnyNum/edit"
    // three sub components for the user componenet
    // Now User.vue has three sub-routes
  ]},
  // Whenever we visit our domain/user, load the component "User"
  // "/user/:id" means anything after user/ is the id name
  {path: "",components: {
    default: Home,
    'header-top': Header
    // Header component is placed in 'header-top' <router-view>
  },name:"Home",}
  // Whenever we visit our domain, load the component "User"
];
```
- In this section of code

```
{path: "",components: {
  default: Home,
  'header-top': Header
  // Header component is placed in 'header-top' <router-view>
},name:"Home",}
```
- For the Home page route, Home component is placed in the default <router-view>, Header component is placed in the <router-view> named "header-top"

##### Redirecting
- what if user enter anything that is not covered in the app in the URL
- Adding an new route in const routes in route.js

```
{
  path: "*", redirect: {name: "Home"}
}
```
- * represents all the input of URL that is not included in the App


##### Animating Route Transitions

```
<transition name="slide" mode="out-in">
  <router-view ></router-view>
</transition>
```
- Include <router-view> in <transition> tag

##### Protecting Routes with Guards
- want a control if a user is allowed to enter a certain route or if he is allowed to leave it

##### Using the "beforeEnter" Guard
- 3 different places where we can set up is a user allowed to enter a route check, 1 place we may set up is  a user allowed to leave the check
- 1st place to set up enter a route check---> main.js, gets executed on each routing

```
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
```
- 2nd place to set up enter a route check-->route.js: protect certain route

```
{path:":id",component:UserDetail,name:"UserDetail",
beforeEnter: function(to,from,next){
  console.log("inside route setup");
  next();
}}
```
- only protct the UserDetail
- 3rd to set up enter a route check-->component navigate to

```
<template>
  <div class="">
    <h3>Some User Details</h3>
    <hr>
    <p>User loaded ID: {{$route.params.id}}</p>
    <!-- Extract ids in the URL -->
    <router-link :to="'/user/'+$route.params.id+'/edit'" class="btn btn-primary" tag="button">UserEdit</router-link>
    <router-link :to="{ name: 'UserEdit', params: {id: $route.params.id},query: {locale:'en',q:100}}" class="btn btn-primary">UserEdit2</router-link>
  </div>
</template>
<script>
  beforeRouteEnter(to,from,next){
    next();
  }
</script>
```

##### Using the "beforeLeave" Guard
- set up in the component you are going to leave

```
<button @click="confirmed = true" class="btn btn-primary" type="button" name="button">Confirm</button>

<script>
export default{
  data: function(){
    return {
      confirmed: false
    };
  },
  beforeRouteLeave: function(to,from,next){
    if(this.confirmed){
      // if click confirm, allow to leave
      next();
    }else{
      if(confirm("Are you sure you want to leave")){
        // ask users if they want to leave
        // if yes, then keep going
        next();
      }else{
        // if no, stay on current page
        next(false);
      }
    }
  }
}
</script>
```

##### Loading Routes Lazily
- only load the home page components at the beginning, then load the others once needed
- in routes.js, only inport the homepage component

```
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
// import components
const User = function(resolve){
  require.ensure(["./components/user/User.vue"],function(){
    resolve(require("./components/user/User.vue"));
  });
};
const UserEdit = function(resolve){
  require.ensure(["./components/user/UserEdit.vue"],function(){
    resolve(require("./components/user/UserEdit.vue"));
  });
};
const UserStart = function(resolve){
  require.ensure(["./components/user/UserDetail.vue"],function(){
    resolve(require("./components/user/UserDetail.vue"));
  });
};
const UserDetail = function(resolve){
  require.ensure(["./components/user/UserStart.vue"],function(){
    resolve(require("./components/user/UserStart.vue"));
  });
};
```
- User,UserEdit,UserStart,UserDetail are loaded async
