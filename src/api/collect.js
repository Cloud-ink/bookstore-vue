import request from '@/utils/request'

export function getCollect(userId){
  return request({
    url: '/product-service/product/getCollect',
    method: 'post',
    params:{userId}
  })
}

export function addCollections(userId,productId){
    return request({
      url: '/product-service/product/addCollect',
      method: 'post',
      params:{userId,productId}
    })
  }

export function deleteCollections(userId,productId){
  return request({
    url: '/product-service/product/deleteCollect',
    method: 'post',
    params:{userId,productId}
  })
}