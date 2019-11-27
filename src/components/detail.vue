<template>
  <div>
    <page />
    <div class="beijing">
      <div class="x_nav">
        <p class="xuanke">选课中心 ></p>
        <div class="banji_fenlei">
          <el-select class="fenlei_value" v-model="value" placeholder="初一">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="banji_fenlei">
          <el-select class="fenlei_value" v-model="value" placeholder="大学科">
            <el-option
              v-for="item in optionss"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>

      <div class="x_shaixuan">
        <div class="x_tiaojian">
          <p class="x_xtiaojian">学期</p>
          <p class="x_otiaojian">寒</p>
          <p class="x_otiaojian">春</p>
        </div>
        <div class="x_tiaojian">
          <p class="x_xtiaojian">版本</p>
          <p class="x_otiaojian">全国版</p>
          <p class="x_otiaojian">上海沪教版</p>
        </div>
        <div class="x_tiaojian">
          <p class="x_xtiaojian">难度</p>
          <p class="x_otiaojian">目标（4星）</p>
        </div>
        <div class="x_tiaojian">
          <p class="x_xtiaojian">时间</p>
          <p class="x_otiaojian">周五</p>
          <p class="x_otiaojian">周六</p>
          <p class="x_otiaojian">周日</p>
          <p class="x_otiaojian">一期</p>
          <p class="x_otiaojian">二期</p>
          <p class="x_otiaojian">三期</p>
        </div>
        <div class="x_tiaojian">
          <p class="x_xtiaojian">时段</p>
          <p class="x_otiaojian">上午</p>
          <p class="x_otiaojian">下午</p>
          <p class="x_otiaojian">晚上</p>
        </div>
      </div>
      <div class="x_paixu">
        <p class="x_opaixu">综合排序</p>
        <p class="x_xpaixu">
          共
          <span>14</span>课程
        </p>
      </div>
      <div class="neirong">
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
    </div>
  </div>
</template>

<script>
import page from "../components/shouye";
export default {
  data() {
    return {
      src_imgs: "https://oot.xesimg.com/web/2017/11/22/15113382042886.png",
      src_img: "https://ekt.xesimg.com/teacher/2018/09/03/15359370953737.png",
      value1: null,
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      allList: [],
      allLists: [],
      options: [
        {
          value: "选项1",
          label: "中班"
        },
        {
          value: "选项2",
          label: "大班"
        },
        {
          value: "选项3",
          label: "一年级"
        },
        {
          value: "选项4",
          label: "二年级"
        },
        {
          value: "选项5",
          label: "三年级"
        },
        {
          value: "选项6",
          label: "四年级"
        },
        {
          value: "选项7",
          label: "五年级"
        },
        {
          value: "选项8",
          label: "六年级"
        },
        {
          value: "选项9",
          label: "初一"
        },
        {
          value: "选项10",
          label: "初二"
        },
        {
          value: "选项11",
          label: "初三"
        },
        {
          value: "选项12",
          label: "高一"
        },
        {
          value: "选项13",
          label: "高二"
        },
        {
          value: "选项14",
          label: "高三"
        }
      ],
      optionss: [
        {
          value: "选项1",
          label: "语文"
        },
        {
          value: "选项2",
          label: "数学"
        },
        {
          value: "选项3",
          label: "英语"
        },
        {
          value: "选项4",
          label: "大学科"
        },
        {
          value: "选项5",
          label: "编程"
        },
        {
          value: "选项6",
          label: "科学"
        }
      ],
      value: ""
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
          this.allLists = data.data.course_outlineList;
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
.banji_fenlei {
  float: left;
  margin-left: 10px;
}
.fenlei_value {
  width: 130px;
  border: 1px solid #ccc;
}
.el-input__inner {
  height: 40px;
  font-size: 12px;
  background-color: #f5f5f5;
  line-height: 40px;
}
.x_shaixuan {
  width: 1200px;
  height: 250px;
  margin: 0 auto;
  background-color: white;
}
.x_tiaojian {
  width: 1170px;
  height: 50px;
  margin-left: 30px;
  overflow: hidden;
}
.x_xtiaojian {
  line-height: 50px;
  color: #777;
  font-size: 14px;
}
.x_tiaojian p {
  float: left;
}
.x_otiaojian {
  margin: 16px;
  color: #333;
  font-size: 14px;
}
.x_otiaojian:hover {
  color: red;
}
.x_paixu {
  width: 1200px;
  height: 50px;
  margin: 0 auto;
  border-bottom: 2px solid #333;
  margin-top: 60px;
  overflow: hidden;
}
.x_opaixu {
  width: 100px;
  height: 50px;
  background-color: #333;
  color: white;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  float: left;
}
.x_xpaixu {
  width: 80px;
  height: 50px;
  color: #777;
  font-size: 12px;
  text-align: center;
  line-height: 50px;
  margin-left: 1020px;
  float: left;
}
.x_xpaixu span {
  color: red;
  font-size: 12px;
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
.x_shouke{
  width: 300px;
  overflow: hidden;
}
.x_shouke0{
  color: #555;
  font-size: 12px;
  float: left;
  padding: 0 20px;
}
.x_shouke1{
  color: #555;
  font-size: 12px;
  float: left;
  padding: 0 40px;
}
</style>