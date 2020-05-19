<template>
  <b-container fluid>
    <b-row class="mb-2">
      <b-col sm='4' md="3" lg="3" xl="2">
        <div>
          <ul class="h">
            <li class="h-item"><nuxt-link to="notes/vue生命周期钩子函数">vue生命周期钩子函数</nuxt-link></li>
            <li class="h-item"><nuxt-link to="notes/Middleware">Middleware</nuxt-link></li>
            <li class="h-item"><nuxt-link to="notes/JavaScript防抖和节流">JavaScript防抖和节流</nuxt-link></li>
            <li class="h-item"><nuxt-link to="notes/JS运算符优先级">JS运算符优先级</nuxt-link></li>
            <li class="h-item"><nuxt-link to="notes/前端面试之彻底搞懂this指向">前端面试之彻底搞懂this指向</nuxt-link></li>
            <li class="h-item"><nuxt-link to="notes/JavaScript继承">JavaScript继承</nuxt-link></li>
            <li class="h-item"><nuxt-link to="notes/vuex之Mutation">vuex之Mutation</nuxt-link></li>
            <li class="h-item"><nuxt-link to="notes/vuex之Action">vuex之Action</nuxt-link></li>
            <li class="h-item"><nuxt-link to="notes/Git常用命令速查表">Git 常用命令速查表</nuxt-link></li>
            <li class="h-item"><nuxt-link to="notes/Nginx基础入门、安装、配置">Nginx基础入门、安装、配置</nuxt-link></li>
            <li class="h-item"><nuxt-link to="notes/vue项目中使用markdown">vue项目中使用markdown</nuxt-link></li>
            <li class="h-item"> <a href="https://github.com/yoee2Git/note/blob/master/%E5%9C%A8nuxt%E9%A1%B9%E7%9B%AE%E4%B8%AD%E9%85%8D%E7%BD%AEbabel(%E4%BD%BF%E7%94%A8%20esm%E8%AF%AD%E6%B3%95).md">在nuxt项目中配置babel(使用 esm语法)</a></li>
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