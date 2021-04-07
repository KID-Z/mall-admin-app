<!--
 * @Author: your name
 * @Date: 2021-04-05 15:25:53
 * @LastEditTime: 2021-04-06 00:01:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/components/search.vue
-->
<template>
  <div class="search-box">
    <a-form layout="inline" @submit="handleSubmit">
      <a-form-item label="搜索关键字: ">
        <a-input placeholder="请输入关键字" v-model="searchForm.searchWord"> </a-input>
      </a-form-item>
      <a-form-item label="商品类目: ">
        <a-select
          show-search
          placeholder="请选择类目"
          style="width: 200px"
          allowClear
          @change="handleChange"
        >
          <a-select-option v-for="c in categoryList" :key="c._id" :value="c.id">
            {{ c.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit"> 搜索 </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  props: ['categoryList'],
  data() {
    return {
      searchForm: {
        searchWord: '',
        category: '',
      },
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$emit('submit', this.searchForm);
    },
    handleChange(val) {
      this.searchForm.category = val;
    },
  },
};
</script>

<style lang="less">
  .search-box{
    padding: 10px 30px;
  }
</style>
