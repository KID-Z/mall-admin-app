<!--
 * @Author: your name
 * @Date: 2021-04-06 14:16:48
 * @LastEditTime: 2021-04-07 15:15:49
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
    <a-form-model-item label="商品售价" prop="price" required>
      <a-input v-model="form.price" placeholder="请输入商品售价" />
    </a-form-model-item>
    <a-form-model-item label="商品折扣价" prop="price_off">
      <a-input v-model="form.price_off" placeholder="请输入商品折扣价" />
    </a-form-model-item>
    <a-form-model-item label="商品库存" prop="inventory" required>
      <a-input v-model="form.inventory" placeholder="请输入商品库存" />
    </a-form-model-item>
    <a-form-model-item label="计量单位" prop="unit" required>
      <a-input v-model="form.unit" placeholder="请输入商品计量单位" />
    </a-form-model-item>
    <a-form-model-item label="商品相册">
      <a-upload
        :action="`https://mallapi.duyiedu.com/upload/images?appkey=${$store.state.user.appkey}`"
        list-type="picture-card"
        :file-list="fileList"
        name="avatar"
        @preview="handlePreview"
        @change="handleChange"
      >
        <div v-if="fileList.length < 8">
          <a-icon type="plus" />
          <div class="ant-upload-text">Upload</div>
        </div>
      </a-upload>
      <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
        <img alt="example" style="width: 100%" :src="previewImage" />
      </a-modal>
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }" prop="status">
      <a-checkbox :checked="form.status" v-model="form.status" @change="onChange">
        是否上架
      </a-checkbox>
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button @click="prev">上一步</a-button>
      <a-button type="primary" @click="onSubmit">完 成</a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  props: ['form'],
  created() {
    if (this.form.images.length > 0) {
      this.isProductImage = true;
      this.fileList = this.form.images.map((item, index) => ({
        uid: index,
        name: `image-${index}.png`,
        status: 'deon',
        url: item,
      }));
    }
  },
  data() {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 13 },
      rules: {},
      previewVisible: false,
      previewImage: '',
      fileList: [],
      previewImageArr: [],
      isProductImage: false,
    };
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
    prev() {
      this.$emit('prev');
    },
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      const obj = file;
      if (!file.url && !file.preview) {
        obj.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ file, fileList }) {
      if (file.status === 'done') {
        this.form.images.push(file.response.data.url);
      } else if (file.status === 'removed') {
        if (this.isProductImage) {
          this.form.images = this.form.images.filter((item) => item.url !== file.response.data.url);
        } else {
          this.form.images = this.form.images.filter((item) => item !== file.response.data.url);
        }
      }
      this.fileList = fileList;
    },
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
  },
};
</script>

<style lang="less">
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
