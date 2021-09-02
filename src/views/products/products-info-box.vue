<template>
    <div>
      <div class="box">
        <div class="nav-bar">
          <div class="container">
            <div class="left">
              <h3>MIX FOLD 小米折叠屏手机</h3>
            </div>
            <div class="right">
              <router-link tag="a" to="">概述页</router-link>
              <span class="separator">|</span>
              <router-link tag="a" to="">参数页</router-link>
              <span class="separator">|</span>
              <router-link tag="a" to="">F码通道</router-link>
              <span class="separator">|</span>
              <router-link tag="a" to="">咨询客服</router-link>
              <span class="separator">|</span>
              <router-link tag="a" to="">用户评价</router-link>
              <router-link class="btn" tag="a" to="">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="box hidden" :style="navShow?navShowStyle:{}">
        <div class="nav-bar">
          <div class="container">
            <div class="left">
              <h3>MIX FOLD 小米折叠屏手机</h3>
            </div>
            <div class="right">
              <router-link tag="a" to="">概述页</router-link>
              <span class="separator">|</span>
              <router-link tag="a" to="">参数页</router-link>
              <span class="separator">|</span>
              <router-link tag="a" to="">F码通道</router-link>
              <span class="separator">|</span>
              <router-link tag="a" to="">咨询客服</router-link>
              <span class="separator">|</span>
              <router-link tag="a" to="">用户评价</router-link>
              <router-link class="btn" tag="a" to="">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'products-info-box',
    props:['navShow'],
    data(){
      return{

      }
    },
    computed:{
      navShowStyle(){
        return{
          'top':0,
          'margin-top':0
        }
      }
    }
  }
</script>

<style scoped>
  .box{
    position: relative;
    z-index: 4;
    background: #fff;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0 5px 5px rgba(0 ,0 ,0 , 0.07);
  }
  .box.hidden{
    position: fixed;
    left:0;
    right:0;
    top:-10px;
    margin-top: -60px;
    transition: margin-top .3s linear;
  }
  .box .nav-bar{
    position: relative;
    height: 64px;
    width: 100%;
    margin-top: 0;
    color: #616161;
  }
  .container{
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
    display: block;
    overflow: hidden;
  }
  .container:after{
    content: '';
    clear: both;
  }
  .container .left{
    float: left;
  }
  .container .left h3{
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 60px;
    color: #424242;
  }
  .container .right{
    float: right;
    margin: 17px 0 0 0;
    height: 30px;
  }
  .container .right a{
    color: #616161;
    font-size: 14px;
    line-height: 30px;
  }
  .container .right a:hover{
    color: #ff6700;
  }
  .container .right .separator{
    color: #e0e0e0;
    margin: 0 .5em;
    line-height: 30px;
    font-size: 14px;
  }
  .container .right .btn{
    display: inline-block;
    color: #fff;
    margin-left: 5px;
    width: 118px;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
    border: 1px solid #ff6700;
    text-align: center;
    transition: all .4s;
    background: #ff6700;
    box-sizing: content-box;
  }
</style>
