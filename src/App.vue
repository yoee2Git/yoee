<template>
  <div id="app">
    <el-container>
      <el-aside width="18rem">
        <Aside />
      </el-aside>
      <el-container>
        <el-main class="content">
          <el-header>
            <Nav />
          </el-header>
          <router-view />
        </el-main>
        <!-- <el-footer>
          footer
        </el-footer> -->
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

<style lang="scss" scoped>
 @import '~@/assets/css/base.css';
</style>
