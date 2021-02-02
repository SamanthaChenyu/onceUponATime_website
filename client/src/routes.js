import { Home, PrivacyPolicy } from "./Page";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    breadcrumbName: "Home"
  },
  {
    path: "/PrivacyPolicy",
    component: PrivacyPolicy,
    breadcrumbName: "PrivacyPolicy"
  }
];

export default routes;
