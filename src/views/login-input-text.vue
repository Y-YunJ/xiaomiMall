<template>
  <div class="row acc-row">
    <div class="input-container" :style="outerStyle">
        <input class="input" ref="acc" type="text" maxlength="20" :style="inputStyle" v-model="accValue" @focusin="inHandle" @focusout="outHandle">
        <label class="lab" :style="labStyle" @click="inHandle">手机号</label>
    </div>
    <div class="mess-error" v-show="!hasAccWord">请输入账号</div>
  </div>
</template>

<script>
  export default {
    name: 'login-input-check',
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
      btnStyle(){
        return{
          'color':this.btnColor,
          'cursor':this.btnCursor
        }
      },
    },
    methods: {
      inHandle(){
        this.accLabSize ='12px';
        this.accLabTop = '6px';
        this.accOutColor = '#ff5c00';
        this.accOutShadow = '0 0 0 2px rgba(255 ,92 ,0 ,0.2)';
        this.$refs["acc"].focus();
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
        this.$store.commit('changeAcc',this.accValue)
        if(val === ''){
          this.accLabColor = '#f04645'
          this.accOutBColor = '#fcf2f2'
        }else{
          this.accLabColor = '#aaa'
          this.accOutBColor = '#fff'
        }
      },
    },
  }
</script>

<style scoped>

</style>
