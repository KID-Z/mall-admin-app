/*
 * @Author: your name
 * @Date: 2021-04-04 16:03:51
 * @LastEditTime: 2021-04-04 16:07:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/api/user.js
 */
import axios from '@/axios';

export default {
  login(params) {
    return axios.post('/passport/login', params);
  },
};
