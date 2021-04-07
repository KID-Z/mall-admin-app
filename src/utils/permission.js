/*
 * @Author: your name
 * @Date: 2021-04-04 21:53:33
 * @LastEditTime: 2021-04-06 13:58:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /每日优鲜/mall-admin/src/utils/permission.js
 */
// 存储的是角色对应的权限名称
const roleRoute = {
  coustomer: ['Product', 'ProductList', 'ProductAdd', 'Category', 'ProductEdit'],
  admin: ['Product', 'ProductList', 'ProductAdd', 'Category', 'ProductEdit'],
};

// 过滤掉没有权限的路由
export default function getMenuRoute(role, router) {
  const allowRouteName = roleRoute[role];
  const resultRoute = router.filter((item) => {
    const obj = item;
    if (allowRouteName.includes(item.name)) {
      obj.children = obj.children.filter((res) => allowRouteName.includes(res.name));
      return true;
    }
    return false;
  });
  return resultRoute;
}
