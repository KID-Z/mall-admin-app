/*
 * @Author: your name
 * @Date: 2021-04-02 15:20:40
 * @LastEditTime: 2021-04-06 13:57:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/router/index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import getMenuRoute from '@/utils/permission';
import Home from '../views/layout/Home.vue';
import Login from '../views/layout/Login.vue';

Vue.use(VueRouter);

const asyncRouterMap = [{
  path: '/product',
  name: 'Product',
  meta: {
    title: '商品',
    hidden: false,
    icon: 'inbox',
  },
  component: Home,
  children: [{
    path: 'list',
    name: 'ProductList',
    meta: {
      title: '商品列表',
      hidden: false,
      icon: 'unordered-list',
    },
    component: () => import('../views/page/productList.vue'),
  },
  {
    path: 'add',
    name: 'ProductAdd',
    meta: {
      title: '添加商品',
      hidden: false,
      icon: 'file-add',
    },
    component: () => import('../views/page/productAdd.vue'),
  },
  {
    path: 'edit/:id',
    name: 'ProductEdit',
    meta: {
      title: '编辑商品',
      hidden: true,
    },
    component: () => import('../views/page/productAdd.vue'),
  },
  {
    path: 'category',
    name: 'Category',
    meta: {
      title: '类目管理',
      hidden: false,
      icon: 'user',
    },
    component: () => import('../views/page/category.vue'),
  },
  ],
}];

const routes = [{
  path: '/',
  name: 'Home',
  redirect: {
    name: 'Index',
  },
  meta: {
    title: '首页',
    hidden: false,
    icon: 'home',
  },
  component: Home,
  children: [{
    path: 'index',
    name: 'Index',
    meta: {
      title: '统计',
      icon: 'home',
    },
    component: () => import('../views/page/index.vue'),
  }],

},
{
  path: '/login',
  name: 'Login',
  meta: {
    title: '登陆',
    hidden: true,
  },
  component: Login,
},
];

let isAddRoutes = false;

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.user.appkey && store.state.user.email && store.state.user.role && store
      .state.user.username) {
      if (!isAddRoutes) {
        const menuRoutes = getMenuRoute(store.state.user.role, asyncRouterMap);
        store.dispatch('setMenuRoutes', routes.concat(menuRoutes)).then(() => {
          router.addRoutes(menuRoutes);
          next();
        });
        isAddRoutes = true;
      }
      return next();
    }
    return next('/login');
  }
  return next();
});
export default router;
