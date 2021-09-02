<template>
  <div class="mini-video">
    <VueMiniPlayer :video="video" />
  </div>
</template>
<script>
  export default {
    name: 'miniVideo',
    data() {
      return {
        video: {
          url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812358b69886e576c66a01f1f00affe9.mp4',
          cover: '../assets/img/video/vd1.png'
        }
      };
    },
    watch: {},
    computed: {},
    filters: {},
    methods: {},
    created() {},
    mounted() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {}
  };
</script>
<style scoped>
  .mini-video {
    max-width: 500px;
    width: 100%;
    min-width: 300px;
    height: 15em;
    margin: 0 auto;
  }
</style>
