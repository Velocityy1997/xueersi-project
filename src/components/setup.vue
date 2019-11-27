<template>
  <div>
    <!-- 引入插件 -->
    <!-- 内容 -->
    <div class="bg">
      <div class="content">
        <div class="content-left">
          <div class="content-left-text1">
            账户中心
            <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
            </el-radio-group>
          </div>
          
          <div class="content-left-down">
            <el-tabs :tab-position="tabPosition" >
              <el-tab-pane label="我的资料">

                <div class="yhm">
                  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">

                    <!-- 账户资料 -->
                    
                    <el-tab-pane label="账户资料" name="first">
                     
                      <div class="youtext">
                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="用户姓名">
                              <el-input v-model="form.username"></el-input>
                            </el-form-item>
                            <el-form-item label="用户地址">
                              <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="上海" value="shanghai"></el-option>
                                <el-option label="北京" value="beijing"></el-option>
                              </el-select>
                            </el-form-item>
                            <el-form-item label="详细地址">
                              <el-input type="textarea" v-model="form.school"></el-input>
                            </el-form-item>
                            <el-form-item label="年龄">
                              <el-input type="number" v-model="form.age"></el-input>
                            </el-form-item>
                            <el-form-item label="出生日期">
                              <el-col :span="11">
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                              </el-col>
                            </el-form-item>  
                            <el-form-item label="性别">
                              <el-radio-group v-model="form.resource">
                                <el-radio label="男" value="男"></el-radio>
                                <el-radio label="女" value="女"></el-radio>
                              </el-radio-group>
                            </el-form-item>
                            <el-form-item label="用户学校">
                              <el-input type="text" v-model="form.descschool"></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="onSaveform">保存</el-button>
                              <el-button>取消</el-button>
                            </el-form-item>
                          </el-form>
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                </div>
                
              </el-tab-pane>

              <!-- 修改密码 -->

              <el-tab-pane @click="new_change" label="修改密码">
                  <div class="xgmm">
                  修改密码
                  </div>
                  <div class="mima">
                  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="问题"  v-if="flagshow">
                        <el-input type="text" v-model="ruleForm.question" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="答案"  v-if="flagshow">
                        <el-input type="text" v-model="ruleForm.answer" autocomplete="off"></el-input>
                    </el-form-item>
                     <el-form-item label="旧密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="surepass">
                        <el-input v-model="ruleForm.surepass"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm1('ruleForm')">提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                    </el-form>
                  </div>
              </el-tab-pane>
              
               <!-- 修改手机号 -->

              <el-tab-pane label="修改邮箱号">
                  <div class="xgmm">
                       修改邮箱号
                  </div>
                 
                 <div class="xgsj">

                        <el-form
                        :model="ruleForm2"
                        status-icon
                        :rules="rules2"
                        ref="ruleForm2"
                        label-width="0"
                        class="demo-ruleForm"
                      >
                        <el-form-item prop="tel">
                          <p class="email-text">请输入邮箱号</p>
                          <el-input v-model="ruleForm2.tel" placeholder="请输入邮箱"></el-input>
                        </el-form-item>
                        <el-form-item prop="smscode" class="code">
                          <p class="email-text">请输入验证码</p>
                          <el-input class="sr_code" v-model="ruleForm2.smscode" placeholder=""></el-input>
                          <el-button type="primary" :disabled="isDisabled" @click="sendCode">{{buttonText}}</el-button>
                        </el-form-item>

                        <el-form-item>
                          <el-button type="primary" @click="submitForm('ruleForm2')" style="width:100%;">保存</el-button>
                          
                        </el-form-item>
                      </el-form>
                                    
                 </div>
                  

              </el-tab-pane>

                  <!-- 收货地址 -->

              <el-tab-pane label="收货地址">
                
                <div class="xgmm">地址管理</div>

                 <div class="new-address">
                   新增收货地址
                 </div>
                <div class="address">
                  
                  <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="收货人">
                      <el-input v-model="form.name"></el-input>
                      <p class="address-text">请准确填写真实姓名</p>
                    </el-form-item>
                    <el-form-item label="所在地区">
                      <el-select class="quyu" v-model="form.city" placeholder="请选择区域">
                        <el-option label="上海" value="shanghai"></el-option>
                        <el-option label="北京" value="beijing"></el-option>
                        <el-option label="陕西" value="shanxi"></el-option>
                        <el-option label="四川" value="sichuan"></el-option>
                        <el-option label="广东" value="guangdong"></el-option>
                        <el-option label="深圳" value="shenzhen"></el-option>
                        <el-option label="湖南" value="hunan"></el-option>
                        <el-option label="福建" value="fujian"></el-option>
                        <el-option label="乌鲁木齐" value="wulumuqi"></el-option>
                        <el-option label="甘肃" value="gansu"></el-option>
                        <el-option label="青海" value="qinghai"></el-option>
                        <el-option label="山东" value="shandong"></el-option>
                      </el-select>
                      <el-select class="diqu" v-model="form.county" placeholder="请选择区域">
                        <el-option label="上海" value="shanghai"></el-option>
                        <el-option label="北京" value="beijing"></el-option>
                        <el-option label="陕西" value="shanxi"></el-option>
                        <el-option label="四川" value="sichuan"></el-option>
                        <el-option label="广东" value="guangdong"></el-option>
                        <el-option label="深圳" value="shenzhen"></el-option>
                        <el-option label="湖南" value="hunan"></el-option>
                        <el-option label="福建" value="fujian"></el-option>
                        <el-option label="乌鲁木齐" value="wulumuqi"></el-option>
                        <el-option label="甘肃" value="gansu"></el-option>
                        <el-option label="青海" value="qinghai"></el-option>
                        <el-option label="山东" value="shandong"></el-option>
                      </el-select>
                    </el-form-item>
                  
                     <el-form-item label="详细区县">
                      <el-input type="textarea" v-model="form.province"></el-input>
                      <p class="address-text">请填写详细区县</p>
                    </el-form-item>
                    <el-form-item label="详细地址">
                      <el-input type="textarea" v-model="form.desc"></el-input>
                      <p class="address-text">请填写详细路名及门牌号</p>
                    </el-form-item>
                    
                     <el-form-item label="邮政编码">
                      <el-input v-model="form.postcode"></el-input>
                      <p class="address-text">请填写当地的邮政编码</p>
                    </el-form-item>
                    <el-form-item label="手机号码">
                      <el-input v-model="form.phone"></el-input>
                      <p class="address-text">用于接收发货通知短信和送货前通知</p>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="onSubmit">保存收货人地址</el-button>
                      <el-button>取消</el-button>
                    </el-form-item>
                  </el-form>

                </div>

              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
         <!-- 底部 -->
         <div class="footer">
           <div class="footer1">
               <p>
               <a class="footer1-text" href="#">网校首页</a>
               <span class="footer1-text-1">|</span>
               <a class="footer1-text" href="#">关于我们</a>
               <span class="footer1-text-1">|</span>
               <a class="footer1-text" href="#">网校招聘</a>
               <span class="footer1-text-1">|</span>
               <a class="footer1-text" href="#">合作专区</a>
               <span class="footer1-text-1">|</span>
               <a class="footer1-text" href="#">联系我们</a>
               <span class="footer1-text-1">|</span>
               <a class="footer1-text" href="#">AI开放平台</a>
               <span class="footer1-text-1">|</span>
               <a class="footer1-text" href="#">意见反馈</a>
               <span class="footer1-text-1">|</span>
               <a class="footer1-text" href="#">漏洞提交</a>
               <span class="footer1-text-1">|</span>
               <a class="footer1-text" href="#">隐私政策</a>
               <span class="footer1-text-1">|</span>
               <a class="footer1-text" href="#">版权声明</a>
               <span class="footer1-text-1">|</span>
               <a class="footer1-text" href="#">反盗链声明</a>
               </p>

           </div>
           <div class="footer2">
              <p class="footer2-text">
                  客服电话：
                  <strong class="footer2-text-1">400-800-2211</strong>        
                （免长途话费） Copyright © 2009-2019 学而思网校 www.xueersi.com 北京学而思教育科技有限公司 版权所有
               </p>
           </div>
           <div class="footer3">
               <p>
                
              违法和不良信息举报电话：010-62577976  地址：北京市海淀区中关村大街18号科贸中心7层 &nbsp;&nbsp;&nbsp;&nbsp; 
                <a href="#"  class="footer3-text"> 京ICP证080230号  &nbsp;&nbsp; 京ICP备09032638号 </a>
              
                 
               </p>
           </div>
           <div class="footer4">
              <img class="footer4-1" :src="imgsrc1" alt="">
              <img class="footer4-1" :src="imgsrc2" alt="">
              <img class="footer4-1" :src="imgsrc3" alt="">
           </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/footer1.png';
import img2 from '@/assets/footer2.png';
import img3 from '@/assets/footer3.png';
export default {
  data() {
      // <!--验证邮箱是否合法-->
    let checkTel = (rule, value, callback) => {
      // if (value === "") {
      //   callback(new Error("请输入邮箱"));
      // } else if (!this.checkMobile(value)) {
      //   callback(new Error("邮箱不合法"));
      // } else {
      //   callback();
      // }
    };
    //  <!--验证码是否为空-->
    let checkSmscode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱验证码"));
      } else {
        callback();
      }
    };
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 15) {
              callback(new Error(''));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请重新输入密码'));
        }  else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          
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
      filelist:[],
      dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
      imgsrc1:img1,
      imgsrc2:img2,
      imgsrc3:img3,
      tabPosition: "left",
      activeName: "second",
      activeName: "first",
      imageUrl: '',
      input: '',
       phonenumber: '',
       oldemail: '',
       newemail: '',
       emailcode: '',
       cipher: '',
       usertou:'',
       postcode:'',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["small","medium","large"],
       ruleForm: {
          pass: '',
          checkPass: '',
          surepass: '',
          question:'',
          answer:'',
        },
        flagshow:false,
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
      form: {
        onSaveform:'',
          name: '',
          username:'',
          phone: '',
          school:'',
          descschool:'',
          city: '',
          county: '',
          date1: '',
          province:'',
          schoolname: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          avatar:'',
          age:'',
          yanzheng:'',
         
          new_email:'',
        }
      }
    },
    // created() {
    //   this.$http.put('/api/Users/id/passwordHaveOrNot').then(res=>{
    //     console.log(res);
    //   })
    // },
   created(){
     this.$http.put('/api/Users/id/passwordHaveOrNot').then(res=>{
        console.log(res);
        if(res.data.status==0){
          this.flagshow=true;
        }else{
          this.flagshow=false;

        }
      })
     let submitForm1=new FormData();
     submitForm1.append('answer',this.ruleForm.checkPass)
     submitForm1.append('new_Password',this.ruleForm.pass)
     submitForm1.append('question',this.ruleForm.age)

     this.$http.put('/api/Users/id/passwordNot',submitForm1).then(res=>{
 
        console.log(res);

     })
   },
  methods: {
    
  new_change(){},
    getuserimage(val){
      console.log(this.imageUrl)

      console.log(val);
      this.form.avatar=val.file;
    },
    onSaveform(){
      // this.$alert("提交成功");
      let onSaveform=new FormData();
      onSaveform.append('address',this.form.school)
      onSaveform.append('age',this.form.age)
      onSaveform.append('birthday',this.form.date1)
      onSaveform.append('image',this.form.avatar)
      onSaveform.append('name',this.form.username)
      onSaveform.append('school',this.form.descschool)
      onSaveform.append('sex',this.form.resource)
      onSaveform.append('userid',1)
      // onSaveform.append('messageid',22)
       this.$http.post('/usertou/user_message',onSaveform).then(res=>{
         console.log(res)
       })
    },
      onSubmit(){
        let fromdata=new fromData();
        fromdata.append('address',this.desc)
        fromdata.append('city',this.city)
        fromdata.append('county',this.county)
        fromdata.append('name',this.name)
        fromdata.append('postCode',this.postcode)
        fromdata.append('province',this.city)
        fromdata.append('tel',this.phone)

        this.$http.post('/mjh/shipping/ship',fromdata).then(res=>{
            console.log(res)

        })
      },
    handleClick(tab, event) {
      console.log(tab, event);
    },
     handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    onSubmit() {
        console.log('submit!');
      },
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
                this.$router.push('/setup');
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
* {
  margin: 0;
  padding: 0;
}
.bg {
  width: 100%;
  /* height: 1100px; */
  overflow: hidden;
  padding-top: 60px;
  background-color: #fcf8f8;
}
.content {
  width: 1200px;
  height: 800px;
  /* overflow: hidden; */
  /* border: 1px solid red; */
  margin: auto;
}
.content-left {
  width: 1200px;
  /* height: 1000px; */
  overflow: hidden;
  margin-top: -65px;
}

.content-left-text1 {
  width: 150px;
  height: 40px;
  font-size: 20px;
  color: #f70d1a;
  text-align: center;
  line-height: 40px;
  margin-top: 30px;
}
.content-left-down {
  width: 150px;
  /* height: 300px; */
  /* margin: auto; */
}
.content-left-down .el-tabs {
  width: 850px;
  margin-top: 30px;
  margin-left: 30px;
}
.content-left-down .el-tabs__item.is-active {
  color: #f70d1a;
  font-size: 18px;
}
.content-left-down .el-tabs__item {
  width: 120px;
  /* margin-top: 25px; */
  font-size: 16px;
}
.content-left-down .el-tabs--left,
.el-tabs--right {
  /* height: 300px; */
  width: 1200px;
}
.content-left-down .el-tabs el-tabs--left {
  width: 280px;
  /* height: 300px; */
}
#pane-0 {
  margin-top: 30px;
}
.content-right .el-tabs__item is-top {
  width: 700px;
  /* height: 600px; */
}
.content-right
  .el-tabs--card
  > .el-tabs__header
  .el-tabs__item.is-active.is-closable {
  width: 60px;
  height: 40px;
}
.content-right .el-tabs--card > .el-tabs__header .el-tabs__item {
  width: 300px;
}
.yhm {
  width: 1020px;
  /* height: 400px; */
  /* background-color: red; */
}
.yhm .el-tabs__item is-top is-active {
  width: 700px;
}
.youtext{
    width: 1020px;
    height: 850px;
}

 .el-form{
   margin-left: 100px;
   margin-top: 50px;
 }
 .youtext .el-input__inner{
   width: 350px;
 }
.youtext .el-textarea  {
   width: 350px;
 }
 .youtext .el-button--primary {
   background-color: #F13233;
   border: none;
 }
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    left: 0px;
    top: 15px;
    /* margin: auto */
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 220px;
    height: 220px;
    line-height: 220px;
    text-align: center;
  }
  .avatar {
    width: 220px;
    height: 220px;
    display: block;
  }
  .tout{
      width: 1020px;
      height: 800px;
  }
  .tou-left{
    width: 550px;
    height: 700px;
    float: left;
    /* background-color: cadetblue; */
  }
  .tou-right{
     width: 200px;
    height: 550px;
    border-left:1px solid #e2e1e1;
    float: right;
    /* margin-top: -630px; */
    margin-right: 230px; 
  }
  .tou-left .el-icon-plus {
      margin: auto
  }
   .push{
     width: 80px;
    height: 30px;
    background-color: #F13233;
    color: aliceblue;
    font-size: 16px;
    border: none;
    float: left;
    margin-left: 190px;
    margin-top: 110px;
     border-radius: 5px;
  }
   .tou-right .demo-avatar{
    margin-left:60px;
  }
  .tou-right .el-avatar{
    margin-top: 60px;
  }
   .sub-title{
    width: 180px;
    height: 50px;
    margin-left: -30px;
  }
  .sub-title1{
    width: 180px;
    height: 30px;
    font-size: 14px;
  }
  .tou-right .el-avatar--small{
    width: 40px;
    height: 40px;
    margin-left: 40px;

  }
  .tou-right .el-avatar--medium{
    width: 60px;
    height: 60px;
    margin-left: 33px;
  }
  .tou-right .el-avatar--large{
    width: 100px;
    height: 100px;
    margin-left: 16px;

  }
  .top .el-menu--horizontal>.el-submenu .el-submenu__title{
    color: white;
  }
  .top .el-menu-item, .el-submenu__title{
    color: white;
  }
  .top .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
    color: black;
  }
 
  .xgmm{
      width: 1020px;
      height: 40px;
      margin-top: 30px;
      border-bottom: 1px solid #e2e1e1;
      padding-left: 30px;
      font-size: 18px;
      color: #F70D1A;
  }
  .mima{
      width: 400px;
      /* height: 280px;   */
      margin-left: 100px;
      margin-top: 100px;
  }
  .mima .el-button--primary{
      background-color: #F70D1A;
      border: none;
      margin-top: 20px;
  }
  .email-text{
    width: 100px;
    line-height: 40px;
    text-align: right;
  }
  .xgsj .el-input__inner{
    width: 300px;
    margin-left: 115px;
    margin-top: -65px;
    float: left;
  }
  .xgsj .el-button--primary {
    margin-left: 117px;
    background-color: #F70D1A;
    border: none;
    width: 100px;
  }
  .xgsj .el-form-item__content{
    width: 100px;
  }
.xgsj .el-input__prefix, .el-input__suffix{
  display: none
}
  .address{
    width: 800px;
    height: 600px;
    margin-top: 50px;
  }
  .address .el-form-item {
    width: 400px;
    margin-left: 150px;
    margin-top: 30px;
  }
  .address .el-form{
    margin-top: -10px;
  }
  .new-address{
    width: 100px;
    height: 40px;
    font-size: 16px;
    color: #F70D1A;
    margin-top: 50px;
    margin-left: 150px;
  }
  .address-text{
    color: rgb(126, 126, 126);
    width: 300px;
    height: 30px;
    margin-left: 335px;
    margin-top: -40px;
  }
  .address .el-form-item__label{
    font-size: 16px;
  }
  .address .el-button--primary{
    background-color: #F70D1A;
    border: none
  }
  .diqu{
    float: left;
    margin-left: 180px;
    margin-top: -40px;
  }
  .quyu{
    width: 150px;
  }
    .footer{
      width: 100%;
      height: 215px;
      background-color: #333333;
      margin: auto;
      margin-top: 150px;
  }
  .footer1{
      width: 1000px;
      height: 40px;
      font-size: 14px;
      color: #D0D0D0;
      margin: auto;
      text-align: center
      
  }
  .footer2{
      width: 1000px;
      height: 40px;
      margin: auto;
      /* margin-left: 175px; */
      /* float: left; */
  }
  .footer1-text{
      /* width: 70px; */
      height: 40px;
      color: #D0D0D0;
      text-align: center;
      text-decoration: none;
      text-decoration-line: none;
      margin: auto;
      position: relative;
      top: 30px;
  }
  .footer1-text-1{
      width: 15px;
      height: 40px;
      color: #D0D0D0;
      text-align: center;
      margin-top: 40px;
       position: relative;
      top: 30px;
  }
 .footer2-text{
      /* width: 70px; */
      height: 40px;
      color: #D0D0D0;
      text-align: center;
      text-decoration: none;
      text-decoration-line: none;
      /* margin-top: 40px; */
      position: relative;
      top: 30px;
      font-size: 14px;
  }
  .footer2-text-1{
      color:#F13232;
      font-size: 16px; 
  }
  .footer3{
      width: 1200px;
      height: 40px;
      margin: auto;
      text-align: center;
      margin-top: 30px;
      color: #D0D0D0;
      font-size: 14px;
  }
  .footer3-text{
      text-decoration: none;
      text-decoration-line: none;
      color: #D0D0D0;
  }
  .footer4{
      width: 261px;
      height: 30px;
      margin: auto;
  }
  .footer4-1{
      width: 83px;
      height: 30px;
      /* float: left; */
      margin: auto
  }
  .email-text .el-form-item__error{
    width: 110px;
    top: 7%;
    left: 127px;
  }
  .el-form-item__error{
    width: 110px;
    top: 7%;
    left: 127px;
  }
</style>