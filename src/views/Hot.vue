<template>
  <div class="hot">
    <el-card>
    <configBtns :btnChoose="0"></configBtns>
    <Tables :chartData="hotCharts" :stateData="hotState" :tableData="hotTable">
      <el-table-column label="跳转链接">
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
  name: 'Hot',
  components: {
    configBtns,
    Tables
  },
  data(){
    return {
      hotTable: [], 
      hotState:{
        loading: false,
        total: 0, 
        currentPage: 1, 
        pageSize: 10},
      hotCharts:[
        {index:0, type:"selection", width:"55"},
        {index:1, name:"configName", label:"商品名称", width:"220"},
        // {index:2, name:"redirectUrl", label:"跳转链接", width:"100"},
        {index:3, name:"configRank", label:"排序值"},
        {index:4, name:"goodsId", label:"商品编号"},
        {index:5, name:"createTime", label:"添加时间", width:"220"},
        // {index:6, label:"操作", scopes:"scope", other:"two"},
    
      ]
    }
  },
  mounted(){
    this.getHot()
  },
  methods: {
    async getHot(){
      this.loading=true
      await axios.get('/api/indexConfigs',{
      params: {
          pageNumber: this.hotState.currentPage,
          pageSize: this.hotState.pageSize,
          configType: 3,
        }
      }).then(response=>{
        this.hotTable=response.data.data.list;
        this.hotState.total = response.data.data.totalCount;
        this.hotState.currentPage = response.data.data.currPage;
        this.hotState.loading=false
      });
     }
  }
}
</script>
