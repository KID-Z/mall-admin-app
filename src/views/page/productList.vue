<!--
 * @Author: your name
 * @Date: 2021-04-04 21:48:32
 * @LastEditTime: 2021-04-06 14:15:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/views/page/productList.vue
-->
<template>
  <div class="product">
    <searchBox :categoryList="categoryList" @submit="getSearchForm" />
    <a-button class="product-add"
      ><router-link :to="{ name: 'ProductAdd' }">添加商品</router-link></a-button
    >
    <productTable
      :data="productsList"
      :pagination="pagination"
      @changePage="changePage"
      @edit="editProduct"
      @remove="removeProduct"
    />
  </div>
</template>

<script>
import searchBox from '@/components/search.vue';
import productTable from '@/components/productTable.vue';
import categoryApi from '@/api/category';
import productsApi from '@/api/products';

export default {
  data() {
    return {
      categoryList: [],
      productsList: [],
      searchForm: {},
      pagination: {
        current: 1,
        pageSize: 10,
        hideOnSinglePage: true,
        showSizeChanger: true,
      },
    };
  },
  async created() {
    await this.getCategoryList();
    this.getTableData();
  },
  methods: {
    getCategoryList() {
      categoryApi.list().then((res) => {
        this.categoryList = res.data;
      });
    },
    getSearchForm(form) {
      this.searchForm = form;
      this.$set(this.pagination, 'current', 1);
      this.getTableData();
    },
    getTableData() {
      productsApi
        .list({
          page: this.pagination.current,
          size: this.pagination.pageSize,
          ...this.searchForm,
        })
        .then((res) => {
          this.productsList = res.data.map((r) => ({
            ...r,
            key: r.id,
            category: this.categoryList[r.category - 1].name,
            status: r.status === 1 ? '上架' : '下架',
          }));
          this.$set(this.pagination, 'total', res.total);
        });
    },
    changePage(page, size) {
      this.$set(this.pagination, 'current', page);
      this.$set(this.pagination, 'pageSize', size);
      this.getTableData();
    },
    editProduct(id) {
      this.$router.push({ name: 'ProductEdit', params: { id } });
    },
    removeProduct(record) {
      this.$confirm({
        title: '确定要删除吗?',
        content: `确定要删除标题为 ${record.title} 的商品吗?`,
        okText: '确认',
        okType: 'danger',
        cancelText: '取消',
        onOk: () => {
          productsApi.remove(record.id).then(() => {
            this.getTableData();
          });
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    },
  },
  components: {
    searchBox,
    productTable,
  },
};
</script>

<style lang="less">
.product {
  position: relative;
  .product-add {
    position: absolute;
    right: 10px;
    top: 14px;
  }
}
</style>
