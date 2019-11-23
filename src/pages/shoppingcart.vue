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
          <img src="../images/logo.png" alt />
        </el-menu-item>
        <el-menu-item index="1">选课中心</el-menu-item>
        <el-menu-item index="2">免费讲座</el-menu-item>

        <el-menu-item index="3">学习中心</el-menu-item>
        <el-menu-item index="4">1对1</el-menu-item>

        <el-menu-item index="3">
          <el-dropdown>
            <span class="el-dropdown-link">
              更多
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu>
              <el-dropdown-item>编程社区</el-dropdown-item>

              <el-dropdown-item>逛书城</el-dropdown-item>
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
      <!-- 每一条内容 -->
      <div class="item1">
        <span class="item1_1">联报</span>
        <span class="item1_2">一起报名，优先抢占名额</span>
        <div class="item1_course">
          <div class="item1_checkbox">
            <el-checkbox class="hb" value="1" v-model="checked" @change="xuanze"></el-checkbox>
          </div>
          <p class="item1_coursename">【寒假目标985班】高二数学直播班（课改版）</p>
          <span class="item1_coursetimes">共12讲</span>
          <p class="item1_courseprice">¥700</p>
          <p class="item1_coursedel">删除</p>
        </div>
        <div class="item1_teacher">
          <div class="item1_teacherpic">
            <img src="../images/teacher_img1.png" alt />
          </div>
          <div class="item1_teacherjob">
            <p>授课</p>
            <p>武洪姣</p>
          </div>
        </div>
        <el-divider style="margin-top:10px"></el-divider>
      </div>

      <div class="item1">
        <span class="item1_1">联报</span>
        <span class="item1_2">一起报名，优先抢占名额</span>
        <div class="item1_course">
          <div class="item1_checkbox">
            <el-checkbox class="hb" value="2" v-model="checked" @change="xuanze"></el-checkbox>
          </div>
          <p class="item1_coursename">【寒假目标985班】高二数学直播班（课改版）</p>
          <span class="item1_coursetimes">共12讲</span>
          <p class="item1_courseprice">¥700</p>
          <p class="item1_coursedel">删除</p>
        </div>
        <div class="item1_teacher">
          <div class="item1_teacherpic">
            <img src="../images/teacher_img1.png" alt />
          </div>
          <div class="item1_teacherjob">
            <p>授课</p>
            <p>武洪姣</p>
          </div>
        </div>
        <el-divider style="margin-top:10px"></el-divider>
      </div>
      <div class="item1">
        <span class="item1_1">联报</span>
        <span class="item1_2">一起报名，优先抢占名额</span>
        <div class="item1_course">
          <div class="item1_checkbox">
            <el-checkbox class="hb" value="3" v-model="checked" @change="xuanze"></el-checkbox>
          </div>
          <p class="item1_coursename">【寒假目标985班】高二数学直播班（课改版）</p>
          <span class="item1_coursetimes">共12讲</span>
          <p class="item1_courseprice">¥700</p>
          <p class="item1_coursedel">删除</p>
        </div>
        <div class="item1_teacher">
          <div class="item1_teacherpic">
            <img src="../images/teacher_img1.png" alt />
          </div>
          <div class="item1_teacherjob">
            <p>授课</p>
            <p>武洪姣</p>
          </div>
        </div>
        <el-divider style="margin-top:10px"></el-divider>
      </div>
      <!-- 返回顶部 -->
      <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
    </div>

    <!-- 底部付款定位 -->
    <div class="qzf">
      <div class="quzhifu">
        <div class="qxbtn">
          <el-checkbox class="qx" value="0" v-model="checked" @change="quanxuan">全选</el-checkbox>
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
  data: {
      return:{
          checked:true,
          allHb : [],
      }
  },
  components: {
    top
  },
  methods: {
    
    xuanze(){
    
  },
  quanxuan(){
    
  }
}
}
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
  bottom: 0px;
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
.el-menu.el-menu--horizontal {
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
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
  color: #ff010a;
}
.el-submenu__title:hover {
  color: #ff010a;
}
.el-menu-item .el-dropdown {
  margin-top: -8px;
  margin-left: 6px;
  font-size: 16px;
  color: #333;
}
.el-menu .el-menu-item img {
  width: 230px;
  height: 59px;
  text-align: center;
}
.el-menu-item .el-dropdown:hover {
  color: #ff010a;
}
.item1 {
  width: 1176px;
  height: 170px;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  background-color: white;
  float: left;
}
.item1 .item1_1 {
  width: 32px;
  height: 16px;
  background-color: #f0773c;
  font-size: 12px;
  line-height: 14px;
  border-radius: 2px;
}
.item1 .item1_2 {
  width: 143px;
  height: 18px;
  margin-left: 5px;
  color: #999;
  font-size: 14px;
}
.item1_teacher {
  width: 100px;
  height: 50px;
  margin-left: 50px;
  background-color: white;
}
.item1_teacherpic {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #999;
  margin-top: 18px;
  float: left;
  overflow: hidden;
}
.item1_teacherpic img {
  width: 30px;
  height: 30px;
}
.item1_teacherjob {
  width: 60px;
  height: 30px;
  margin-top: 18px;
  font-size: 12px;
  color: #858c96;
  float: left;
}
.item1_teacherjob p {
  width: 60px;
  height: 14px;

  margin-left: 10px;
  font-size: 12px;
  color: #858c96;
}
.item1 .item1_coursename {
  width: 337px;
  margin-top: 20px;
  float: left;
  color: #333;
  cursor: pointer;
}
.item1_course {
  width: 1100px;
  height: 50px;
  margin-top: 10px;
}
.item1_coursetimes {
  margin-top: 22px;
  margin-left: 226px;
  font-size: 12px;
  color: #999;
  float: left;
}
.item1_courseprice {
  width: 200px;
  height: 28px;
  margin-left: 190px;
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  font-weight: bolder;
  color: #f13232;
  float: left;
}
.item1_checkbox {
  width: 40px;
  height: 20px;
  margin-top: 20px;
  margin-left: 3px;
  float: left;
}
.el-dropdown-link {
  position: relative;
}
.el-divider--horizontal {
  margin: 40px 0px;
}
.item1_coursedel {
  width: 24px;
  height: 16px;
  margin-top: 22px;
  margin-left: 40px;
  font-size: 12px;
  color: #666;
  float: left;
  cursor: pointer;
}
</style>