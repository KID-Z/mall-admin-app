<!--
 * @Author: your name
 * @Date: 2021-04-04 13:54:09
 * @LastEditTime: 2021-04-06 13:59:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/views/layout/LeftMenu.vue
-->
<template>
  <a-menu
    :default-selected-keys="[$route.matched[1] ? $route.matched[1].name : '']"
    :default-open-keys="[$route.matched[0] ? $route.matched[0].name : '']"
    mode="inline"
    theme="dark"
    :inline-collapsed="$store.state.collapsed"
  >
    <template v-for="nav in $store.state.menuRoutes">
      <a-sub-menu :key="nav.name" v-if="!nav.meta.hidden">
        <span slot="title"
          ><a-icon :type="nav.meta.icon ? nav.meta.icon : ''" /><span>{{
            nav.meta.title
          }}</span></span
        >
        <template v-for="item in nav.children">
          <a-menu-item v-if="!item.meta.hidden" :key="item.name">
            <router-link :to="{ name: item.name }"
              ><a-icon :type="item.meta.icon ? item.meta.icon : ''" />{{
                item.meta.title
              }}</router-link
            >
          </a-menu-item>
        </template>
      </a-sub-menu>
    </template>
  </a-menu>
</template>
