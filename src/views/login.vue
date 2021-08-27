<template>
    <div class="login">
        <header><van-icon name="arrow-left" /></header>
        <div class="login-box">
            <img src="../../public/images/A_03.jpg"/>
        </div>
        <div class="login-from">
            <div class="from-top">
                <img style="width:35px;height:43px" src="../../public/images/A_07.jpg"/>
                <div class="from-top-box">
                    <input class="input" type="number" placeholder="请输入手机号" v-model="phone"/>
                    <button class="button" @click="address">获取验证码</button>
                </div>
            </div>


            
            <div class="from-top">
                <img style="width:35px;height:43px" src="../../public/images/A_09.jpg"/>
                <div class="from-top-box">
                    <input class="input" type="text" placeholder="请输入验证码"/>
                </div>
            </div>
        </div>
        <button class="login-login" @click="addLogin">登陆</button>
        <div class="login-checkout">
            <span>*未注册的手机号将自动注册</span>
            <span>密码登录</span>
        </div>
        <div class="disan">
            ——————  第三方登录   ——————
        </div>
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
import { sms_code } from '@/http/api.js'
export default {
    data(){
        return {
            phone:"",
        }
    },
    methods:{
        async address(){
            const {data:res} = await sms_code({
                mobile:this.phone,
                sms_type:"login"
            })
            console.log(res);
        },
        addLogin(){

        }
    }
}
</script>



<style lang="scss" scoped>
.login{
    width: 100vw;
    height: 100vh;
    header{
        width: 100%;
        height: 70px;
        padding-left: 10px;
        padding-top: 10px;
        .van-icon{
            font-size: 40px;
        }
    }
    .login-box{
        width: 100%;
        height: 370px;
        position: relative;
        img{
            display: inline-block;
            width: 525px;
            height: 170px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    }
    .login-from{
        width: 640px;
        height: 300px;
        margin: auto;
        .from-top{
            width: 100%;
            display: flex;
            margin-top: 20px;
            .from-top-box{
                flex: 1;
                margin-left: 20px;
                border-bottom: 2px solid #ccc;
                display: flex;
                .input{
                    display: block;
                   width: 400px;
                    height: 60px;
                    color: #ccc;
                    font-size: 30px;
                    border: none;
                }
                .button{
                    width: 170px;
                    height: 50px;
                    text-align: center;
                    line-height: 50px;
                    color: white;
                    background-color: #EB6100;
                    border: none;
                }
            }
        }
    }
    .login-login{
        width: 614px;
        height: 90px;
        margin: auto;
        display: block;
        border: none;
        border: radius 5px;; 
        color: white;
        background-color: #EB6100;
        margin-bottom: 20px;
    }
    .login-checkout{
        width: 614px;
        height: 250px;
        margin: auto;
        color: #cccc;
        display: flex;
        justify-content: space-between;
    }
    .disan{
        width: 614px;
        text-align: center;
        height: 40px;
        margin: auto;
    }
    .wxqq{
        width: 290px;
        height: 125px;
        display: flex;
        margin: auto;
        text-align: center;
        justify-content: space-between;
        .wxqq-box{
            .wxqq-img{
            width: 100px;
            height: 100px;
            }
            .wxqq-p{
                margin-top: 25px;
                font-size: 20px;
                color: #ccc;
            }
        }
    }
}
</style>
