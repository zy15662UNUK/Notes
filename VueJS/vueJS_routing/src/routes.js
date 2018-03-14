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
export const routes = [
  {path: "/user",components: {
    default: User,
    'header-bottom': Header
    // Header component is placed in 'header-bottom' <router-view>

  },children: [
    {path:"",component:UserStart,name:"UserStart"},//This is the default one "http://localhost:8080/#/User"
    {path:":id",component:UserDetail,name:"UserDetail",
    beforeEnter: function(to,from,next){
      console.log("inside route setup");
      next();
    }},//access by "http://localhost:8080/#/User/AnyNum"
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
  },name:"Home",},
  // Whenever we visit our domain, load the component "User"
  {
    path: "*", redirect: {name: "Home"}
  }
];
