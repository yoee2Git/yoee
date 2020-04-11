<template>
  <el-menu class="el-menu-demo nav" mode="horizontal" default-active='1' active-text-color="red">
    <el-menu-item index="1" @click="goHome">
    Home
    </el-menu-item>
    <el-menu-item index="2" @click="goAbout">
      About
    </el-menu-item>
    <el-menu-item index="3" @click="goNote">
      Note
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    goHome(){
      this.$router.push('/home')
    },
    goAbout(){
      this.$router.push('/about')
    },
    goNote(){
      this.$router.push('/note')
    }
  }
};
</script>

<style lang="scss" scoped>
.nav{
  width: 100%;
  position: fixed;
  top: 0px;
  left: 310px;
  z-index: 9999;
}
</style>