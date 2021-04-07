<!--
 * @Author: your name
 * @Date: 2021-04-06 14:16:48
 * @LastEditTime: 2021-04-07 12:44:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/components/basicDetail.vue
-->
<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item label="副标题" prop="title" required>
      <a-input v-model="form.title" placeholder="请输入标题" />
    </a-form-model-item>
    <a-form-model-item label="商品描述" prop="desc">
      <a-input v-model="form.desc" placeholder="请输入商品描述" />
    </a-form-model-item>
    <a-form-model-item label="商品类目" prop="category" required>
      <a-select v-model="form.category" placeholder="请选择商品类别" @change="changeCategory">
        <a-select-option v-for="c in categoryList" :value="c.id" :key="c.id">
          {{ c.name }}
        </a-select-option>
      </a-select>
      <a-select
        v-model="form.c_items"
        placeholder="请添加子类目">
        <a-select-option v-for="item in c_itemsList" :value="item" :key="item">
          {{ item }}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="商品标签" prop="tags" required>
      <a-select
        mode="tags"
        placeholder="请选择标签"
        v-model="form.tags"
      >
        <a-select-option value="包邮, 最晚次日达"> 包邮, 最晚次日达 </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit"> 下一步 </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import categoryApi from '@/api/category';

export default {
  props: ['form'],
  data() {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 13 },
      categoryList: [],
      c_itemsList: [],
      rules: {},
    };
  },
  created() {
    categoryApi.list().then((res) => {
      this.categoryList = res.data;
    });
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('next', this.form);
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
    changeCategory(val) {
      for (let i = 0; i < this.categoryList.length; i += 1) {
        if (this.categoryList[i].id === val) {
          this.c_itemsList = this.categoryList[i].c_items;
        }
      }
    },
  },
};
</script>
