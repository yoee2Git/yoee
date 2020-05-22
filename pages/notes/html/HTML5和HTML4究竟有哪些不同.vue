<template>
  <b-container fluid class="bv-example-row content">
    <b-row>
      <!-- <b-col sm="6" offset-sm="0" md="6" offset-md="3" lg="6" offset-lg="5" xl="6" offset-xl="5"> -->
      <b-col sm="0" md="2" lg="2" xl="4"></b-col>

      <b-col sm="12" md="8" lg="7" xl="5">
        <h2>
          HTML5和HTML4究竟有哪些不同？
          #声明方面
        </h2>
        <hr />
        <br />
        <h4>声明方式</h4>
        <p>HTML5 文件类型声明doctype方式：</p>
        <p class="code">&lt; !DOCTYPE html &gt;</p>
        <h4>
          新增语义标签
        </h4>
        <p class="shell">
          &lt;main&gt;
          &lt;header&gt;、&lt;footer&gt;、&lt;section&gt;、&lt;article&gt;、&lt;nav&gt;、&lt;hgroup&gt;、&lt;aside&gt;、&lt;figure&gt;&lt;audio&gt;、&lt;video&gt;
           等
        </p>
        <h4>
          属性方面
        </h4>
        <p>
          增加了一些表单属性, 主要是其中的input属性的增强
        </p>
        <p class="shell">
          <!-- 此类型要求输入格式正确的email地址 -->
          &lt;input type=email &gt;<br>
          <!-- 要求输入格式正确的URL地址  -->
          &lt;input type=url &gt;<br>
          <!-- 要求输入格式数字，默认会有上下两个按钮 -->
          &lt;input type=number &gt;<br>
          <!-- 时间系列，但目前只有 Opera和Chrome支持 -->
          &lt;input type=date &gt;<br>
          &lt;input type=time &gt;<br>
          &lt;input type=datetime &gt;<br>
          &lt;input type=datetime-local &gt;<br>
          &lt;input type=month &gt;<br>
          &lt;input type=week &gt;<br>
          <!-- 默认占位文字 -->
          &lt;input type=text placeholder="your message" &gt;<br>
          <!-- 默认聚焦属性 -->
          &lt;input type=text autofacus="true" &gt;<br>
        </p>
        <p>
          使部分属性名默认具有boolean属性
        </p>
        <p class="shell">
          <!-- 只写属性名默认为true -->
          &lt;input type="checkbox"  checked/&gt; <br>
          <!-- 属性名="属性名"也为true -->
          &lt;input type="checkbox"  checked="checked"/&gt; <br>
        </p>
        <h4>
          存储方面:
        </h4>
        <p>
          新增WebStorage, 包括localStorage和sessionStorage
        </p>
        <p>
          引入了应用程序缓存器(application cache)，可对web进行缓存，在没有网络的情况下使用，通过创建cache manifest文件,创建应用缓存，为PWA(Progressive Web App)提供了底层的技术支持。
        </p>
        <p class="shell">
          &lt;html manifest="example.appcache"&gt; <br>
            ...
          &lt;/html&gt; <br>

          在项目里新建一个 <em>example.appcache</em>  的文件
        </p>
        <p>
          下面是一个简单的缓存清单文件，example.appcache，适用于一个虚拟的网站 www.example.com。
        </p>
        <p class="code">
          <br>
          CACHE MANIFEST
          # v1 2011-08-14
          # This is another comment
          index.html
          cache.html
          style.css
          image1.png

          # Use from network if available
          NETWORK:
          network.html

          # Fallback content
          FALLBACK:
          / fallback.html
        </p>
        详情><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Using_the_application_cache">MDN 应用缓存:  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Using_the_application_cache</a>
      </b-col>
      <b-col sm="0" md="2" lg="2" xl="3">
      </b-col>
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