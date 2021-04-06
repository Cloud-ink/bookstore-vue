import request from '@/utils/request'
//获取轮播图
export function fetchCarousel() {
  return request({
    url: '/product-service/carousel',
    method: 'post'
  })
}
//根据分类名获取产品信息
export function fetchProductByCategoryName(api,categoryName) {
  return request({
    url: api,
    method: 'post',
    params: { categoryName }
  })
}
//请求分类列表
export function fetchCategory(){
  return request({
    url: '/product-service/category/list',
    method: 'post'
  })
}

export function fetchAllProduct(api,categoryID,currentPage,pageSize){
  return request({
    url: api,
    method: 'post',
    params:{categoryID,currentPage,pageSize}
  })
}

export function fetchProductDetails(productID){
  return request({
    url: '/product-service/getDetails',
    method: 'post',
    params:{productID}
  })
}

export function fetchProductDetailsPictures(productID){
  return request({
    url: '/product-service/getDetails',
    method: 'post',
    params:{productID}
  })
}

export function fetchProductByCearch(search,currentPage,pageSize) {
  return request({
    url: '/product-service/getProductBySearch',
    method: 'post', 
    params:{search,currentPage,pageSize}
  })
}