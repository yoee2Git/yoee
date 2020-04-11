import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '@/views/About'
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
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: '/note',
		name: 'Note',
		component: Note
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
