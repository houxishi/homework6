import Layout from '../views/layout/index.vue'

const asyncRouter = [{
    path: '/homepage',
    name: 'Dashboard',
    meta: { title: 'Dashboard', adminUserId: [1, 2, 3] },
    redirect: '/homepage/dashboard',
    component: Layout,
    children: [{
        path: 'intrudoce',
        name: '系统介绍',
        meta: { title: '系统介绍', icon: 'el-icon-star-off', adminUserId: [1, 2, 3] },
        component: () =>
            import ('../views/Introduce.vue'),
    }, {
        path: 'dashboard',
        name: 'Dashhboard',
        meta: { title: 'Dashboard', icon: 'el-icon-help', adminUserId: [1, 2, 3] },
        component: () =>
            import ('../views/Dashboard.vue'),
    }, {
        path: 'add',
        name: '添加商品',
        meta: { title: '添加商品', icon: 'el-icon-plus', adminUserId: [1, 2, 3] },
        component: () =>
            import ('../views/Add.vue'),
    }]
}, {
    path: '/homeconf',
    name: '首页配置',
    meta: { title: '首页配置', adminUserId: [1, 2, 3] },
    // redirect: '/homeconf/swiper',
    component: Layout,
    children: [{
        path: 'swiper',
        name: '轮播图配置',
        meta: { title: '轮播图配置', icon: 'el-icon-picture', adminUserId: [1, 2, 3] },
        component: () =>
            import ('../views/Swiper.vue'),
    }, {
        path: 'hot',
        name: '热销商品配置',
        meta: { title: '热销商品配置', icon: 'el-icon-s-promotion', adminUserId: [1, 2, 3] },
        component: () =>
            import ('../views/Hot.vue'),
    }, {
        path: 'new',
        name: '新品上线配置',
        meta: { title: '新品上线配置', icon: 'el-icon-s-opportunity', adminUserId: [1, 2, 3] },
        component: () =>
            import ('../views/New.vue'),
    }, {
        path: 'recommend',
        name: '为你推荐配置',
        meta: { title: '为你推荐配置', icon: 'el-icon-magic-stick', adminUserId: [1, 2] },
        component: () =>
            import ('../views/Recommend.vue'),
    }]
}, {
    path: '/homemana',
    name: '模块管理',
    meta: { title: '模块管理', adminUserId: [1, 2, 3] },
    // redirect: '/homemana/category',
    component: Layout,
    children: [{
        path: 'category',
        name: '分类管理',
        meta: { title: '分类管理', icon: 'el-icon-folder-checked', adminUserId: [1, 2, 3] },
        component: () =>
            import ('../views/Category.vue'),
    }, {
        path: 'good',
        name: '商品管理',
        meta: { title: '商品管理', icon: 'el-icon-menu', adminUserId: [1, 2, 3] },
        component: () =>
            import ('../views/Good.vue'),
    }, {
        path: 'guest',
        name: '会员管理',
        meta: { title: '会员管理', icon: 'el-icon-s-custom', adminUserId: [1] },
        component: () =>
            import ('../views/Guest.vue'),
    }, {
        path: 'order',
        name: '订单管理',
        meta: { title: '订单管理', icon: 'el-icon-s-finance', adminUserId: [1, 2, 3] },
        component: () =>
            import ('../views/Order.vue'),
    }]
}, {
    path: '/homesys',
    name: '系统管理',
    meta: { title: '系统管理', adminUserId: [1, 2, 3] },
    // redirect: '/homesys/account',
    component: Layout,
    children: [{
        path: 'account',
        name: '修改密码',
        meta: { title: '修改密码', icon: 'el-icon-bangzhu', adminUserId: [1, 2, 3] },
        component: () =>
            import ('../views/Account.vue'),
    }]
}]

export default asyncRouter