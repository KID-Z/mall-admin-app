<!--
 * @Author: your name
 * @Date: 2021-04-04 14:00:20
 * @LastEditTime: 2021-04-07 15:07:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/views/layout/HeaderNav.vue
-->
<template>
  <div class="header-nav">
    <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-breadcrumb>
      <a-breadcrumb-item>{{ $route.matched[0].meta.title }}</a-breadcrumb-item>
      <a-breadcrumb-item
        ><router-link :to="{ name: $route.matched[1].name }">{{
          $route.matched[1].meta.title
        }}</router-link></a-breadcrumb-item
      >
    </a-breadcrumb>
    <ul class="user">
      <li>{{ $store.state.user.username }}</li>
      <li @click="logout">退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    toggleCollapsed() {
      console.log('事件触发了');
      this.$store.dispatch('changeCollapsed');
    },
    logout() {
      this.$store.dispatch('removeCookie');
      this.$router.push('/login');
    },
  },
};
</script>
