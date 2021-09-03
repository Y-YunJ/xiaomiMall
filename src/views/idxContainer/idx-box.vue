<template>
  <div>
    <div class="idx-title">
      <span class="tit">{{type}}</span>
      <div class="more">
        <ul class="tab-list">
          <li v-for="(item,index) in goodsList"
              :key="index"
              @mouseover="tabSelect(item.subItemName)"
              :style="selectedTab === item.subItemName?activeStyle:{}"
          >{{item.subItemName}}
          </li>
        </ul>
      </div>
    </div>
    <div class="idx-box box-content">
      <div class="adv-box col-5">
        <a class="double" href=""><img :src="advTopPic"></a>
        <a class="double" href=""><img :src="advBottomPic"></a>
      </div>
      <div class="good-box">
        <div class="col-5 good-item" v-for="(item,index) in showingList.subItemList" :key="item.id">
          <a href="" class="pic"><img :src="getImage(item)"></a>
          <h3 class="name"><a ref="">{{item.name}}</a></h3>
          <h4 class="desc">{{item.tips}}</h4>
          <p class="price"><span>{{item.nowPrice}}</span><i v-if="item.oldPrice !==''">{{item.oldPrice}}</i></p>
        </div>
        <div class="col-5 good-item last-more">
          <div class="good-top">
            <div class="txt">
              <h3 v-if="showingList.lastItem">{{showingList.lastItem.name}}</h3>
              <p v-if="showingList.lastItem">{{showingList.lastItem.nowPrice}}</p>
            </div>
            <a class="small-img"><img :src="getImage(showingList.lastItem)" alt=""></a>
          </div>
          <div class="good-more">
            <div class="txt">
              <h3><a href="">浏览更多</a></h3>
              <p><a href="">{{selectedTab}}</a></p>
            </div>
            <i class="iconfont">&#xe603;</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'idx-box',
    props:['type'],
    data(){
      return{
        selectedTab:'',
        goodsList:Array,
        showingList:Object,
        advImageName:'',
        // idxUrl:'http://106.75.229.98:7300/mock/611e22cd989bbf232e93dd23/xiaomi/home/idx'
        idxUrl:'idxGoods',
      }
    },
    computed:{
      activeStyle(){
        return{
          'color':'#ff6700',
          'border-bottom': '2px solid #ff6700',
        }
      },
      advTopPic(){
        if(this.advImageName){
          return require('../../assets/img/good/' + this.advImageName + '1.jpg')
        }
      },
      advBottomPic(){
        if(this.advImageName){
          return require('../../assets/img/good/' + this.advImageName + '2.jpg')
        }
      }
    },
    methods:{
      tabSelect(val){
        this.selectedTab = val
      },
      getImage(a){
        if(a){
          return require('../../assets/img/idx/' + a.imgName)
        }else{
          return ''
        }
      },
    },
    watch:{
      selectedTab:function (val) {
        let data = this.goodsList
        this.showingList = data.filter((item) =>{
          return item.subItemName === val
        })[0]
      }
    },
    created(){
      axios({
        method:'get',
        url:this.idxUrl
      }).then((response) => {
        let data = response.data.goods
        let that = this
        let temp = data.filter((item) => {
          return item.itemName === that.type
        })
        this.goodsList = temp[0].itemList
        this.advImageName = temp[0].imgName
        this.selectedTab = this.goodsList[0].subItemName
      }).catch((error) => {
        console.log(error)
      })
    },
  }
</script>
<style scoped>
  .idx-title .more{
    position:absolute;
    top:0;
    right:0;
    height: 42px;
  }
  .idx-title .more .tab-list{
    margin: 0;
    padding: 16px 0 0;
    font-size: 16px;
  }
  .idx-title .more .tab-list li{
    display: inline-block;
    margin-left: 30px;
    line-height: 24px;
    cursor: pointer;
  }
  .idx-title .more .tab-list li:hover{
    color:#ff6700;
    border-bottom: 2px solid #ff6700;
  }
  .idx-box .last-more{
    background-color: #f5f5f5;
  }
  .idx-box .last-more:hover{
    box-shadow: none;
  }
  .idx-box .last-more .good-top .txt{
    float: left;
    margin-top: 40px;
  }
  .idx-box .last-more .txt{
    margin-left: 30px;
    overflow: hidden;
    font-size: 14px;
  }
  .idx-box .last-more .txt h3{
    font-weight: normal;
  }
  .idx-box .last-more .good-top p{
    color: #ff6700;
    line-height: 30px;
  }
  .idx-box .last-more .good-top h3{
    width: 94px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }
  .idx-box .last-more .small-img{
    width: 80px;
    height: 80px;
    float: right;
    margin-right: 20px;
    margin-top: 25px;
  }
  .idx-box .last-more .small-img img{
    width: 80px;
    height: 80px;
    display: block;
  }
  .idx-box .last-more .good-more{
    position: relative;
  }
  .idx-box .last-more .good-more h3{
    font-size: 18px;
    margin-top: 40px;
  }
  .idx-box .last-more .good-more p{
    line-height: 30px;
  }
  .idx-box .last-more .good-more i{
    font-size: 60px;
    color: #ff6700;
    position: absolute;
    top:35px;
    right: 40px;
  }
  .idx-box .last-more .good-top,
  .idx-box .last-more .good-more{
    background-color: #fff;
    height: 142px;
    margin-bottom: 15px;
  }
</style>
