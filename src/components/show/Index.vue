<template>
  <div class="broadcast">
    <el-carousel height="650px" direction="vertical" :autoplay="true" class="broadcast">
    <el-carousel-item>
      <img src="~@/assets/img/show/mt/1.png" alt="">
    </el-carousel-item>
    <el-carousel-item>
      <img src="~@/assets/img/show/mt/2.png" alt="">
    </el-carousel-item>
    <el-carousel-item>
      <img src="~@/assets/img/show/mt/3.png" alt="">
    </el-carousel-item>
    <el-carousel-item>
      <img src="~@/assets/img/show/mt/4.png" alt="">
    </el-carousel-item>
    <el-carousel-item>
      <img src="~@/assets/img/show/mt/5.png" alt="">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
.broadcast{
  position: relative;
  top: 30px;
  left: 35px;
}
</style>