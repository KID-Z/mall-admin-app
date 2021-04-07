<!--
 * @Author: your name
 * @Date: 2021-04-04 22:04:00
 * @LastEditTime: 2021-04-07 14:54:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/views/page/ProductAdd.vue
-->
<template>
  <div class="product-add">
    <a-steps :current="current" class="steps">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <basicInfo v-if="current === 0" @next="next" :form="form" />
      <saleInfo v-else-if="current === 1" :form="form" @prev="prev" @next="next" />
    </div>
  </div>
</template>

<script>
import basicInfo from '@/components/basicDetail.vue';
import saleInfo from '@/components/saleDetail.vue';
import productsApi from '@/api/products';

export default {
  created() {
    if (this.$route.params.id) {
      productsApi.detail(this.$route.params.id).then((res) => {
        const obj = res;
        obj.status = res.status !== 0;
        this.form = res;
      });
    }
  },
  data() {
    return {
      current: 0,
      steps: [
        {
          title: '填写商品基本信息',
          icon: '',
        },
        {
          title: '填写商品销售信息',
          icon: '',
        },
      ],
      form: {
        title: '',
        desc: '',
        category: [],
        c_items: [],
        tags: [],
        price: 0,
        price_off: '',
        inventory: 0,
        unit: '',
        status: true,
        images: [],
      },
    };
  },
  methods: {
    next(form) {
      this.form = {
        ...this.form,
        ...form,
      };
      if (this.current === 0) {
        this.current += 1;
      } else if (this.current === 1) {
        if (this.$route.params.id) {
          productsApi.edit(this.form).then(() => {
            this.$message.success('修改成功');
            this.$router.replace({ name: 'ProductList' });
          });
        } else {
          productsApi.add(this.form).then(() => {
            this.$message.success('添加成功');
            this.$router.replace({ name: 'ProductList' });
          });
        }
      }
    },
    prev() {
      this.current -= 1;
    },
  },
  components: {
    basicInfo,
    saleInfo,
  },
};
</script>

<style lang="less" scoped>
.product-add {
  .steps {
    width: 50%;
    margin: 20px auto;
  }
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
}
</style>
