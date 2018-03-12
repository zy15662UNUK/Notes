import User from "./components/user/User.vue";
import Home from "./components/Home.vue";
// import components
export const routes = [
  {path: "/user/:id",component: User},
  // Whenever we visit our domain/user, load the component "User"
  // "/user/:id" means anything after user/ is the id name
  {path: "",component: Home}
  // Whenever we visit our domain, load the component "User"
];
