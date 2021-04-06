import request from '@/utils/request'

export function fetchRegister(userName,pass){
  return request({
    url: '/user-service/register',
    method: 'post',
    params: {userName,pass}
  })
}

export function findUserName(userName){
  return request({
    url: '/user-service/findUserName',
    method: 'post',
    params: {userName}
  })
}

export function fetchLogin(userName,pass){
  return request({
    url: '/user-service/login',
    method: 'post',
    params: {userName,pass}
  })
}