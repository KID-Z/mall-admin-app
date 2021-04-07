<!--
 * @Author: your name
 * @Date: 2021-04-02 15:20:40
 * @LastEditTime: 2021-04-07 15:06:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/views/layout/Home.vue
-->
<template>
  <div class="home">
    <div class="left-menu">
      <LeftMenu :key="key" />
    </div>
    <div :class="{ content: true, 'fold-content': $store.state.collapsed }">
      <HeaderNav />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftMenu from './components/LeftMenu.vue';
import HeaderNav from './components/HeaderNav.vue';

export default {
  components: {
    LeftMenu,
    HeaderNav,
  },
  data() {
    return {
      key: Date.now(),
    };
  },
  watch: {
    $route() {
      this.key = Date.now();
    },
  },
};
</script>

<style lang="less">
@import url("~@/assets/css/home.less");
</style>
