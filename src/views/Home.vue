<template>
  <div class="home-page">
    <Index />
  </div>
</template>

<script>
import Index from "@/components/home/Index.vue";
export default {
  name: "Home",
  components: {
    Index
  }
};
</script>

<style lang="scss">
.home-page{
  width: 100%;
  height: 100%;
}
</style>