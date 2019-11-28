<template>
  <div>
    <page />
    <div class="beijing">
      <div class="x_nav">
        <p class="xuanke">选课中心 ></p>
        <p class="xuanke0">【寒】(上海沪教版)</p>
      </div>

      <div class="x_neirong">
        <div class="x_kecheng">
          <div class="neirong_item" v-for="(item,index) in allList" :key="index">
            <el-card>
              <div class="kecheng">
                <p class="p4_qi">{{item.type}}</p>
                <span>【寒】{{item.grade}}{{item.name}}</span>
                <p class="p_nuo">诺贝尔奖得主carl wieman参与课程研发</p>
                <p class="p_qishu">一期：1月17日-1月23日每天{{item.course_outlineList.course_startTime}}</p>
                <div class="block">
                  <p class="demonstration">难度系数</p>
                  <el-rate v-model="value2" :colors="colors"></el-rate>
                </div>
              </div>
              <img :src="src_img" alt class="img_jiangshi" />
              <img :src="src_imgs" alt class="img_jiangshis" />
              <div class="x_shouke">
                <p class="x_shouke1">授课</p>
                <p class="x_shouke2">辅导</p>
              </div>
              <div class="kecheng1">
                <span class="jiage">￥{{item.price}}</span>
                <span class="qi">起</span>
              </div>
            </el-card>
          </div>
        </div>
        <div class="x_jiage"></div>
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
    };
  },
  created() {
    this.sort();
  },
  methods: {
    sort() {
      this.$http
        .get("/ap/course", {
          params: {
            // course_id: 1,
            // type: "",
            // name: ""
          }
        })
        .then(res => {
          var data = res.data;
          this.allList = data.data;
          console.log(data);
        });
    }
  },
  components: {
    page
  }
};
</script>

<style>
.beijing {
  width: 100%;
  background-color: #f5f5f5;
  margin-top: 30px;
  height: 1000px;
}
.x_nav {
  width: 1200px;
  height: 50px;
  padding: 20px;
  margin: 0 auto;
  overflow: hidden;
}
.xuanke {
  color: #777;
  float: left;
  font-size: 12px;
  padding: 13px 0;
}
.xuanke0 {
  color: #333;
  float: left;
  font-size: 12px;
  padding: 13px 0;
}
.x_neirong {
  width: 1200px;
  /* height: 1000px; */
  margin: 0 auto;
  overflow: hidden;
}
.x_kecheng {
  width: 780px;
  height: 300px;
  background-color: white;
  float: left;
}
.x_jiage {
  width: 400px;
  height: 400px;
  background-color: white;
  margin-left: 20px;
  float: left;
}
.x_neirong {
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
.p3_qi {
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
  margin-top: 213px;
  float: left;
}
.p4_qi {
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
.p_nuo {
  padding: 10px 0;
  color: red;
  font-size: 14px;
}
.p_qishu {
  color: #555;
  font-size: 12px;
  margin-bottom: 10px;
}
.demonstration {
  float: left;
  font-size: 12px;
  color: #555;
}
.neirong_item img {
  width: 60px;
  height: 60px;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin-top: 100px;
  margin-left: -50px;
}
.neirong_item .img_jiangshis {
  margin-left: 30px;
}
.x_shouke {
  width: 300px;
  overflow: hidden;
}
.x_shouke0 {
  color: #555;
  font-size: 12px;
  float: left;
  padding: 0 20px;
}
.x_shouke1 {
  color: #555;
  font-size: 12px;
  float: left;
  padding: 0 40px;
}
</style>