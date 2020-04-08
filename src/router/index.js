import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Show from '@/views/Show.vue'
import Note from '@/views/Note'
import Aside from '@/views/Aside'

Vue.use(VueRouter);

const routes = [
	{
    path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/aside',
		name: 'Aside',
		component: Aside
	},
	{
		path: '/show',
		name: 'Show',
    component: Show,
    children: [
      {
      path: 'meitaun',
      component: () => import('@/components/show/Index.vue')
    }
  ]
	},
	{
		path: '/note',
		name: 'Note',
		component: Note,
		children: [
			{
				path: 'notejs',
				component: () => import('@/components/note/Index.vue')
			}
		]
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
