import { Home } from "pages";

import { Group } from "@material-ui/icons";

const appRoutes = [
  {
    path: "/home",
    sidebarName: "Users",
    navbarName: "Users",
    icon: Group,
    component: Home
  },
  { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

export default appRoutes;
