<template>
<div class="all">
  <div class="payheader">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="付 款"        name="first">付 款</el-tab-pane>
      <el-tab-pane label="交 易 查 询"  name="second">交 易 查 询</el-tab-pane>
      <el-tab-pane label="退 款"        name="third">退 款</el-tab-pane>
      <el-tab-pane label="退 款 查 询"  name="fourth">退 款 查 询</el-tab-pane>
      <el-tab-pane label="交 易 关 闭"  name="fifth">交 易 关 闭</el-tab-pane>
    </el-tabs>
  </div>
  <div class="paybody">
    <el-form ref="form" :model="form" class="lab">
      <el-form-item label="商户订单号 ：">
        <el-input v-model="form.orderNo" class="payinput"></el-input>
      </el-form-item>
      <el-form-item label="订单名称 ：">
        <el-input v-model="form.orderName" class="payinput"></el-input>
      </el-form-item>
      <el-form-item label="付款金额 ：">
        <el-input v-model="form.orderPrice" class="payinput"></el-input>
      </el-form-item>
      <el-form-item label="商品描述：">
        <el-input v-model="form.orderDescribe" class="payinput"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即提交</el-button>
        <el-button>取消</el-button>
        </el-form-item>
      </el-form>
  </div> 
</div>

</template>

<script>
  import {pay} from "@/api/pay"
  export default {
    data() {
      return {
        activeName: 'second',
        form: {
          orderNo: '',
          orderName: '',
          orderPrice: '',
          orderDescribe: ''
        }
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      //提交订单信息
      onSubmit(){
        pay(this.form).then(response => {
              if (response.code === 20000) {
                this.form = response.data;

              } else {
                // 清空输入框的校验状态
                this.$refs["ruleForm"].resetFields();
                // 弹出通知框提示登录失败信息
                this.notifyError(response.message);
              }
            })
            .catch(err => {
              return Promise.reject(err);
            });

      }
    }
  };
</script>

<style>
.all{
  height: 500px;
    width: 1000px;
    background-color: #40a0ffb7;
}
  .payheader{
    height: 80px;
    width: 1000px;
    background-color: #3db40d7c;
  }
  .paybody{
    height: 300px;
    width: 1000px;
    background-color: #9aece8c4;
  }
  .lab{
    label-width: 80px
  }
  .payinput{
    margin-left: 2%;
    height: 20px;
    width: 200px;
  }
  .demo{
    margin-left: 20%;
    margin-right: 20%;
    height: 1000px;
    background-color: #409EFF;
    border-color: #409EFF;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>