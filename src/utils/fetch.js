/**
 * 公用接口请求
 */

import axios from 'axios'
import router from '@/router'

// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    // timeout: 50000              // 请求超时时间
})

// request请求拦截器（Do something before request is sent）
// service.interceptors.request.use(config => {
//   if (getCookie('token')) {
//     config.headers['X-Token'] = getCookie('token')// 让每个请求携带token--['X-Token']为自定义key(名称根据需要修改)，此内容会在请求头携带
//     return config // 必须return，不然就会报错
//   } else {
//     router.replace({
//       path: '/login',
//       query: {redirect: router.currentRoute.fullPath}
//     })
//   }

// }, error => {
//   // Do something with request error
//   console.log(error) // for debug
//   Promise.reject(error)
// })

// response响应拦截
// service.interceptors.response.use(config => {
//     if (config.data.code == '001') { // 后台接口判断当前是否是登录状态(001状态码是后台规定的，可变)
//         router.replace({
//             path: '/login',
//             query: {
//                 redirect: router.currentRoute.fullPath
//             }
//         })
//     } else {
//         return config // 必须return，不然就会报错
//     }
// }, error => {
//     // Do something with request error
//     console.log(error) // for debug
//     Promise.reject(error)
// })

// export default service
export {
    service
}