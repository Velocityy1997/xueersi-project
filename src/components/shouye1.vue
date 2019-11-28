<template>
  <div>
    <page />

    <el-carousel :interval="3000" arrow="always" class="d_jump" :height="imgHeight+'px'">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <el-row>
          <el-col>
            <img ref="imgHeight" :src="item.idView" class="banner_img" @load="imgLoad" />
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
    <div>
      <el-tag class="fenlei">年级</el-tag>
      <el-tag>中班</el-tag>
      <el-tag>大班</el-tag>
      <el-tag>一年级</el-tag>
      <el-tag>二年级</el-tag>
      <el-tag>三年级</el-tag>
      <el-tag>四年级</el-tag>
      <el-tag>五年级</el-tag>
      <el-tag>六年级</el-tag>
      <el-tag>初一</el-tag>
      <el-tag>初二</el-tag>
      <el-tag>初三</el-tag>
      <el-tag>高一</el-tag>
      <el-tag class="fenlei0">高二</el-tag>
      <el-tag>高三</el-tag>
    </div>
    <div>
      <el-tag class="fenlei">学科</el-tag>
      <el-tag class="fenlei0">全部</el-tag>
      <el-tag>语文</el-tag>
      <el-tag>数学</el-tag>
      <el-tag>英语</el-tag>
      <el-tag>物理</el-tag>
      <el-tag>化学</el-tag>
      <el-tag>生物</el-tag>
      <el-tag>政治</el-tag>
      <el-tag>历史</el-tag>
      <el-tag>地理</el-tag>
    </div>

    <div class="tongbuke">
      <div class="tongbu1">
        <p class="p2">直播授课 / 无限回放 / 学习报告 / 纸质讲义 /</p>
      </div>
      <div class="neirong">
        <div class="neirong_item" v-for="(item,index) in allList" :key="index">
          <el-card>
            <img :src="item.image" class="image" />
            <p class="p3">{{item.length}}期内容可选</p>
            <div class="kecheng">
              <p class="p4">{{item.type}}</p>
              <span>{{item.grade}}{{item.name}}</span>
            </div>
            <div class="kecheng1">
              <span class="jiage">￥{{item.price}}</span>
              <span class="qi">起</span>
            </div>
            <el-button type="success" @click="btn(item.course_id)">进入课程</el-button>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import page from "../components/shouye";
export default {
  data() {
    return {
      allList: [],
      activeName: "thirteenth",
      imgHeight: "",
      imgImg: "https://s03.xesimg.com/web/2018/01/15/15160080642262.png",
      imgImg1: "https://ekt.xesimg.com/teacher/2019/04/09/15547776978094.png",
      imgList: [
        {
          id: 0,
          idView:
            "https://hw.xesimg.com/ad/2019-11-18/c9e88de028ebc61164088f5db8dcf5f7.png"
        },
        {
          id: 1,
          idView:
            "https://hw.xesimg.com/ad/2019-10-18/11481c7b6b29caa58c54a72a8a1c6dfa.jpg"
        },
        {
          id: 2,
          idView:
            "https://hw.xesimg.com/ad/2019-11-15/a8a1fed79f0352d77198de31b49e12dd.jpg"
        },
        {
          id: 3,
          idView:
            "https://hw.xesimg.com/ad/2019-08-30/2d3a39b6bdee444681f930aef205a357.jpg"
        }
      ]
    };
    that.imgHeight = "620px";
    window.onresize = function temp() {
      that.imgHeight = `${that.$refs.imgHeight["0"].height}px`;
    };
  },
  created() {
    this.sort();
  },
  methods: {
    sort() {
      this.$http
        .get("/ap/course")
        .then(res => {
          var data = res.data;
          this.allList = data.data;
          console.log(this.allList);
        });
    },
    btn(val) {
      console.log(val);
      this.$router.push("/detail?info="+val);
    },
    imgLoad() {
      this.$nextTick(() => {
        this.imgHeight = this.$refs.imgHeight[0].height;
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
    this.imgLoad();
    window.addEventListener(
      "resize",
      () => {
        this.imgHeight = this.$refs.imgHeight[0].height;
        this.imgLoad();
      },
      false
    );
  },
  components: {
    page
  }
};
</script>

<style>
.d_jump {
  margin-top: 20px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #d3dce6;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-tabs {
  width: 100%;
  flex-wrap: wrap;
  border: none;
}
.el-tabs__item {
  border: none;
  display: block;
  float: left;
}
.el-tabs--top .el-tabs__item.is-top:nth-child(1) {
  margin-left: 30px;
}
.el-tabs--top .el-tabs__item.is-top:nth-child(16) {
  margin-left: 30px;
}
.el-tabs--top .el-tabs__item.is-top:nth-child(15) {
  margin-right: 170px;
}
.el-tabs--card > .el-tabs__header .el-tabs__item {
  border: none;
}
.el-tabs--card > .el-tabs__header {
  border: none;
}
.el-tabs--card > .el-tabs__header .el-tabs__nav {
  border: none;
}
.el-tabs__item.is-active {
  color: white;
  background-color: red;
}
.tongbuke {
  width: 100%;
  background-color: #f5f5f5;
}

.tongbu1 p {
  padding-top: 20px;
  margin-left: 60px;
  float: left;
}
.p1 {
  font-size: 36px;
  font-weight: bolder;
  padding-right: 20px;
  padding-left: 30px;
}
.p2 {
  font-size: 14px;
  color: #777;
  margin-top: 25px;
}
.neirong {
  width: 95%;
  margin-left: 40px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
.neirong_item {
  width: 300px;
  height: 300px;
  margin-left: 15px;
  margin-top: 15px;
  background-color: white;
  overflow: hidden;
  position: relative;
  float: left;
  transition: all 0.5s;
}
.el-card__body {
  padding: 1px;
}

.neirong_item:hover {
  transform: translateY(-6px);
  box-shadow: 0px 0px 5px #000;
}
.neirong_item img {
  width: 100%;
  height: 200px;
}

.p3 {
  background-color: #cc8d7c;
  border-radius: 3px;
  position: absolute;
  top: 30px;
  right: 0px;
  color: white;
  font-size: 12px;
  text-align: center;
}
.p6 {
  color: #333;
  font-size: 14px;
  margin-left: 35px;
}
.p8 {
  color: #333;
  font-size: 14px;
  margin-left: 30px;
}
.kecheng {
  width: 300px;
  height: 34px;
  margin-left: 10px;
  margin-top: 10px;
}
.kecheng1 {
  width: 150px;
  height: 40px;
  margin-left: 10px;
  margin-top: 10px;
  float: left;
}
.p4 {
  border: 1px solid red;
  color: red;
  margin-right: 10px;
  font-size: 14px;
  float: left;
}
.p5,
.p9 {
  color: #777;
  font-size: 12px;
  float: left;
  margin-right: 90px;
  margin-top: 8px;
}
.p9 {
  margin-right: 240px;
}
.jiage,
.qian {
  color: red;
  font-size: 20px;
  font-weight: bolder;
}
.jiage1 {
  color: #777;
  font-size: 14px;
  text-decoration: line-through;
}
.qi {
  color: red;
  font-size: 12px;
  font-weight: lighter;
}
.p7 {
  color: #777;
  font-size: 12px;
  margin: 20px;
}
.jiangshi {
  width: 400px;
  height: 150px;
  padding: 20px;
  margin-top: 30px;
}
.el-tag {
  outline: none;
  background-color: white;
  border-color: white;
  color: black;
  font-size: 14px;
  margin: 3px;
}
.fenlei {
  margin-left: 50px;
  color: #777;
}
.fenlei0 {
  background-color: red;
  color: white;
}
.el-tag:hover {
  color: rgb(241, 154, 154);
}
.fenlei:hover {
  color: #777;
}
.el-button--success {
  color: #555;
  background-color: rgb(203, 243, 220);
  border-color: #ccc;
}
</style>