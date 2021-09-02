import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let store = new Vuex.Store({
  state:{
    toastPopMess:'',
    account:'',
    password:'',
    areaPopShow:false,
    area:{
      name:'中国',
      code:'+86'
    },
    phone:'',
    checkNum:'',
    setPass:'',
    confirmPass:'',
    //视频部分
    videoShow:false,
    videoData:{}
  },
  mutations:{
    changeMess(state,payload){
      state.toastPopMess = payload
    },
    changeAcc(state,payload){
      state.account = payload
    },
    changePas(state,payload){
      state.password = payload
    },
    changeAreaPop(state){
      state.areaPopShow = !state.areaPopShow
    },
    changeArea(state,payload){
      state.area = payload;
    },
    changePhone(state,payload){
      state.phone = payload;
    },
    changeNum(state,payload){
      state.checkNum = payload
    },
    changeSet(state,payload){
      state.setPass = payload
    },
    changeConfirm(state,payload){
      state.confirmPass = payload
    },
    showVideo(state,payload){
      state.videoShow = payload
    },
    changeVideoData(state,payload){
      state.videoData = payload
    }
  },
})

export default store
