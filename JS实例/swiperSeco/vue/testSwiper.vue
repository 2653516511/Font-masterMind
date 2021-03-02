<!-- 书影音 -->

<template>
    <div class="box">
        <mySwiper :sum="bannerList.length" :time='2000'>
            <router-link to="/goods/1" 
                v-for="x of bannerList" :key="x.id" 
                class="swiper-item">
                <img :src="x.img">
            </router-link>
        </mySwiper>
        <!-- <div v-show="msgid === 2" v-if="msgid === 1" >
            {{msg}}
        </div> -->
    </div>

</template>
  <!-- <div> -->
    <!-- 标题栏 -->
    <!-- <mt-header title="书影音"></mt-header> -->
    <!-- 轮播图 组件一 -->
    <!-- <banner :listImg="bannerList"></banner> -->
    <!-- 轮播图 组件二 -->
    <!-- <swiper :swiper="bannerList"></swiper> -->
  <!-- </div>
</template> -->
 
<script>
  import Banner from '../components/Banner.vue'
  import Swiper from '../components/Swiper.vue'
 
  export default {
    name: 'AudioBook',
    components: {
      Banner,
      Swiper
    },
    data(){
      return {
          msgid: 1,
          msg: 'test v-if and v-show',
        bannerList: [
          {"type":"1","img":"http://www.youdingsoft.com/fileUploadsmall/20180119172411843341.jpg;","url":""},
          {"type":"1","img":"http://www.youdingsoft.com/fileUploadsmall/20180119172434968049.jpg;","url":""},
          {"type":"1","img":"http://www.youdingsoft.com/fileUploadsmall/20180119172503906167.jpg;","url":""},
          {"type":"1","img":"http://www.youdingsoft.com/fileUploadsmall/20180119172518390352.jpg;","url":""},
          {"type":"1","img":"http://www.youdingsoft.com/fileUploadsmall/20180119172540250495.jpg;","url":""},
          {"type":"1","img":"http://www.youdingsoft.com/fileUploadsmall/20180119172552359735.jpg;","url":""}
        ]
      }
    }
  }
</script>
 
<style lang="less" scoped>
  //
</style>