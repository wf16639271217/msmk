<template>
    <div class="news" @touchstart="touchStart($event)">
        <van-tabs @change="onChange">
            <van-tab title="全部" name="0">
                <div class="zx-list">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        loading-text="加载中..."
                        @load="onLoad"
                        offset="200"
                        :immediate-check="false"
                    >
                        <div v-if="!flag">
                            <van-card
                                v-for="(it,index) in information_list"
                                :key="index"
                                num="2"
                                @click="goNewsDetail(it.id)"
                            >
                                <template #thumb>
                                    <img style="width:100%;height:100%" :src="it.thumb_img">
                                </template>
                                <template #title>
                                    <p style="font-size:4vw">{{it.title}}</p>
                                </template>
                                <template #desc>
                                    <p style="margin-top:10px;color:#ccc">{{it.description}}</p>
                                </template>
                                <template #price>
                                    <div style="color:#ccc">
                                        <van-icon name="eye-o"/>
                                        <span>{{it.click_rate}}</span>
                                    </div>
                                </template>
                            </van-card>
                        </div>
                    </van-list>
                </div>
            </van-tab>
            <van-tab v-for="item in zxTab_list" :title="item.name" :name="item.id" :key="item.id">
                <div class="zx-list">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                        offset="100"
                    >
                        <div v-if="!flag">
                            <van-card
                                v-for="(it,index) in information_list"
                                :key="index"
                                num="2"
                                @click="goNewsDetail(it.id)"
                            >
                                <template #thumb>
                                    <img style="width:100%;height:100%" :src="it.thumb_img">
                                </template>
                                <template #title>
                                    <p style="font-size:4vw">{{it.title}}</p>
                                </template>
                                <template #desc>
                                    <p style="margin-top:10px;color:#ccc">{{it.description}}</p>
                                </template>
                                <template #price>
                                    <div style="color:#ccc">
                                        <van-icon name="eye-o"/>
                                        <span>{{it.click_rate}}</span>
                                    </div>
                                </template>
                            </van-card>
                        </div>
                    </van-list>
                </div>
                <!-- 如果没有数据 显示空状态 -->
                <van-empty description="暂无资讯" v-if="flag"/>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { classify, information } from "@/http/api.js";
export default {
  data() {
    return {
      zxTab_list: [],
      information_list: [],
      classify_id: 0, //请求的参数
      flag: false,
      limit: 2, //每页的多少条数据
      page: 1, //第几页
      loading: false,
      finished: false,
      total: 0
    };
  },
  created() {
    this.getClassIfy();
    this.getinformation();
  },
  methods: {
    async getClassIfy() {
      const { data: res } = await classify();
      this.zxTab_list = res;
    },
    async getinformation() {
      const { data: res } = await information({
        classify_id: this.classify_id,
        limit: this.limit,
        page: this.page
      });
      console.log(res);
      this.total = res.total;
      this.information_list = res.list;
      if (this.information_list.length > 0) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    },
    async onChange(index) {
      this.classify_id = await index;
      this.getinformation();
    },
    goNewsDetail(id) {
      this.$router.push({
        path: "/newsdetail",
        query: {
          information_id: id
        }
      });
    },

    // 上拉加载
    async onLoad() {
        console.log(1);
       this.limit += await 1;
      this.getinformation();
      this.loading = false;
      let num = this.total / this.limit;
      if ((this.limit = num)) {
        this.finished = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.news {
  width: 100vw;
  padding-bottom: 20vh;
  background: #eaeaea;
  .van-card {
    background: white;
    width: 90vw;
    margin: 2vh auto;
    border-radius: 10px;
  }
}
</style>
