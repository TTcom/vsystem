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
    path: "/vue",
    component: Main,
    meta: "vue",
    redirect: "/vue/vueRouter",
    children: [
      {
        path: "/vue/vueRouter",
        name: "vue路由",
        meta: "vue-vue路由",
        component: () => import("../components/vue/vueRouter.vue")
      }
    ]
  },
  {
    path: "/typescript",
    component: Main,
    meta: "typescript",
    redirect: "/typescript/main",
    children: [
      {
        path: "/typescript/main",
        name: "typescript概述",
        meta: "typescript-typescript概述",
        component: () => import("../components/typescript/typescript.vue")
      },
      {
        path: "/typescript/ts_symbol",
        name: "typescript中的符号",
        meta: "typescript-typescript中的符号",
        component: () => import("../components/typescript/ts_symbol.vue")
      }
    ]
  },
  // {
  //   path: "/article",
  //   component: Main,
  //   meta: "文章管理",
  //   redirect: "/article/articleList",
  //   children: [
  //     {
  //       path: "/article/articleList",
  //       name: "文章列表",
  //       meta: "文章管理-文章列表",
  //       component: () => import("../components/article/articleList.vue")
  //     },
  //     {
  //       path: "/article/quilledit",
  //       name: "文章发布",
  //       meta: "文章管理-文章发布",
  //       component: () => import("../components/article/quilledit.vue")
  //     }
  //   ]
  // },
  {
    path: "/commonfn",
    component: Main,
    meta: "常用函数",
    children: [
      {
        path: "/commonfn/commonfnList",
        name: "防抖",
        meta: "常用函数-防抖",
        component: () => import("../components/commonfn/commonfnList.vue")
      }
    ]
  },
  {
    path: "/cssAnimation",
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
  },
  {
    path: "/js",
    component: Main,
    meta: "js",
    children: [
      {
        path: "/js/base",
        name: "基础知识",
        meta: "js-基础知识",
        component: () => import("../components/javascript/base.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
