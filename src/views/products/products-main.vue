<template>
    <div class="content">
      <div class="section section1"></div>
    </div>
</template>

<script>
  export default {
    name: 'products-main'
  }
</script>

<style scoped>
  .content{
    font-size: 14px;
    color: #333;
    background-color: #000;
    min-width: 1226px;
  }
  .content .section{
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: left;
    background-color: #000;
  }
  .content .section1{
    height: 718px;
    background-image:url(../../assets/img/details/mi-11-ultra.jpg)
  }
</style>
