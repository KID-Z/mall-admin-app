<!--
 * @Author: your name
 * @Date: 2021-04-05 22:13:48
 * @LastEditTime: 2021-04-06 14:12:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/components/productTable.vue
-->
<template>
  <a-table :columns="columns" :data-source="data" :pagination="pagination" @change="changePage">
    <div slot="operation" class="operation" slot-scope="text, record">
      <a-button @click="editProduct(record)">编 辑</a-button>
      <a-button type="danger" @click="removeProduct(record)">删 除</a-button>
    </div>
  </a-table>
</template>
<script>
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    ellipsis: true,
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
    ellipsis: true,
  },
  {
    title: '类目',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: '预售价格',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '折扣价格',
    dataIndex: 'price_off',
    key: 'price_off',
  },
  {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
    ellipsis: true,
  },
  {
    title: '限制购买数量',
    dataIndex: 'inventory',
    key: 'inventory',
  },
  {
    title: '上架状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    width: 200,
    scopedSlots: { customRender: 'operation' },
  },
];

export default {
  props: ['data', 'pagination'],
  data() {
    return {
      columns,
    };
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page.current, page.pageSize);
    },
    editProduct(record) {
      this.$emit('edit', record.id);
    },
    removeProduct(record) {
      this.$emit('remove', record);
    },
  },
};
</script>
