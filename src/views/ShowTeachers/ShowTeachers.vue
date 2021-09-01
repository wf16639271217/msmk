<template>
    <div class="ShowTeachers">
        <div class="teachers-box">
            <div class="box-item" 
            v-for="(item,index) in teacher_attrs_list" 
            :key="index"
            @click="goDetail(item.id)">
                <img class="item-img" :src="item.avatar" alt="">
                <div class="teacher">
                    <p class="p1">{{ item.real_name }}</p>
                    <p class="p2">{{ item.introduction }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { attrs } from "@/http/api.js"
export default {
    data(){
        return {
           teacher_attrs_list:[] 
        }
    },
    async created(){
        const { data:res } =await attrs({
            page:1,
            limit:10
        })
        console.log(res);
        this.teacher_attrs_list = res.list
    },
    methods:{
        // 课程跳详情
        goDetail(id){
            this.$router.push("/showteachers/teachersdetail?teacher_id="+id)
        }
    }
}
</script>

<style lang="scss" scoped>
.ShowTeachers{
    width: 100vw;
    background-color: #F7F8FA;
    padding-bottom: 4vh;
    .teachers-box{
        width: 100vw;
        padding: 4vw;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .box-item{
            width: 100%;
            height: 180px;
            background-color: #FFFFFF;
            border-radius: 20px;
            margin-bottom:  4vw;
            display: flex;
            padding: 4vw;
            box-sizing: border-box;
            box-shadow: 1px 15px 10px #eaeaea;
            .item-img{
                width: 90px;
                height: 90px;
                border-radius: 50%;
                overflow: hidden;
                display: block;
                margin-right:  3.2vw;
            }
            .teacher{
                flex: 1;
                height: 100%;
                line-height: 50px;
                .p1{
                    font-size: 30px;
                }
                .p2{
                    color: #ccc;
                }
            }
        }
    }
}
</style>

