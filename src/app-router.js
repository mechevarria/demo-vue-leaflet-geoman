import Vue from 'vue'
import VueRouter from 'vue-router'
import AppHome from './components/Home.vue'
import AppMap from './components/Map.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: AppHome,
    name: 'Home'
}, {
    path: '/map',
    component: AppMap,
    name: 'Map'
}, {
    path: '*',
    redirect: '/'
}]

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'c-sidebar-nav-link-primary'
})

export default router