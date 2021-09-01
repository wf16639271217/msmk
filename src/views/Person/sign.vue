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
                row-height="45px"
                :formatter="formatter"
                :readonly="true"
                :poppable="false"
                :show-confirm="false"
                :style="{ height: '500px' }"
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
import {integral,signRecord} from "@/http/api.js"
export default {
    data() {
    return {
      show: true,
    };
  },
  async created(){
      const tady = new Date;
      const year = tady.getFullYear();
      const month_new = tady.getMonth()+1;
      const date_new = tady.getDate();
    const { data:res } = await signRecord({
        data:`${year}-${month_new}-${date_new}`
    })
    console.log(res);
  },
  methods:{
      formatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();
      const tady = new Date;
      const year = tady.getFullYear();
      const month_new = tady.getMonth()+1;
      const date_new = tady.getDate();
      if(month == month_new && date_new == date ){
          day.bottomInfo = '+1';
          day.text = "√"
      }
      return day;
    },

  }
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
        /deep/.van-calendar__bottom-info{
            bottom: 2px;
        }
        /deep/.van-calendar__selected-day{
            border-radius: 50%;
        }
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

