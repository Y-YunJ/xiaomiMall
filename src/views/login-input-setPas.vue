<template>
  <div class="row pas-row">
    <div class="input-container" :style="outerStyle">
        <input class="input" name="set-pas" :type="inputType" maxlength="16" ref="userSet"
               :style="inputStyle"
               v-model.num="accValue"
               @focusin="inHandle"
               @focusout="outHandle"
               @input="accValue = accValue.replace(/[\u4e00-\u9fa5]/g,'')">
      <div class="pas-icon-box" @click="typeHandle">
        <span :style="iconStyle"></span>
      </div>
        <label class="lab" :style="labStyle" @click="inHandle">设置密码</label>
    </div>
    <div class="mess-error" v-show="!hasAccWord">{{mess}}</div>
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
        iconPos:'left top',
        inputType:'password'
      }
    },
    computed: {
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
      iconStyle(){
        return{
          'background-position':this.iconPos
        }
      },
      mess(){
        if(this.accValue){
          return '密码长度8~16位'
        }else{
          return '请输入密码'
        }
      },
    },
    methods: {
      inHandle(){
        this.accLabSize ='12px';
        this.accLabTop = '6px';
        this.accOutColor = '#ff5c00';
        this.accOutShadow = '0 0 0 2px rgba(255 ,92 ,0 ,0.2)';
        this.$refs['userSet'].focus();
      },
      outHandle(){
        this.accOutShadow = 'none';
        this.accOutColor = '#fff';
        if(!this.accValue){
          this.accLabSize ='17px';
          this.accLabTop = '20px';
        }
      },
      typeHandle(){
        if(this.inputType === 'password'){
          this.iconPos = 'left bottom'
          this.inputType = 'text'
        }else{
          this.iconPos = 'left top'
          this.inputType = 'password'
        }
      }
    },
    watch:{
      accValue:function (val) {
        this.hasAccWord = Boolean(val)
        this.$store.commit('changeSet',this.accValue)
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
