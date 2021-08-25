<template>
  <div>
    <el-button plain 
    size="small"
    icon="el-icon-plus" 
    :style="{backgroundColor:'#1baeae', color:'#fff', marginRight:'20px'}"
    @click="isVisible = true">
    增加
    </el-button>
    <el-dialog title="添加商品" :visible.sync="isVisible" width="400px">
        <el-form :model="dataOne" label-position="right" v-if="btnChoose=== 0">
            <el-form-item v-for="m in dataOne" :key="m.id" :label="m.name" :required="m.show" label-width="80px">
                <el-input :type="m.type"></el-input>
            </el-form-item>
        </el-form>
        <el-form :model="dataTwo" label-position="right" v-else-if="btnChoose=== 1">
            <el-form-item label="图片" required="true" label-width="80px">
                <i class="el-icon-plus icon"></i>
            </el-form-item>
            <el-form-item v-for="n in dataTwo" :key="n.id" :label="n.name" :required="n.show" label-width="80px">
                <el-input :type="n.type"></el-input>
            </el-form-item>
        </el-form>
        <el-form :model="dataThree" label-position="right" v-else>
            <el-form-item v-for="x in dataThree" :key="x.id" :label="x.name" :required="x.show" label-width="80px">
                <el-input :type="x.type"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer">
            <el-button @click="isVisible = false">取 消</el-button>
            <el-button type="primary" @click="isVisible = false">确 定</el-button>
        </div>
    </el-dialog>
    <el-popconfirm
    confirm-button-text='Yes'
    cancel-button-text='no'
    title="确定删除吗？">
        <el-button plain
        size="small" 
        icon="el-icon-delete" 
        :style="{backgroundColor:'#f56c6c', color:'#fff'}"
        slot="reference">
        批量删除
        </el-button>
    </el-popconfirm>
  </div>
</template>


<script>

export default {
  name:'configBtns',
  props:{
    btnChoose:Number
    },
  data(){
    return{
        isVisible:false,
        dataOne:[{id:0,name:'商品名称',show:true,type:'text'},
                  {id:1,name:'跳转链接',show:false,type:'text'},
                  {id:2,name:'商品编号',show:true,type:'number'},
                  {id:3,name:'排序值',show:true,type:'number'},],
        dataTwo:[{id:0,name:'跳转链接',show:false,type:'text'},
                  {id:1,name:'排序值',show:true,type:'number'}],
        dataThree:[{id:0,name:'商品名称',show:true,type:'text'},
                  {id:1,name:'排序值',show:true,type:'number'}]
    }
  },
  methods: {
    // popBox: function () {
    // this.$emit('btnclick');
    // }
   }
}
</script>

<style scoped>
.icon{
    display: block;
    width: 6%;
    height: 100%;
    border: 1px solid #e9e9e9;
    padding: 32px 35px;
}
</style>