import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
  path: '/login',
  component: () => import('@/views/login/index'),
  hidden: true
},

{
  path: '/404',
  component: () => import('@/views/404'),
  hidden: true
},

{
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  children: [{
    path: 'dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/index'),
    meta: {
      title: 'Dashboard',
      icon: 'dashboard'
    }
  }]
},
{
  path: '/base',
  component: Layout,
  redirect: '/base/valuePassing',
  name: 'Base',
  meta: {
    title: 'Vue基础',
    icon: 'example'
  },
  children: [{
    path: 'basis',
    name: 'Basis',
    component: () => import('@/views/base/basis'),
    meta: {
      title: '基础',
      icon: 'example'
    }
  },
  {
    path: 'valuePassing',
    name: 'ValuePassing',
    component: () => import('@/views/base/valuePassing'),
    meta: {
      title: '传值',
      icon: 'example'
    }
  },
  {
    path: 'modelAndSync',
    name: 'ModelAndSync',
    component: () => import('@/views/base/modelAndSync'),
    meta: {
      title: 'v-model & .sync',
      icon: 'table'
    }
  },
  {
    path: 'vueDirective',
    name: 'VueDirective',
    component: () => import('@/views/base/vueDirective'),
    meta: {
      title: '常用指令',
      icon: 'table'
    }
  },
  {
    path: 'lifeCycle',
    name: 'LifeCycle',
    component: () => import('@/views/base/lifeCycle'),
    meta: {
      title: '生命周期',
      icon: 'table'
    }
  }
    // {
    //   path: 'computed',
    //   name: 'Computed',
    //   component: () => import('@/views/base/computedAndWatch'),
    //   meta: {
    //     title: 'computed',
    //     icon: 'tree'
    //   }
    // }
  ]
},

{
  path: 'external-link',
  component: Layout,
  children: [{
    path: 'https://www.qietuniu.com',
    meta: {
      title: '项目文档',
      icon: 'link'
    }
  }]
},

// 404 page must be placed at the end !!!
{
  path: '*',
  redirect: '/404',
  hidden: true
}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
