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

      <div class="neirong">
        <div class="x_neirong">
          <div class="neirong_items">
            <el-card>
              <div class="kecheng0">
                <p class="p4_qi">{{allLists.type}}</p>
                <span class="p4_han">【寒】{{allLists.grade}}{{allLists.name}}(上海沪教版)</span>
                <p class="p_nuo">诺贝尔奖得主carl wieman参与课程研发</p>
                <p class="p_qishu">一期：1月17日-1月23日每天19:00-23:00</p>
                <div class="block">
                  <p class="demonstration">难度系数</p>
                  <el-rate v-model="value2" :colors="colors"></el-rate>
                </div>
              </div>
              <img :src="src_img" alt class="img_jiangshi" />
              <span class="x_shouke1">授课 > 庞艳红</span>
              <img :src="src_imgs" alt class="img_jiangshis" />
              <span class="x_shouke1">全程陪伴 > 专属老师</span>
              <div class="x_bofang">
                <a :href="itemlist.course_url">
                  <i class="el-icon-video-play"></i>
                </a>
                <p class="x_obofang0">
                  <span>免费试听</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>{{allLists.number}}页共{{allLists.length}}期</span>
                </p>
                <p class="x_obofang1">
                  <span>主讲：庞艳红</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>时间：{{itemlist.course_startTime}}</span>
                </p>
              </div>
            </el-card>
          </div>
        </div>

        <div class="x_gouwuche">
          <div class="kecheng1">
            <span class="jiage">￥</span>
            <span class="j_jiage">{{allLists.price}}</span>
          </div>
          <div class="x_huodong">
            <span>活 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;动</span>
            <p class="x_huodong0">满减优惠</p>
            <p class="x_huodong0">配套学习资料</p>
          </div>
          <div class="x_ohuodong">
            <span>服 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务</span>
            <p class="x_ohuodong0">直播授课/随时退款/随时看回放/</p>
          </div>
          <div class="x_goods">
            <div class="x_ogoods">
              <el-button class="x_ogoodsp" type="text" @click="centerDialogVisible = true">加入购物车</el-button>

              <el-dialog title="已报课程" :visible.sync="centerDialogVisible" width="62%" center>
                <div class="x_neirong">
                  <div class="neirong_items">
                    <el-card>
                      <div class="kecheng0">
                        <p class="p4_qi">{{allLists.type}}</p>
                        <span class="p4_han">【寒】{{allLists.grade}}{{allLists.name}}(上海沪教版)</span>
                        <p class="p_nuo">诺贝尔奖得主carl wieman参与课程研发</p>
                        <p class="p_qishu">一期：1月17日-1月23日每天19:00-23:00</p>
                        <div class="block">
                          <p class="demonstration">难度系数</p>
                          <el-rate v-model="value2" :colors="colors"></el-rate>
                        </div>
                      </div>
                      <img :src="src_img" alt class="img_jiangshi" />
                      <span class="x_shouke1">授课 > 庞艳红</span>
                      <img :src="src_imgs" alt class="img_jiangshis" />
                      <span class="x_shouke1">全程陪伴 > 专属老师</span>
                      <div class="x_bofang">
                        <a :href="itemlist.course_url">
                          <i class="el-icon-video-play"></i>
                        </a>
                        <p class="x_obofang0">
                          <span>免费试听</span>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <span>{{allLists.number}}页共{{allLists.length}}期</span>
                        </p>
                        <p class="x_obofang1">
                          <span>主讲：庞艳红</span>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <span>时间：{{itemlist.course_startTime}}</span>
                        </p>
                      </div>
                    </el-card>
                  </div>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="centerDialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                </span>
              </el-dialog>
            </div>
            <p class="x_xgoods">立即报名</p>
          </div>
          <img :src="x_img" alt class="x_imgs" />
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
      centerDialogVisible: false,
      courseid: 1,
      x_img:
        "https://hw.xesimg.com/ad/2019-10-11/cb26a522d550f8c9edb472ba2d2edba6.png",
      src_imgs: "https://oot.xesimg.com/web/2017/11/22/15113382042886.png",
      src_img: "https://ekt.xesimg.com/teacher/2018/09/03/15359370953737.png",
      value1: null,
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      allLists: {},
      itemlist: [],
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
    this.courseid = this.$route.query.info;
    // console.log(this.course_id);
    this.sort();
  },
  methods: {
    sort() {
      this.$http
        .get("/ap/course_id", {
          params: {
            course_id: this.courseid
          }
        })
        .then(res => {
          var datas = res.data;
          this.allLists = datas.data;
          this.itemlist = this.allLists.course_outlineList[0];
          console.log(this.allLists);
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

.neirong {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.neirong_items {
  width: 780px;
  height: 340px;
  border: 1px solid rgb(224, 223, 223);
  margin-top: 10px;
  background-color: white;
}
.x_neirong {
  width: 780px;
  float: left;
}
.x_gouwuche {
  width: 400px;
  height: 340px;
  float: left;
  background-color: white;
  margin-left: 20px;
  border-top: 2px solid red;
  margin-top: 10px;
}
.el-card__body {
  padding: 1px;
}

.neirong_items img {
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
.kecheng0 {
  width: 780px;
  height: 55px;
  margin-left: 10px;
  margin-top: 10px;
}
.kecheng1 {
  width: 150px;
  height: 40px;
  margin-left: 10px;
  margin-top: 20px;
  float: left;
}
.p4_qi {
  border: 1px solid red;
  color: red;
  margin-right: 10px;
  font-size: 14px;
  float: left;
}
.p4_han {
  color: #333;
  font-size: 20px;
}

.jiage {
  color: red;
  font-size: 20px;
  margin-left: 10px;
}
.j_jiage {
  color: red;
  font-size: 40px;
  font-weight: bolder;
}

.p7 {
  color: #777;
  font-size: 12px;
  margin: 20px;
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
.neirong_items img {
  width: 60px;
  height: 60px;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin-top: 80px;
  margin-left: -50px;
}
.neirong_items .img_jiangshis {
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
  padding: 0 20px;
}
.x_bofang {
  margin-top: 20px;
  margin-bottom: 5px;
  width: 780px;
  height: 100px;
  overflow: hidden;
}
.el-icon-video-play {
  line-height: 100px;
  margin-left: 10px;
  float: left;
}
.x_obofang0 {
  color: #555;
  font-size: 14px;
  margin-left: 40px;
  margin-top: 30px;
}

.x_obofang1 {
  color: #777;
  font-size: 14px;
  margin-left: 40px;
}

.x_huodong {
  width: 360px;
  padding-left: 20px;
  height: 30px;
  margin-top: 100px;
  overflow: hidden;
}
.x_huodong span,
.x_ohuodong span {
  line-height: 30px;
  color: #333;
  display: block;
  float: left;
  font-size: 14px;
}
.x_huodong0 {
  background-color: #f5f5f5;
  padding: 5px;
  color: red;
  font-size: 14px;
  float: left;
  margin-left: 10px;
}
.x_ohuodong {
  width: 360px;
  padding-left: 20px;
  height: 30px;
  margin-top: 10px;
  overflow: hidden;
}
.x_ohuodong0 {
  padding: 5px;
  color: #777;
  font-size: 14px;
  float: left;
  margin-left: 10px;
}
.x_goods {
  width: 300px;
  height: 50px;
  margin: 0 auto;
  margin-top: 30px;
  overflow: hidden;
}
.x_ogoods {
  width: 100px;
  height: 40px;
  border: 1px solid red;
  float: left;
}
.x_ogoodsp {
  color: #333;
  font-size: 14px;
  text-align: center;
  line-height: 17px;
  margin-left: 17px;
}
.x_xgoods {
  width: 100px;
  height: 43px;
  background-color: red;
  color: white;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  margin-left: 130px;
}
.x_imgs {
  width: 100%;
  margin-top: 20px;
}
.el-dialog {
    margin-top: 0vh;
    height: 800px;
}
.el-dialog__footer{
  padding: 600px 20px 20px;
}
</style>