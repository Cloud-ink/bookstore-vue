import request from '@/utils/request'

//获取轮播图
export function fetchCarousel() {
  return request({
    url: '/product-service/carousel/listCarousels',
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
    url: '/product-service/category/getCategoryList',
    method: 'post'
  })
}

//请求所有商品
export function fetchAllProduct(api,categoryID,currentPage,pageSize){
  return request({
    url: api,
    method: 'post',
    params:{categoryID,currentPage,pageSize}
  })
}

//请求商品详细信息
export function fetchProductDetails(productId){
  return request({
    url: '/product-service/product/getDetails',
    method: 'post',
    params:{productId}
  })
}

//请求商品详细图片
export function fetchProductDetailsPictures(productId){
  return request({
    url: '/product-service/product/getDetailsPicture',
    method: 'post',
    params:{productId}
  })
}

//根据搜素内内容请求信息
export function fetchProductBySearch(search,currentPage,pageSize) {
  return request({
    url: '/product-service/product/getProductBySearch',
    method: 'post', 
    params:{search,currentPage,pageSize}
  })
}