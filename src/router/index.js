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
    component: () => import( '../views/main.vue'),
	children:[
		{
			  path: "/",
			  redirect: '/main/people',
			  meta:"人员管理",
			  component: () => import('../components/people.vue'),
		},        	   
		{
			  path: "/main/people",
			  meta:"人员管理",
			  component: () => import('../components/people.vue'),
		},
		{
			  path: "/main/article",
			  meta:"文章管理",
			  component: () => import('../components/article.vue'),
		},
	]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
