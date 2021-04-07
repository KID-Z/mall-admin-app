/*
 * @Author: your name
 * @Date: 2021-04-04 15:49:33
 * @LastEditTime: 2021-04-05 22:54:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/axios.js
 */
import axios from 'axios';
import store from '@/store';

const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});

// 请求拦截器
instance.interceptors.request.use((config) => {
  if (config.url.includes('/passport')) {
    return config;
  }
  return {
    ...config,
    params: {
      ...config.params,
      appkey: store.state.user.appkey,
    },
  };
}, (error) => Promise.reject(error));

// 响应拦截器
instance.interceptors.response.use((response) => {
  if (response.data.status === 'fail') {
    return Promise.reject(response.data.msg);
  }
  return response.data.data;
}, (error) => Promise.reject(error));

export default instance;
