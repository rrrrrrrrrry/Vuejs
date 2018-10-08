<template>
  <div id="container">
        <table></table>
        <div class="black">
          <table>
            <tr>
              <td>
                <h4>登录学子商城</h4>
              </td>
              <td>
                <a href="#">新用户注册</a>
              </td>
            </tr>
            <tr>
              <td colspan="2"><hr></td>
            </tr>
            <tr>
              <td colspan="2">
                <input type="text" placeholder="请输入您的用户名" class="uname" name="uname" v-model="uname">
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <input type="password" placeholder="请输入您的密码" class="upwd" name="upwd" v-model="upwd">
              </td>
            </tr>
            <tr>
              <td class="autoLogin">
                <input type="checkbox">自动登录
              </td>
              <td>
                <a href="#">忘记密码？</a>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <input type="button" value="登录" class="login" @click="login()">
              </td>
            </tr>
          </table>
        </div>
     </div>
</template>
<script>
  import qs from "qs"

  export default{
    name:"login",
    data(){
      return {
        uname:"",
        upwd:""
      }
    },
    methods:{
      login(){
        var self=this;
        this.$http.post(
          "http://localhost:3000/users/signin",qs.stringify({
            uname:self.uname,upwd:self.upwd
          })
        ).then(res=>{
          if(res.data.ok==1){
            alert("登录成功，返回首页");
            self.$router.push("/")
          }else{
            alert("用户名或密码错误！");
          }
        })
      }
    }
  }
</script>
<style scoped>
  #container{
        width:1000px;
        height:560px;
        background:url(http://localhost:8080/img/register/bg.png) no-repeat;
        margin:0 auto;
      }
      #container div.black{
        width:280px;
        height:300px;
        background:rgba(0,0,0,.3);
        margin:130px 0 0 600px;
      }
      #container div.black table{
        width:100%;
      }
      #container h4{
        color:#fff;
        margin:0;
      }
      #container a{
        color:#fff;
        text-decoration:none;
        font-size:12px;
      }
      input.uname,input.upwd{
        width:100%;
        height:34px;
        border:none;
        outline:0;
        padding-left:15px;
        margin-bottom:30px;
        box-sizing:border-box;
        background:#fff url(http://localhost:8080/img/register/yhm.png) no-repeat 97% center;
      }
      input.upwd{
        background-image:url(http://localhost:8080/img/register/mm.png);
      }
      input.login{
        width:100%;
        height:36px;
        margin-top:20px;
      }
      td.autoLogin{
        color:#fff;
        font-size:12px;
      }
</style>