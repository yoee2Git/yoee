<template>
  <el-menu class="el-menu-demo nav" mode="horizontal" active-text-color="red">
    <el-menu-item index="1">
      <router-link to="/home" tag="span">Home</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/note" tag="span">About</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/show" tag="span">Show</router-link>
    </el-menu-item>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="/note" tag="span">Note</router-link>
    </el-menu-item>
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
.nav{
  width: 100%;
  position: fixed;
  z-index: 9999;
}
</style>