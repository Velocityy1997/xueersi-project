<template>
  <div>
  
  <div class="tb">
   <el-menu class="toptext">
     <ul>
       
      <li class="toptext1">网站首页&nbsp;&nbsp;&nbsp;&nbsp;|</li>
      <li class="toptext1">教师资格证公示&nbsp;&nbsp;&nbsp;&nbsp;|</li>
      <li class="toptext1">客户端下载&nbsp;&nbsp;&nbsp;&nbsp;|</li>
      <li class="toptext1">我的订单&nbsp;&nbsp;&nbsp;&nbsp;|</li>
      <li class="toptext1">设置&nbsp;&nbsp;&nbsp;&nbsp;|</li>
      <li class="toptext2">
      用户姓名
       
         
      
      </li>
      </ul>
     </el-menu>
  </div>
  <div class="top">
     <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
       
       <img class="toptu" :src="imgsrc" alt="">
  <el-menu-item class="xiaoxi" index="1">学习中心</el-menu-item>
  <el-submenu class="shiti" index="2">
    <template class="shiti1" slot="title">我的试题</template> 
    <el-menu-item index="2-1">错题本</el-menu-item>
    <el-menu-item index="2-2">试卷集</el-menu-item>
  </el-submenu>
  <el-menu-item index="4">我的讲座</el-menu-item> 
  <el-menu-item index="4">我的应用</el-menu-item> 
     
</el-menu>
<div class="line"></div>
  </div>
  <div class="body">
  <div class="content">
    <div class="content-left">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#ECECEF"
      text-color="#333333"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <span>
            <strong>
            账户中心
            </strong>
            </span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">我的资料</el-menu-item>
          <el-menu-item index="1-2">修改密码</el-menu-item>
           <el-menu-item index="1-3">修改手机号</el-menu-item>
           <el-menu-item index="1-3">收货地址</el-menu-item>
           <el-menu-item index="1-3">第三方账号绑定</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="1">
        <template slot="title">
          <span>
            <strong>
            用户中心
            </strong>
            </span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">续报中心</el-menu-item>
          <el-menu-item index="1-2">跨版本难度换课</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="1">
        <template slot="title">
          <span>
            <strong>
           订单中心
            </strong>
            </span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">我的订单</el-menu-item>
          <el-menu-item index="1-2">我的发票</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="1">
        <template slot="title">
          <span>
            <strong>
            资产中心
            </strong>
            </span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">我的余额</el-menu-item>
          <el-menu-item index="1-2">优惠券</el-menu-item>
           <el-menu-item index="1-3">学习卡</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

  </div>
   <div class="content-right">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane class="jichu" label="基础资料" name="first">
        <div class="jichuziliao">
          <div class="ziliaoup">
            <p class="ziliao1">账户资料</p>
            <p class="ziliao1">
            用户昵称：<input class="yh" type="text" name="user" value="请输入姓名">
            </p>
          </div>
           <div class="down">
              <p class="ziliao1">学员信息</p>
            <p class="ziliao2">
            学员姓名：<input class="yh" type="text" name="user" value="请输入姓名">
            </p>
             <p class="ziliao3">
            英文名：<input class="yh1" type="text" name="user" value="">
            </p>
            <p class="sex">
              性别：
              <input type="radio" class="sex1" name="sex" value="男">男
              <input type="radio" class="sex1" name="sex" value="女">女
            </p>
            <p class="banji">
              年级：
            <p class="nianji">
            <select name="nianji">
              <option value="小班">小班</option>
              <option value="中班">中班</option>
              <option value="大班">大班</option>
              <option value="一年级">一年级</option>
              <option value="二年级">二年级</option>
              <option value="三年级">三年级</option>
              <option value="四年级">四年级</option>
              <option value="五年级">五年级</option>
              <option value="六年级">六年级</option>
              <option value="初一">初一</option>
              <option value="初二">初二</option>
              <option value="初三">初三</option>
              <option value="高一">高一</option>
              <option value="高二">高二</option>
              <option value="高三">高三</option>
            </select>
            </p> 
            <p class="date">
              出生日期：<input type="date" name="day"  class="date1"/>
            </p> 
             <p class="ziliao4">
            学校：<input class="yh2" type="text" name="user" value="">
            </p>
            <input type="button" value="保存" class="baocun">
           </div>
        </div>

    </el-tab-pane>
    <el-tab-pane label="头像设置" name="second">
      <div class="tou-left">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
           <p>
             <input type="button" value="保存" class="push">
           </p>
           </div>
           <div class="tou-right">
              <el-row class="demo-avatar demo-basic">
              <el-col :span="12">
                <div class="sub-title">
                  <p>预览</p>
                  <p class="sub-title1">您选定的头像会生成3种尺寸，请注意各尺寸的头像是否清晰</p>
                </div>
                <div class="demo-basic--circle">
                  <!-- <div class="block"><el-avatar :size="60" :src="circleUrl"></el-avatar></div> -->
                  <div class="block" v-for="size in sizeList" :key="size">
                    <el-avatar :size="size" :src="circleUrl"></el-avatar>
                  </div>
                </div>
              </el-col>  
              </el-row>
           </div>
    </el-tab-pane>
  </el-tabs>
   </div>
  </div>
  </div>
  </div>
  
    
</template>

<script>
import img from '@/assets/toptu.jpg';
export default {
data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        imgsrc:img,
        activeName: 'first',
        imageUrl: '',
         circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["small","medium","large"]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
       handleClick(tab, event) {
        console.log(tab, event);
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
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
 *{
     margin: 0;
     padding: 0;
 }
 .top .top .el-menu--horizontal>.el-menu-item{
   color: white;
 }
 .top .el-submenu__title{
   height: 60px;
   line-height: 60px;
   text-align: center;
   font-size: 18px;
   margin-left: 20px;
 }
 .top .el-menu--horizontal>.el-menu-item{
   height: 60px;
   line-height: 60px;
   text-align: center;
   font-size: 20px;
   margin-left: 20px;
 }
 .tb{
     width: 100%;
     height: 30px;
     background-color: #333333;
 }

 .top{
     width: 100%;
     height: 60px;
     background-color: #F70D1A;
 }
 .toptext{
     width: 45%;
     height: 20px;
     float: right;
     margin-top: 5px;
     color: #D0D0D0;
     background-color: #333333;

 }
 .toptext1{
     float: left;
     list-style: none;
     margin-left: 10px;
     font-size: 14px;
     line-height: 20px;
     cursor: pointer;
     
 }
 .toptext2{
     width: 80px;
     float: left;
     list-style: none;
     margin-left: 10px;
     font-size: 14px;
     line-height: 20px;
     cursor: pointer;
     background-image: url("../assets/more.png");
     background-position-x: 55px;
     background-position-y: 1px;
     background-size: 20px 20px;
     background-repeat: no-repeat

     
 }
 .toptext1:hover{
     color: aliceblue;
 }
 .toptu{
   float: left;
    width: 220px;
    height: 60px;
    margin-left: 150px;
 }
 .el-menu-demo{
     width: 100%;
     height: 60px;
     background-color: #F70D1A ;
 }
 .xiaoxi{
   width: 80px;
   height: 80px;
   background-color: aliceblue;
   color: black;
 }

 .el-menu-item{
   width: 120px;
   height: 80px;;
 }
 .top .shiti{
   width: 150px;
   height: 60px;
   color: aliceblue;
 }
 .body{
    width: 100%;
   height: 1000px;
   background-color: #f5f5f5;
 }
 .content{
  width: 1200px;
  margin: auto;
 }
 .content-left{
   width: 200px;
   height: 500px;
    margin-left: 150px;

 }
 .content-left .el-submenu__title
 {
   margin-top: 20px;
   text-align: center;
  font-size: 16px;
 }
 .content-left .el-menu-item{
   text-align: center;
   font-size: 14px;
 }
 .content-right{
   width: 700px;
   height: 850px;
   float: right;
   background-color: white;
   margin-top: -485px;
   margin-right: 130px;
 }
 .jichu{
   width: 80px;
   font-size: 16px;
 }
 .content-right .el-tabs__item{
   font-size: 18px;
 }
 .content-right .el-tabs__item.is-active{
   color: #F70D1A;
 }
 .content-right .el-tabs__nav-scroll{
   margin-top: 50px;
 }
 .ziliao1{
   width: 100px;
   height: 30px;
   margin-left: 30px;
   margin-top: 20px;
 }
 .ziliao2{
   width: 100px;
   height: 30px;
   margin-left: 30px;
   margin-top: 20px;
 }
 .ziliao3{
    width: 100px;
   height: 30px;
   margin-left: 30px;
   margin-top: 42px;
 }
 .ziliao4{
   width: 100px;
   height: 30px;
   margin-left: 50px;
   margin-top: 195px;
 }
 .yh{
   width: 280px;
   height: 30px;
   float: left;
   margin-left: 85px;
   margin-top: -30px;
   color: darkgrey;
   
 }
 .yh1{
  width: 280px;
   height: 35px;
   float: left;
   margin-left: 85px;
   margin-top: -30px;
   color: darkgrey; 
 }
 .yh2{
   width: 280px;
   height: 35px;
   float: left;
   margin-left: 85px;
   margin-top: -30px;
 }
 .ziliaoup{
   width: 600px;
   height: 120px;
   margin-left: 45px;
   border-bottom:1px solid #e9e6e6;
 }
 .sex{
   width: 300px;
   height: 40px;
   float: left;
   margin-left: 50px;
   margin-top: 30px;
 }
 .sex1{
  width: 15px;
  height: 15px;
  margin-left: 20px;
 }
 .banji{
   width: 60px;
   height: 30px;
   float: left;
   margin-left: 50px;
   margin-top: 10px;
 }
 .nianji{
   width: 400px;
   height: 40px;
   text-align: center;
   float: left;
   margin-left: -50px;
   margin-top: -28px;
 }
 .date{
   float: left;
    margin-left: 50px;
    margin-top: 10px
 }
 .date1{
   float: left;
   margin-top: -22px;
   margin-left: 85px;
 }
 .baocun{
   width: 80px;
   height: 30px;
   background-color: #F13233;
   color: aliceblue;
   font-size: 16px;
   border: none;
   float: left;
   margin-left: 135px;
   margin-top: 55px;
   border-radius: 5px;
 }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    background-color: #F5F5F5;
    margin-left: 110px;
    margin-top:70px; 
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 20px;
    color: #8c939d;
    width: 300px;
    height: 300px;
    line-height: 300px;
    text-align: center;
    /* border: 1px solid red; */
  }
  .avatar {
    width: 300px;
    height: 300px;
    display: block;
  }
  .push{
     width: 80px;
    height: 30px;
    background-color: #F13233;
    color: aliceblue;
    font-size: 16px;
    border: none;
    float: left;
    margin-left: 215px;
    margin-top: 20px;
     border-radius: 5px;
  }
  .tou-left{
    width: 600px;
    height: 700px;
    float: left;
  }
  .tou-right{
    width: 200px;
    height: 550px;
    border-left:1px solid #e7e6e6 ;
    float: right;
    margin-top: -630px;
    margin-right: 40px;
  }
  .tou-right .demo-avatar{
    margin-left:60px;
  }
  .tou-right .el-avatar{
    margin-top: 60px;
  }
  .sub-title{
    width: 180px;
    height: 50px;
    margin-left: -30px;
  }
  .sub-title1{
    width: 180px;
    height: 30px;
    font-size: 14px;
  }
  .tou-right .el-avatar--small{
    width: 40px;
    height: 40px;
    margin-left: 40px;

  }
  .tou-right .el-avatar--medium{
    width: 60px;
    height: 60px;
    margin-left: 33px;
  }
  .tou-right .el-avatar--large{
    width: 100px;
    height: 100px;
    margin-left: 16px;

  }
  .top .el-menu--horizontal>.el-submenu .el-submenu__title{
    color: white;
  }
  .top .el-menu-item, .el-submenu__title{
    color: white;
  }
  .top .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
    color: black;
  }
</style>