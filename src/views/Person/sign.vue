<template>
    <div class="sign">
        <div class="sign-box">

            <!-- 用户 -->
            <div class="user">
                <div class="user-box">
                    <img style="width:50px;height:50px;border-radius: 50%;" src="../../../public/images/user.jpg" alt="">
                    <div style="margin-left:10px;padding-top:10px">
                        <span style="font-size:4.8vw">{{ $store.state.nickname }}</span>
                        <p>积分：0</p>
                    </div>
                </div>
                <div class="sign-gz">
                    <span>签到规则</span>
                </div>
            </div>

            <!-- 日历表 -->
            <div class="calendar">
               <!-- <van-popup v-model="show" get-container=".calendar" /> -->
               <van-calendar
               :show-mark="false"
               :show-title="false"
                :poppable="false"
                :show-confirm="false"
                :style="{ height: '500px' }"
                type="multiple"
                />
            </div>

            <div class="sign-footer">
                <div class="footer-top">
                    <div style="border-left:2px solid red;padding-left:10px;font-size:17px;">
                        <span>好课推荐</span>
                    </div>
                    <div>
                        <span style="font-size:17px;color:#ccc">更多</span> >
                    </div>
                </div>
                <div class="footer-bottom" style="display:flex;justify-content: space-between;padding-top:5px;padding-top:10px;">
                    <img style="width:30.93333vw;height:18.13333vw;" src="../../../public/images/个人签到_01.jpeg" />
                    <div class="bottom-box" style="padding-left:20px;padding-top:10px;">
                        <p>论渣男的自我修养</p>
                        <div style="display:flex;justify-content: space-between;margin-top:20px;margin-right:10px">
                            <span style="color:red">1积分</span>
                            <div style="border:1px solid #ccc;width:50px;height:20px;text-align:center;line-height: 20px;border-radius: 20px;" >
                                <span>去兑换</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="sign-footer">
                <div class="footer-top">
                    <div style="border-left:2px solid red;padding-left:10px;font-size:17px;">
                        <span>热门图书</span>
                    </div>
                    <div>
                        <span style="font-size:17px;color:#ccc">更多</span> >
                    </div>
                </div>
                <div class="footer-bottom" style="display:flex;justify-content: space-between;padding-top:5px;padding-top:10px;">
                    <img style="width:30.93333vw;height:18.13333vw;" src="../../../public/images/个人签到_02.jpeg" />
                    <div class="bottom-box" style="padding-left:20px;padding-top:10px;">
                        <p>VUE开发后台管理系统</p>
                        <div style="display:flex;justify-content: space-between;margin-top:20px;margin-right:10px">
                            <span style="color:red">1积分</span>
                            <div style="border:1px solid #ccc;width:50px;height:20px;text-align:center;line-height: 20px;border-radius: 20px;" >
                                <span>去兑换</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {integral} from "@/http/api.js"
export default {
    data() {
    return {
      show: true,
    };
  },
}
</script>


<style lang="scss" scoped>
.sign{
    width: 100%;
    // 用户
    .sign-box{
        width: 100vw;
        height: 550px;
        background-image: linear-gradient(#E5616C,#E50517);
        padding-top: 50px;
        box-sizing: border-box;
        .user{
            width: 90vw;
            margin: auto;
            height: 150px;
            display: flex;
            justify-content: space-between;
            color: white;
            .user-box{
                display: flex;
            }
            .sign-gz{
                width: 150px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                margin-top: 20px;
                border-radius:30px;
                border: 1px solid white;
            }
        }
    }

    // 日历表
    .calendar{
        width: 90vw;
        height: 600px;
        background: pink;
        margin: 0px auto;
        border: 1px solid #fff;
        border-radius: 20px;
        box-shadow: 1px 10px 5px #ccc;
        overflow: hidden;
        
    }   

    .sign-footer{
        width: 90vw;
        margin: auto;
        margin-top: 50px;
        .footer-top{
            display: flex;
            justify-content: space-between;
        }
        .footer-bottom{
            width: 90vw;
            height: 150px;
            background: #fff;
            border: 1px solid #eaeaea;
            border-radius: 20px;
            margin-top: 20px;
            box-shadow: 1px 5px 3px #eaeaea;
            .bottom-box{
                flex: 1;
            }
        }
    }
}
</style>

