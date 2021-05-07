import request from '@/utils/request'

export function getCart(userId){
  return request({
    url: '/cart-service/cart/getCart',
    method: 'post',
    params:{userId}
  })
}

export function addCart(userId,productId){
  return request({
    url: '/cart-service/cart/addCart',
    method: 'post',
    params:{userId,productId}
  })
}

export function updateCart(userId,productId,currentValue){
  return request({
    url: '/cart-service/cart/updateCart',
    method: 'post',
    params:{userId,productId,currentValue}
  })
}

export function deleteCart(userId,productId){
  return request({
    url: '/cart-service/cart/deleteCart',
    method: 'post',
    params:{userId,productId}
  })
}

export function batchDelete(idList){
  return request({
    url: '/cart-service/cart/deleteCarts',
    method: 'post',
    data: idList
  })
}