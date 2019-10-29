import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'sign',
    component: () => import('../views/sign.vue')
  },
  {
    path: '/main',
    name: 'main',
	meta:"文章管理",
    component: () => import( '../views/main.vue'),
	children:[
		{
			  path: "/",
			  redirect: '/main/articleList',
			  meta:"文章列表",
			  component: () => import('../components/article/articleList.vue'),
		},        	   
		{
			  path: "/main/articleList",
			  meta:"文章列表",
			  component: () => import('../components/article/articleList.vue'),
		},
		{
			  path: "/main/writeArticle",
			  meta:"文章发布",
			  component: () => import('../components/article/writeArticle.vue'),
		},
		
	]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
