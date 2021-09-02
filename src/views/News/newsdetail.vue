<template>
    <div class="newsdetail">
        <div class="newsdetail-title-img">
            <img :src="detail.thumb_img" alt="">
        </div>
        <p class="newsdetail-p">{{ detail.title }}</p>
        <div class="newsdetail-box">
            <p>{{ detail.click_rate }}次预览</p>
            <p>{{date}}</p>
        </div>

        <div class="description">
            <p>{{detail.description}}</p>
        </div>
        <div class="description-hr">
        </div>

        <div class="box-text" v-html="detail.content">

        </div>
    </div>
</template>

<script>
import { indetail } from "@/http/api"
export default {
    data(){
        return {
            information_id:0,
            detail:{},
            date:null,
        }
    },
    created(){
        let day = new Date();
        let M = day.getMonth()+1;
        let D = day.getDate();
        let date1 = M +'-'+ D; 
        this.date = date1
        this.information_id = this.$route.query.information_id;
        this.getIndetail()
    },
    methods:{
        async getIndetail(){
            const { data:res } = await indetail({
                information_id:this.information_id
            })
            console.log(res);
            this.detail = res
        }
    }
}
</script>


<style lang="scss" scoped>
.newsdetail{
    width: 100vw;
    .newsdetail-title-img{
        width: 100vw;
        img{
            width: 100%;
            display: block;
        }
    }
    .newsdetail-p{
        margin: 5vw;
        font-size: 6vw;
    }
    .newsdetail-box{
        width: 90vw;
        margin: 5vw auto;
        display: flex;
        justify-content: space-between;
        color: #ccc;

    }
    .description{
        color: #ccc;
        font-size: 4vw;
        margin: auto;
        text-align: center;
        padding: 5vw 2vh;
    }
    .description-hr{
        width: 20vw;
        margin: auto;
        background: #ccc;
        border: 0.01px solid #ccc;
    }
    .box-text{
        padding-top:4vh;
        width: 90vw;
        margin: auto;
        text-indent: 2em;
        font-size: 1vw;
    }
}
</style>
