<template>
  <div class="page-nav">
    <div class="container">
      <router-link tag="a" to="/" class="logo"></router-link>
      <ul class="nav">
        <li class="nav-item"
            @mouseover.self="showNav"
            @mouseleave.self="hideNav">
          <a href="" class="tit"
             :style="navItemStyle"
          >全部商品分类</a>
          <!--全部商品分类下拉菜单S-->
          <slider-nav :surl="sliderUrl" :isHome="isHome"
                      v-show="navShow"
          ></slider-nav>
          <!--全部商品分类下拉菜单E-->
        </li>
        <li class="nav-item" v-for="item in navItemList" :key="item" @mouseover="activeNav(item)" @mouseleave="disActiveNav">
          <a href="" class="tit">{{item}}</a>
        </li>
        <li class="nav-item">
          <a href="" class="tit">服务</a>
        </li>
        <li class="nav-item">
          <a href="" class="tit">社区</a>
        </li>
      </ul>
      <!--搜索框S-->
      <div class="search">
        <form action="" method="">
          <input type="text" class="q" :placeholder="placeholderTxt" ref="q"
                 @focus="showHot"
                 @focusout="hideHot"
                 :style="inputBorderStyle"
          >
          <input type="submit" value="" class="btn" :style="inputBorderStyle">
        </form>
        <ul class="hot" v-show="hotShow">
          <li v-for="(item,index) in dropDownList" :key="index">
            <a><span>{{item}}</span></a>
          </li>
        </ul>
      </div>
      <!--搜索框E-->
    </div>
      <div class='pop' v-show="actived" ref="pop"
           @mouseover="activeNav(selectNavItem)"
           @mouseleave="disActiveNav">
        <ul class="down-ul container">
          <li class="down-li" v-for="(popItem,index) in popList" :key="index">
            <a href="" class="pic">
              <img :src="getImage(popItem)">
            </a>
            <h3 class="name">{{popItem.name}}</h3>
            <p class="price">{{popItem.price}}</p>
            <i></i>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  import sliderNav from '@/views/slider-nav.vue'
  import axios from 'axios'
  export default {
    name: 'page-nav',
    props:['isHome'],
    components:{
      sliderNav,
    },
    data(){
      return{
        // navUrl:'http://106.75.229.98:7300/mock/611e22cd989bbf232e93dd23/xiaomi/navbarGoods',
        // sliderUrl:'http://106.75.229.98:7300/mock/611e22cd989bbf232e93dd23/xiaomi/allGoods',
        navUrl:'navGoods',
        sliderUrl:'sliderGoods',
        titList: Object,
        popList: Array,
        navItemList: [
          "小米手机",
          "Redmi 红米",
          "电视",
          "笔记本",
          "家电",
          "路由器",
          "智能硬件"
        ],
        dropDownList: [
          '全部商品',
          '小米平板5',
          '小米11',
          '手机',
          '小米10S',
          '空调',
          '电视',
          '洗衣机'
        ],
        selectNavItem: '',
        actived: false,
        hotShow: false,
        timer: null,
        count:1,
        placeholderTxt:'全部商品',
        navShow:true,

      }
    },
    computed:{
      inputBorderStyle(){
        if(this.hotShow){
          return {'border-color':'#ff6700'}
        }else{
          return {}
        }
      },
      navItemStyle(){
        if(this.isHome){
          return{visibility: 'hidden'}
        }else{
          return {}
        }
      },
    },
    methods:{
      activeNav(txt){
        this.selectNavItem = txt
        this.actived = true
        this.popList = this.titList[this.selectNavItem]
        this.$refs.q.blur()
      },
      disActiveNav(){
        this.actived = false
      },
      getImage(a){
        return require('../assets/img/goods/' + a.imgName)
      },
      showHot(){
        this.hotShow = true
      },
      hideHot(){
        this.hotShow = false
      },
      showNav(){
        if(!this.isHome){
          this.navShow = true
        }
      },
      hideNav(){
        if(!this.isHome){
          this.navShow = false
        }
      },
    },
    created(){
      axios({
        method:'get',
        url:this.navUrl
      }).then((response)=>{
        this.titList = response.data.goods
      }).catch((error)=>{
        console.log(error)
      })
      let that = this
      this.timer = setInterval(function () {
        if(that.count>=that.dropDownList.length){
          that.count = 0
          that.placeholderTxt = that.dropDownList[that.count++]
        }else{
          that.placeholderTxt = that.dropDownList[that.count++]
        }
      },6000)
      if(!this.isHome){
        that.navShow = false
      }
    },
    destroyed () {
      this.timer = null
    },
  }
</script>
<style scoped>
  .page-nav .pop{
    position: absolute;
    width: 100%;
    height: 230px;
    background-color: white;
    left:0;
    top:96px;
    box-shadow: 0 3px 4px rgba(0,0,0,0.18);
    border-top: 1px solid #e0e0e0;
    display: block;
    z-index: 1000;
    transition: all linear .2s .2s;
  }
  .page-nav .pop .down-li:last-child i{
    display: none;
  }
  /*.pop.nav_menu_active {*/
  /*  display: block;*/
  /*}*/
  .popShow-enter{
    /*height: 0;*/
    opacity: 0;
  }
  .popShow-enter-to{
    /*height: 230px;*/
    opacity: 1;
  }
  .popShow-enter-active{
    transition: all 2s ease;
  }
  .popShow-leave{
    /*height: 230px;*/
    opacity: 1;
  }
  .popShow-leave-to{
    /*height: 0;*/
    opacity: 0;
  }
  .popShow-leave-active{
    transition: all 2s ease;
  }
</style>
