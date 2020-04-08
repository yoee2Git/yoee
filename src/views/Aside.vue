<template>
  <div class="aside-page">
    <el-row :gutter="0" class="aside-content">
      <el-col :span="24">
        <img src="~@/assets/img/me.png" alt srcset />
      </el-col>
      </el-col>
    </el-row>
  </div>
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
.aside-page {
  width: 100%;
  height: 100%;
  .aside-content {
    position: relative;
    img {
      width: 200px;
      top: 150px;
      left: 20px;
      filter: grayscale(100%);
      transition: filter 1s;
      border-radius: 50%;
      position: fixed;
      &:hover {
        filter: grayscale(1%);
        transition: filter 1s;
      }
    }

  }
}
</style>