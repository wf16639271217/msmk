<template>
    <div class="teachersdetail">
        <!-- 讲师详情 -->
        <header>
            <img :src="teacher_detail_list.avatar" alt="">
            <div class="header-box">
                <span>{{ teacher_detail_list.real_name }}</span>
            </div>
        </header>
        <!-- 讲师介绍 & 主讲课程 -->
        <van-tabs v-model="active">
            <van-tab title="讲师介绍">
                <div class="teacher-js">
                    <p class="teacher-ls">老师简介</p>
                    <p style="font-size:15px">{{teacher_detail_list.introduction}}</p>
                </div>
            </van-tab>
            <van-tab title="主讲课程" >
                <van-card
                v-for="(item,index) in teacher_course"
                :key="index"
                style="background:#FFFFFF;margin-top:10px"
                @click="goTeacherCourse(item.id)"
                >
                    <template #thumb>
                        <img style="width:30.93333vw;height: 18.13333vw;" :src="item.cover_img" alt="">
                    </template>
                    <template #title>
                        <p style="margin-left:40px;margin-top:20px;font-size:4vw">{{ item.title }}</p>
                    </template>
                    <template #price>
                        <p style="margin-left:40px;margin-top:20px;color:#ccc">{{ item.sales_num }}人已报名</p>
                    </template>
                    <template #num>
                        <p v-if="item.price != 0" style="margin-left:40px;margin-top:20px;color:red;font-size:4vw">
                            <s style="color:#ccc;font-size:2vw">{{item.underlined_price/100}}</s>
                            {{ item.price/100 }}
                        </p>
                        <p v-if="item.price==0" style="margin-left:40px;margin-top:20px;color:green;font-size:4vw">免费</p>
                    </template>
                </van-card>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { teacherId ,t_mainCourse } from "@/http/api.js"
export default {
    data(){
        return{
            teacher_id:"",
            teacher_detail_list:[],
            active:0,
            teacher_course:[]
        }
    },
    async created(){
        this.teacher_id = this.$route.query.teacher_id;
        this.getTeacherId();
        this.getMainCourse();
    },
    methods:{
        // 主讲课程
        async getMainCourse(){
            const { data:res } = await t_mainCourse({
                limit: 10,
                page: 1,
                teacher_id: `${this.teacher_id}`
            })
            console.log(res);
            this.teacher_course = res.list
        },
        async getTeacherId(){
            const { data:res } = await teacherId('/'+this.teacher_id)
            this.teacher_detail_list = res.teacher
        },
        // 主讲课程跳课程详情
        goTeacherCourse(id){
            this.$router.push("/coursedetail?basis_id="+id)
        }
    }
}
</script>


<style lang="scss" scoped>
.teachersdetail{
    width: 100vw;
    header{
        width: 100vw;
        padding: 6.66667vw 0;
        display: flex;
        img{
            height: 21.86667vw;
            width: 21.86667vw;
            border-radius: 50%;
            overflow: hidden;
            display: block;
            margin-left: 8vw;
            margin-right: 2.66667vw;
        }
        .header-box{
            font-size: 30px;
            padding-top: 30px;
        }
    }
    .van-tabs{
        width: 90vw;
        margin: auto;
        border-top: 1px solid #eaeaea;
        .teacher-js{
        border-top: 1px solid #eaeaea;

            // padding-top:20px;
            line-height: 35px;
            .teacher-ls{
                color: #ccc;
            }
        }
    }
}
</style>
