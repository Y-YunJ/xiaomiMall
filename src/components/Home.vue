<template>
  <div class="home"
       style="position: fixed;top:0;left: 0;right:0;bottom: 0;overflow: auto">
    <page-top/>
    <page-nav :isHome="isHome"/>
    <idx-banner/>
    <idx-menu-adv/>
    <idx-container/>
    <page-foot />
    <page-slide/>
    <idx-video/>
  </div>
</template>

<script>
import pageTop from '@/components/page-top.vue'
import pageNav from '@/components/page-nav.vue'
import pageFoot from '@/components/page-foot.vue'
import idxBanner from '@/components/idx-banner.vue'
import idxMenuAdv from '@/components/idx-menu-adv.vue'
import idxContainer from '@/components/idx-container.vue'
import pageSlide from '@/components/page-slide.vue'
import idxVideo from '@/components/idx-video.vue'

export default {
  name: 'Home',
  components: {
      pageTop,
      pageNav,
      pageFoot,
      idxBanner,
      idxMenuAdv,
      idxContainer,
      pageSlide,
      idxVideo
    },
  data(){
    return{
      isHome:true
    }
  }
}
</script>

<style scoped>
.home{
  overflow: auto;
}
</style>
