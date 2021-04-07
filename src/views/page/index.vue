<!--
 * @Author: your name
 * @Date: 2021-04-04 21:44:02
 * @LastEditTime: 2021-04-05 14:21:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/views/page/index.vue
-->
<template>
  <div class="index">
      <card />
      <charts />
  </div>
</template>

<script>
import card from '@/components/card.vue';
import charts from '@/components/charts.vue';

export default {
  components: {
    card,
    charts,
  },
};
</script>
