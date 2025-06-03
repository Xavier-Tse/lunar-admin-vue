import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'web',
      component: () => import('../views/web/index.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/index.vue'),
      meta: {
        title: '首页',
      },
      children: [
        {
          path: 'data',
          name: 'data',
          meta: {
            title: '数据统计',
          },
          component: () => import('../views/admin/data.vue'),
        },
        {
          path: 'manage',
          name: 'manage',
          meta: {
            title: '管理',
          },
          children: [
            {
              path: 'user',
              name: 'user-list',
              component: () => import('../views/admin/user/user-list.vue'),
              meta: {
                title: '用户列表',
              },
            },
            {
              path: 'role',
              name: 'role-list',
              component: () => import('../views/admin/user/role-list.vue'),
              meta: {
                title: '角色列表',
              },
            },
          ],
        },
      ],
    },
  ],
})

export default router
