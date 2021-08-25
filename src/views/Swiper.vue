<template>
  <div class="swiper">
    <el-card>
    <configBtns :btnChoose="1"></configBtns>
    <Tables :chartData="swiCharts" :stateData="swiState" :tableData="swiTable" @change="changePage">
      <el-table-column label="轮播图" width="200">
        <template slot-scope="scope">
          <img style="width: 150px;height: 150px" :src="scope.row.carouselUrl" alt="轮播图">
        </template>
      </el-table-column>
      <el-table-column label="跳转链接" width="230">
        <template slot-scope="scope">
          <a target="_blank" :href="scope.row.redirectUrl">{{ scope.row.redirectUrl }}</a>
        </template>
      </el-table-column>
      <el-table-column label="操作" >
        <el-button type="text" style="margin-right:10px">修改</el-button>
          <el-popconfirm title="确定删除吗？">
              <el-button slot="reference" type="text">删除</el-button>
          </el-popconfirm>
      </el-table-column>
    </Tables>
    </el-card>
  </div>
</template>

<script>

import axios from '@/api/index.js'
import configBtns from '../components/configBtns.vue'
import Tables from '../components/Tables.vue'

export default {
  name: 'Swiper',
  components: {
    configBtns,
    Tables
  },
  data(){
    return {
      swiTable: [], 
      swiState:{
        loading: false,
        total: 0, 
        currentPage: 1, 
        pageSize: 10},
      swiCharts:[
        {index:0, type:"selection", width:"55"},
        {index:1, name:"carouselRank", label:"排序值"},
        {index:2, name:"createTime", label:"添加时间", width:"220"},
      ]
    }
  },
  mounted(){
    this.getCarousels()
  },
  methods: {
     async getCarousels(){
      this.loading=true
      await axios.get('/api/carousels',{
      params: {
          pageNumber: this.swiState.currentPage,
          pageSize: this.swiState.pageSize,
        }
      }).then(response=>{
        this.swiTable=response.data.data.list;
        this.swiState.total = response.data.data.totalCount;
        this.swiState.currentPage = response.data.data.currPage;
        this.swiState.loading=false
      });
     },
    changePage (val) {
      this.swiState.currentPage = val;
      this.getCarousels()
    }
  }
}
</script>
