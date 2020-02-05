import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/user/Auth'
import Login from '@/components/user/Login'
import Posts from '@/components/user/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'auth',
		component: Auth,
		redirect: '/login',
		children: [
			{
				path: 'login',
				component: Login
			},
			{
				path: 'posts',
				component: Posts
			}
		]
    }
  ]
})
