import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import cookie from 'js-cookie'
//import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:9001', // url = base url + request url
  timeout: 5000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  //验证token，如果有token，在每一个请求中加入token
  config => {
    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-Token'] = getToken()

    //当cookie中获取到了token信息时，则将token放在header中随请求发出服务端接口
    if(cookie.get('bookstore')){
      config.headers['token'] = cookie.get('bookstore') 
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
 )

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if(res.code >= 20000){       //返回正确结果
      return response.data
    }else if(res.code === 23004){ //获取用户失败
      //清楚cookie
      cookie.set('bookstore','',{domain: 'localhost'})
      return response.data
    }else{
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    }

    // // 20000是为通过
    // if (res.code !== 20000) {
    //   // Message({
    //   //   message: res.message || 'Error',
    //   //   type: 'error',
    //   //   duration: 5 * 1000
    //   // })

    //   // // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //   //   // to re-login
    //   //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
    //   //     confirmButtonText: 'Re-Login',
    //   //     cancelButtonText: 'Cancel',
    //   //     type: 'warning'
    //   //   }).then(() => {
    //   //     store.dispatch('user/resetToken').then(() => {
    //   //       location.reload()
    //   //     })
    //   //   })
    //   // }
    //   // return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    //   return res
    // }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
