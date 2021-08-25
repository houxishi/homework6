<template>
  <div class="tables">
    <el-table 
    :data="tableData" 
    v-loading="stateData.loading"
    tooltip-effect="dark"
    class="t-table">
        <el-table-column 
        v-for="item in chartData" 
        :key="item.index" 
        :label="item.label" 
        :prop="item.name"
        :type="item.type"
        :width="item.width">
            <!-- <template :slot-scope="item.scopes"> -->
               
            <!-- </template> -->
	</el-table-column>
     <slot></slot>	
    </el-table>
    <!--总数超过一页，再展示分页器-->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="stateData.total"
      :page-size="stateData.pageSize"
      :current-page="stateData.currentPage"
      @current-change="toParent"
    />
  </div>
</template>


<script>

export default {
  name:'Tables',
  props:{
    tableData:Array,
    stateData:Object,
    chartData:Array,
    },
  data(){
    return{
    }
  },
  created(){
  },
  methods: {
    toParent (val) {
        this.$emit('change',val);
    }
  }
   
}
</script>

<style scoped>
.tables{
    text-align: center;
}
.t-table{
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
}
</style>