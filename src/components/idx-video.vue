<template>
  <div>
    <div class="idx-video-bg" v-show="isShow"></div>
    <div class="idx-video-box" v-show="isShow" :style="videoPos"
         @mouseover="showController"
         @mouseleave="hideController"
    >
      <div class="tit">
        <span>{{videoTitle}}</span>
        <i class="close iconfont" @click="closeHandle">&#xe6f0;</i>
      </div>
      <div class="video-box">
        <div class="pic">
          <img src="../assets/img/video/vd1.png" alt="" v-show="false">
          <i class="play-btn" v-show="isPaused"></i>
        </div>
        <video :src="videoUrl" ref="video"
               @click="playHandle"
               @play="playing"
               @timeupdate="barHandle"
        >
        </video>
        <transition name="fade">
          <div class="controller" v-show="isControlVisible">
            <div class="bar"
                 @mousedown="videoDownHandle($event)"
                 @mousemove.prevent="videoMoveHandle($event)"
                 @mouseup="videoUpHandle"
                 @mouseleave="videoUpHandle"
            >
              <a ref="coverBar" :style="{width:videoProgressPercent}">
                <span ref="dot"></span>
              </a>
            </div>
            <div class="ctl-box">
              <div class="play-icon normal-p" :style="btnPlayStyle" @click="playHandle"></div>
              <div class="play-times">
                <span class="cur">{{currentTime}}</span>/<span class="all">{{videoDuration}}</span>
              </div>
              <a class="play-icon normal-s full" @click="fullScreenHandle"></a>
              <div class="play-voi">
                <a class="play-icon normal-v" :style="btnVoiceStyle"
                   @click="voiceBtnHandle">
                </a>
                <div class="voi-bar"
                     @mousedown="voiceDownHandle($event)"
                     @mousemove.prevent="voiceMoveHandle($event)"
                     @mouseup="voiceUpHandle"
                     @mouseleave="voiceUpHandle"
                >
                  <a ref="voiCoverBar" :style="{width:voiceProgressPercent}">
                    <span ref="voiDot"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'idx-video',
    data(){
      return{
        url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812358b69886e576c66a01f1f00affe9.mp4',
        // url:'../assets/video/test.mp4',//测试视频
        isControlVisible: false,  //自定义控制器是否可见
        isPaused: true,  //是否暂停
        isDragging: false,  //是否拖拽进度条
        isVoiceDrag:false,  //是否拖曳音量条
        isMuted:false,      //是否静音
        currentTime: "00:00",  //当前播放时间
        videoDuration: "00:00", //格式化视频时长
        allDuration:0,    //秒数时长
        videoProgress: 0, //视频进度百分比  0-1
        voiceProgress:0.5,  //音量百分比  0-1
        barWidth:880,    //进度条宽度
        voiBarWidth:100, //音量条宽度
      }
    },
    computed:{
      isShow(){
        return this.$store.state.videoShow
      },
      videoPos(){
        if(this.isShow){
          return {top:'50%'}
        }else{
          return {top:'-1000px'}
        }
      },
      btnPlayStyle(){
        if(this.isPaused){
          return {'background-position':'0 0'}
        }else{
          return {'background-position':'0 -20px'}
        }
      },
      btnVoiceStyle(){
        if(this.isMuted){
          return {'background-position':'0 -80px'}
        }else{
          return {'background-position':'0 -40px'}
        }
      },
      videoProgressPercent(){
        return `${this.videoProgress * 100}%`
      },
      voiceProgressPercent(){
        return `${this.voiceProgress * 100}%`
      },
      videoUrl(){
        return this.$store.state.videoData.videoUrl || this.url
      },
      videoTitle(){
        return this.$store.state.videoData.title
      }
    },
    methods:{
      // 秒值->字符串
      timeToString(param) {
        param = parseInt(param);
        let mm = "", ss = "";
        if (param >= 0 && param < 60) {
          param < 10 ? (ss = "0" + param) : (ss = param);
          return "00:" + ss;
        } else if (param >= 60) {
          mm = parseInt(param / 60);
          mm < 10 ? (mm = "0" + mm) : mm;
          param - parseInt(mm * 60) < 10
            ? (ss = "0" + String(param - parseInt(mm * 60)))
            : (ss = param - parseInt(mm * 60));
          return mm + ":" + ss;
        }
      },
      closeHandle(){
        this.$store.commit('showVideo',false)
        this.goPause()
      },
      goPlay(){
        this.$refs.video.play()
        this.isPaused = false
      },
      goPause(){
        this.$refs.video.pause()
        this.isPaused = true
      },
      goLoud(val){
        this.$refs.video.muted = false
        this.isMuted = false
        this.$refs.video.volume = val
      },
      goSilent(){
        this.$refs.video.muted = true
        this.isMuted = true
      },
      showController(){
        this.isControlVisible = true
      },
      hideController(){
        this.isControlVisible = false
      },
      playHandle(){
        if(this.isPaused){
          this.goPlay()
        }else{
          this.goPause()
        }
      },
      fullScreenHandle(){
        let video = this.$refs.video
        if (video.webkitRequestFullScreen) {
          video.webkitRequestFullScreen();
        }
        else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        }
        else if (video.msRequestFullScreen) {
          video.msRequestFullScreen();
        }
        else if (video.RequestFullScreen) {
          video.RequestFullScreen();
        }
      },
      playing(){
        this.allDuration = this.$refs.video.duration
        this.videoDuration = this.timeToString(this.allDuration);
        this.$refs.video.volume = this.voiceProgress
      },
      //进度条部分
      barHandle(){
        this.currentTime = this.timeToString(this.$refs.video.currentTime)
        this.videoProgress = this.$refs.video.currentTime/this.allDuration
        if(this.currentTime === this.videoDuration){
          this.$refs.video.currentTime = 0
          this.currentTime = 0
          this.videoProgress = 0
          this.goPause()
        }
      },
      videoDownHandle(e){
        this.goPause()
        this.isDragging = true
        if(e.offsetX <= 868){
          if(e.target === this.$refs.dot){
            this.videoProgress = (this.$refs.coverBar.clientWidth+e.offsetX)/this.barWidth
          }else{
            this.videoProgress = e.offsetX/this.barWidth
          }
          this.$refs.video.currentTime = this.$refs.video.duration * this.videoProgress
        }
      },
      videoMoveHandle(e){
        if(e.offsetX <= 868 && this.isDragging){
          if(e.target === this.$refs.dot){
            this.videoProgress = (this.$refs.coverBar.clientWidth+e.offsetX)/this.barWidth
          }else{
            this.videoProgress = e.offsetX/this.barWidth
          }
          this.$refs.video.currentTime = this.$refs.video.duration * this.videoProgress
        }
      },
      videoUpHandle(){
        this.isDragging = false
      },
      //音量条部分
      voiceBtnHandle(){
        if(this.isMuted){
          this.goLoud(this.voiceProgress)
        }else{
          this.goSilent()
        }
      },
      voiceDownHandle(e){
        this.isVoiceDrag = true
        if(e.target === this.$refs.voiDot){
          let per1 = (this.$refs.voiCoverBar.clientWidth+e.offsetX)/100
          this.voiceProgress = per1>1?1:per1
        }else{
          let per2 = e.offsetX/100
          this.voiceProgress = per2>1?1:per2
        }
        this.goLoud(this.voiceProgress)
      },
      voiceMoveHandle(e){
        if(this.isVoiceDrag){
          if(e.target === this.$refs.voiDot){
            let per1 = (this.$refs.voiCoverBar.clientWidth+e.offsetX)/100
            this.voiceProgress = per1>1?1:per1
          }else{
            let per2 = e.offsetX/100
            this.voiceProgress = per2>1?1:per2
          }
          this.goLoud(this.voiceProgress)
        }
      },
      voiceUpHandle(){
        this.isVoiceDrag = false
      },
    },
    watch:{
    }
  }
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.8s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .idx-video-bg{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1001;
    background:url(../assets/img/video/video-bg.png);
    /*display: none;*/
  }
  .idx-video-box{
    width: 880px;
    height: 596px;
    position: fixed;
    /*top:50%;*/
    left: 50%;
    top:-1000px;/*进场动画改变位置和透明度*/
    background-color: #000;
    z-index: 1010;
    margin-top: -298px;
    margin-left: -440px;
    box-shadow: 0 18px 30px rgba(0,0,0,0.18);
    overflow: hidden;
    /*display: none;*/
  }
  .idx-video-box .tit{
    height: 60px;
    background-color: #f5f5f5;
    padding: 0 20px;
  }
  .idx-video-box .tit span{
    font-size: 18px;
    color: #424242;
    line-height: 60px;
  }
  .idx-video-box .tit .close{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    display: block;
    float: right;
    font-size: 14px;
    color: #757575;
    text-align: center;
    line-height: 30px;
    margin-top: 15px;
    cursor: pointer;
  }
  .idx-video-box .tit .close:hover{
    color: #fff;
    background-color: #e53935;
  }
  .idx-video-box .video-box{
    position: relative;
  }
  .idx-video-box .video-box .pic,
  .idx-video-box .video-box video,
  .idx-video-box .video-box .pic img{
    height: 536px;
    width: 880px;
  }
  .idx-video-box .video-box .pic{
    position: absolute;
    left: 0;
    top: 0;
  }
  .idx-video-box .play-btn{
    width:90px;
    height: 90px;
    position: absolute;
    top:50%;
    left: 50%;
    margin-top: -45px;
    margin-left: -45px;
    /*z-index: 1200;*/
    background-image: url(../assets/img/icon/big_play_btn.png);
  }
  .idx-video-box .controller{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    /*background-color: #b0b0b0;*/
    z-index: 100;
  }
  .idx-video-box .bar{
    position: absolute;
    width: 100%;
    height: 4px;
    cursor: pointer;
    /*background-color: #444;*/
    background-color: #5c5c5c;
    background-color: rgba(92,92,92,0.6);
  }
  .idx-video-box .bar a{
    width: 50%;
    height: 4px;
    background-color: #ff6700;
    display: block;
    position: relative;
  }
  .idx-video-box .bar span{
    width: 12px;
    height: 12px;
    background-color: #fff;
    border-radius: 6px;
    position: absolute;
    right: -12px;
    top:-4px;
  }
  .idx-video-box .ctl-box{
    padding: 0 20px;
  }
  .idx-video-box .ctl-box .play-icon{
    width: 20px;
    height: 20px;
    background-image:url(../assets/img/icon/btns.png);
    margin-top: 14px;
    cursor: pointer;
    display: block;
  }
  .idx-video-box .ctl-box .play-icon:hover{
    background-image:url(../assets/img/icon/btns-hover.png);
  }
  .idx-video-box .ctl-box .normal-p{
    margin-left: 10px;
    float: left;
  }
  .idx-video-box .ctl-box .normal-v{
    float: left;
    margin-right: 10px;
  }
  .idx-video-box .ctl-box .normal-s{
    float: right;
  }
  .idx-video-box .ctl-box .play-times{
    margin-left: 30px;
    line-height: 46px;
    color: #fff;
    float: left;
  }
  .idx-video-box .ctl-box .full{
    background-position: left -100px;
  }
  .idx-video-box .ctl-box .small{
    background-position: left bottom;
  }
  .idx-video-box .ctl-box .play-voi{
    float: right;
    width: 140px;
    height: 46px;
    overflow: hidden;
    margin-right: 30px;
    padding-right: 10px;
  }
  .idx-video-box .ctl-box .voi-bar{
    width: 100px;
    height: 4px;
    background-color: #2c2c2c;
    border-radius: 2px;
    float: left;
    margin-top: 22px;
    cursor: pointer;
  }
  .idx-video-box .ctl-box .voi-bar a{
    width: 50%;
    background-color: #ff6700;
    border-radius: 2px;
    height: 4px;
    display: block;
    position: relative;
  }
  .idx-video-box .ctl-box .voi-bar span{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    right: -10px;
    top:-3px;
  }
</style>
