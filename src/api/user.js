import request from '@/utils/request'
//import cookie from 'js-cookie'

export function fetchRegister(userName,pass){
  return request({
    url: '/user-service/user/register',
    method: 'post',
    params: {userName,pass}
  })
}

export function findUserName(userName){
  return request({
    url: '/user-service/user/findUserName',
    method: 'post',
    params: {userName}
  })
}
//登录
export function fetchLogin(LoginUser){
  return request({
    url: '/user-service/user/login',
    method: 'post',
    data: LoginUser
  })
}

//登录 headers中传值
export function fetchLoginInfo(){
  return request({
    url: '/user-service/user/info',
    method: 'get',
    //headers: {'token':cookie.get('bookstore')}
  })
}