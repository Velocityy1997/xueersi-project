<template>
  <div>
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
</template>

<script>
import img1 from '@/assets/footer1.png';
import img2 from '@/assets/footer2.png';
import img3 from '@/assets/footer3.png';
export default {
     data() {
         return {
             imgsrc1:img1,
             imgsrc2:img2,
             imgsrc3:img3,
         }
     },
}
</script>

<style>
  .footer{
      width: 100%;
      height: 215px;
      background-color: #333333;
      margin: auto;
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
      width: 84px;
      height: 30px;
      /* float: left; */
      margin: auto
  }
</style>