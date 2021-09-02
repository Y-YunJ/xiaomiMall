<template>
  <div :class="rowClass">
    <div class="input-container" :style="{'border-color':accOutColor,'box-shadow':accOutShadow}">
      <input :style="{'background-color':accOutBColor}" class="input" :type="inputType" :ref="refName" v-model.trim="accValue" @focusin="inHandle" @focusout="outHandle">
      <div class="pas-icon-box" v-if="rowType === 'pas'" @click="typeHandle">
        <span :style="{'background-position':iconPos}"></span>
      </div>
      <label class="lab" @click="inHandle" :style="{'font-size':accLabSize,color:accLabColor,top:accLabTop}">{{lab}}</label>
    </div>
    <div class="mess-error" v-show="!hasAccWord" >{{mess}}</div>
  </div>
</template>

<script>
  export default {
    name: 'login-input',
    props:['rowType','refName','lab','mess','state'],
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
        inputType:'text',
      }
    },
    computed: {
      rowClass(){
        return 'row'+' '+this.rowType+'-row'
      },
      iconPos(){
        if(this.inputType === 'password'){
          return 'left top'
        }else{
          return 'left bottom'
        }
      }
    },
    methods: {
      inHandle(){
        this.accLabSize ='12px';
        this.accLabTop = '6px';
        this.accOutColor = '#ff5c00';
        this.accOutShadow = '0 0 0 2px rgba(255 ,92 ,0 ,0.2)';
        this.$refs[this.refName].focus();
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
          this.inputType = 'text'
        }else{
          this.inputType = 'password'
        }
      },
    },
    watch:{
      accValue:function (val) {
        this.hasAccWord = Boolean(val)
        this.$store.commit(this.state,this.accValue)
        if(val === ''){
          this.accLabColor = '#f04645'
          this.accOutBColor = '#fcf2f2'
        }else{
          this.accLabColor = '#aaa'
          this.accOutBColor = '#fff'
        }
      },
    },
    mounted(){
      if(this.rowType === 'pas'){
        this.inputType = 'password'
      }else{
        this.inputType = 'text'
      }
    }
  }
</script>

<style scoped>

</style>
