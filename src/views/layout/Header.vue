<template>
  <div class="h-header">
    <span>{{title}}</span>
    <div class="h-right">
      <el-dropdown  trigger="click">
        <span class="el-dropdown-link">
          <i class="icon el-icon-s-custom"></i>
          十三
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            用户名
          </el-dropdown-item>
          <el-dropdown-item>
            昵称
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      title:this.$route.name
    }
  },
  watch: {
		$route(to) {
      this.title=to.name
			}
	},
  mounted () {
    // this.breadcrumbs = this.getBreadcrumbs(this.$route.path, this.menus)
  },
  methods: {

  }
}
</script>

<style scoped>
.h-header {
    /* position:fixed;
    width: 100%;
    background-color: white; */
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding: 0 20px;
    line-height: 50px;
    font-size:20px;
    border-bottom: 1px solid #e9e9e9;
}
/* .h-right{
  display: flex;
} */
</style>