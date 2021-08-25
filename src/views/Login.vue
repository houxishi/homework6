<template>
  <div>
    <el-card shadow="never" class="login">
      <div class="header">
        <img src="https://s.weituibao.com/1582958061265/mlogo.png" />
        <div class="name">
          <div class="title">新蜂商城</div>
          <div class="tips">Vue3.0 后台管理系统</div>
        </div>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="账号" prop="account">
          <el-input placeholder="请输入账号" clearable v-model="ruleForm.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" clearable placeholder="请输入密码" v-model="ruleForm.pass"></el-input>
        </el-form-item>
        <el-form-item style="text-align: left">
          <div style="color: #333;">登录表示您已同意<a style="color: #409eff">《服务条款》</a></div>
          <el-button style="width: 100%" type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
          <!-- <el-checkbox v-model="checked" @change="!checked">下次自动登录</el-checkbox> -->
        </el-form-item>
      </el-form>
    </el-card> 
  </div>
</template>

<script>
import axios from '@/api/index.js'
import md5 from 'js-md5'

export default {
  components: {

  },
  data () {
    return {
      ruleForm: {
        account: '',
        pass:''
      },
      rules: {
        account: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }  
    }
  },
 methods: {
    async submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('api/adminUser/login',{
            userName:this.ruleForm.account,
            passwordMd5:md5(this.ruleForm.pass)
          }).then(response=>{
            window.localStorage.setItem('token', JSON.stringify(response.data.data));
            // window.localStorage.setItem('role', 1);
            console.log(response.data);
          })
          this.$router.push({ path:'/home' });
        }
        })
    }
  }
}
</script>

<style  scoped>
  .login{
    position: absolute;
    width: 350px;
    margin: 80px 475px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .header{
    text-align: left;
    vertical-align: middle;
  }
  .name{
    width: 130px;
    height: 75px;
    padding-top:25px;
    padding-right: 50px;
    text-align: center;
    float:right;
  }
  img{
    width: 100px;
    height: 100px;
    padding-left: 20px;
  }
 .title {
    font-size: 28px;
    color: #1BAEAE;
    font-weight: bold;
  }
 .tips {
    font-size: 12px;
    color: #999;
  }
</style>
