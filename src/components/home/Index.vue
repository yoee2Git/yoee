<template>
  <div class="hemo-index-page">
    <p>Hello</p>
    <h1>I Am <span>Yoee</span> || 杨一</h1>
    <div>Website <span>Developer</span></div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hemo-index-page{
    font-size: 3.5rem;
    display: flex;
    position: relative;
    top: 35%;
    left: -18%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: rgb(83, 93, 107);
    span{
      color: red;
    }
  }
</style>