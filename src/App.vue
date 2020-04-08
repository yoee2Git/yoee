<template>
  <div id="app">
    <el-container>
      <el-header>
          <Nav />
        </el-header>
      <el-container>
        <el-main>
          <el-aside width="220px">
        <Aside />
      </el-aside>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
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
* {
  margin: 0;
  padding: 0;
}
</style>
