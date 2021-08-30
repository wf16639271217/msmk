<template>
    <div class="index">
        <!-- 头部搜索框 -->
        <header>
            <img class="index_img1" src="http://120.53.31.103:86/img/icon-sign.96f11c58.png"/>
            <input class="index_input" placeholder="搜索" type="text"/>
            <img class="index_img2" src="../../../public/images/B_01.png"/>
        </header>

        <!-- 首页轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in banner_list" :key="index">
                <img :src="item" alt="">
            </van-swipe-item>
        </van-swipe>

        <!-- 大威天龙 -->
        <div class="dwtl">
            <ul>
                <li v-for="(item,index) in dwtl" :key="index">
                    <img style="width:30px;height:30px" :src="item.nav_img" alt="">
                    <p>
                        {{item.name}}
                    </p>
                </li>
            </ul>
        </div>

        <!-- 首页资深讲师&推荐课程&名师 -->
        <div class="card-list">
            <!-- 资深讲师 -->
            <div class="teacher">
                <div class="t-header">
                    <p class="t-p">资深讲师</p>
                    <p class="t-p">更多 <span class="sanjiao"></span> </p>
                </div>
                <div class="t-next"  v-for="(item,index) in t_list.list" :key="index">
                    <div class="next-box">
                        <div class="box-left">
                            <img :src="item.teacher_avatar" alt="">
                        </div> 
                        <div class="box-right">
                            <p class="right-p1">{{item.teacher_name}}</p>
                            <p class="right-p2">{{item.introduction}}</p>
                        </div> 
                    </div>
                </div>
            </div>

            <!-- 推荐课程 -->
            <div class="tjkc">
                <div class="tj-header">
                    <p class="t-p">推荐课程</p>
                    <p class="t-p">更多 <span class="sanjiao"></span> </p>
                </div>
                <div class="tj-next"  v-for="(item,index) in tj_list.list" :key="index">
                    <div class="next-box">
                        <div class="box-left">
                            <img :src="item.cover_img" alt="">
                        </div> 
                        <div class="box-right">
                            <p class="right-p1">{{item.title}}</p>
                            <div style="margin-top: 35px;height:20px;display:flex;justify-content: space-between;">
                                <p class="right-p2">{{item.sales_num}}人已报名</p>
                                <p style="color:green;font-size:16px">免费</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>



            <!-- 名师 -->
            <div class="teacher">
                <div class="t-header">
                    <p class="t-p">名师</p>
                    <p class="t-p">更多 <span class="sanjiao"></span> </p>
                </div>
                <div class="t-next"  v-for="(item,index) in ms_list.list" :key="index">
                    <div class="next-box">
                        <div class="box-left">
                            <img :src="item.teacher_avatar" alt="">
                        </div> 
                        <div class="box-right">
                            <p class="right-p1">{{item.teacher_name}}</p>
                            <p class="right-p2">{{item.introduction}}</p>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="kong">

            </div>
        </div>
    </div>
</template>

<script>
import { nav,appIndex } from "@/http/api"
export default {
    created(){
       this.getbanner();
       this.getappIndex();
    },
    data(){
        return {
            banner_list:[
                "http://120.53.31.103:84/uploads/image/2021-04-08/3g04sBbCgNAG6WRlnJANB7BtWVHXhwdiZHTM6uDp.jpeg",
                "http://120.53.31.103:84/uploads/image/2021-07-02/eWIwuaHogrdpTM8POFMGCSWuhkK3yUkgK58F6L0x.png"

            ],
            dwtl:[],
            t_list:[],
            tj_list:[],
            ms_list:[]
        }
    },
    methods:{
        async getbanner(){
             const { data:res } = await nav();
            this.dwtl = res
        },
        async getappIndex(){
            const { data:res } = await appIndex();
            this.t_list = res[0]
            this.tj_list = res[1]
            this.ms_list = res[2]
        }
    }
};
</script>

<style lang="scss" scoped>
.index {
  width: 750px;
  height: 100%;
  padding-bottom: 80px;
//   首页头部搜索框
  header{
      width: 100vw;
      height: 13.33333vw;
      display: flex;
      justify-content: space-evenly;
      padding-top: 20px;
      box-sizing: border-box;
      .index_img1{
          width: 60px;
          height: 60px;
          display: block;
          line-height: 60px;
      }
      .index_img2{
          width: 55px;
          height: 55px;
          display: block;
          line-height: 60px;
      }
      .index_input{
          width: 500px;
          height: 60px;
          border-radius: 40px;
          padding-left: 40px;
      }
  }
//   首页轮播图
  .van-swipe{
      width: 100vw;
      height: 53.33333vw;
      img{
          width: 100%;
          height:100%;
      }
  }
//   大威天龙
  .dwtl{
      width:100vw;
      height: 200px;
      position: relative;
      padding: .26667rem .26667rem;
      box-sizing: border-box;
      ul{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          width: 90%;
          height: 90%;
          display: flex;
          flex-wrap: wrap;
          li{
              width: 25%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              img{
                  margin-bottom: 10px;
              }
          }
      }
  }

//   首页资深讲师&推荐课程&名师 
  .card-list{
      width: 100vw;
      background-color:  #F7F8FA;
      padding-top: 20px;
      margin-bottom: 1000px;
    //   资深讲师
      .teacher{
          width: 90vw;
          margin: auto;
          .t-header{
              width: 100%;
              margin: auto;
              display: flex;
              justify-content: space-between;
              border-left: 3px solid red;
              padding-left: 10px;
              box-sizing: border-box;
              position: relative;
              .t-p{
                  font-size: 30px;
                  .sanjiao{
                      display: block;
                      position: absolute;
                      top: 0px;
                      right: -45px;
                      border-left: 20px solid black;
                      border-top: 20px solid white;
                      border-bottom: 20px solid white;
                      border-right: 20px solid white;
                  }
              }
          }
          .t-next{
              width: 100%;
              height: 220px;
              background-color: white;
              border-radius: 20px;
              margin: 40px 0;
              position: relative;
              .next-box{
                  width: 80%;
                  height: 60%;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%,-50%);
                  display: flex;
                  justify-content: space-between;
                  .box-left{
                      flex: 1;
                      img{
                          width: 100px;
                          height: 100px;
                          display: block;
                          border-radius: 50%;
                      }
                  }
                  .box-right{
                      flex: 5;
                      margin-left: 20px;
                      .right-p1{
                          margin-top: 20px;
                          font-size: 30px;
                      }
                      .right-p2{
                          font-size: 20px;
                          margin-top: 10px;
                          color: #ccc;
                      }
                  }
              }
          }
      }
    // 推荐课程
    .tjkc{
        width: 90vw;
        margin: auto;
        .tj-header{
              width: 100%;
              margin: auto;
              display: flex;
              justify-content: space-between;
              border-left: 3px solid red;
              padding-left: 10px;
              box-sizing: border-box;
              position: relative;
              .t-p{
                  font-size: 30px;
                  .sanjiao{
                      display: block;
                      position: absolute;
                      top: 0px;
                      right: -45px;
                      border-left: 20px solid black;
                      border-top: 20px solid white;
                      border-bottom: 20px solid white;
                      border-right: 20px solid white;
                  }
              }
        }
        .tj-next{
              width: 100%;
              height: 220px;
              background-color: white;
              border-radius: 20px;
              margin: 40px 0;
              position: relative;
              .next-box{
                  width: 80%;
                  height: 60%;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%,-50%);
                  display: flex;
                  justify-content: space-between;
                  .box-left{
                      flex: 2;
                      img{
                          width: 250px;
                          height: 150px;
                          display: block;
                          border-radius: 50%;
                      }
                  }
                  .box-right{
                      flex: 5;
                      margin-left: 20px;
                      .right-p1{
                          margin-top: 10px;
                          font-size: 30px;
                      }
                      .right-p2{
                          font-size: 20px;
                          
                          color: #ccc;
                      }
                  }
              }
          }
    }
    
    .kong{
        width: 100%;
        height: 100px;
    }
  }
}
</style>
