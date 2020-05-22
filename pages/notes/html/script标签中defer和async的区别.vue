<template>
  <b-container fluid class="bv-example-row content">
    <b-row>
      <!-- <b-col sm="6" offset-sm="0" md="6" offset-md="3" lg="6" offset-lg="5" xl="6" offset-xl="5"> -->
      <b-col sm="0" md="2" lg="2" xl="4"></b-col>

      <b-col sm="12" md="8" lg="7" xl="5">
        <h2>
          script标签中defer和async的区别
        </h2>
        <br>
        <hr>
        <p class="code">
          默认情况下，脚本的下载和执行将会按照文档的先后顺序同步进行。当脚本下载和执行的时候，文档解析就会被阻塞，在脚本下载和执行完成之后文档才能往下继续进行解析。
        </p>
        <p>
          下面是async和defer两者区别：
        </p>
        <ul>
          <li>
            当script中有defer属性时，脚本的加载过程和文档加载是异步发生的，等到文档解析完(DOMContentLoaded事件发生)脚本才开始执行。


          </li>
          <li>
            当script有async属性时，脚本的加载过程和文档加载也是异步发生的。但脚本下载完成后会停止HTML解析，执行脚本，脚本解析完继续HTML解析。

          </li>
          <li>
当script同时有async和defer属性时，执行效果和async一致。

          </li>
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