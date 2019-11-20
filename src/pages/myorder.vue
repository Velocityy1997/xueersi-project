<template>
  <div style="background-color:#F6F5F4">
    <!-- 引入头部 -->

    <top />

    <!-- 导航栏 -->
    <div class="headcontent" style="width:100% ; height:60px; background-color: #FF010A">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <div class="zhongshujiaoyu">
           <img src="../images/logo.jpg" alt="">
        </div>
        <el-menu-item index="1">学习中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的试题</template>
          <el-menu-item index="2-1">错题本</el-menu-item>
          <el-menu-item index="2-2">试卷集</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">我的讲座</el-menu-item>

        <el-menu-item index="4">我的应用</el-menu-item>
      </el-menu>
    </div>

    <!-- 主体内容 -->
    <div
      class="myorder-content"
      style="width:90% ; height:800px; background-color:white; margin:auto; margin-top:20px;padding:10px"
    >
      <div class="zhanghuzhongxin">订单中心</div>
      <!-- Tab插件 -->
      <el-tabs :tab-position="tabPosition" style="height: 270px;">
        <el-tab-pane label="我的订单">
          <span class="dingdan">我的订单</span>

          <el-tabs v-model="activeName" @tab-click="handleClick" class="dingdanlist">
            <el-tab-pane label="全部订单" name="first">全部订单</el-tab-pane>
            <el-tab-pane label="已支付" name="second">已支付</el-tab-pane>
            <el-tab-pane label="未完成 " name="third">未完成</el-tab-pane>
            <el-tab-pane label="待支付" name="fourth">待支付</el-tab-pane>
            <el-tab-pane label="已取消" name="fifth">已取消</el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="我的发票">
          <span class="dingdan">我的发票</span>
        </el-tab-pane>
        <el-tab-pane label="收货地址">
          <span class="dingdan">地址管理</span>
        </el-tab-pane>
        <el-tab-pane label="我的余额">
          <span class="dingdan">我的余额</span>
        </el-tab-pane>
        <el-tab-pane label="优惠券">
          <span class="dingdan">优惠券</span>
        </el-tab-pane>
        <el-tab-pane label="第三方绑定">
          <span class="dingdan">第三方绑定</span>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import top from "../components/top";
export default {
  data() {
    return {
      tabPosition: "left"
    };
  },
  components: {
    top
  }
};
</script>

<style>
.el-menu {
  width: 93%;
  height: 60px;
  margin: auto;
  background-color: #ff010a;
  color: white;
}
.el-menu-item {
  font-size: 16px;
  color: white;
  cursor: pointer;
}
.el-menu--horizontal > .el-menu-item {
  color: white;
  border: none;
}
.el-tabs__item {
  height: 45px;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  font-size: 16px;
  color: white;
  cursor: pointer;
}
.el-menu-item:hover {
  background-color: white;
  color: #ff010a;
}
.el-submenu__title:hover {
  background-color: white;
  color: #ff010a;
}
.el-tabs__item.is-active {
  color: #ff010a;
}
.zhanghuzhongxin {
  width: 150px;
  height: 30px;
  margin: 15px;
  text-indent: 16px;
  color: #666;
}
.wodeziliao {
  width: 150px;
  height: 30px;
  margin: 0px;
  font-size: 14px;
  text-indent: 35px;
  cursor: pointer;
}
.el-tabs .el-tab-pane .dingdan {
  width: 1000px;
  height: 42px;
  margin-left: 15px;
  line-height: 42px;
  color: #666;
}
.el-menu .el-menu-item img{
    width: 230px;
    height: 60px;
    text-align: center
}
.el-tabs__item:hover {
  color: #ff010a;
}
.dingdanlist {
  margin-left: 16px;
  margin-top: 0px;
}
.dingdanlist:eq(0) {
  color: #ff010a;
}
.zhongshujiaoyu{
    width: 230px;
    height: 58px;
    padding-top: 2px;
    background-color: #ff010a;
    float: left;
    margin-right: 12px;
}
</style>