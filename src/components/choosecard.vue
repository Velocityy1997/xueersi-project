<template>
  <div>
      <div :class="n==1?class1:class2" @click="btn(1)">登录</div>
      <div :class="n==2?class1:class2" @click="btn(2)">注册</div>
      <div v-if="n==1" class="twomenu">
          我是登录页面
      </div>
      <div v-if="n==2" class="twomenu">
          我是注册页面
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            class1:'choose CActive',
            class2:'choose',            
            n:1,
        }
    },
    methods: {
        btn(item){
            this.n=item;
        }
    },
}
</script>

<style>
.choose{
    width: 100px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: greenyellow;
    border-radius: 5px;
    float: left;
}
.CActive{
background-color: red;
color: white;
}
.twomenu{
    clear: both;
    width: 200px;
    height: 200px;
    border:4px solid red;
    border-radius: 5px;
    margin-top: 100px;
}
</style>
