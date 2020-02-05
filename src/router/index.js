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

import PersonData from './../components/DrawerContent/contain/PersonData.vue'
import DynState from './../components/DrawerContent/contain/DynState.vue'
import MyJoin from './../components/comment/set/contain/MyJoin.vue'
import Visitor from '../components/DrawerContent/contain/Visitor.vue'
import History from '../components/DrawerContent/contain/History.vue'
import MyPublish from '../components/DrawerContent/contain/MyPublish.vue'
import SignIn from '../components/DrawerContent/contain/SignIn/SignIn.vue'
import MyShoucang from '../components/DrawerContent/contain/MyShoucang.vue'
import DownManage from '../components/DrawerContent/contain/DownManage.vue'
import Looking from '../components/DrawerContent/contain/Looking.vue'
import Review from '../components/comment/set/contain/Review.vue'
import MakeIn from '../components/comment/set/contain/MakeIn.vue'
import Support from '../components/comment/set/contain/Support.vue'
import MyClass from '../components/comment/set/contain/MyClass.vue'
import MyTask from '../components/comment/chat/contain/MyTask.vue'
import MyAccount from '../components/comment/set/contain/MyAccount.vue'
import YinHangCard from '../components/comment/set/contain/YinHangCard.vue'

import FirstHeader from './../components/Header/FirstHeader.vue'
import SecendHeader from './../components/Header/SecendHeader.vue'
import ThirdHeader from './../components/Header/ThirdHeader.vue'
import FourHeader from './../components/Header/FourHeader.vue'
import FiveHeader from './../components/Header/FiveHeader.vue'

import TabBar from './../components/tabBar/TabBar.vue'
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
			tabbar: TabBar,
			default: ShouYe
		}
	},
	{
	  path: '/chat',
	  name: 'Chat',
	  //component: Chat 
		components: {
			header: SecendHeader,
			tabbar: TabBar,
			default: Chat
		}
	},
	{
	  path: '/tongxunlu',
	  name: 'TongXun',
	  //component: TongXun//这里的component 千万不要写出components
		components: {
			header: ThirdHeader,
			tabbar: TabBar,
			default: TongXun
		}
	},
	{
	  path: '/set',
	  name: 'Set',
	  //component: Set
		components: {
			header: FourHeader,
			tabbar: TabBar,
			default: Set
		}
	},
	{
	  path: '/publish',
	  name: 'Publish',
	  //component: Set
		components: {
			header: FiveHeader,
			tabbar: TabBar,
			default: Publish
		}
	},
	{
	  path: '/persondata',
	  name: 'PersonData',
		components: {
			//header: FiveHeader,
			default: PersonData
		}
	},
	{
	  path: '/dynstate',
	  name: 'DynState',
		components: {
			//header: FiveHeader,
			default: DynState
		}
	},
	{
	  path: '/myjoin',
	  name: 'MyJoin',
		components: {
			//header: FiveHeader,
			default: MyJoin
		}
	},
	{
	  path: '/visitor',
	  name: 'Visitor',
		components: {
			//header: FiveHeader,
			default: Visitor
		}
	},
	{
	  path: '/history',
	  name: 'History',
		components: {
			//header: FiveHeader,
			default: History
		}
	},
	{
	  path: '/mypublish',
	  name: 'MyPublish',
		components: {
			//header: FiveHeader,
			default: MyPublish
		}
	},
	{
	  path: '/signin',
	  name: 'SignIn',
		components: {
			//header: FiveHeader,
			default: SignIn
		}
	},
	{
	  path: '/shoucang',
	  name: 'MyShoucang',
		components: {
			//header: FiveHeader,
			default: MyShoucang
		}
	},
	{
	  path: '/downmanage',
	  name: 'DownManage',
		components: {
			//header: FiveHeader,
			default: DownManage
		}
	},
	{
	  path: '/looking',
	  name: 'Looking',
		components: {
			//header: FiveHeader,
			default: Looking
		}
	},
	{
	  path: '/review',
	  name: 'Review',
		components: {
			//header: FiveHeader,
			default: Review
		}
	},
	{
	  path: '/makein',
	  name: 'MakeIn',
		components: {
			//header: FiveHeader,
			default: MakeIn
		}
	},
	{
	  path: '/support',
	  name: 'Support',
		components: {
			//header: FiveHeader,
			default: Support
		}
	},
	{
	  path: '/myclass',
	  name: 'MyClass',
		components: {
			//header: FiveHeader,
			default: MyClass
		}
	},
	{
	  path: '/mytask',
	  name: 'MyTask',
		components: {
			//header: FiveHeader,
			default: MyTask
		}
	},
	{
	  path: '/myaccount',
	  name: 'MyAccount',
		components: {
			//header: FiveHeader,
			default: MyAccount
		},
		children: [
			{
			  path: "yinhangcard",
			  component: YinHangCard
			},
		]
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
	linkActiveClass: 'mui-active'//覆盖默认的路由高亮的类 默认的路由高亮的类叫做 router-link-active
})
export default router
