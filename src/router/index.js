import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import asyncRouter from './dynamic.js'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
}, {
    path: '/login',
    component: Login
}, {
    path: '/home',
    redirect: '/homepage'
}]

const router = new VueRouter({
    routes
})

// router.addRoutes(asyncRouterMap)

router.beforeEach((to, from, next) => {
    if (to === '/') {
        next();
    } else {
        let token = window.localStorage.getItem('token');
        if (token === null || token === '') {
            next('/');
        } else {
            next();
        }
    }
})

// let role = window.localStorage.getItem('role');
let newDynamic = newRouter(asyncRouter, 1);
router.addRoutes(newDynamic);

function newRouter(dynamic, role) {
    return dynamic.filter(item => {
        if (item.children)
            item.children = newRouter(item.children, role)
        return item.meta.adminUserId.includes(role)
    })
}


export default router