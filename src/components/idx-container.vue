<template>
  <div class="idx-container">
    <div class="container">
      <div class="idx-adv container first-adv">
        <a href=""><img src="../assets/img/recommend/rec1.png"></a>
      </div>
      <!--手机-->
      <idx-box-phone/>
      <div class="idx-adv">
        <a href=""><img src="../assets/img/recommend/rec2.png"></a>
      </div>
      <!--家电-->
      <idx-box type="家电"/>
      <div class="idx-adv">
        <a href=""><img src="../assets/img/recommend/rec3.png"></a>
      </div>
      <!--智能-->
      <idx-box type="智能"/>
      <div class="idx-adv">
        <a href=""><img src="../assets/img/recommend/rec4.png"></a>
      </div>
      <!--搭配-->
      <idx-box type="搭配"/>
      <div class="idx-adv">
        <a href=""><img src="../assets/img/recommend/rec5.png"></a>
      </div>
      <!--配件-->
      <idx-box type="配件"/>
      <div class="idx-adv">
        <a href=""><img src="../assets/img/recommend/rec6.png"></a>
      </div>
      <!--周边-->
      <idx-box type="周边"/>
      <div class="idx-adv">
        <a href=""><img src="../assets/img/recommend/rec7.png"></a>
      </div>
      <!--为你推荐-->
      <!--热评产品-->
      <!--内容-->
      <!--视频-->
      <div class="idx-title">
        <span class="tit">视频</span>
        <a href="" class="see-all">查看全部<i class="iconfont">&#xe62a;</i></a>
      </div>
      <div class="idx-box video">
        <div class="col-4 item"
             @click="clickHandle(item)"
             v-for="(item,index) in videoData"
             :key="index"
        >
          <a class="pic" href="#">
            <img :src="getImage(item)">
            <span><i class="iconfont">&#xe626;</i></span>
          </a>
          <h3><a href="#">{{item.title}}</a></h3>
          <p><a href="#">{{item.des}}</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import idxBoxPhone from '@/views/idxContainer/idx-box-phone.vue'
  import idxBox from '@/views/idxContainer/idx-box'
  export default {
    name: 'idx-container',
    components:{
      idxBoxPhone,
      idxBox
    },
    data(){
      return{
        videoData:[
          {
            imgName:'vd1.png',
            videoUrl:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812358b69886e576c66a01f1f00affe9.mp4',
            title:'2021年春季新品发布会第一场',
            des:'2021年春季新品发布会第一场'
          },
          {
            imgName:'vd2.png',
            videoUrl:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4',
            title:'Redmi 10X系列发布会',
            des:'Redmi 10X系列发布会'
          },
          {
            imgName:'vd3.png',
            videoUrl:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4',
            title:'小米10 青春版 发布会',
            des:'小米10 青春版 发布会'
          },
          {
            imgName:'vd4.png',
            videoUrl:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4',
            title:'小米10 8K手机拍大片',
            des:'小米10 8K手机拍大片'
          }
        ],
      }
    },
    methods:{
      clickHandle(item){
        this.$store.commit('showVideo',true)
        this.$store.commit('changeVideoData',item)
      },
      getImage(item){
        return require('../assets/img/video/' + item.imgName)
      }
    }
  }
</script>

<style scoped>

</style>
