import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/Index.vue'),
        redirect: {name: "access"},
        children: [
            // 数据接入
            {
                path: '/access',
                name: 'access',
                component: () => import("../components/access/accessNav.vue"),
                redirect: {name: "stats-table"},
                children: [
                    {
                        path: '/access/stats/graph',
                        name: 'stats-graph',
                        component: () => import("../components/access/statsGraph.vue")
                    },
                    {
                        path: '/access/stats/table',
                        name: 'stats-table',
                        component: () => import("../components/access/statsTable.vue")
                    },
                    {
                        path: '/access/log',
                        name: 'stats-log',
                        component: () => import("../components/access/accessLog.vue")
                    }
                ]
            },
            // 数据发布
            {
                path: '/publish',
                name: 'publish',
                component: () => import("../components/publish/publishNav.vue"),
                redirect: {name: "publish-table"},
                children: [
                    {
                        path: '/publish/stats/graph',
                        name: 'publish-graph',
                        component: () => import("../components/publish/publishGraph.vue")
                    },
                    {
                        path: '/publish/stats/table',
                        name: 'publish-table',
                        component: () => import("../components/publish/publishTable.vue")
                    },
                    {
                        path: '/publish/log',
                        name: 'publish-log',
                        component: () => import("../components/publish/publishLog.vue")
                    }
                ]
            },
            // 日志
            {
                path: '/log',
                name: 'accessLog',
                component: () => import("../components/log/log.vue")
            }
        ]
    }
];

const router = new VueRouter({
    // 全局设置激活 router-link 的类名
    linkExactActiveClass: "active",
    routes
});

export default router