<template>
  <div id="msg" class="row msg">
    <div class="input-container" :style="outerStyle">
      <div class="msg-lt">
        <input class="input" ref="msg" type="text" maxlength="4" :style="inputStyle" v-model="accValue" @focusin="inHandle" @focusout="outHandle" @input="accValue = accValue.replace(/[^\d]/g,'')">
        <label class="lab" :style="labStyle" @click="inHandle">短信验证码</label>
      </div>
      <div class="msg-rt">
        <button type="button" @click="codeHandle" :style="btnStyle" :disabled="btnAble">{{txt}}</button>
      </div>
    </div>
    <div class="mess-error" v-show="!hasAccWord">{{mess}}</div>
  </div>
</template>

<script>
  export default {
    name: 'login-input-check',
    props:['messShow'],
    data () {
      return {
        hasAccWord: true,
        accValue:null,
        accLabColor:'#aaa',
        accLabSize:'17px',
        accLabTop:'20px',
        accOutColor:'fff',
        accOutShadow:'none',
        accOutBColor:'#f9f9f9',
        btnColor:'#ff5c00',
        btnCursor:'pointer',
        txt:'获取验证码',
        btnAble:false,
        timer:null,
      }
    },
    computed: {
      areaCode(){
        return this.$store.state.area.code
      },
      outerStyle(){
        return{
          'border-color':this.accOutColor,
          'box-shadow':this.accOutShadow
        }
      },
      inputStyle(){
        return{
          'background-color':this.accOutBColor
        }
      },
      labStyle(){
        return{
          'font-size':this.accLabSize,
          'color':this.accLabColor,
          'top':this.accLabTop
        }
      },
      btnStyle(){
        return{
          'color':this.btnColor,
          'cursor':this.btnCursor
        }
      },
      mess(){
        if(this.accValue){
          return '短信验证码格式不正确'
        }else{
          return '请输入短信验证码'
        }
      }
    },
    methods: {
      inHandle(){
        this.accLabSize ='12px';
        this.accLabTop = '6px';
        this.accOutColor = '#ff5c00';
        this.accOutShadow = '0 0 0 2px rgba(255 ,92 ,0 ,0.2)';
        this.$refs["msg"].focus();
      },
      outHandle(){
        this.accOutShadow = 'none';
        this.accOutColor = '#fff';
        if(!this.accValue){
          this.accLabSize ='17px';
          this.accLabTop = '20px';
        }
      },
      codeHandle(){
        this.btnColor = 'rgba(0,0,0,0.4)';
        this.btnCursor = 'not-allowed';
        this.btnAble = true
        let that = this;
        let count = 60
        that.txt = '重新发送'+count+'s'
        this.timer = setInterval(function () {
          if(count>0){
            count--;
            that.txt = '重新发送'+count+'s'
          }else{
            that.txt = '重新发送'
            that.btnColor = '#ff5c00';
            that.btnCursor = 'pointer';
            that.btnAble = false
            clearInterval(that.timer)
          }
        },1000)
      }
    },
    watch:{
      accValue:function (val) {
        this.hasAccWord = Boolean(val)
        this.$store.commit('changeNum',this.accValue)
        if(val === ''){
          this.accLabColor = '#f04645'
          this.accOutBColor = '#fcf2f2'
        }else{
          this.accLabColor = '#aaa'
          this.accOutBColor = '#fff'
        }
      },
      messShow:function () {
        this.hasAccWord = false;
        this.accOutBColor = '#fcf2f2'
        this.accLabColor = '#f04645'
      }
    },
  }
</script>

<style scoped>

</style>
