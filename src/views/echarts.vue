<template>
  <div class="echarts">
    <div id="myChart" :style="{ width: '300px', height: '300px' }"></div>
    <el-button @click="updateEcharts">更新数据</el-button>
  </div>
</template>
<script>
import echarts from "echarts"
// 引入提示框和标题组件
import "echarts/lib/component/tooltip"
import "echarts/lib/component/title"
export default {
  name: "r-echarts-line",
  data() {
    return {
      options: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      },
      newoptions: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [20, 32, 901, 534, 1290, 230, 100],
            type: "line"
          }
        ]
      }
    }
  },
  mounted() {
    this.initecharts(this.options)
  },
  methods: {
    updateEcharts() {
      this.initecharts(this.newoptions)
    },
    initecharts(options) {
      this.myChart = echarts.init(document.getElementById("myChart"))
      this.myChart.setOption(options)
    }
  }
}
</script>
