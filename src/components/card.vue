<!--
 * @Author: your name
 * @Date: 2021-04-05 13:52:10
 * @LastEditTime: 2021-04-05 14:05:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/components/card.vue
-->
<template>
  <div class="card">
    <div style="background-color: #ececec; padding: 20px">
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card title="商品总览" :bordered="false">
            <p>card content</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="用户总览" :bordered="false">
            <p>card content</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="销售总览" :bordered="false">
            <p>card content</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
