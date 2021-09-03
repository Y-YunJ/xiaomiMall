<template>
    <div>
      <div class="idx-title">
        <span class="tit">手机</span>
        <div class="see-all">
          <a href="">查看全部</a>
          <i class="iconfont">&#xe670;</i>
        </div>
      </div>
      <div class="idx-box box-content">
        <div class="adv-box col-5">
          <a class="single" href="">
            <img src="../../assets/img/good/single1.png">
          </a>
        </div>
        <div class="good-box">
          <div class="col-5 good-item" v-for="(item,index) in goodsList" :key="item.id">
            <a href="" class="pic"><img :src="getImage(item)"></a>
            <h3 class="name"><a ref="">{{item.name}}</a></h3>
            <h4 class="desc">{{item.tips}}</h4>
            <p class="price"><span>{{item.nowPrice}}</span><i v-if="item.oldPrice !==''">{{item.oldPrice}}</i></p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'idx-box-phone',
    data(){
      return{
        // idxUrl:'http://106.75.229.98:7300/mock/611e22cd989bbf232e93dd23/xiaomi/home/idx',
        idxUrl:'idxGoods',
        goodsList:Array,
      }
    },
    methods:{
      getImage(a){
        return require('../../assets/img/idx/' + a.imgName)
      },
    },
    created(){
      axios({
        method:'get',
        url:this.idxUrl
      }).then((response) => {
        let data = response.data.goods
        this.goodsList = data.filter((item) => {
          return item.itemName === '手机'
        })[0].itemList
      }).catch((error) => {
        console.log(error)
      })
    },
  }
</script>

<style scoped>
  .idx-title .see-all{
    font-size: 16px;
    color: #666;
    float: right;
    position: relative;
    top:16px;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    padding-right: 33px;
  }
  .idx-title .see-all:hover{
    color: #ff6700;
  }
  .idx-title .see-all:hover i{
    color: #ff6700;
  }
  .see-all i{
    display: inline-block;
    color:#b0b0b0;
    position: absolute;
    top:0;
    right:0;
    font-size: 25px;
  }
</style>
