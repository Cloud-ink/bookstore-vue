import request from '@/utils/request'

export function addMyOrder(user_id,products){
  return request({
    url: '/order-service/addOrder',
    method: 'post',
    params:{user_id,products}
  })
}
export function getAllOrder(user_id){
  return request({
    url: '/order-service/getOrder',
    method: 'post',
    params:{user_id}
  })
}