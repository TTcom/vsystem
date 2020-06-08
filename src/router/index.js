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
        path: "/css/cssAnimation",
        name: "cssAnimation",
        meta: "css-动画整理",
        component: () => import("../components/css/cssAnimation.vue")
      }

      // {
      //   path: "/user/userManner",
      //   name: "用户发布",
      //   meta: "用户管理-用户发布",
      //   component: () => import("../components/user/userManner.vue")
      // }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
