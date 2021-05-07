<template>
  <div class="home" id="home" name="home">
    <!-- 轮播图 -->
    <div class="block">
      <el-carousel height="460px">
        <el-carousel-item v-for="item in carousel" :key="item.carouselId">
          <!-- <img style="height:460px;" :src="$targetImg + item.imgPath" :alt="item.describes" /> -->
          <img style="height:460px;" :src="item.carouselImg" :alt="item.carouselName"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main-box">
      <div class="main">
        <!-- 教辅书展示区域 -->
        <div class="phone">
          <div class="box-hd">
            <div class="title">教辅书</div>
          </div>
          <div class="box-bd" >
            <div class="promo-list">
              <!-- <router-link to> -->
                <ul>
                <li>
                <img src="https://cloud-ink.oss-cn-shanghai.aliyuncs.com/bookstore/img/category/category1.jpg" />
              <!-- </router-link> -->
                </li>
                </ul>
            </div>
            <div class="list">
              <MyList :list="teacherList" :isMore="true"></MyList>
            </div>
          </div>
        </div>

        <!-- 家电商品展示区域 -->
        <div class="appliance" id="promo-menu">
          <div class="box-hd">
            <div class="title">儿童书</div>
            <div class="more" id="more">
              <MyMenu :val="2" @fromChild="getChildMsg">
                <span slot="1">热门</span>
                <span slot="2">电视影音</span>
              </MyMenu>
            </div>
          </div>
          <div class="box-bd">
            <div class="promo-list">
              <ul>
                <li>
                  <img src="https://cloud-ink.oss-cn-shanghai.aliyuncs.com/bookstore/img/category/category2.jpg" />
                </li>
              </ul>
            </div>
            <div class="list">
              <MyList :list="childerList" :isMore="true"></MyList>
            </div>
          </div>
        </div>
        <!-- 配件商品展示区域 -->
        <div class="accessory" id="promo-menu">
          <div class="box-hd">
            <div class="title">小说</div>
            <div class="more" id="more">
              <MyMenu :val="3" @fromChild="getChildMsg2">
                <span slot="1">热门</span>
                <span slot="2">保护套</span>
                <span slot="3">充电器</span>
              </MyMenu>
            </div>
          </div>
          <div class="box-bd">
            <div class="promo-list">
              <ul>
                <li>
                  <img src="https://cloud-ink.oss-cn-shanghai.aliyuncs.com/bookstore/img/category/category3.jpg" alt />
                </li>
              </ul>
            </div>
            <div class="list">
              <MyList :list="novelList" :isMore="true"></MyList>
            </div>
          </div>
        </div>
        <!-- 配件商品展示区域END -->
      </div>
    </div>
  </div>
</template>
<script>
import { fetchCarousel,fetchProductByCategoryName } from "@/api/product"
export default {
  data() {  
    return {
      PromoProduct:{
        categoryName:""
      },
      carousel: "", // 轮播图数据
      teacherList: "", // 教辅书列表
      childerList: "", // 儿童书列表
      novelList: "", // 小说列表
      accessoryHotList: "", //热门配件商品列表
      protectingShellList: "", // 保护套商品列表Pro
      applianceActive: 1, // 家电当前选中的商品分类
      accessoryActive: 1 // 配件当前选中的商品分类
    };
  },
  watch: {
    // 家电当前选中的商品分类，响应不同的商品数据
    applianceActive: function(val) {
      // 页面初始化的时候把applianceHotList(热门家电商品列表)直接赋值给applianceList(家电商品列表)
      // 所以在切换商品列表时判断applianceHotList是否为空,为空则是第一次切换,把applianceList赋值给applianceHotList
      if (this.applianceHotList == "") {
        this.applianceHotList = this.applianceList;
      }
      if (val == 1) {
        // 1为热门商品
        this.applianceList = this.applianceHotList;
        return;
      }
      if (val == 2) {
        // 2为电视商品
        this.applianceList = this.miTvList;
        return;
      }
    },
    accessoryActive: function(val) {
      // 页面初始化的时候把accessoryHotList(热门配件商品列表)直接赋值给accessoryList(配件商品列表)
      // 所以在切换商品列表时判断accessoryHotList是否为空,为空则是第一次切换,把accessoryList赋值给accessoryHotList
      if (this.accessoryHotList == "") {
        this.accessoryHotList = this.accessoryList;
      }
      if (val == 1) {
        // 1为热门商品
        this.accessoryList = this.accessoryHotList;
        return;
      }
      if (val == 2) {
        // 2为保护套商品
        this.accessoryList = this.protectingShellList;
        return;
      }
      if (val == 3) {
        //3 为充电器商品
        this.accessoryList = this.chargerList;
        return;
      }
    }
  },
  created() {
    // 获取轮播图数据
    // this.$axios
    //   .post("/api/resources/carousel", {})
    fetchCarousel()
      .then(response => {
        this.carousel = response.data;
      })
      .catch(err => {
        return Promise.reject(err);
      });
    // 获取各类商品数据
    this.getPromo("教辅书", "teacherList");
    this.getPromo("儿童书", "childerList");
    this.getPromo("小说", "novelList");
    //this.getPromo("充电器", "chargerList");
    // this.getPromo(
    //   //["电视机", "空调", "洗衣机"],
    //   "applianceList",
    //   "/api/product/getHotProduct"
    // );
    // this.getPromo(
    //   ["保护套", "保护膜", "充电器", "充电宝"],
    //   "accessoryList",
    //   "/api/product/getHotProduct"
    // );
  },
  methods: {
    // 获取家电模块子组件传过来的数据
    getChildMsg(val) {
      this.applianceActive = val;
    },
    // 获取配件模块子组件传过来的数据
    getChildMsg2(val) {
      this.accessoryActive = val;
    },
    // 获取各类商品数据方法封装
    getPromo(categoryName, val, api) {
       api = api != undefined ? api : "/product-service/category/listPromosByCategoryName";
      // this.$axios
      //   .post(api, {
      //     categoryName
      //   })
      //if(api=undefined){
        fetchProductByCategoryName(api,categoryName)
        .then(response => {
          this[val] = response.data.PromoProducts;
        })
        .catch(err => {
          return Promise.reject(err);
        });
    }
  }
};
</script>
<style scoped>
box-bd {
  height: 315px;
}
@import "../assets/css/index.css";
</style>