<template>
  <div class="login">
    <header>
      <van-icon name="arrow-left" @click="$router.go(-1)"/>
    </header>
    <div class="login-box">
      <img src="../../public/images/A_03.jpg">
    </div>
    <div class="login-from">
      <div class="from-top">
        <img style="width:35px;height:43px" src="../../public/images/A_07.jpg">
        <div class="from-top-box">
          <input class="input" type="number" placeholder="请输入手机号" v-model="phone">
          <button class="button" @click="address" v-show="flag">获取验证码</button>
        </div>
      </div>
      <div class="from-top">
        <img style="width:35px;height:43px" src="../../public/images/A_09.jpg">
        <div class="from-top-box">
          <input
            class="input"
            :type="flag? 'text':'password'"
            :placeholder="flag ? '请输入验证码':'请输入密码'"
            v-model="pwd"
          >
        </div>
      </div>
    </div>
    <button class="login-login" @click="addLogin">登陆</button>
    <div class="login-checkout">
      <span v-show="flag">*未注册的手机号将自动注册</span>
      <span v-show="!flag">找回密码</span>
      <span v-show="flag" @click="flag = !flag">密码登录</span>
      <span v-show="!flag" @click="flag = !flag">注册/验证码登陆</span>
    </div>
    <div class="disan">—————— 第三方登录 ——————</div>
    <div class="wxqq">
      <div class="wxqq-box">
        <img class="wxqq-img" src="../../public/images/A_12.jpg" alt="">
        <p class="wxqq-p">微信登录</p>
      </div>
      <div class="wxqq-box">
        <img class="wxqq-img" src="../../public/images/A_14.jpg" alt="">
        <p class="wxqq-p">QQ登录</p>
      </div>
    </div>
  </div>
</template>

<script>
import { sms_code, login } from "@/http/api.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      phone: "",
      pwd: "",
      flag: true,
    };
  },
  methods: {
    // 获取验证码
    async address() {
      if (this.phone == "") {
        return Toast.fail("请输入手机号");
      } else {
        let PhoneReg = /^1[3456789]\d{9}$/;
        if (PhoneReg.test(this.phone)) {
          const data = await sms_code({
            mobile: this.phone,
            sms_type: "login"
          });
          console.log(data);
        } else {
          Toast.fail("请输入正确的手机号");
        }
      }
    },
    // 登陆
    async addLogin() {
       let PhoneReg = /^1[3456789]\d{9}$/;
        if (PhoneReg.test(this.phone) || this.pwd.length == 6) {
          if (this.flag) { //true 为验证码登陆
            const data = await login({
              mobile: this.phone,
              sms_code: this.pwd,
              type: 2,
              client: "1"
            });
            console.log(data);
            let obj = {
                remember_token:data.data.remember_token,
                nickname: data.data.nickname
              }
            this.$store.commit("token", obj);
            Toast.success("登陆成功");
            this.$router.push("/person")
          }else{ //false 为密码登陆
            const { data: res } = await login({
              mobile: this.phone,
              password: this.pwd,
              type: 1,
              client: "1"
            });
            if(res.remember_token){
              let obj = {
                remember_token:res.remember_token,
                nickname: res.nickname
              }
              this.$store.commit("token", obj);
              Toast.success("登陆成功");
              this.$router.push("/person")
            }
          }
        } else {
          Toast.fail("请输入正确的手机号");
        }

      
    }
  }
};
</script>



<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  header {
    width: 100%;
    height: 70px;
    padding-left: 10px;
    padding-top: 10px;
    .van-icon {
      font-size: 40px;
    }
  }
  .login-box {
    width: 100%;
    height: 370px;
    position: relative;
    img {
      display: inline-block;
      width: 525px;
      height: 170px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .login-from {
    width: 640px;
    height: 300px;
    margin: auto;
    .from-top {
      width: 100%;
      display: flex;
      margin-top: 20px;
      .from-top-box {
        flex: 1;
        margin-left: 20px;
        border-bottom: 2px solid #ccc;
        display: flex;
        .input {
          display: block;
          width: 400px;
          height: 60px;
          color: #ccc;
          font-size: 30px;
          border: none;
        }
        .button {
          width: 170px;
          height: 50px;
          text-align: center;
          line-height: 50px;
          color: white;
          background-color: #eb6100;
          border: none;
        }
      }
    }
  }
  .login-login {
    width: 614px;
    height: 90px;
    margin: auto;
    display: block;
    border: none;
    border: radius 5px;
    color: white;
    background-color: #eb6100;
    margin-bottom: 20px;
  }
  .login-checkout {
    width: 614px;
    height: 250px;
    margin: auto;
    color: #cccc;
    display: flex;
    justify-content: space-between;
  }
  .disan {
    width: 614px;
    text-align: center;
    height: 40px;
    margin: auto;
  }
  .wxqq {
    width: 290px;
    height: 125px;
    display: flex;
    margin: auto;
    text-align: center;
    justify-content: space-between;
    .wxqq-box {
      .wxqq-img {
        width: 100px;
        height: 100px;
      }
      .wxqq-p {
        margin-top: 25px;
        font-size: 20px;
        color: #ccc;
      }
    }
  }
}
</style>
