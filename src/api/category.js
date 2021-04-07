/*
 * @Author: your name
 * @Date: 2021-04-05 17:35:02
 * @LastEditTime: 2021-04-05 17:52:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/api/category.js
 */
import axios from '@/axios';

export default {
  list(data) {
    return axios.get('/category/all', {
      params: {
        ...data,
      },
    });
  },
};
