<template>
  <div class="guest">
    <el-card>
    <Buttons :btns="btnData"></Buttons>
      <Tables :chartData="guestCharts" :stateData="guestState" :tableData="guestTable" @change="changePage">
        <el-table-column label="身份状态" >
          <template slot-scope="scope">
            <span :style="scope.row.lockedFlag == 0 ? 'color: green;' : 'color: red;'">
            {{ scope.row.lockedFlag == 0 ? '正常' : '禁用' }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="是否注销">
          <template slot-scope="scope">
            <span :style="scope.row.lockedFlag == 0 ? 'color: green;' : 'color: red;'">
            {{ scope.row.isDeleted == 0 ? '正常' : '注销' }}
            </span>
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
  name: 'Guest',
  components: {
    Buttons,
    Tables
  },
  data(){
    return {
      btnData:[{
        name:"解除禁用",
        icon:"el-icon-plus",
        bgColor:"#1baeae",
        color:"#fff",
      },{
        name:"禁用账户",
        icon:"el-icon-delete",
        bgColor:"#f56c6c",
        color:"#fff", 
      }],
      guestTable: [], 
      guestState:{
        loading: false,
        total: 0, 
        currentPage: 1, 
        pageSize: 10},
      guestCharts:[
        {index:0, type:"selection", width:"55"},
        {index:1, name:"nickName", label:"昵称"},
        {index:2, name:"loginName", label:"登录名"},
        {index:3, name:"createTime", label:"注册时间"},
      ]
    }
  },
  mounted(){
    this.getGusets()
  },
  methods: {
    async getGusets(){
      this.loading=true
      await axios.get('/api/users',{
      params: {
          pageNumber: this.guestState.currentPage,
          pageSize: this.guestState.pageSize,
        }
      }).then(response=>{
        this.guestTable=response.data.data.list;
        this.guestState.total = response.data.data.totalCount;
        this.guestState.currentPage = response.data.data.currPage;
        this.guestState.loading=false
      });
     },
    changePage (val) {
      this.guestState.currentPage = val;
      this.getGusets()
    }
  }
}
</script>

