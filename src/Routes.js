import Dashboard from "./Components/Dashboard";
import User from "./Components/User.js";

//here the Routes, linked to the page example we have created (Dashboard.js and User.js)
// If you wanna create more pages, add here to the routes
const Routes = [
  {
    path: "/",
    component: Dashboard
  },
  {
    path: "/user",
    component: User
  }
];

export default Routes;