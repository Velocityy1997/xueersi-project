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
    </div>
  </div>
</template>

<script>
import page from "../components/shouye";
export default {
  data() {
    return {
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
.x_otiaojian:hover{
    color: red;
}
</style>