<template>
  <div class="good">
    <el-card>
      <Buttons :btns="btnData"></Buttons>
      <Tables :chartData="goodCharts" :stateData="goodState" :tableData="goodTable" @change="changePage">
        <el-table-column label="商品图片" width="200">
          <template slot-scope="scope">
            <img style="width: 100px; height: 100px;"  :src="scope.row.goodsCoverImg" alt="商品主图">
          </template>
        </el-table-column>
        <el-table-column label="上架状态">
          <template slot-scope="scope">
            <span style="color: green;" v-if="scope.row.goodsSellStatus == 0">销售中</span>
            <span style="color: red;" v-else>已下架</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" >
          <template slot-scope="scope">
            <el-button type="text" style="margin-right:10px">修改</el-button>
            <el-button type="text" v-if="scope.row.goodsSellStatus == 0">上架</el-button>
            <el-button slot="reference" type="text" v-else>下架</el-button>
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
  name: 'Good',
  components: {
    Buttons,
    Tables
  },
  data(){
    return {
      btnData:[{
        name:"新增商品",
        icon:"el-icon-plus",
        bgColor:"#1baeae",
        color:"#fff",
      }],
      goodTable: [], 
      goodState:{
        loading: false,
        total: 0, 
        currentPage: 1, 
        pageSize: 10},
      goodCharts:[
        {index:0, type:"selection", width:"55"},
        {index:1, name:"goodsId", label:"商品编号"},
        {index:2, name:"goodsName", label:"商品名"},
        {index:3, name:"goodsIntro", label:"商品简介"},
        {index:3, name:"stockNum", label:"商品库存"},
        {index:3, name:"sellingPrice", label:"商品售价"},
      ]
    }
  },
  mounted(){
    this.getGoods()
  },
  methods: {
    async getGoods(){
      this.loading=true
      await axios.get('/api/goods/list',{
      params: {
          pageNumber: this.goodState.currentPage,
          pageSize: this.goodState.pageSize,
        }
      }).then(response=>{
        this.goodTable=response.data.data.list;
        this.goodState.total = response.data.data.totalCount;
        this.goodState.currentPage = response.data.data.currPage;
        this.goodState.loading=false
      });
     },
    changePage (val) {
      this.goodState.currentPage = val;
      this.getGoods()
    }
  }
}
</script>
