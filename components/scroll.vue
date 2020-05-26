<template>
  <div class="wrapper" ref="wrapper">
   <slot></slot>
  </div>
</template>
<script>
  import Bscroll from 'better-scroll'
  export default {
    data(){
      return{
        scroll:{}
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {
          click:true
        })
        console.log(this.scroll)
      })
    }
  }
</script>

<style scoped lang='scss'>
.wrapper{
  height: 100vh;
}
</style>