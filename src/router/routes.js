const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue")
  },
  {
    path: "*",
    component: () => import("pages/_.vue")
  }
];

export default routes;
