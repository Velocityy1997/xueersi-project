<template>
  <div>
    <div class="block" :style="backgroundDiv">
      <el-image class="picture" :src="src"></el-image>

      <div class="denglu">
        <div :class="n==1?class1:class2" @click="btn(1)">密码登录</div>
        <div :class="n==2?class1:class2" @click="btn(2)">邮箱登陆</div>

        <div v-if="n==1" class="twomenu">
          <div id="register">
            <el-form
              :model="ruleForm2"
              status-icon
              :rules="rules2"
              ref="ruleForm2"
              label-width="0"
              class="demo-ruleForm"
            >
              <el-form-item prop="pass">
                <el-input
                  type="password"
                  v-model="ruleForm2.pass"
                  auto-complete="off"
                  placeholder="输入密码"
                ></el-input>
              </el-form-item>
              <el-form-item prop="checkPass">
                <el-input
                  type="password"
                  v-model="ruleForm2.checkPass"
                  auto-complete="off"
                  placeholder="确认密码"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')" style="width:100%;">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>

        <div v-if="n==2" class="twomenu">
          <div class="mima">
            <el-input placeholder="请输入邮箱" v-model="inputemail" class="mima0"></el-input>
            <div style="margin-top: 30px;">
              <el-input placeholder="请输入验证码" v-model="emailcode" class="shuru"></el-input>
              <el-button size="medium" :disabled="isDisabled" round @click="emailgo">{{buttonText}}</el-button>
              <el-button round class="denglu_dl" @click="login">登录</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from "@/images/01.png";
export default {
  name: "Register",
  data() {
    // <!--验证密码-->
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    // <!--二次验证密码-->
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        checkPass: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "change" }],
        checkPass: [{ validator: validatePass2, trigger: "change" }]
      },
      backgroundDiv: {
        backgroundImage: "url(" + require("../images/2.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      src: img,
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
      innerDrawer: false
    };
  },
  methods: {
    btn(item) {
      this.n = item;
    },
    getcode() {},
    emailgo() {
      this.$http
        .get("/api/users", {
          params: { email: this.inputemail }
        })
        .then(res => {
          console.log(res);
        });
    },
    login() {
      let datalist = new FormData();
      datalist.append("email", this.inputemail);
      datalist.append("captcha", this.emailcode);
      this.$http.post("/api/users/add", datalist).then(res => {
        console.log(res);
        if (res.data.msg == "用户已存在") {
          this.$message.success("登陆成功");
          this.$router.push("/shouye1");
        }
      });
    },
    // <!--提交注册-->
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          setTimeout(() => {
            alert("登陆成功");
          }, 400);
          this.$router.push({
            path: "/shouye1"
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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

.picture {
  width: 40%;
  margin-top: 112px;
  margin-left: 190px;
  float: left;
}
.denglu {
  width: 370px;
  height: 400px;
  background-color: white;
  border-radius: 20px;
  float: left;
  margin-left: -10px;
  margin-top: 120px;
}
.choose {
  width: 130px;
  height: 50px;
  margin-top: 50px;
  margin-left: 36px;
  margin-bottom: 50px;
  text-align: center;
  line-height: 50px;
  background-color: node;
  border-radius: 5px;
  color: gray;
  float: left;
  font-size: 20px;
}
.CActive {
  background-color: red;
  color: white;
  font-size: 20px;
}
.twomenu {
  clear: both;
  width: 370px;
  height: 300px;
  border-radius: 5px;
  margin-top: 100px;
}
.box0 {
  width: 340px;
  height: 300px;
  margin-left: 30px;
}

.el-select .el-input {
  width: 130px;
}
.shuru {
  width: 46%;
  float: left;
  margin-left: -10px;
  margin-right: 40px;
}
.huoqu {
  outline: none;
  margin-left: 0px;
}
.denglu_dl {
  width: 78%;
  margin: 30px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
p {
  width: 100%;
  text-align: center;
  color: #777;
  font-size: 14px;
}
.el-button--medium.is-round {
  padding: 12px 28px;
  margin-left: -32px;
}

.mima {
  width: 305px;
  height: 300px;
  margin-top: 40px;
  margin-left: 60px;
}
.mima0 {
  width: 90%;
  margin-left: -10px;
}
.p13 {
  width: 200px;
  height: 40px;
  background-color: red;
  border-radius: 20px;
  color: white;
  font-size: 30px;
  margin-top: 40px;
  line-height: 40px;
  text-align: center;
  margin-left: 248px;
  box-shadow: 0px 0px 5px #000;
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
  margin: 60px auto;
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
  color: #1ab2ff;
  cursor: pointer;
  text-align: left;
  text-indent: 8px;
  width: 160px;
}
.login:hover {
  color: #2c2fd6;
}
.code >>> .el-form-item__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.code button {
  margin-left: 20px;
  width: 140px;
  text-align: center;
}
.el-button--primary:focus {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
}
.el-form-item {
  margin-bottom: 40px;
}
.el-input__inner {
  width: 100%;
}
</style>