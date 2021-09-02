<template>
  <div id="area" class="row area">
    <div class="input-container" @click.capture="popHandle" v-click-outside="closePop">
      <div class="input">{{areaName}}</div>
      <label class="lab">国家/地区</label>
      <span class="select-arrow" :style="{transform:arrowStyle}">
        <svg t="1628296890775" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3848" width="20" height="20"><path d="M514.124 710.0765a22.635 22.635 0 0 1-15.5025-6.093 9.288 9.288 0 0 0-0.828-0.9315 13.1175 13.1175 0 0 0-2.394-1.7865l-350.1765-347.04a22.662 22.662 0 0 1-6.75-16.092 22.6395 22.6395 0 0 1 6.606-16.1415 22.6485 22.6485 0 0 1 16.191-6.75c6.0525 0 11.7495 2.3445 16.047 6.606l336.483 333.4635 331.8705-334.9035a22.6935 22.6935 0 0 1 16.515-7.0875c5.9085 0 11.52 2.259 15.7815 6.3585a22.617 22.617 0 0 1 6.984 15.966 22.6305 22.6305 0 0 1-6.354 16.227l-348.3045 351.468a22.6305 22.6305 0 0 1-16.1685 6.7365z" p-id="3849"></path></svg>
      </span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'login-input-area',
    data(){
      return {
        arrowStyle:'rotate(0)'
      }
    },
    methods:{
      popHandle(){
        this.$store.commit('changeAreaPop')
        if(this.$store.state.areaPopShow){
          this.arrowStyle = 'rotate(180deg)'
        }else{
          this.arrowStyle = 'rotate(0)'
        }
      },
      closePop(){
        if(this.$store.state.areaPopShow){
          this.$store.commit('changeAreaPop')
          this.arrowStyle = 'rotate(0)'
        }
      }
    },
    computed:{
      areaName(){
        return this.$store.state.area.name
      },
    },
    directives:{
      clickOutside:{
        // 初始化指令
        bind(el, binding, vnode) {
          function clickHandler(e) {
            // 这里判断点击的元素是否是本身，是本身，则返回
            if (el.contains(e.target) || e.target.className === 'search-input'){
              return false;
            }
            // 判断指令中是否绑定了函数
            if (binding.expression) {
              // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
              binding.value(e);
              // 这里进行了修改， 使用arg 传递函数名称， 使用value 传递 变量值
              // console.log("接收到 的arg为: " + funcName)
              // console.log("接收到的 value 为: " +  binding.value)

              // let that = vnode.context
              // that[binding.arg](binding.value)
            }
          }
          // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
          el.__vueClickOutside__ = clickHandler;
          document.addEventListener('click', clickHandler);
        },
        update() {},
        unbind(el, binding) {
          // 解除事件监听
          document.removeEventListener('click', el.__vueClickOutside__);
          delete el.__vueClickOutside__;
        },
      }
    }
  }
</script>

<style scoped>

</style>
