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
		path: '/article',
		component: () => import('../views/main.vue'),
		meta: "文章管理",
		children: [
			{
				path: "/",
				redirect: '/article/articleList',
				meta: "文章管理-文章列表",
				component: () => import('../components/article/articleList.vue'),
			},
			{
				path: "/article/articleList",
				name: "文章列表",
				meta: "文章管理-文章列表",
				component: () => import('../components/article/articleList.vue'),
			},			
			{
				path: "/article/quilledit",
				name: "文章发布",
				meta: "文章管理-文章发布",
				component: () => import('../components/article/quilledit.vue'),
			},

		]
	},
	{
		path: '/user',
		component: () => import('../views/main.vue'),
		meta: "用户管理",
		children: [
			{
				path: "/user/userList",
				name: "用户列表",
				meta: "用户管理-用户列表",
				component: () => import('../components/user/userList.vue'),
			},
			{
				path: "/user/userManner",
				name: "用户发布",
				meta: "用户管理-用户发布",
				component: () => import('../components/user/userManner.vue'),
			},

		]
	},
	{
		path: '/news',
		component: () => import('../views/main.vue'),
		meta: "消息管理",
		children: [
			{
				path: "/news/newsList",
				name: "消息列表",
				meta: "消息管理-消息列表",
				component: () => import('../components/news/newsList.vue'),
			}



		]
	},
	{
		path: '/patent',
		component: () => import('../views/main.vue'),
		meta: "专利管理",
		children: [
			{
				path: "/patent/patentList",
				name: "专利列表",
				meta: "专利管理-专利列表",
				component: () => import('../components/patent/patentList.vue'),
			},
			{
				path: "/patent/userpatentList",
				name: "用户专利列表",
				meta: "用户专利管理-用户专利列表",
				component: () => import('../components/patent/userpatentList.vue'),
			}



		]
	},

]

const router = new VueRouter({
	routes
})

export default router
