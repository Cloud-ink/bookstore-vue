import request from '@/utils/request'

export function pay(form){
  return request({
    url: '/pay-service/pay',
    method: 'post',
    data: form
  })
}