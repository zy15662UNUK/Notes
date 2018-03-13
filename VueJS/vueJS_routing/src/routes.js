import User from "./components/user/User.vue";
import UserStart from "./components/user/UserStart.vue";
import UserEdit from "./components/user/UserEdit.vue";
import UserDetail from "./components/user/UserDetail.vue";
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
// import components
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
