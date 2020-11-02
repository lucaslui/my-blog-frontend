import Home from "../components/pages/home/Home.jsx";
import Configuration from "../components/pages/Configuration.jsx";

var routes = [
  {
    path: "/home",
    name: "Página Principal",
    icon: "fas fa-chart-bar",
    component: Home,
    layout: "/main"
  },
  {
    path: "/configuration",
    name: "Configuração",
    icon: "fas fa-cog",
    component: Configuration,
    layout: "/main"
  }
];

export default routes;
