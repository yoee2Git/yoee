<template>
  <div class="show">
      <Index />
    <router-view />
  </div>
</template>

<script>
  import Index from '@/components/show/Index'

  export default {
    name: '',
    data() {
      return {
        
      }
    },
    components: {
      Index
    }
  }
</script>

<style lang="scss" scoped>
  .show{
    width: 100vw;
    height: 100vh;
  }
</style>