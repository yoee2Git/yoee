import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _243c672c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _72706d23 = () => interopDefault(import('../pages/note.vue' /* webpackChunkName: "pages/note" */))
const _289b7778 = () => interopDefault(import('../pages/notes/Git常用命令速查表.vue' /* webpackChunkName: "pages/notes/Git常用命令速查表" */))
const _005ca464 = () => interopDefault(import('../pages/notes/JavaScript继承.vue' /* webpackChunkName: "pages/notes/JavaScript继承" */))
const _5473231e = () => interopDefault(import('../pages/notes/Middleware.vue' /* webpackChunkName: "pages/notes/Middleware" */))
const _3d504d80 = () => interopDefault(import('../pages/notes/vuex之Action.vue' /* webpackChunkName: "pages/notes/vuex之Action" */))
const _eb67309a = () => interopDefault(import('../pages/notes/vuex之Mutation.vue' /* webpackChunkName: "pages/notes/vuex之Mutation" */))
const _632f9b66 = () => interopDefault(import('../pages/notes/vue生命周期钩子函数.vue' /* webpackChunkName: "pages/notes/vue生命周期钩子函数" */))
const _7406aa69 = () => interopDefault(import('../pages/notes/vue项目中使用markdown.vue' /* webpackChunkName: "pages/notes/vue项目中使用markdown" */))
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
    path: "/notes/Middleware",
    component: _5473231e,
    name: "notes-Middleware"
  }, {
    path: "/notes/vuex之Action",
    component: _3d504d80,
    name: "notes-vuex之Action"
  }, {
    path: "/notes/vuex之Mutation",
    component: _eb67309a,
    name: "notes-vuex之Mutation"
  }, {
    path: "/notes/vue生命周期钩子函数",
    component: _632f9b66,
    name: "notes-vue生命周期钩子函数"
  }, {
    path: "/notes/vue项目中使用markdown",
    component: _7406aa69,
    name: "notes-vue项目中使用markdown"
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
