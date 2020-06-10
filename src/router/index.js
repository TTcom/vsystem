import Vue from "vue"
import VueRouter from "vue-router"
import Main from "../views/main.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "sign",
    component: () => import("../views/sign.vue")
  },
  {
    path: "/article",
    component: Main,
    meta: "文章管理",
    children: [
      {
        path: "/article/articleList",
        name: "文章列表",
        meta: "文章管理-文章列表",
        component: () => import("../components/article/articleList.vue")
      },
      {
        path: "/article/quilledit",
        name: "文章发布",
        meta: "文章管理-文章发布",
        component: () => import("../components/article/quilledit.vue")
      }
    ]
  },
  {
    path: "/css",
    component: Main,
    meta: "动画整理",
    children: [
      {
        path: "/cssAnimation/solarSystem",
        name: "太阳系系统",
        meta: "动画整理-太阳系",
        component: () => import("../components/cssAnimation/solarSystem.vue")
      },
      {
        path: "/cssAnimation/someCollection",
        name: "css动画合集",
        meta: "动画整理-动画合集",
        component: () => import("../components/cssAnimation/someCollection.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
