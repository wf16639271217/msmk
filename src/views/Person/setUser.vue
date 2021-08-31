<template>
    <div class="setUser">
        <van-form @submit="onSubmit">
            <van-field
                v-model="phone"
                name="手机号"
                placeholder="手机号"
                :rules="[{ required: true, message: '请填写手机号' }]"
            />
            <van-field
                v-model="pwd"
                type="text"
                name="验证码"
                placeholder="验证码"
                :rules="[{ required: true, message: '请填写验证码' }]"
            />
             <van-field
                v-model="password"
                type="text"
                name="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
        </van-form>
        <button type="submit" class="sub" @click="onSubmit">确定</button>
        <div class="dwyzm" @click="address">
            <span>获取验证码</span>
        </div>
    </div>
</template>

<script>
import { sms_code,setPassword } from "@/http/api"
import { Toast  } from 'vant';
export default {
    data() {
    return {
      phone: '', //手机号
      pwd: '', //验证码
      password:"", //密码
    };
  },
   methods: {
    async onSubmit(values) {
      const { data:res } = await setPassword({
          mobile:this.phone,
          password:this.password,
          sms_code:this.pwd
      })
      console.log(res);
      Toast.success("设置成功");
      this.$router.push("/person")
    },
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
  },
};
</script>


<style lang="scss" scoped>
.setUser {
  width: 100vw;
  height: 100vh;
  position: relative;
  .sub{
      width: 85%;
      margin: auto;
      height: 100px;
      background: red;
      color: white;
      font-size: 30px;
      border: 0px solid red;
      display: block;
      margin-top: 100px;
      box-shadow:  5px 5px 100px red;
  }
  .dwyzm{
      color: red;
      font-size: 20px;
      position: absolute;
      top: 30px;
      right: 30px;
  }
}
</style>
