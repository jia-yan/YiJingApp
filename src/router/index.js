import Vue from 'vue'
import VueRouter from 'vue-router'
// const ShouYe = () => import('./../components/comment/shouye/ShouYe.vue')
// const Chat = () => import('./../components/comment/chat/Chat.vue')
// const TongXun = () => import('./../components/comment/tongxunlu/TongXun.vue')
// const Set = () => import('./../components/comment/set/Set.vue')

import ShouYe from './../components/comment/shouye/ShouYe.vue'
import Chat from './../components/comment/chat/Chat.vue'
import TongXun from './../components/comment/tongxunlu/TongXun.vue'
import Set from './../components/comment/set/Set.vue'
import Publish from './../components/comment/publish/Publish.vue'

import FirstHeader from './../components/Header/FirstHeader.vue'
import SecendHeader from './../components/Header/SecendHeader.vue'
import ThirdHeader from './../components/Header/ThirdHeader.vue'
import FourHeader from './../components/Header/FourHeader.vue'
import FiveHeader from './../components/Header/FiveHeader.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    redirect: '/shouye'
  },
	{
	  path: '/shouye',
	  name: 'ShouYe',
	  //component: ShouYe
		components: {
			header: FirstHeader,
			default: ShouYe
		}
	},
	{
	  path: '/chat',
	  name: 'Chat',
	  //component: Chat 
		components: {
			header: SecendHeader,
			default: Chat
		}
	},
	{
	  path: '/tongxunlu',
	  name: 'TongXun',
	  //component: TongXun//这里的component 千万不要写出components
		components: {
			header: ThirdHeader,
			default: TongXun
		}
	},
	{
	  path: '/set',
	  name: 'Set',
	  //component: Set
		components: {
			header: FourHeader,
			default: Set
		}
	},
	{
	  path: '/publish',
	  name: 'Publish',
	  //component: Set
		components: {
			header: FiveHeader,
			default: Publish
		}
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
	linkActiveClass: 'mui-active'//覆盖默认的路由高亮的类 默认的路由高亮的类叫做 router-link-active
})

export default router
