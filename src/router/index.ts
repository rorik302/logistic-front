import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { authRoutes } from "@/router/auth"

const routes: RouteRecordRaw[] = [
  ...authRoutes,
  {
    path: "/",
    redirect: { name: "login" }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _from, next) => {
  let documentTitle = ""
  if (to.meta.title) {
    documentTitle += to.meta.title
  }
  document.title = documentTitle

  next()
})

export default router
