<template>
  <div>
    <div class="block" :style="backgroundDiv">
      <el-image class="imgs" :src="src"></el-image>
      <el-image class="imgss" :src="srcs"></el-image>

      <div class="denglu">
        <div id="register">
          <p class="title">注册</p>
          <el-form
            :model="ruleForm2"
            status-icon
            :rules="rules2"
            ref="ruleForm2"
            label-width="0"
            class="demo-ruleForm"
          >
            <el-form-item prop="tel">
              <el-input v-model="ruleForm2.tel" auto-complete="off" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="smscode" class="code">
              <el-input class="sr_code" v-model="ruleForm2.smscode" placeholder="验证码"></el-input>
              <el-button type="primary" :disabled="isDisabled" @click="sendCode">{{buttonText}}</el-button>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')" style="width:100%;">注册</el-button>
              <p class="login" @click="gotoLogin">已有账号？立即登录</p>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>

    <div class="shizi">
      <div class="shizi1">
        <p class="p1">
          <span class="shuxian">|</span>优师护航
        </p>
        <div class="shizi2">
          <img :src="imgs" alt />
          <p class="p2">Angel老师</p>
          <p
            class="p3"
          >英语专业学士,英语专业八级。从事少儿英语教育数年，有丰富的教学经验。性格开朗活泼，语感和表达能力较强。富有亲和力、耐心及责任感，课堂气氛活跃，讲课思路清晰，是一位极富表现力的好老师！“陪孩子们成长，给孩子们欢笑，传递给孩子们轻松高效的英语教育，愿孩子们喜欢我，喜欢英语~~”</p>
        </div>
        <div class="shizi2">
          <img :src="imgs1" alt />
          <p class="p2">Etta老师</p>
          <p
            class="p3"
          >国内大学英语专业学士，美国名校学士，英语专业八级。有丰富的少儿英语教学经验，熟悉中小学英语课程体系，思路清晰。能及时发现孩子的特点和学习问题，从根本上解决学生在英语学习中遇到的问题，寓教于乐，注重培养英语学习的兴趣。是一位深受学生喜爱和信任的好老师！</p>
        </div>
        <div class="shizi2">
          <img :src="imgs2" alt />
          <p class="p2">fiona老师</p>
          <p
            class="p3"
          >英语专业学士，英语专业八级。具有丰富的耶鲁视线英语教学经验。善于发现孩子的性格特点，抓住孩子的学习兴趣。在实际教学中善于动脑筋，使孩子爱上英语，爱上学习；在与家长的交流中能及时解决家长的困惑，并和家长一起努力，为了提高孩子的英语学习效果孜孜不倦地努力和付出！</p>
        </div>
        <div class="shizi2">
          <img :src="imgs3" alt />
          <p class="p2">Flora老师</p>
          <p
            class="p3"
          >英语专业学士，英语专业八级。有多年耶鲁视线教学经验，课堂气氛活跃，思路清晰。活泼，亲和力强，能和孩子们打成一片。课后能够及时与家长沟通，坚持当天问题当天解决。 “成就源于热爱！享受与孩子们其乐融融的上课状态，更享受每一个孩子进步的过程。坚持，相信最后我们会共同收获最丰硕的果实！”</p>
        </div>
        <div class="shizi2">
          <img :src="imgs4" alt />
          <p class="p2">minnie老师</p>
          <p
            class="p3"
          >英语专业学士，英语专业八级。性格开朗乐观，乐于助人，做事踏实认真，尽自己最大的努力做到最好！热爱教育，热爱孩子，在课堂上激情有活力，深受孩子喜爱！“You have to believe in yourself . That's the secret of success. 人必须相信自己，这是成功的秘诀。”</p>
        </div>
        <div class="shizi2">
          <img :src="imgs5" alt />
          <p class="p2">Angel老师</p>
          <p
            class="p3"
          >英语专业学士,英语专业八级。从事少儿英语教育数年，有丰富的教学经验。性格开朗活泼，语感和表达能力较强。富有亲和力、耐心及责任感，课堂气氛活跃，讲课思路清晰，是一位极富表现力的好老师！“陪孩子们成长，给孩子们欢笑，传递给孩子们轻松高效的英语教育，愿孩子们喜欢我，喜欢英语~~”</p>
        </div>
      </div>
    </div>

    <div class="shizi">
      <div class="shizi1">
        <p class="p1">
          <span class="shuxian">|</span>课堂真实体验
        </p>
        <p class="p4">
          <span class="fangfa">01</span>趣味课堂，激发学生学习兴趣，学出成就感
        </p>

        <div class="shizi3">
          <div class="fangfa1">
            <img :src="imgs6" alt />
            <p>·动画课件</p>
          </div>
          <div class="fangfa1">
            <img :src="imgs7" alt />
            <p>·小组PK</p>
          </div>
          <div class="fangfa1">
            <img :src="imgs8" alt />
            <p>·金币奖励</p>
          </div>
        </div>
        <p class="p4">
          <span class="fangfa">02</span>学测结合，实时检测学习结果，快速提升
        </p>

        <div class="shizi3">
          <div class="fangfa1">
            <img :src="imgs9" alt />
            <p>·课题互动题</p>
          </div>
          <div class="fangfa1">
            <img :src="imgs10" alt />
            <p>·随堂测试</p>
          </div>
          <div class="fangfa1">
            <img :src="imgs11" alt />
            <p>·学习报告</p>
          </div>
        </div>
      </div>
    </div>

    <div class="shizi">
      <div class="shizi1">
        <p class="p1">
          <span class="shuxian">|</span>强烈建议以下几类孩子学习
        </p>
        <div class="block1" :style="backgroundDiv1">
          <div class="buzhou" style="height: 400px;">
            <el-steps direction="vertical" :active="1">
              <el-step
                title="偏科厌学"
                description="一科突出，其他平平，文科或理科突出，另一方面较弱，一科较弱，其他都较强。对于成绩差的科目产生抵触厌学心理，学不进去，甚至产生恐惧。"
              ></el-step>
              <el-step
                title="苦学无效"
                description="孩子一直努力学习但效果就是不明显，无效是学习中的一个“老大难”问题。很多学生把大量时间花在学习上，但学习效果却不佳，似乎学习的努力程度与学习效果并不成正比。"
              ></el-step>
              <el-step
                title="课外拔高拓展"
                description="一科突出，其他平平，文科或理科突出，另一方面较弱，一科较弱，其他都较强。对于成绩差的科目产生抵触厌学心理，学不进去，甚至产生恐惧。"
              ></el-step>
              <el-step
                title="盲目学习"
                description="课堂上不知道要干什么，只是随了别人在学习，老师叫干什么就干什么，没有自主意识，没有明确的目的，没有计划，很少能完成学习任务。"
              ></el-step>
              <el-step
                title="眼高手低"
                description="感觉一看就会，做题一做就错，考试成绩与自己估计的分数相差很大，不知道错在哪了，经常无故地丢分、漏分。"
              ></el-step>
            </el-steps>
          </div>
        </div>
      </div>
    </div>

    <div class="shizi">
      <div class="shizi1">
        <p class="p1">
          <span class="shuxian">|</span>家长关心的问题
        </p>
        <div class="jiazhang">
          <img :src="imgs12" alt />
          <div class="wenti">
            <p class="p11">如何预约试听课?</p>
            <p class="p12">在本页提交手机号码，预约试听，课程规划师会与您沟通试听详情。</p>
            <p class="p11">报课后是固定老师上课？还是随机老师上课?</p>
            <p class="p12">固定老师时间和固定同学的模式上课，家长和学员可提前安排出固定时间。</p>
            <p class="p11">老师课程不适合是否可以调换？</p>
            <p class="p12">不满意可以换老师换班型。</p>
            <p class="p13">立即领取</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from "@/images/1.jpg";
export default {
  name: "Register",
  data() {
    // <!--验证邮箱是否合法-->
    let checkTel = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (!this.checkMobile(value)) {
        callback(new Error("邮箱不合法"));
      } else {
        callback();
      }
    };
    //  <!--验证码是否为空-->
    let checkSmscode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱验证码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        tel: "",
        smscode: ""
      },
      rules2: {
        tel: [{ validator: checkTel, trigger: "change" }],
        smscode: [{ validator: checkSmscode, trigger: "change" }]
      },
      buttonText: "发送验证码",
      isDisabled: false, // 是否禁止点击发送验证码按钮
      flag: true,
      class1: "choose CActive",
      class2: "choose",
      n: 1,
      input3: "",
      select: "",
      emailcode: "",
      inputemail: "",
      drawer: false,
      innerDrawer: false,
      backgroundDiv: {
        backgroundImage: "url(" + require("../images/4.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      backgroundDiv1: {
        backgroundImage: "url(" + require("../images/5.jpg") + ")",
        backgroundRepeat: "repeat",
        backgroundSize: "50% 90%"
      },
      src:
        "https://zt.xueersi.com/zaixian/pc-zhu-tiyanke/quanke/img/headerhuman.png",
      srcs: img,
      imgs: "http://www.onlycollege.com.cn/only-new/img/teacher-1.jpg",
      imgs1: "http://www.onlycollege.com.cn/only-new/img/teacher-2.jpg",
      imgs2: "http://www.onlycollege.com.cn/only-new/img/teacher-3.jpg",
      imgs3: "http://www.onlycollege.com.cn/only-new/img/teacher-4.jpg",
      imgs4: "http://www.onlycollege.com.cn/only-new/img/teacher-5.jpg",
      imgs5: "http://www.onlycollege.com.cn/only-new/img/teacher-6.jpg",
      imgs6:
        "https://zt.xueersi.com/zaixian/pc-zhu-tiyanke/quanke/img/section3_2.jpg",
      imgs7:
        "https://zt.xueersi.com/zaixian/pc-zhu-tiyanke/quanke/img/section3_1.jpg",
      imgs8:
        "https://zt.xueersi.com/zaixian/pc-zhu-tiyanke/quanke/img/section3_4.jpg",
      imgs9:
        "https://zt.xueersi.com/zaixian/pc-zhu-tiyanke/quanke/img/section3_5.jpg",
      imgs10:
        "https://zt.xueersi.com/zaixian/pc-zhu-tiyanke/quanke/img/section3_6.jpg",
      imgs11:
        "https://zt.xueersi.com/zaixian/pc-zhu-tiyanke/quanke/img/section3_8.jpg",
      imgs12:
        "https://zt.xueersi.com/zaixian/pc-zhu-tiyanke/quanke/img/section6women.png"
    };
  },
  methods: {
    btn(item) {
      this.n = item;
    },
    getcode() {},
    // <!--发送验证码-->

    sendCode() {
      let tel = this.ruleForm2.tel;
      this.$http
        .get("/api/users", {
          params: { email: tel }
        })
        .then(res => {
          console.log(res);
        });
      if (this.checkMobile(tel)) {
        console.log(tel);
        let time = 60;
        this.buttonText = "已发送";
        this.isDisabled = true;
        if (this.flag) {
          this.flag = false;
          let timer = setInterval(() => {
            time--;
            this.buttonText = time + " 秒";
            if (time === 0) {
              clearInterval(timer);
              this.buttonText = "重新获取";
              this.isDisabled = false;
              this.flag = true;
            }
          }, 1000);
        }
      }
    },
    // <!--提交注册-->
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          setTimeout(() => {
            let denglu=new FormData()
            denglu.append('email',this.ruleForm2.tel)
            denglu.append('captcha',this.ruleForm2.smscode)
            this.$http.post('/api/users/add',denglu).then(res=>{
              console.log(res)
              if(res.data.status==0){
                this.$router.push('/shouye1');
              }
            })
          }, 400);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // <!--进入登录页-->
    gotoLogin() {
      this.$router.push("/login");
    },

    // 验证邮箱
    checkMobile(str) {
      let re = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (re.test(str)) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
.block {
  width: 100%;
  height: 600px;
  overflow: hidden;
}
.block1 {
  width: 1200px;
  height: 400px;
}
.block .imgs {
  width: 70%;
  margin-left: 50px;
  margin-top: 111px;
  float: left;
}
.block .imgss {
  width: 10%;
  height: 90px;
  margin-left: -960px;
  margin-top: 0px;
  position: absolute;
  border-radius: 20px;
}

.shizi {
  width: 100%;
  background-color: white;
}
.shizi1 {
  width: 1200px;
  margin: 0 auto;
  padding-top: 30px;
  overflow: hidden;
}
.shizi2 {
  width: 1200px;
  height: 80px;
  margin-top: 20px;
}
.shizi2 img {
  width: 90px;
  height: 80px;
  float: left;
  margin-right: 20px;
}
.p1 {
  width: 1200px;
  margin: 0 auto;
  background-color: white;
  font-size: 30px;
  font-weight: bolder;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(223, 221, 221);
}
.p4 {
  width: 1200px;
  margin: 0 auto;
  background-color: white;
  font-size: 20px;
  padding-bottom: 10px;
  margin-top: 20px;
}
.shuxian {
  color: red;
  font-size: 30px;
}
.fangfa {
  color: red;
  font-size: 24px;
  font-weight: bolder;
}
.p2 {
  color: red;
  font-size: 18px;
}
.p3 {
  color: #333;
  font-size: 14px;
  margin-top: 10px;
}
.shizi3 {
  width: 1200px;
  height: 320px;
  margin-top: 20px;
  overflow: hidden;
}
.fangfa1 {
  width: 360px;
  height: 300px;
  border-radius: 20px;
  margin-right: 40px;
  float: left;
  box-shadow: 0px 0px 10px #333;
}
.fangfa1 p {
  width: 360px;
  height: 60px;
  font-size: 18px;
  padding-left: 10px;
  line-height: 60px;
}
.shizi3 img {
  width: 100%;
  height: 230px;
}
.buzhou {
  width: 1200px;
  margin-top: 30px;
}
.el-step__description.is-finish {
  color: #409eff;
}
.el-step__description.is-wait {
  color: #333;
}
.el-step__title.is-wait {
  color: #333;
  font-weight: bold;
}
.jiazhang {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.jiazhang img {
  width: 25%;
  margin-top: 20px;
  float: left;
}
.wenti {
  width: 700px;
  margin-top: 20px;
  margin-left: 120px;
  float: left;
}
.p11 {
  margin-top: 40px;
  font-size: 20px;
  color: #333;
  font-weight: bolder;
}
.p12 {
  margin-top: 10px;
  font-size: 16px;
  color: #777;
  font-weight: bold;
}

.denglu {
  width: 356px;
  height: 370px;
  background-color: white;
  border-radius: 20px;
  float: left;
  margin-left: -16px;
  margin-top: 150px;
}
.loading-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #aedff8;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-wrapper img {
  position: absolute;
  z-index: 1;
}

#register {
  max-width: 340px;
  margin: 10px auto;
  background: #fff;
  padding: 20px 40px;
  border-radius: 10px;
  position: relative;
  z-index: 9;
}
.title {
  font-size: 26px;
  line-height: 50px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
}
.el-form-item {
  text-align: center;
}
.login {
  margin-top: 10px;
  font-size: 14px;
  line-height: 22px;
  color: #777;
  cursor: pointer;
  text-align: left;
  text-indent: 8px;
  width: 160px;
}
.login:hover {
  color: red;
}
.code >>> .el-form-item__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.code button {
  margin-left: 15px;
  width: 120px;
  text-align: center;
}
.el-button--primary {
  color: #fff;
  background-color: #e74c4c;
  border-color: #e74c4c;
}
.el-button--primary:hover {
  background-color: #eb6d6d;
  border-color: #eb6d6d;
}
.el-button--primary:focus {
  background: red;
  border-color: red;
  color: #fff;
}
.sr_code {
  width: 49%;
}
</style>