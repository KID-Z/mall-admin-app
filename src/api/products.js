/*
 * @Author: your name
 * @Date: 2021-04-05 17:35:17
 * @LastEditTime: 2021-04-07 14:41:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/api/products.js
 */
import axios from '@/axios';

export default {
  list(params) {
    return axios.get('/products/all', {
      params,
    });
  },
  remove(id) {
    return axios.delete(`/products/${id}`);
  },
  add(data) {
    return axios.post('/products/add', data);
  },
  detail(id) {
    return axios.get(`/products/${id}`);
  },
  edit(data) {
    return axios.put('/products/edit', data);
  },
};
