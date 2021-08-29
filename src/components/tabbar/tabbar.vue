<template>
    <div class="tabbar">
        <router-view></router-view> 
        <div class="tabbar-box">
            <div class="box-item" v-for="(item,index) in tabbat_list" :key="index" @click="tabbar(item,index)">
                <img class="item_img" :src="active == index? item.nav_img_checked:item.nav_img" />
                <p :style="active == index ? 'color:red' : ''">{{item.name}}</p>
            </div>
        </div>
        
        
    </div>
</template>

<script>
import { bottom } from "@/http/api.js"
export default {
    data(){
        return {
            tabbat_list:[],
            active:0
        }
    },
    async created(){
        const { data:res } = await bottom();
        this.tabbat_list = res.index

    },
    methods:{
        tabbar(item,index){
            this.active = index
            this.$router.push(item.url)
        }
    }
}
</script>


<style lang="scss" scoped>
.tabbar {
  width: 100vw;
  height: 100vh;
  position: relative;
  .tabbar-box{
      width: 100vw;
      height: 88px;
      position: fixed;
      bottom: 0px;
      left: 0px;
      display: flex;
      justify-content: space-between;
      .box-item{
          flex: 1;
          text-align: center;
          .item_img{
              width: 40px;
              height: 50px;
          }
      }
  }
}
</style>
