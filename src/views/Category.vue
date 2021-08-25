<template>
  <div>
    <el-card>
      <configBtns :btnChoose="2"></configBtns>
      <Tables :chartData="cateCharts" :stateData="cateState" :tableData="cateTable" @change="changePage">
        <el-table-column label="操作" >
          <el-button type="text" style="margin-right:10px">修改</el-button>
          <el-button type="text" style="margin-right:10px">下级分类</el-button>
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
  name: 'Category',
  components: {
    configBtns,
    Tables
  },
  data(){
    return {
      cateTable: [], 
      cateState:{
        loading: false,
        total: 0, 
        currentPage: 1, 
        pageSize: 10},
      cateCharts:[
        {index:0, type:"selection", width:"55"},
        {index:1, name:"categoryName", label:"分类名称"},
        {index:2, name:"categoryRank", label:"排序值"},
        {index:3, name:"createTime", label:"添加时间"},
      ]
    }
  },
  mounted(){
    this.getCategory()
  },
  methods: {
    getCategory(){
      const level = 1;
      const parent_id = 0;
      this.loading = true;
      axios.get('/api/categories',{
      params: {
          pageNumber: this.cateState.currentPage,
          pageSize: this.cateState.pageSize,
          categoryLevel: level,
          parentId: parent_id
        }
      }).then(response=>{
        this.cateTable=response.data.data.list;
        this.cateState.total = response.data.data.totalCount;
        this.cateState.currentPage = response.data.data.currPage;
        this.cateState.loading=false;
      })
    },
    changePage (val) {
      this.cateState.currentPage = val;
      this.getCategory()
    }
  }
}

</script>

<style scoped>
  .category-container {
    min-height: 100%;
  }
</style>
