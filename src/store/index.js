/*
 * @Author: your name
 * @Date: 2021-04-02 15:20:40
 * @LastEditTime: 2021-04-05 17:56:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/store/index.js
 */
import Vue from 'vue';
import Vuex from 'vuex';
import {
  getUserCookie,
  setUserCookie,
  removeUserCookie,
} from '@/utils/cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 切换左侧菜单收起/展开
    collapsed: false,
    // 用户信息
    user: getUserCookie(),
    // 存储菜单的路由
    menuRoutes: [],
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setCookie(state, userInfo) {
      state.user = userInfo;
    },
    removeCookie(state) {
      state.user = {
        appkey: '',
        email: '',
        role: '',
        username: '',
      };
    },
    setMenuRoutes(state, routes) {
      state.menuRoutes = routes;
    },
  },
  actions: {
    // 切换左侧菜单收起/展开
    changeCollapsed({
      commit,
    }) {
      commit('changeCollapsed');
    },
    // 设置cookie
    setCookie({
      commit,
    }, userInfo) {
      commit('setCookie', userInfo);
      setUserCookie(userInfo);
    },
    // 删除cookie
    removeCookie({
      commit,
    }) {
      commit('removeCookie');
      removeUserCookie();
    },
    setMenuRoutes({
      commit,
    }, routes) {
      commit('setMenuRoutes', routes);
    },
  },
  modules: {},
});
