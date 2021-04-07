/*
 * @Author: your name
 * @Date: 2021-04-04 16:50:01
 * @LastEditTime: 2021-04-04 17:15:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/utils/cookie.js
 */
import Cookies from 'js-cookie';

export function setUserCookie(userInfo) {
  const user = Object.entries(userInfo);
  for (let i = 0; i < user.length; i += 1) {
    Cookies.set(user[i][0], user[i][1]);
  }
  return true;
}

export function getUserCookie() {
  return {
    appkey: Cookies.get('appkey'),
    email: Cookies.get('email'),
    role: Cookies.get('role'),
    username: Cookies.get('username'),
  };
}

export function removeUserCookie() {
  Cookies.remove('appkey');
  Cookies.remove('email');
  Cookies.remove('role');
  Cookies.remove('username');
  return true;
}
