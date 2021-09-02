<template>
  <div style="position: absolute;top: 0;left: 0;width: 100%">
    <div id="area-drop" class="area-drop">
      <div class="drop-search">
        <div class="container">
          <input class="search-input" placeholder="搜索国家/地区名称" v-model="value" @input="searchHandle(value)">
          <div class="icon">
            <svg t="1628502262196" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4160" width="16" height="16"><path d="M1004.79998 1004.799969c-25.599999 25.599999-63.999998 25.599999-89.599997 0l-198.399994-198.399994c-172.799995 127.999996-409.599987 121.599996-569.599982-25.599999-179.199994-166.399995-191.999994-460.799986-19.199999-639.99998 172.799995-179.199994 460.799986-185.599994 639.99998-6.4 159.999995 159.999995 172.799995 409.599987 38.399999 582.399982l198.399994 198.399994C1030.399979 940.799971 1030.399979 979.199969 1004.79998 1004.799969zM703.999989 262.399992c-127.999996-179.199994-390.399988-179.199994-518.399984 0-83.199997 108.799997-83.199997 268.799992 0 377.599988 127.999996 179.199994 390.399988 179.199994 518.399984 0C787.199987 524.799984 787.199987 371.199988 703.999989 262.399992z" p-id="4161" fill="#aaaaaa"></path></svg>
          </div>
        </div>
      </div>
      <div class="drop-content">
        <ul id="drop-list" class="drop-list">
          <li class="drop-group" v-for="(item,index) in dropList" :key="index">
            <div class="group-title">{{index}}</div>
            <ul class="group-list">
              <li class="list-item" v-for="(subItem,subIndex) in item" :key="subIndex" :style="subItem[0] === select?selectStyle:''" @click="clickHandle(subItem)">
                <div class="field-name">{{subItem[0]}}</div>
                <div class="field-code">{{subItem[1]}}</div>
              </li>
            </ul>
          </li>
        </ul>
        <div class="empty-box" v-show="!hasData">
          <div class="empty-container">
            <div class="empty-img">
              <i>
                <svg t="1629038616539" class="icon" viewBox="0 0 1080 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4131" width="35" height="35"><path d="M747.804444 158.492444h-414.72c-46.535111 0-88.348444 22.755556-105.642666 57.514667L89.429333 493.511111a38.4 38.4 0 0 0-4.096 17.009778v334.336c0 25.201778 25.486222 45.738667 56.888889 45.738667h796.444445c31.402667 0 56.888889-20.48 56.888889-45.738667V510.464a38.684444 38.684444 0 0 0-4.096-17.066667l-137.955556-277.390222c-17.351111-34.702222-59.107556-57.514667-105.699556-57.514667z m-414.72 45.738667h414.833778c23.324444 0 44.145778 11.377778 52.792889 28.728889l125.724445 252.984889c3.811556 7.509333-3.072 15.644444-13.198223 15.644444h-156.273777c-12.231111 0-23.096889 6.257778-27.022223 15.644445l-12.401777 30.151111-12.515556 30.037333c-3.868444 9.386667-14.734222 15.701333-26.965333 15.701334H402.773333c-12.231111 0-23.096889-6.314667-27.022222-15.701334l-12.401778-30.094222-12.515555-30.094222c-3.868444-9.386667-14.734222-15.644444-26.965334-15.644445H167.651556c-10.069333 0-17.009778-8.135111-13.255112-15.644444l125.781334-252.984889c8.704-17.351111 29.582222-28.728889 52.906666-28.728889zM910.222222 844.8H170.666667c-15.758222 0-28.444444-10.24-28.444445-22.869333v-251.619556c0-12.686222 12.686222-22.926222 28.444445-22.926222h127.658666c3.015111 0 5.745778 1.592889 6.769778 3.982222l23.324445 56.32c7.736889 18.659556 29.582222 31.288889 53.987555 31.288889h316.188445c24.462222 0 46.193778-12.515556 53.930666-31.288889l23.381334-56.32c0.967111-2.389333 3.640889-3.982222 6.769777-3.982222H910.222222c15.758222 0 28.444444 10.24 28.444445 22.926222v251.619556c0 12.686222-12.686222 22.926222-28.444445 22.926222z" fill="#dbdbdb" p-id="4132"></path></svg>
              </i>
            </div>
            <p class="empty-des">No Data</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'drop-list',
    props:['list'],
    data(){
      return{
        value:'',
        dropList:this.list,
        select:'中国',
      }
    },
    computed:{
      hasData(){
        if(this.$objFunc.isEmpty(this.dropList)){
          return false
        }else{
          return true
        }
      },
      selectStyle(){
        return{
          color:'#333'
        }
      }
    },
    methods:{
      add(obj,prop,val) {
    //给对象添加属性
    Object.defineProperty(obj,prop,{value:val,writable:true,enumerable:true,configurable:true})
  },
      filter(data,str){
        //数据过滤
        let res = {}
        for(let key in data){
          if(data.hasOwnProperty(key)){
            for(let i = 0;i<data[key].length;i++){
              if(data[key][i][0].indexOf(str) !== -1){
                if(res.hasOwnProperty(key)){
                  res[key].push(data[key][i])
                }else{
                  this.add(res,key,[])
                  res[key].push(data[key][i])
                }
              }
            }
          }
        }
        return res
      },
      searchHandle(value){
        this.dropList = this.filter(this.list,value)
      },
      clickHandle(subItem){
        let area = {
          name:subItem[0],
          code:subItem[1]
        }
        this.$store.commit('changeArea',area)
        this.select = subItem[0]
      },
    }
  }
</script>

<style scoped>

</style>
