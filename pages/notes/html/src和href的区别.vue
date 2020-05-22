<template>
  <b-container fluid class="bv-example-row content">
    <b-row>
      <!-- <b-col sm="6" offset-sm="0" md="6" offset-md="3" lg="6" offset-lg="5" xl="6" offset-xl="5"> -->
      <b-col sm="0" md="2" lg="2" xl="4"></b-col>

      <b-col sm="12" md="8" lg="7" xl="5">
        <h2>src和href的区别</h2>
        <br />
        <hr />
        <p>href是Hypertext Reference的简写，表示超文本引用，指向网络资源所在位置。</p>
        <p class="code">
          <br />&lt;a href="http://www.baidu.com"&gt;yoee&lt;/a&gt;
          <br />&lt;link type="text/css" rel="stylesheet" href="common.css"&gt;
        </p>
        <p>src是source的简写，目的是要把文件下载到html页面中去。</p>
        <p class="code">
          <br />&lt;img src="img/girl.jpg"&gt;&lt;/img&gt;
          <br />&lt;iframe src="top.html"&gt;
          <br />&lt;script src="show.js"&gt;
          <br />
        </p>
        <h6>定义:</h6>
        <ul>
          <li>href 用于在当前文档和引用资源之间确立联系</li>
          <li>src 用于替换当前内容</li>
        </ul>
        <em>浏览器解析方式</em>
        <ul>
          <li>当浏览器遇到href会并行下载资源并且不会停止对当前文档的处理。(同时也是为什么建议使用 link 方式加载 CSS，而不是使用 @import 方式)</li>
          <li>当浏览器解析到src ，会暂停其他资源的下载和处理，直到将该资源加载或执行完毕。(这也是script标签为什么放在底部而不是头部的原因)</li>
        </ul>
      </b-col>
      <b-col sm="0" md="2" lg="2" xl="3"></b-col>
    </b-row>
  </b-container>
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

img {
  max-width: 35rem;
}
h4 {
  margin-left: 0;
  max-width: 35rem;
  height: 3rem;
  line-height: 3rem;
  background-color: rgb(255, 123, 0);
  color: aliceblue;
}
ul > li {
  max-width: 30rem;
}
p {
  max-width: 30rem;
  overflow-x: auto;
  display: inline-block;
}
</style>