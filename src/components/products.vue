<template>
  <div style="position: fixed;top:0;left: 0;right:0;bottom: 0;overflow: auto"
       @scroll="scrollHandle"
       ref="pro"
  >
    <page-top/>
    <page-nav :isHome="isHome"/>
    <products-info-box :navShow="navShow"/>
    <router-view/>
    <products-main/>
    <page-foot />
  </div>
</template>

<script>
  import pageTop from '@/components/page-top.vue'
  import pageNav from '@/components/page-nav.vue'
  import pageFoot from '@/components/page-foot.vue'
  import productsInfoBox from '@/views/products/products-info-box.vue'
  import productsMain from '@/views/products/products-main.vue'

  export default {
    name: 'products',
    data(){
      return{
        isHome: false,
        navShow:false,
      }
    },
    components:{
      pageTop,
      pageNav,
      pageFoot,
      productsInfoBox,
      productsMain
    },
    methods:{
      scrollHandle(){
        let scrollTop = this.$refs.pro.scrollTop
        if(scrollTop >= 200){
          this.navShow = true
        }else{
          this.navShow = false
        }
      }
    },
  }
</script>

<style scoped>

</style>
