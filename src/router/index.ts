import { createRouter, createWebHistory } from "vue-router";

import EventFormRouter from "@/views/EventForm/router";
import EditEventRouter from "@/views/EditEvent/router";

const routes = [
  // Main
  {
    path: "/",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Main",
        component: () => import("@/views/Main/Main.vue"),
      },
      {
        path: "/home",
        children: [
          {
            path: "",
            name: "FindHome",
            component: () => import("@/views/Main/FindHome.vue"),
          },
        ],
      },
      {
        path: "/tenant",
        children: [
          {
            path: "",
            name: "FindTenant",
            component: () => import("@/views/Main/FindTenant.vue"),
          },
        ],
      },
      {
        path: "/add",
        children: [
          {
            path: "",
            name: "AddProperty",
            component: () => import("@/views/Main/AddProperty.vue"),
          },
        ],
      },
      {
        path: "/search",
        children: [
          {
            path: "",
            name: "Search",
            component: () => import("@/views/Main/Search.vue"),
          },
        ],
      },
    ],
  },
  // Auth
  {
    path: "/auth",
    component: () => import("@/views/Auth/AuthLayout.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("@/views/Auth/Login.vue"),
      },
      {
        path: "signup",
        name: "Signup",
        component: () => import("@/views/Auth/Signup.vue"),
      },
    ],
  },
  // Home
  {
    path: "/home",
    component: () => import("@/views/Home/HomeLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home/Home.vue"),
      },
    ],
  },
  ...EventFormRouter,
  ...EditEventRouter,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
