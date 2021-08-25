<template>
  <div>
    <el-popover
    v-for="(item,i) in btns"
    :key="i"
    placement="top-start"
    :trigger="click"
    content="请选择项。"
    style="marginRight:10px">
    <el-button plain 
    size="small"
    slot="reference"
    :icon="item.icon" 
    :style="{backgroundColor:item.bgColor, color:item.color}">
    {{item.name}}
    </el-button>
    </el-popover>
  </div>
</template>


<script>

export default {
  name:'Buttons',
  props:{
    btns:Array
    },
  data(){
    return{
    }
  },
  methods: {
    popBox() {
    this.$emit('btnclick');
    }
   }
}
</script>