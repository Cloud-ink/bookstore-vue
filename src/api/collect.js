import request from '@/utils/request'

export function getCollect(user_id){
  return request({
    url: '/order-service/getCollect',
    method: 'post',
    params:{user_id}
  })
}

export function addCollections(user_id,product_id){
    return request({
      url: '/order-service/addCollect',
      method: 'post',
      params:{user_id,product_id}
    })
  }

export function deleteCollections(user_id,product_id){
  return request({
    url: '/order-service/deleteCollect',
    method: 'post',
    params:{user_id,product_id}
  })
}