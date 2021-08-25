<template>
  <div class="new">
    <el-card>
    <configBtns :btnChoose="0"></configBtns>
    <Tables :chartData="newCharts" :stateData="newState" :tableData="newTable">
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
  name: 'New',
  components: {
    configBtns,
    Tables 
  },
  data(){
    return {
      newTable: [], 
      newState:{
        loading: false,
        total: 0, 
        currentPage: 1, 
        pageSize: 10},
      newCharts:[
        {index:0, type:"selection", width:"55"},
        {index:1, name:"configName", label:"商品名称", width:"220"},
        {index:2, name:"configRank", label:"排序值"},
        {index:3, name:"goodsId", label:"商品编号"},
        {index:4, name:"createTime", label:"添加时间", width:"220"},
      ]
    }
  },
  created(){
    this.getNew()
  },
  methods: {
    async getNew(){
      this.newState.loading=true
      await axios.get('/api/indexConfigs',{
      params: {
          pageNumber: this.newState.currentPage,
          pageSize: this.newState.pageSize,
          configType: 4,
        }
      }).then(response=>{
        this.newTable=response.data.data.list;
        this.newState.total = response.data.data.totalCount;
        this.newState.currentPage = response.data.data.currPage;
        this.newState.loading=false
      });
     }
  }
}
</script>
