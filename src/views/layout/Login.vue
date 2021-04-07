<!--
 * @Author: your name
 * @Date: 2021-04-04 14:53:07
 * @LastEditTime: 2021-04-05 18:14:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/views/layout/Login.vue
-->
<template>
  <div class="login">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="['email', { rules: [{ required: true, message: '请输入邮箱!' }] }]"
          placeholder="email"
        >
          <a-icon slot="prefix" type="mail" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="['password', { rules: [{ required: true, message: '请输入密码!' }] }]"
          type="password"
          placeholder="Password"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">登陆</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import api from '@/api/user';

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const reg = /^[\w-]+@[\w.-]+.com$/;
      this.form.validateFields((err, values) => {
        if (reg.test(values.email) && values.password) {
          api
            .login(values)
            .then((data) => {
              // 登陆成功, 跳转都后台
              this.$store.dispatch('setCookie', data);
              this.$router.replace('/');
            })
            .catch((error) => {
              this.$message.error(error);
            });
        }
      });
    },
  },
};
</script>

<style lang='less'>
@import url("~@/assets/css/login.less");
</style>
