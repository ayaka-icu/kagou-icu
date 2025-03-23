// 引入路由
import { createRouter, createWebHistory } from 'vue-router'

// 路由配置
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("@/views/index.vue"),
    },
    // 404跳转到首页
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

// 创建路由
const router = createRouter({
    history: createWebHistory(),
    routes,
    // 刷新时，滚动条位置还原
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { top: 0 };
    },
})

export default router