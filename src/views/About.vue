<template>
<div class = "demo">
  <el-upload
    class="avatar-uploader"
    action="http://localhost:8011/admin/upload?module=bookstore"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :on-error="handleAvatarError"
    :before-upload="beforeAvatarUpload">
    <img v-if="carousel.imageUrl" :src="carousel.imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</div>
</template>

<script>
  export default {
    data() {
      return {
        //轮播图对象
        carousel:{
          imageUrl: ''
        },
      };
    },
    methods: {
      //文件上传成功
      handleAvatarSuccess(response) {
        //如果上传成功
        if(response.success){
            console.log(response)
            //this.imageUrl = URL.createObjectURL(file.raw);
            this.carousel.imageUrl = response.data.url
          //强制重新渲染
          this.$forceUpdate()
        //如果上传失败
        }else{
          this.$message.error('上传失败！非20000')
        }
      },
      //连接失败
      handleAvatarError(){
          this.$message.error('连接失败！非20000')
      },
      //文件上传前校验
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style>
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