import Home from "../contents/Home.jsx";
import Admin from "../contents/Admin.jsx";
import Configuration from "../contents/Configuration.jsx";

var routes = [
  {
    path: "/home",
    layout: "/main",
    name: "Página Principal",
    component: Home
  },
  {
    path: "/admin",
    layout: "/main",
    name: "Administração",
    component: Admin
  },
  {
    path: "/config",
    layout: "/main",
    name: "Configuração",
    component: Configuration
  }
];

export default routes;
