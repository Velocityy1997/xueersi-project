<template>
  <div style="background-color:#F6F5F4">
    <!-- 引入头部 -->

    <top />

    <!-- 导航栏 -->
    <div class="headcontent" style="width:100% ; height:60px; background-color: #FF010A">
      <el-menu default-active="2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <div class="zhongshujiaoyu">
          <img src="../images/logo.jpg" alt />
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
      <el-tabs
        :tab-position="tabPosition"
        v-model="activeName"
        style="height: 100%;"
        @tab-click="LeftClick(activeName)"
      >
        <el-tab-pane label="我的订单" name="one">
          <span class="dingdan">我的订单</span>
          <div class="dingdan_content">
            <div :class="n==1?class1:class2" @click="btn(1)">全部订单</div>
            <div :class="n==2?class1:class2" @click="btn(2)">已支付</div>
            <div :class="n==3?class1:class2" @click="btn(3)">未支付</div>
            <div :class="n==4?class1:class2" @click="btn(4)">已取消</div>

            <div v-if="n==1" class="twomenu">
              <div class="item1_course" v-for="(item,index) in orderlist"  :key='index'>
                <p class="item1_coursename">{{item.order_no}}</p>
                <span class="item1_coursetimes">{{item.payTime}}</span>
                <p class="item1_courseprice">¥{{item.payment}}</p>
              </div>
            </div>
            <div v-if="n==2" class="twomenu">
              <div class="item1_course" v-for="(item,index) in havepaidlist"  :key='index'>
                <p class="item1_coursename">{{item.order_no}}</p>
                <span class="item1_coursetimes">{{item.payTime}}</span>
                <p class="item1_courseprice">¥{{item.payment}}</p>
              </div>
            </div>
            <div v-if="n==3" class="twomenu">
              <div class="item1_course" v-for="(item,index) in havenotpaidlist"  :key='index' >
                <p class="item1_coursename">{{item.order_no}}</p>
                <span class="item1_coursetimes">{{item.payTime}}</span>
                <p class="item1_courseprice">¥{{item.payment}}</p>
              </div>
            </div>
            <div v-if="n==4" class="twomenu">
              <div class="item1_course" v-for="(item,index) in cancelledlist"  :key='index'>
                <p class="item1_coursename">{{item.order_no}}</p>
                <span class="item1_coursetimes">{{item.payTime}}</span>
                <p class="item1_courseprice">¥{{item.payment}}</p>
              </div>
            </div>
          </div>
          
        </el-tab-pane>
        
        <el-tab-pane label="收货地址" name="three">
          <span class="dingdan">
            <el-button type="text" style="margin-left:898px" @click="show_address_form">新增收货地址</el-button>
            <div class="address_content">
              <div class="address_content_msg" v-for="(item,index) in addresslist" :key="index">
                <p class="address_content_name">{{item.name}}</p>
                <p class="address_content_pro">{{item.province}}</p>
                <p class="address_content_tel">{{item.tel}}</p>
                <p class="address_content_edit" @click="edit_address(item.shipping_id)">编辑</p>
                <p class="address_content_del" @click="Delete_address(item.shipping_id)">删除</p>
              </div>
            </div>
              <el-dialog title="新增收货地址" :visible.sync="addressVisible">
            <!-- <div class="formaddress" v-if="show"> -->
            <el-form :label-position="labelPosition" label-width="80px" >
              <el-form-item label="收货人">
                <el-input v-model="getstaffnamee"></el-input>
              </el-form-item>
              <el-form-item label="省份">
                <el-input v-model="getstaffprovincee"></el-input>
              </el-form-item>
              <el-form-item label="城市">
                <el-input v-model="getstaffcityy"></el-input>
              </el-form-item>
              <el-form-item label="区/县">
                <el-input v-model="getstaffcountyy"></el-input>
              </el-form-item>
              <el-form-item label="详细地址">
                <el-input v-model="getstaffdetaill"></el-input>
              </el-form-item>
              <el-form-item label="邮政编码">
                <el-input v-model="getstaffpostcodee"></el-input>
              </el-form-item>
              <el-form-item label="电话">
                <el-input v-model="getstafftell"></el-input>
              </el-form-item>
            </el-form>
            <el-button type="primary" style="margin-left:130px;"  @click="confirm_address()">确定</el-button>
          <!-- </div> -->
            </el-dialog>

            <el-dialog title="编辑收货地址" :visible.sync="editVisible">
            <!-- <div class="formaddress" v-if="show"> -->
            <el-form :label-position="labelPosition" label-width="80px" :data="addresslist" >
              <el-form-item label="收货人">
                <el-input v-model="getstaffname"></el-input>
              </el-form-item>
              <el-form-item label="省份">
                <el-input v-model="getstaffprovince"></el-input>
              </el-form-item>
              <el-form-item label="城市">
                <el-input v-model="getstaffcity"></el-input>
              </el-form-item>
              <el-form-item label="区/县">
                <el-input v-model="getstaffcounty"></el-input>
              </el-form-item>
              <el-form-item label="详细地址">
                <el-input v-model="getstaffdetail"></el-input>
              </el-form-item>
              <el-form-item label="邮政编码">
                <el-input v-model="getstaffpostcode"></el-input>
              </el-form-item>
              <el-form-item label="电话">
                <el-input v-model="getstafftel"></el-input>
              </el-form-item>
            </el-form>
            <el-button type="primary" style="margin-left:130px;"  @click="editsure_address()">确定</el-button>
          <!-- </div> -->
            </el-dialog>
          </span>
        </el-tab-pane>
        <el-tab-pane label="我的余额" name="four">
          <span class="dingdan">我的余额</span>
        </el-tab-pane> 
        
        <el-tab-pane label="第三方绑定" name="six">
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
      class1: "choose CActive",
      class2: "choose",
      n: 1,
      addressVisible:false,
      editVisible:false,
      tabPosition: "left",
      // activeIndex2:2,
      addresslist: [],
      orderlist:[],
      havepaidlist:[],
      havenotpaidlist:[],
      cancelledlist:[],
      current_addresslist:[],
      show: false,
      index:'',
      activeName: "one",
       labelPosition: 'right',
        getstaffname:'',
        getstaffprovince:'',
        getstaffcity:'',
        getstaffcounty:'',
        getstaffdetail:'',
        getstaffpostcode:'',
        getstafftel:'',
        shipId:'',
        getstaffnamee:'',
        getstaffprovincee:'',
        getstaffcityy:'',
        getstaffcountyy:'',
        getstaffdetaill:'',
        getstaffpostcodee:'',
        getstafftell:'',
        
    };
    
  },
  components: {
    top
  },
  mounted(){
   this.$http.get('/usertou/find_order_By_Status',{params:{status:20}}).then(res=>{
          
          this.havepaidlist = res.data.data;

          // console.log(this.havepaidlist);
          
        })

  },
  methods: {
    // handleClick() {
    //   console.log(11);
    // },
    btn(item) {
      this.n = item;
      if(item==2){
        this.$http.get('/usertou/find_order_By_Status',{params:{status:20}}).then(res=>{
          
          this.havepaidlist = res.data.data;

          // console.log(this.havepaidlist);
          
        })
      } else if(item==3){
        this.$http.get('/usertou/find_order_By_Status',{params:{status:50}}).then(res=>{
          console.log(res)
          this.havenotpaidlist = res.data.data;
        })
      } else if(item==4){
         this.$http.get('/usertou/find_order_By_Status',{params:{status:0}}).then(res=>{
          this.cancelledlist = res.data.data;
          if(this.cancelledlist.length==0){this.$message.success('无已取消订单')}
                  })
      }
    },
    
    LeftClick(val) {
      console.log(val);
      if (val == "three") {
        // let dataform=new FormData()
        // dataform.append('userid',1)
        this.$http
          .get("/dizhi/shipping/ship", {
            params: {
              userid: 1
            }
          })
          .then(res => {
            console.log(res);
            this.addresslist = res.data.data;
            
          });
      }else if(val == 'one'){
        this.$http.get('/usertou/findOrder').then(res=>{
          console.log(res);
          this.orderlist = res.data;
        })
      }
    },
    Delete_address(val) {
      console.log(val)
      this.$http
        .delete("/dizhi/shipping/ship", {
          params: {
            shipping_id: val
          }
        })
        .then(res => {
          console.log(res);
          if(res.data.status==0){
            this.$message.success('删除成功')
            this.LeftClick("three");
          }
         
        });
        
    },
    edit_address(val){
      this.shipId=val;
      console.log(val)
         this.editVisible = true;
         this.$http.get('/dizhi/shipping/findByShipId',{params:{shipping_id:this.shipId}}).then(res=>{
           console.log(res);
          let editaddress = res.data.data;
          this.getstaffname=editaddress.name
          this.getstaffprovince=editaddress.province
          this.getstaffcity=editaddress.city;
          this.getstaffcounty=editaddress.county
          this.getstaffdetail=editaddress.address
          this.getstaffpostcode=editaddress.postCode
          this.getstafftel=editaddress.tel
         })
        
    },
    editsure_address(){
      console.log(this.shipId)
       let formaddress= new FormData();
         this.editVisible = false;
      formaddress.append('address',this.getstaffdetail)
      formaddress.append('city',this.getstaffcity)
      formaddress.append('county',this.getstaffcounty)
      formaddress.append('name',this.getstaffname)
      formaddress.append('postCode',this.getstaffpostcode)
      formaddress.append('province',this.getstaffprovince)
      formaddress.append('shipping_id',this.shipId)
      formaddress.append('tel',this.getstafftel)
      this.$http.put("/dizhi/shipping/ship", formaddress).then(res=>{
        console.log(res);
        if(res.data.status == 0){
          this.addressVisible=false;
          this.LeftClick('three')
        }

      })
    },
    confirm_address() {
      console.log(this.getstaffname);
      let formaddress= new FormData();
      formaddress.append('address',this.getstaffdetaill)
      formaddress.append('city',this.getstaffcityy)
      formaddress.append('county',this.getstaffcountyy)
      formaddress.append('name',this.getstaffnamee)
      formaddress.append('postCode',this.getstaffpostcodee)
      formaddress.append('province',this.getstaffprovincee)
      formaddress.append('tel',this.getstafftell)
      
      this.$http.post("/dizhi/shipping/ship", formaddress).then(res=>{
        console.log(res);
        if(res.data.status == 0){
          this.addressVisible=false;
          this.LeftClick('three')
        }

      })
    },
     show_address_form() {
          this.addressVisible=true;
     },

    handleSelect() {},
    myaddress() {}
  
}
}
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
  color: #333;
  font-size: 16px;
  font-weight: 700;
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
  margin-left: 35px;
  line-height: 42px;
  color: #666;
}
.el-menu .el-menu-item img {
  width: 230px;
  height: 60px;
  text-align: center;
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
.zhongshujiaoyu {
  width: 230px;
  height: 58px;
  padding-top: 2px;
  background-color: #ff010a;
  float: left;
  margin-right: 12px;
}
.item1_coursename {
  width: 100px;
  margin-top: 20px;
  float: left;
  color: #333;
}
.item1_course {
  width: 1100px;
  height: 65px;
  margin-top: -5px;
}
.item1_coursetimes {
  margin-top: 24px;
  margin-left: 280px;
  font-size: 12px;
  color: #999;
  float: left;
}
.item1_courseprice {
  width: 240px;
  height: 28px;
  margin-left: 226px;
  margin-top: 22px;
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
  float: left;
}
.item1_teacherpic {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #999;
  margin-top: 25px;
}
.el-tabs__header .el-tabs__nav-wrap::after {
  background-color: white;
}
#pane-0 {
  margin-left: 20px;
}
.address_content {
  width: 1000px;
  /* height: 500px; */
  margin-top: 15px;
  margin-left: 40px;
  /* background-color: aqua; */
}
.address_content_msg {
  width: 960px;
  height: 60px;
  margin-left: 20px;
  margin-top: 12px;
  /* border: 1px solid #999; */
  /* background-color: red; */
}
.address_content_msg:hover {
  background-color: whitesmoke;
}
.address_content_name {
  width: 100px;
  height: 38px;
  text-align: left;
  font-size: 12px;
  line-height: 38px;
  margin-left: 5px;
  margin-top: 10px;
  float: left;
}
.address_content_pro {
  width: 300px;
  height: 38px;
  text-align: left;
  font-size: 12px;
  line-height: 38px;
  margin-left: 5px;
  margin-top: 10px;
  float: left;
}
.address_content_tel {
  width: 100px;
  height: 38px;
  text-align: left;
  font-size: 12px;
  line-height: 38px;
  margin-left: 5px;
  margin-top: 10px;
  float: left;
}
.address_content_edit {
  width: 24px;
  height: 38px;
  font-size: 12px;
  margin-left: 350px;
  margin-top: 10px;
  line-height: 38px;
  float: left;
  color: #999;
  cursor: pointer;
}
.address_content_del {
  width: 24px;
  height: 38px;
  font-size: 12px;
  margin-left: 38px;
  margin-top: 10px;
  line-height: 38px;
  float: left;
  color: #999;
  cursor: pointer;
}
.choose {
  width: 50px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  margin-right: 40px;
  color: #666;
  /* background-color: greenyellow; */
  /* border-radius: 5px; */
  float: left;
  cursor: pointer;
}
.CActive {
  /* background-color: red; */
  color: #f13232;
  border-bottom: 2px solid #f13232;
  cursor: pointer;
}
.dingdan_content {
  width: 1000px;
  /* height: 800px; */
  /* background-color: pink; */
  margin-top: 10px;
  margin-left: 35px;
}

.twomenu {
  clear: both;
  width: 1000px;
  height: 500px;
  /* border:4px solid red; */
  /* border-radius: 5px; */
  margin-top: 100px;
  padding-top: 20px;
}
.formaddress{
  width: 400px;
  margin-top: 50px;
  margin-left: 50px;
  /* display: none; */
}
</style>