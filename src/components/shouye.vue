<template>
  <div>
    <div class="top">
      <div class="daohang">
        <el-breadcrumb separator="|">
          <el-breadcrumb-item class="daohang_wenzi">
            <a href="|">教师资格证公示</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item class="daohang_wenzi">
            <a href="|">客户端下载</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item class="daohang_wenzi">
            <a href="|">我的订单</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item class="daohang_wenzi">
            <a href="|">设置</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item class="daohang_wenzi">
            <a href="|">立即登陆</a>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="daohang0">
      <div class="logo">
        <img class="datu" :src="imgsrc" alt />
      </div>

      <div class="daohang1">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="4">
            <a href="#">选课中心</a>
          </el-menu-item>
          <el-menu-item index="4">
            <a href="#">免费讲座</a>
          </el-menu-item>
          <el-menu-item index="4">
            <a href="#">学习中心</a>
          </el-menu-item>
          <el-menu-item index="4">
            <a href="#">1对1</a>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">发现更多</template>
            <el-menu-item index="2-1">编程社区</el-menu-item>
            <el-menu-item index="2-2">逛书城</el-menu-item>
            <el-menu-item index="2-3">学社团</el-menu-item>
          </el-submenu>
        </el-menu>
       
      </div>

      <div class="tuijian" style="margin-top: 45px;">
        <el-input placeholder v-model="input3" class="input-with-select">
          <el-button class="btn" slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      
    </div>

    <div class="gouwuche">
      <el-button class="btn" slot="append" icon="el-icon-shopping-cart-2">购物车</el-button>
    </div>
 


 
  </div>
</template>


<script>
import img from "@/images/1.jpg";
export default {
  data() {
    return {
      imgsrc: img,
      activeIndex: "1",
      activeIndex2: "1",
      input3: "",
      select: "",
      input: ''
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


<style>
.top {
  width: 100%;
  height: 30px;
  background-color: black;
}
.daohang {
  padding: 8px;
  width: 400px;
  height: 30px;
  margin-left: 900px;
}
.daohang_wenzi a {
  color: rgb(238, 234, 234);
  font-weight: lighter;
  font-size: 12px;
}
.daohang0 {
  width: 100%;
  height: 100px;
}
.zhongshu {
  font-size: 30px;
  color: red;
}
.logo {
  width: 200px;
  height: 100px;
  float: left;
}
.daohang0 .datu {
  width: 200px;
  height: 120px;
  margin-bottom: 10px;
  margin-top: 6px;
  margin-left: 40px;
}
.daohang1 {
  width: 510px;
  height: 100px;
  margin-left: 40px;
  border-bottom: none;
  float: left;
}
.el-menu--horizontal > .el-menu-item.is-active {
  color: red;
  border: none;
}
.el-menu.el-menu--horizontal {
  border: none;
}
.el-menu-item a {
  text-decoration: none;
}
.el-menu--horizontal > .el-menu-item {
  border: none;
}
.el-menu--horizontal > .el-menu-item {
  line-height: 130px;
  font-size: 16px;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  line-height: 130px;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.input-with-select {
  outline: none;
  border: none;
}
.el-input__inner {
  border: none;
}
.tuijian {
  width: 400px;
  height: 40px;
  float: left;
  border-radius: 50px;
  border: 1px solid #ccc;
  overflow: hidden;
}

.el-input-group__append,
.el-input-group__prepend {
  border: none;
}
.btn {
  outline: none;
  border: none;
}
.gouwuche {
  width: 100px;
  height: 40px;
  border: 1px solid #dddddd;
  border-radius: 50px;
  position: absolute;
  left: 1182px;
  top: 74px;
  overflow: hidden;
}

</style>
