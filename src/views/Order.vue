<template>
  <div class="order">
    <el-card>
    <div style="display:flex; width:70%">
      <el-input placeholder="请输入订单号"  size="small" style="margin-right: 10px"></el-input>
      <el-input placeholder="全部"  size="small" style="margin-right: 10px"></el-input>
      <Buttons :btns="btnData" style="display:flex"></Buttons>
    </div>
      <Tables :chartData="orderCharts" :stateData="orderState" :tableData="orderTable" @change="changePage">
        <el-table-column label="支付方式" >
          <template slot-scope="scope">
            <span v-if="scope.row.payType == 1">微信支付</span>
            <span v-else-if="scope.row.payType == 2">支付宝支付</span>
            <span v-else>未支付</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" >
          <template slot-scope="scope">
          <el-popconfirm
            v-if="scope.row.orderStatus == 1"
            title="确定配货完成吗？"
          >
          <el-button slot="reference" type="text" style="margin-right: 10px">配货完成</el-button>
          </el-popconfirm>
          <el-popconfirm
            v-else-if="scope.row.orderStatus == 2"
            title="确定出库吗？"
          >
          <el-button slot="reference" type="text" style="margin-right: 10px">出库</el-button>
          </el-popconfirm>
          <el-popconfirm
            v-else
            title="确定关闭订单吗？"
          >
          <el-button slot="reference" type="text" style="margin-right: 10px">关闭订单</el-button>
          </el-popconfirm>
          <!-- <router-link :to="{ path: '/order_detail', query: { id: scope.row.orderId }}">订单详情</router-link> -->
          </template>
        </el-table-column>
      </Tables>
    </el-card>
  </div>
</template>

<script>

import axios from '@/api/index.js'
import Buttons from '../components/Buttons.vue'
import Tables from '../components/Tables.vue'

export default {
  name: 'Order',
  components: {
    Buttons,
    Tables
  },
  data(){
    return {
      btnData:[{
        name:"配货完成",
        icon:"el-icon-sell",
        bgColor:"#1baeae",
        color:"#fff",
      },{
        name:"出库",
        icon:"el-icon-sell",
        bgColor:"#1baeae",
        color:"#fff",
      },{
        name:"关闭订单",
        icon:"el-icon-delete",
        bgColor:"#f56c6c",
        color:"#fff",  
      }],
      orderTable: [], 
      orderState:{
        loading: false,
        total: 0, 
        currentPage: 1, 
        pageSize: 10},
      orderCharts:[
        {index:0, type:"selection", width:"55"},
        {index:1, name:"orderNo", label:"订单号"},
        {index:2, name:"totalPrice", label:"订单总价"},
        // {index:3, name:"orderStatus", label:"订单状态"},
        {index:4, name:"createTime", label:"添加时间"},
      ],
      orderNo: '',
      orderStatus: '',
    }
  },
  mounted(){
    this.getOrders()
  },
  methods: {
    async getOrders(){
      this.orderState.loading=true
      await axios.get('/api/orders',{
      params: {
          pageNumber: this.orderState.currentPage,
          pageSize: this.orderState.pageSize,
          orderNo: this.orderNo,
          orderStatus: this.orderStatus
        }
      }).then(response=>{
        this.orderTable=response.data.data.list;
        this.orderState.total = response.data.data.totalCount;
        this.orderState.currentPage = response.data.data.currPage;
        this.orderState.loading=false
      });
     },
    changePage (val) {
      this.orderState.currentPage = val;
      this.getOrders()
    }
  }
}
</script>
