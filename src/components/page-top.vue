<template>
  <div class="page-top">
    <div class="container">
      <div class="top-left">
        <a href="#">小米商城</a>
        <span>|</span>
        <a href="#">MIUI</a>
        <span>|</span>
        <a href="#">IoT</a>
        <span>|</span>
        <a href="#">云服务</a>
        <span>|</span>
        <a href="#">天星数科</a>
        <span>|</span>
        <a href="#">有品</a>
        <span>|</span>
        <a href="#">企业团购</a>
        <span>|</span>
        <a href="#">资质证照</a>
        <span>|</span>
        <a href="#">协议规则</a>
        <span>|</span>
        <a href="#" class="download">
          下载app
          <div class="down-box">
            <b></b>
            <img src="../assets/img/icon/download.png" alt="">
            <i>小米商城APP</i>
          </div>
        </a>
        <span>|</span>
        <a href="#">智能生活</a>
        <span>|</span>
        <a href="#">Select Location</a>
        <span>|</span>
      </div>
      <div class="top-right">
        <div class="car-box">
          <a href="" class="tht">
            <i class="iconfont icon-shoppingcart-fill">
              购物车
              (<span>8</span>)
            </i>
          </a>
          <div class="pop">
            <p v-if="!hasGood" class="no-good">购物车中还没有商品，赶紧选购吧！</p>
            <div v-if="hasGood">
              <ul class="list">
                <li>
                  <a href="" class="pic"><img src="../assets/img/good/modul.png"></a>
                  <div class="txt">小米9，全网通版</div>
                  <div class="num">
                    <h4>3299元 X 1</h4>
                    <i> X </i>
                  </div>
                </li>
                <li>
                  <a href="" class="pic"><img src="../assets/img/good/modul.png"></a>
                  <div class="txt">小米9，全网通版</div>
                  <div class="num">
                    <h4>3299元 X 1</h4>
                    <i> X </i>
                  </div>
                </li>
                <li>
                  <a href="" class="pic"><img src="../assets/img/good/modul.png"></a>
                  <div class="txt">小米9，全网通版</div>
                  <div class="num">
                    <h4>3299元 X 1</h4>
                    <i> X </i>
                  </div>
                </li>
                <li>
                  <a href="" class="pic"><img src="../assets/img/good/modul.png"></a>
                  <div class="txt">小米9，全网通版</div>
                  <div class="num">
                    <h4>3299元 X 1</h4>
                    <i> X </i>
                  </div>
                </li>
                <li>
                  <a href="" class="pic"><img src="../assets/img/good/modul.png"></a>
                  <div class="txt">小米9，全网通版</div>
                  <div class="num">
                    <h4>3299元 X 1</h4>
                    <i> X </i>
                  </div>
                </li>
                <li>
                  <a href="" class="pic"><img src="../assets/img/good/modul.png"></a>
                  <div class="txt">小米9，全网通版</div>
                  <div class="num">
                    <h4>3299元 X 1</h4>
                    <i> X </i>
                  </div>
                </li>
              </ul>
              <div class="total">
                <div class="price">
                  <p>共8件商品</p>
                  <h3>6062元</h3>
                </div>
                <a href="" class="btn">立即结算</a>
              </div>
            </div>
          </div>
        </div>
        <!--登录前-->
        <div class="login" v-show="!isLogin">
          <router-link tag="a" to="/login">登录</router-link>
          <span>|</span>
          <router-link tag="a" to="/login">注册</router-link>
          <span>|</span>
          <a href="#">通知</a>
        </div>
        <!--登录后-->
        <div class="user-info" v-show="isLogin">
          <div class="user">
            <a class="tit">{{user}}</a>
            <ul>
              <li><a href="#">个人中心</a></li>
              <li><a href="#">评价晒单</a></li>
              <li><a href="#">我的喜欢</a></li>
              <li><a href="#">小米账号</a></li>
              <li><a href="#" @click="loginOut">退出登录</a></li>
            </ul>
          </div>
          <a href="#" class="mess">消息通知</a>
          <span>|</span>
          <a href="#" class="mess">我的订单</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-top',
    data(){
      return{
        hasGood:true,
        isLogin:false,
        user:'user'
      }
    },
    computed:{

    },
    methods:{
      loginOut(){
        this.$session.clear()
        this.isLogin = false
      }
    },
    created(){
      // 拿到登录信息
      this.isLogin = this.$session.fetch('login')
      this.user = this.$session.fetch('user')
    }
  }
</script>
<style scoped>

</style>
