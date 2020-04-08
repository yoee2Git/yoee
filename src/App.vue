<template>
  <div id="app">
    <el-container>
      <el-aside width="20rem">
        <Aside />
      </el-aside>
      <el-container>
        <el-main>
          <el-header>
            <Nav />
          </el-header>
          <router-view />
        </el-main>
        <el-footer>
          footer
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from "@/components/nav/Nav.vue";
import Aside from "@/views/Aside.vue";
export default {
  name: "app",
  components: {
    Nav,
    Aside
  }
};
</script>

<style lang="scss">
html,body{
  width: 100%;
  height: 100%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  color: #708090;
}
* {
  margin: 0;
  padding: 0;
}
</style>
