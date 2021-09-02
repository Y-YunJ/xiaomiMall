<template>
  <div class="slider-nav" :style="navBackground" @mouseleave="clearSelect">
    <ul class="slider-ul">
      <li class="slider-li"
          v-for="(item,index) in sliderList"
          :key="index"
          @mouseover.capture="activePop(item.id)"
          @mouseleave="disActivePop"
          :style="(item.id===selectItem?hoverBg:{})"
      >
        <a href="#" class="s-tit" :style="(item.id===selectItem?hoverFont:liFontStyle)">
          <span>{{item.itemName}}</span>
          <i class="iconfont icon-xiangyou1"></i>
        </a>
      </li>
    </ul>
    <div class="slider-pop" v-show="active" @mouseover="activePop(selectItem)" @mouseleave="disActivePop">
      <a href="" class="pop-a" v-for="subItem in subList" :key="subItem.id">
        <img :src='getImage(subItem)' alt="">
        <p>{{subItem.name}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'slider-nav',
    props:['surl','isHome'],
    data(){
      return{
        sliderList:Array,
        selectItem:Number,
        active:false,
        subList:Array,
        publicPath:'../assets/img/goods/',
      }
    },
    computed:{
      navBackground(){
        if(!this.isHome){
          return {
            'background-color':'#fff',
            'width':'232px',
            'height':'418px',
            'border':'1px solid #ff6700'
          }
        }else{
          return{}
        }
      },
      liFontStyle(){
        if(!this.isHome){
          return {color:'#333'}
        }else{
          return {}
        }
      },
      hoverFont(){
        return{color:'#fff'}
      },
      hoverBg(){
        return{'background-color':'#ff6700'}
      }
    },
    methods:{
      activePop(id){
        let res = this.sliderList
        this.selectItem = id
        this.active = true
        this.subList = res.filter(function (x) {
            return x.id === id
        })[0].itemsList
      },
      disActivePop(){
        this.active = false
      },
      getImage(a){
        return require('../assets/img/goods/' + a.imgName)
      },
      clearSelect(){
        this.selectItem = -1
      }
    },
    created(){
      axios({
        method:'get',
        url:this.surl,
      }).then((response)=>{
        this.sliderList = response.data.goods
      }).catch((error)=>{
        console.log(error)
      })
    }
  }
</script>

<style scoped>
  .slider-nav{
    background-color: #000\9;
    background-color: rgba(0,0,0,0.6);
    width: 234px;
    height: 420px;
    border: none;
    visibility: visible;
    box-sizing: content-box;
    position: absolute;
    right: -19px;
    top:72px;
    padding: 20px 0;
    z-index: 100;
  }
.slider-nav .slider-pop p{
  line-height: 42px;
  text-overflow: ellipsis;
}
</style>
