<template>
  <div>
    <el-card>
      <div class="d-card">
        <el-card class="d-item" v-for="x in cardData" :key="x.id">
          <div slot="header">
            {{x.top}}
          </div>
          <div >
            {{x.bottom}}
          </div>
      </el-card>
      </div>
      <div id="board"></div>
    </el-card>
  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/component/title')
require('echarts/lib/component/toolbox')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/grid')
require('echarts/lib/component/legend')

export default {
  name:'Dashboard',
  components: {

  },
  data () {
    return {
      cardData:[
        {id:1,top:'今日订单数',bottom:1888},
        {id:2,top:'今日日活',bottom:36271},
        {id:3,top:'转化率',bottom:'20%'}]
    }
  },
  mounted(){
    this.drawBoard()
  },
  methods:{
    drawBoard(){
      let myChart=echarts.init(document.getElementById('board'));
      myChart.setOption({
        title:{text:'系统折线图'},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {backgroundColor: '#6a7985'}
        }},
        legend: {
          data: ['新增注册', '付费用户', '活跃用户', '订单数', '当日总收入']
        },
        toolbox: {
          feature: {
            saveAsImage: {} 
          }},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['2021-03-11', '2021-03-12', '2021-03-13', '2021-03-14', '2021-03-15', '2021-03-16', '2021-03-17']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '新增注册',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '付费用户',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '活跃用户',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '订单数',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
            focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '当日总收入',
            type: 'line',
            stack: '总量',
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
      ]
      })
    }
  }
}
</script>

<style scoped>
.d-card{
  display: flex;
  width: 100%;
  margin-bottom: 50px;
  justify-content: center;
}
.d-item{
  width: 285px;
  margin-right: 20px;
  text-align: left;
}

#board{
  width: 100%;
  height: 300px
}
</style>