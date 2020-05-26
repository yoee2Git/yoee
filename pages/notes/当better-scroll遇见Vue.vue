<template>
  <scroll>
    <b-container fluid class="bv-example-row content">
      <b-row>
        <!-- <b-col sm="6" offset-sm="0" md="6" offset-md="3" lg="6" offset-lg="5" xl="6" offset-xl="5"> -->
        <b-col sm="0" md="2" lg="2" xl="4"></b-col>

        <b-col sm="12" md="8" lg="7" xl="5">
          <h2>better-scroll的使用事项</h2>
          <br>
          <h4> <a href="https://github.com/ustbhuangyi/better-scroll">better-scroll ?</a></h4>
          <p class="code">
            BetterScroll 是一款重点解决移动端（已支持 PC）各种滚动场景需求的插件。它的核心是借鉴的 iscroll 的实现，它的 API 设计基本兼容 iscroll，在 iscroll 的基础上又扩展了一些 feature 以及做了一些性能优化。
            BetterScroll 是使用纯 JavaScript 实现的，这意味着它是无依赖的。
          </p>
          <h6>安装</h6>
          <p class="shell">
            $ npm install better-scroll -S # install 1.x
            <br />$ npm install better-scroll@next -S # install 2.x，该版本带有所有插件的能力。
          </p>
          <p>起步</p>
          <p>BetterScroll 最常见的应用场景是列表滚动，我们来看一下它的 html 结构。</p>
          <p class="shell">
            &lt;div class="wrapper" &gt;
            <br />&lt;ul class="content" &gt;
            <br />&lt;li&gt;...&lt;/li &gt;
            <br />&lt;li&gt;...&lt;/li &gt;
            <br />&lt;ul&gt;
            <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
            <br />&lt;/div &gt;
          </p>
          <p>上面的代码中 BetterScroll 是作用在外层 wrapper 容器上的，滚动的部分是 content 元素。这里要注意的是，BetterScroll 只处理容器（wrapper）的第一个子元素（content）的滚动，其它的元素都会被忽略。</p>
          <h6>列:</h6>
          <p class="shell">
            &lt;script&gt;
            <br />
            import BScroll from 'better-scroll'
            <br>
            export default {
              <br>
            mounted() {
              <br>
            &nbsp;this.$nextTick(() => {
              <br>
            &nbsp;this.scroll = new BScroll(this.$refs.wrapper, {})
            <br>
            &nbsp;})
            <br>
            &nbsp;}
            <br>
            }
            <br>
            &lt;/script&gt;
          </p>
          <h2>
            better-scroll 的滚动原理
          </h2>
          <P class="code">
            <br>
            很多人已经用过 BetterScroll，我收到反馈最多的问题是：<a href="https://zhuanlan.zhihu.com/p/27407024">https://zhuanlan.zhihu.com/p/27407024</a>
          </P>
          <P>
            BetterScroll 初始化了， 但是没法滚动。
            不能滚动是现象，我们得搞清楚这其中的根本原因。在这之前，我们先来看一下浏览器的滚动原理： 浏览器的滚动条大家都会遇到，当页面内容的高度超过视口高度的时候，会出现纵向滚动条；当页面内容的宽度超过视口宽度的时候，会出现横向滚动条。也就是当我们的视口展示不下内容的时候，会通过滚动条的方式让用户滚动屏幕看到剩余的内容。
          </P>
          <h1>
            踩坑记:
          </h1>
          <p class="code">
            其实我在初次使用better-scroll时,没有给DOM元素<em class="txt-color-deeppink">.wrapper</em>添加高度(height),导致一直无法滚动!
            <p class="txt-color-deeppink">
              >> 一定得给.wrapper元素添加高度,让bs知道管理的可滚动区域高度 !!!
            </p>
          </p>
        </b-col>

        <b-col sm="0" md="2" lg="2" xl="3"></b-col>
      </b-row>
    </b-container>
  </scroll>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
@import "~@/assets/css/note.scss";
</style>