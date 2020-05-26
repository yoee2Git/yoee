<template>
  <b-container fluid class="bv-example-row content">
    <b-row>
      <!-- <b-col sm="6" offset-sm="0" md="6" offset-md="3" lg="6" offset-lg="5" xl="6" offset-xl="5"> -->
      <b-col sm="0" md="2" lg="2" xl="4"></b-col>
      <b-col sm="12" md="8" lg="7" xl="5">
        <h2>Nginx基础、安装、配置</h2>
        <hr />
        <br />
        <p>nginx: <a href="http://nginx.org/en/">http://nginx.org/en/</a></p>
        <p class="code">
          Nginx是一个开源且高性能、可靠的HTTP Web服务、代理服务。
          Nginx 可以作为一个 HTTP 服务器进行网站的发布处理，另外 Nginx 可以作为反向代理进行负载均衡的实现。
          开源: 直接获取源代码
          高性能: 支持海量并发
          可靠: 服务稳定
        </p>

        <p class="txt-color-deeppink">反(正)向代理 负载均衡 动静分离...</p>

        <i>nginx优点</i>
        <ol>
          <li>
            高并发。静态小文件
          </li>
          <li>
            占用资源少。2万并发、10个线程，内存消耗几百M。
          </li>
          <li>
            功能种类比较多。web,cache,proxy。每一个功能都不是特别强。
          </li>
          <li>
            支持epoll模型，使得nginx可以支持高并发。
          </li>
          <li>
            nginx 配合动态服务和Apache有区别。（FASTCGI 接口）
          </li>
          <li>
            利用nginx可以对IP限速，可以限制连接数。
          </li>
          <li>
            配置简单，更灵活。
          </li>
          <li>
            ...
          </li>
        </ol>

        <i>
          nginx特性
        </i>
        <ol>
          <li>
            基于异步IO模型，（epoll，kqueue），性能强，能够支持上万并发。
          </li>
          <li>
            对小文件支持很好，性能很高（限静态小文件1M）。
          </li>
          <li>
            代码优美，扩展库必须编译进主程序。
          </li>
          <li>
            消耗代码资源比较低。
          </li>
          <li>
            ...
          </li>
        </ol>
        <h4>
          nginx安装
        </h4>
        <p class="shell">$  yum -y install nginx</p>
        <h4>检查版本</h4>
        <div class="shell">
          $  nginx -v
        <br> 
         nginx version: nginx/1.14.1
        </div>
        <p class="code">
          1.CoreModule 核心模块
          2.EventModule 事件驱动模块
          3.HttpCoreModule http内核模块
        </p>
        <img src="~@/assets/img/note/nginx/n.svg">
        <h4>
          nginx常用命令
        </h4>
        <p class="shell">
          terminal:
          <br>
           nginx -v   //查看版本
          <br>
           nginx    //启动nginx
          <br>
           pkll -9 nginx    //按名杀死nginx进程
          <br>
           nginx -t     //查看nginx当前状态
          <br>
           nginx -s start     //启动nginx
          <br>
           nginx -s stop    //停止nginx
          <br>
           nginx -s reload    //重新启动nginx
        </p>
        <b-col sm="0" md="2" lg="2" xl="3"></b-col>
        <br />
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
  width: 35rem;
}
h4 {
  margin-left: 0;
  width: 35rem;
  height: 3rem;
  line-height: 3rem;
  background-color: rgb(255, 123, 0);
  color: aliceblue;
}
</style>