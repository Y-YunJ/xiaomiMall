<template>
  <div class="idx-banner container">
    <transition-group tag="ul" class="banner-list" name="image" mode="out-in">
      <li v-for="(image,index) in img"
          :key="image.id"
          v-show="index === mark"
          @mouseenter="stopPlay"
          @mouseleave="autoPlay">
        <a href="#">
          <img :src='image.url' alt="">
        </a>
      </li>
    </transition-group>
    <a class="btn prev" href="#"
       @click="preImage"
       @mouseenter="stopPlay"
       @mouseleave="autoPlay">

    </a>
    <a class="btn next" href="#"
       @click="nextImage"
       @mouseenter="stopPlay"
       @mouseleave="autoPlay">
    </a>
    <div class="page">
      <a href="#"
         v-for="(item,index) in img.length"
         :class="{'myHover':index === mark}"
         @mouseenter="changeMark(index)"
         :key="index"
         @mouseleave="autoPlay">
        <span></span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'idx-banner',
    data(){
      return{
        mark:0,
        img:[
          {'id':0,'url':require("../assets/img/recommend/banner1.jpg")},
          {'id':1,'url':require("../assets/img/recommend/banner2.png")},
          {'id':2,'url':require("../assets/img/recommend/banner3.png")},
          {'id':3,'url':require("../assets/img/recommend/banner4.png")}
        ],
        timer:null,
      }
    },
    methods:{
      changeMark(index){
        this.stopPlay()
        this.mark = index
      },
      nextImage(){
        this.mark++;
        if(this.mark === 4){
          this.mark = 0
          return
        }
      },
      preImage(){
        this.mark--;
        if(this.mark < 0){
          this.mark = 3
          return
        }
      },
      autoPlay(){
        this.timer = setInterval(this.nextImage,3000)
      },
      stopPlay(){
        clearInterval(this.timer)
      }
    },
    created(){
      this.autoPlay()
    }
  }
</script>

<style scoped>
.image-enter{
  opacity: 0.5;
}
.image-enter-to{
  opacity: 1;
}
.image-enter-active{
  transition: all 0.5s ease;
}
.image-leave{
  opacity: 1;
}
.image-leave-to{
  opacity: 0.5;
}
.image-leave-active{
  transition: all 0.3s ease;
}
</style>
