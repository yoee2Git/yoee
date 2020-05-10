<template>
  <b-container fluid>
    <b-row class="mb-2">
      <b-col sm='4' md="3" lg="3" xl="2">
        <div>
          <ul class="h">
            <li class="h-item"><nuxt-link to="notes/vue生命周期钩子函数">vue生命周期钩子函数</nuxt-link></li>
            <li class="h-item"><nuxt-link to="notes/Middleware">Middleware</nuxt-link></li>
            <li class="h-item"><nuxt-link to="notes/vue插槽-vslot">vue插槽-vslot</nuxt-link></li>
            <li class="h-item"><nuxt-link to="notes/Git常用命令速查表">Git 常用命令速查表</nuxt-link></li>
            <li class="h-item"><nuxt-link to="notes/Vue中的nextTick">Vue中的nextTick</nuxt-link></li>
          </ul>
        </div>
      </b-col>
      <b-col sm="8" md="9" lg="9" xl="10">
        <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators>
          <b-carousel-slide img-src="~@/assets/img/note/noteweiper-1.png"></b-carousel-slide>
          <b-carousel-slide img-src="~@/assets/img/note/noteweiper-3.png"></b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.h{
  height: 100vh;
  overflow: scroll;
  position: relative;
  top: 1.2rem;
  padding-bottom: 1.5rem;
  .h-item{
    padding: 4px 0px;
  }
}
</style>