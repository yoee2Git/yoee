import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6f942219 = () => interopDefault(import('../pages/note.vue' /* webpackChunkName: "pages/note" */))
const _488d2924 = () => interopDefault(import('../pages/notes/Git常用命令速查表.vue' /* webpackChunkName: "pages/notes/Git常用命令速查表" */))
const _ee373b32 = () => interopDefault(import('../pages/notes/Middleware.vue' /* webpackChunkName: "pages/notes/Middleware" */))
const _272c8030 = () => interopDefault(import('../pages/notes/Vue中的nextTick.vue' /* webpackChunkName: "pages/notes/Vue中的nextTick" */))
const _7c873b9a = () => interopDefault(import('../pages/notes/vue插槽-vslot.vue' /* webpackChunkName: "pages/notes/vue插槽-vslot" */))
const _13d02630 = () => interopDefault(import('../pages/notes/vue生命周期钩子函数.vue' /* webpackChunkName: "pages/notes/vue生命周期钩子函数" */))
const _2971a88a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/note",
    component: _6f942219,
    name: "note"
  }, {
    path: "/notes/Git常用命令速查表",
    component: _488d2924,
    name: "notes-Git常用命令速查表"
  }, {
    path: "/notes/Middleware",
    component: _ee373b32,
    name: "notes-Middleware"
  }, {
    path: "/notes/Vue中的nextTick",
    component: _272c8030,
    name: "notes-Vue中的nextTick"
  }, {
    path: "/notes/vue插槽-vslot",
    component: _7c873b9a,
    name: "notes-vue插槽-vslot"
  }, {
    path: "/notes/vue生命周期钩子函数",
    component: _13d02630,
    name: "notes-vue生命周期钩子函数"
  }, {
    path: "/",
    component: _2971a88a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
