import request from '@/utils/request'

export function getCart(user_id){
  return request({
    url: '/cart-service/getShoppingCart',
    method: 'post',
    params:{user_id}
  })
}

export function addShoppingCart(user_id,productID){
  return request({
    url: '/cart-service/addShoppingCart',
    method: 'post',
    params:{user_id,productID}
  })
}

export function updateCart(user_id,productID,currentValue){
  return request({
    url: '/cart-service/updateShoppingCart',
    method: 'post',
    params:{user_id,productID,currentValue}
  })
}

export function deleteCart(user_id,product_id){
  return request({
    url: '/cart-service/deleteShoppingCart',
    method: 'post',
    params:{user_id,product_id}
  })
}