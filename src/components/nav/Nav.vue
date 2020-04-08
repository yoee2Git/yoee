<template>
  <el-menu class="el-menu-demo" mode="horizontal" active-text-color="red" default-active='1'>
    <el-menu-item index="1">
      <router-link to="/home" tag="span">Home</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/note" tag="span">About</router-link>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">Show</template>
      <el-menu-item index="/show/meituan" router='true'>meitian</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>