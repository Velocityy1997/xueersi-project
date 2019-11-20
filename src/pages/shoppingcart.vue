<template>
  <div style="background-color:#F6F5F4">
    <!-- 引入头部 -->
    <top />
    <!-- 导航栏 -->
    <div class="headcontent" style="width:100% ; height:100px; background-color: white">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item>
            <img src="../images/logo.png" alt="">
        </el-menu-item>
        <el-menu-item index="1">选课中心</el-menu-item>
        <el-menu-item index="2">免费讲座</el-menu-item>

        <el-menu-item index="3">学习中心</el-menu-item>
        <el-menu-item index="4">1对1</el-menu-item>

       <el-menu-item index="3">
           <el-dropdown >
  <span class="el-dropdown-link">
    更多<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown" >
    <el-dropdown-item>编程社区</el-dropdown-item>
    
    <el-dropdown-item >逛书城</el-dropdown-item>
    <el-dropdown-item disabled>学社团</el-dropdown-item>
     <el-dropdown-item disabled>写代码</el-dropdown-item>
    
    <el-dropdown-item disabled>小组汇</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
           
           
           </el-menu-item> 
        
      </el-menu>
    </div>
<!-- 主体内容 -->
    <div
      class="myorder-content"
      style="width:90% ; height:800px; background-color:white; margin:auto; margin-top:20px;padding:10px"
    >
    </div>


    <!-- 底部付款定位 -->
    <div class="qzf">
      <div class="quzhifu">
        <div class="qxbtn">
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
          >全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </div>

        <p>合计</p>
        <div class="quzhifu_fukuan">去支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import top from "../components/top";
export default {
    data:{

    },
  components: {
    top
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.qzf {
  width: 100%;
  height: 66px;
  background-color: #f6f5f4;
  position: fixed;
  bottom: 10px;
}
.quzhifu {
  width: 1235px;
  height: 66px;
  margin-bottom: 0px;
  background-color: white;
  margin-left: 57px;
}
.quzhifu p {
  font-size: 16px;
  color: #999;
  float: left;
  margin-left: 790px;
  margin-top: 24px;
}
.quzhifu .quzhifu_fukuan {
  width: 180px;
  height: 44px;
  background-color: #d0cdc7;
  color: white;
  position: relative;
  left: 70px;
  top: 13px;
  float: left;
  border-radius: 5px;
  text-align: center;
  line-height: 44px;
  cursor: pointer;
}
.quzhifu .qxbtn {
  width: 60px;
  height: 30px;
  margin-left: 30px;
  margin-top: 22px;
  float: left;
}
.el-menu {
  width: 94%;
  height: 100px;
  margin: auto;
  background-color: white;
  color: #333;
}
.el-menu-item {
  font-size: 16px;
  color: #333;
  cursor: pointer;
}
.el-menu.el-menu--horizontal{
    border-bottom: none;
}
.el-menu--horizontal > .el-menu-item {
  height: 100px;
  line-height: 100px;
  color: #333;
  border: none;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
    height: 100px;
  line-height: 100px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover {
  color:#ff010a;
  
}
.el-submenu__title:hover {
  color:#ff010a;
  
}
.el-menu-item .el-dropdown{
    margin-top: -8px;
    margin-left: 6px;
    font-size: 16px;
    color: #333;
}
.el-menu .el-menu-item img{
    width: 230px;
    height: 59px;
    text-align: center
}
.el-menu-item .el-dropdown:hover{
    color:#ff010a
}
</style>