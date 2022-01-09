import { RouteRecordRaw } from "vue-router"

export const authRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("@/pages/auth/LoginPage.vue"),
    name: "login",
    meta: {
      layout: "AuthLayout",
      title: "Авторизация"
    }
  }
]
