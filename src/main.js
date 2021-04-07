/*
 * @Author: your name
 * @Date: 2021-04-02 15:20:40
 * @LastEditTime: 2021-04-05 15:16:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/main.js
 */
import Vue from 'vue';
import VCharts from 'v-charts';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/ant-design-vue';
import './assets/css/reset.less';

Vue.use(VCharts);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
