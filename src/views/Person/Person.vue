<template>
    <div class="person">
        <div class="person-box">
            <div class="box-center">
                <img style="width:60px;height:60px" src="http://120.53.31.103:86/img/avatar.71c6d2b4.png" alt="">
                <p style="color:#fff;font-size:20px;margin-top:10px" @click="goLogin">登陆/注册</p>
            </div>
            <div class="box-bottom">
                <div class="box-ad">
                    <p class="box-ac">0</p>
                    <p>我的学习</p>
                </div>
                <div class="box-ad">
                    <p  class="box-ab">0</p>
                    <p>本周课时</p>
                </div>
                <div class="box-ad">
                    <p  class="box-ab">0</p>
                    <p>我的积分</p>
                </div>
            </div>
        </div>

        

        <!-- person中间部分 -->
        <div class="person-center">
            <div style="width:100%;height:30px;background:#F7F8FA"></div>

            <ul>
                <li>
                    <div style="display:flex">
                        <img style="width:20px;height:20px;margin-right:10px" src="../../../public/images/person-1.png" />
                        <p style="font-size:16px">我的作业</p>
                    </div>
                    <div>
                        >
                    </div>
                </li>
                <li>
                    <div style="display:flex">
                        <img style="width:20px;height:20px;margin-right:10px" src="../../../public/images/person-2.png" />
                        <p style="font-size:16px">我的社区</p>
                    </div>
                    <div>
                        >
                    </div>
                </li>
            </ul>

            <div style="width:100%;height:30px;background:#F7F8FA"></div>

            <ul>
                <li>
                    <div style="display:flex">
                        <img style="width:20px;height:20px;margin-right:10px" src="../../../public/images/person-1.png" />
                        <p style="font-size:16px">课程订单</p>
                    </div>
                    <div>
                        >
                    </div>
                </li>
                <li>
                    <div style="display:flex">
                        <img style="width:20px;height:20px;margin-right:10px" src="../../../public/images/person-3.png" />
                        <p style="font-size:16px">图书订单</p>
                    </div>
                    <div>
                        >
                    </div>
                </li>
            </ul>

            <div style="width:100%;height:30px;background:#F7F8FA"></div>

            <ul>
                <li>
                    <div style="display:flex">
                        <img style="width:20px;height:20px;margin-right:10px" src="../../../public/images/person-4.png" />
                        <p style="font-size:16px">优惠券</p>
                    </div>
                    <div>
                        >
                    </div>
                </li>
                <li>
                    <div style="display:flex">
                        <img style="width:20px;height:20px;margin-right:10px" src="../../../public/images/person-xx.png" />
                        <p style="font-size:16px">学习卡</p>
                    </div>
                    <div>
                        >
                    </div>
                </li>
                <li>
                    <div style="display:flex">
                        <img style="width:20px;height:20px;margin-right:10px" src="../../../public/images/person-xx.png" />
                        <p style="font-size:16px">分销中心</p>
                    </div>
                    <div>
                        >
                    </div>
                </li>
            </ul>
            <div style="width:100%;height:30px;background:#F7F8FA"></div>

            <ul >
                <li>
                    <div style="display:flex">
                        <img style="width:20px;height:20px;margin-right:10px" src="../../../public/images/person-xiaoxi.png" />
                        <p style="font-size:16px">消息中心</p>
                    </div>
                    <div>
                        >
                    </div>
                </li>
                <li>
                    <div style="display:flex">
                        <img style="width:20px;height:20px;margin-right:10px" src="../../../public/images/person-dizhi.png" />
                        <p style="font-size:16px">地址管理</p>
                    </div>
                    <div>
                        >
                    </div>
                </li>
                <li>
                    <div style="display:flex">
                        <img style="width:20px;height:20px;margin-right:10px" src="../../../public/images/person-wm.png" />
                        <p style="font-size:16px">关于我们</p>
                    </div>
                    <div>
                        >
                    </div>
                </li>
                <li>
                    <div style="display:flex">
                        <img style="width:20px;height:20px;margin-right:10px" src="../../../public/images/person-fk.png" />
                        <p style="font-size:16px">意见反馈</p>
                    </div>
                    <div>
                        >
                    </div>
                </li>
                <li>
                    <div style="display:flex">
                        <img style="width:20px;height:20px;margin-right:10px" src="../../../public/images/person-sz.png" />
                        <p style="font-size:16px">设置</p>
                    </div>
                    <div>
                        >
                    </div>
                </li>
            </ul>



        </div>

        
    </div>
</template>

<script>
export default {
    methods:{
        goLogin(){
            this.$router.push("/login")
        }
    }
}
</script>

<style lang="scss" scoped>
.person{
    width: 100vw;
    height: 100%;
    .person-box{
        width: 100%;
        height: 450px;
        background-image: url('../../../public/images/person.png');
        background-repeat:repeat-x;
        background-repeat:no-repeat;
        background-size: 100%;
        background-color:#fff;
        padding-top: 100px;
        position: relative;
        .box-center{
            width: 100%;
            height: 200px;
            text-align: center;
        }
        .box-bottom{
            width: 100%;
            height: 150px;
            position: absolute;
            bottom: 0;
            left: 0;
            display: flex;
            justify-content: space-between;
            text-align: center;
            align-items: center;
            .box-ad{
                flex: 1;
                font-size: 30px;
                .box-ac{
                    color: blue;
                }
                .box-ab{
                    color: red;
                }
            }
        }   
    }

    .person-center{
        width: 90%;
        margin: auto;
        background-color: #F7F8FA;
        ul{
            margin-top: 20px;
            list-style: none;
            li{
                width: 100%;
                height: 100px;
                background-color: white;
                display: flex;
                justify-content: space-between;
                text-align: center;
                padding-top: 30px;
                box-sizing: border-box;
                border-bottom: 1px solid #F7F8FA;
            }
        }
    }
}
</style>
