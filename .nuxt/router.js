import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _243c672c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _72706d23 = () => interopDefault(import('../pages/note.vue' /* webpackChunkName: "pages/note" */))
const _289b7778 = () => interopDefault(import('../pages/notes/Git常用命令速查表.vue' /* webpackChunkName: "pages/notes/Git常用命令速查表" */))
const _005ca464 = () => interopDefault(import('../pages/notes/JavaScript继承.vue' /* webpackChunkName: "pages/notes/JavaScript继承" */))
const _30ba3eaa = () => interopDefault(import('../pages/notes/JavaScript防抖和节流.vue' /* webpackChunkName: "pages/notes/JavaScript防抖和节流" */))
const _09ffab40 = () => interopDefault(import('../pages/notes/JS运算符优先级.vue' /* webpackChunkName: "pages/notes/JS运算符优先级" */))
const _5473231e = () => interopDefault(import('../pages/notes/Middleware.vue' /* webpackChunkName: "pages/notes/Middleware" */))
const _6e88010e = () => interopDefault(import('../pages/notes/Nginx基础入门、安装、配置.vue' /* webpackChunkName: "pages/notes/Nginx基础入门、安装、配置" */))
const _3d504d80 = () => interopDefault(import('../pages/notes/vuex之Action.vue' /* webpackChunkName: "pages/notes/vuex之Action" */))
const _eb67309a = () => interopDefault(import('../pages/notes/vuex之Mutation.vue' /* webpackChunkName: "pages/notes/vuex之Mutation" */))
const _a405c994 = () => interopDefault(import('../pages/notes/Vuex是什么.vue' /* webpackChunkName: "pages/notes/Vuex是什么" */))
const _632f9b66 = () => interopDefault(import('../pages/notes/vue生命周期钩子函数.vue' /* webpackChunkName: "pages/notes/vue生命周期钩子函数" */))
const _7406aa69 = () => interopDefault(import('../pages/notes/vue项目中使用markdown.vue' /* webpackChunkName: "pages/notes/vue项目中使用markdown" */))
const _627cb8ad = () => interopDefault(import('../pages/notes/前端面试之彻底搞懂this指向.vue' /* webpackChunkName: "pages/notes/前端面试之彻底搞懂this指向" */))
const _43f441f1 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _243c672c,
    name: "about"
  }, {
    path: "/note",
    component: _72706d23,
    name: "note"
  }, {
    path: "/notes/Git常用命令速查表",
    component: _289b7778,
    name: "notes-Git常用命令速查表"
  }, {
    path: "/notes/JavaScript继承",
    component: _005ca464,
    name: "notes-JavaScript继承"
  }, {
    path: "/notes/JavaScript防抖和节流",
    component: _30ba3eaa,
    name: "notes-JavaScript防抖和节流"
  }, {
    path: "/notes/JS运算符优先级",
    component: _09ffab40,
    name: "notes-JS运算符优先级"
  }, {
    path: "/notes/Middleware",
    component: _5473231e,
    name: "notes-Middleware"
  }, {
    path: "/notes/Nginx基础入门、安装、配置",
    component: _6e88010e,
    name: "notes-Nginx基础入门、安装、配置"
  }, {
    path: "/notes/vuex之Action",
    component: _3d504d80,
    name: "notes-vuex之Action"
  }, {
    path: "/notes/vuex之Mutation",
    component: _eb67309a,
    name: "notes-vuex之Mutation"
  }, {
    path: "/notes/Vuex是什么",
    component: _a405c994,
    name: "notes-Vuex是什么"
  }, {
    path: "/notes/vue生命周期钩子函数",
    component: _632f9b66,
    name: "notes-vue生命周期钩子函数"
  }, {
    path: "/notes/vue项目中使用markdown",
    component: _7406aa69,
    name: "notes-vue项目中使用markdown"
  }, {
    path: "/notes/前端面试之彻底搞懂this指向",
    component: _627cb8ad,
    name: "notes-前端面试之彻底搞懂this指向"
  }, {
    path: "/",
    component: _43f441f1,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
