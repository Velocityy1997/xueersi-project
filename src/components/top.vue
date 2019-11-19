<template>
 <div class="top">
  <div class="topcontent">
   <div class="topcontain">
     <div class="topcontain1"> 网校首页</div>
      <div class="topcontain2">教师资格证公示</div>
      <div class="topcontain3">客户端下载</div>
      <div class="topcontain4">我的订单</div>
      <div class="topcontain5">设置</div>
      <div class="topcontain6">用户名
        <img src="../assets/arrow.png" alt="">
      </div>
   </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'top'
}
</script>

<style>
 *{
   margin: 0px;
   padding: 0px;
}
.top{
    width: 100%;
    height: 30px;
    background-color:#323534;
}
.topcontent{
    width: 1200px;
    height: 30px;
    margin: auto;
    background-color: #323534;
}
.topcontain{
   width: 490px;
   height: 30px;
   float: right;
   background-color: #323534;
}
.topcontain1{
   width: 77px;
   height: 16px;
   margin-top: 7px;
   float: left;
   text-align: center;
   line-height: 16px;
   font-size: 12px;
   color: #B2AE9B;
   border-right: 1px solid #B2AE9B;
   cursor: pointer;
}
.topcontain1:hover{
  color: white;
}
.topcontain2:hover{
  color: white;
}
.topcontain3:hover{
  color: white;
}
.topcontain4:hover{
  color: white;
}
.topcontain5:hover{
  color: white;
}
.topcontain6:hover{
  color: white;
}
.topcontain2{
   width: 113px;
   height: 16px;
   float: left;
   margin-top: 7px;
   float: left;
   text-align: center;
   line-height: 16px;
   font-size: 12px;
   color: #B2AE9B;
   cursor: pointer;
   border-right: 1px solid #B2AE9B
}
.topcontain3{
   width: 91px;
   height: 16px;
   float: left;
   margin-top: 7px;
   float: left;
   text-align: center;
   line-height: 16px;
   font-size: 12px;
   color: #B2AE9B;
   cursor: pointer;
   border-right: 1px solid #B2AE9B
}
.topcontain4{
   width: 79px;
   height: 16px;
   float: left;
   margin-top: 7px;
   float: left;
   text-align: center;
   line-height: 16px;
   font-size: 12px;
   color: #B2AE9B;
   cursor: pointer;
   border-right: 1px solid #B2AE9B
}
.topcontain5{
   width: 55px;
   height:16px;
   float: left;
   margin-top: 7px;
   float: left;
   text-align: center;
   line-height: 16px;
   font-size: 12px;
   color: #B2AE9B;
   cursor: pointer;
   border-right: 1px solid #B2AE9B
}
.topcontain6{
   width: 61px;
   height: 16px;
   float: left;
   margin-top: 7px;
   float: left;
   text-align: center;
   line-height: 16px;
   font-size: 12px;
   cursor: pointer;
   color: #B2AE9B;
}
.topcontain .topcontain6 img{
  width: 12px;
  height: 13px;
}
</style>
