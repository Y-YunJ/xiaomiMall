<template>
  <div id="num" class="row num">
    <div class="input-container" :style="outerStyle">
      <div class="front">
        <span>{{areaCode}}</span>
        <label class="lab">国家码</label>
      </div>
      <div class="phone">
        <input class="input" name="phone-num" type="text" maxlength="11" ref="userPhone"
               :style="inputStyle"
               v-model.num="accValue"
               @focusin="inHandle"
               @focusout="outHandle"
               @input="accValue = accValue.replace(/[^\d]/g,'')">
        <label class="lab" :style="labStyle" @click="inHandle">手机号</label>
      </div>
    </div>
    <div class="mess-error" v-show="!hasAccWord">{{phoneMess}}</div>
  </div>
</template>

<script>
  export default {
    name: 'login-input-phone',
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
      phoneMess(){
        if(this.accValue){
          return '手机号格式不对'
        }else{
          return '请输入手机号码'
        }
      },
    },
    methods: {
      inHandle(){
        this.accLabSize ='12px';
        this.accLabTop = '6px';
        this.accOutColor = '#ff5c00';
        this.accOutShadow = '0 0 0 2px rgba(255 ,92 ,0 ,0.2)';
        this.$refs['userPhone'].focus();
      },
      outHandle(){
        this.accOutShadow = 'none';
        this.accOutColor = '#fff';
        if(!this.accValue){
          this.accLabSize ='17px';
          this.accLabTop = '20px';
        }
      },
    },
    watch:{
      accValue:function (val) {
        this.hasAccWord = Boolean(val)
        this.$store.commit('changePhone',this.accValue)
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
