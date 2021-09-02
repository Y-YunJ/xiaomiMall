<template>
  <div class="login-top">
    <div class="title-box">
      <i><img src="../assets/img/logo/logo40.png"></i>
      <span class="tit">小米账号</span>
    </div>
    <div class="nav-box">
      <div class="list">
        <a class="item" href="#">用户协议</a>
        <a class="item" href="#">隐私政策</a>
        <a class="item" href="#">帮助中心</a>
        <a class="separate"></a>
        <a class="item show" href="#" @mouseover="activeTopPop" @mouseleave="disActiveTop">
          {{curLanguage}}<span class="iconfont icon-shang"></span>
          <div class="nav-pop" v-show="topPopActive">
            <P class="item hide-0" @click.self="changeLanguage(0)">{{languageZero}}</P>
            <p class="item hide-1" @click.self="changeLanguage(1)">{{languageOne}}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login-top',
    data(){
      return{
        curLanguage:'中文(简体)',
        languageZero:'中文(繁骵)',
        languageOne:'English',
        topPopActive:false,
      }
    },
    methods:{
      changeLanguage(num){
        let temp = this.curLanguage
        switch (num) {
          case 0:this.curLanguage = this.languageZero;
            this.languageZero = temp;break;
          case 1:this.curLanguage = this.languageOne;
            this.languageOne = temp;break;
          default:break;
        }
      },
      activeTopPop(){
        this.topPopActive = true
      },
      disActiveTop(){
        this.topPopActive = false
      },
    }
  }
</script>

<style scoped>

</style>
