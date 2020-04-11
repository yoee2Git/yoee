<template>
  <div class="aside-page">
    <div class="aside-content">
      <el-row>
        <el-col :span="24" :xs="8">
          <img src="~@/assets/img/me.png" alt srcset />
        </el-col>
      </el-row>
      <div class="info">
        <el-row>
          <el-row>
            <el-col :span="8">name:</el-col>
            <el-col :span="16">Yoee</el-col>
          </el-row>
        </el-row>
        <el-divider></el-divider>
        <el-row>
          <el-row>
            <el-col :span="8">github:</el-col>
            <el-col :span="16">
              <a href="https://github.com/yoeex">https://github.com/yoeex</a>
            </el-col>
          </el-row>
        </el-row>
        <el-divider></el-divider>
        <el-row>
          <el-row>
            <el-col :span="8">Blog:</el-col>
            <el-col :span="16">
              <a href="http://yoeex.com">http://yoeex.com</a>
            </el-col>
          </el-row>
        </el-row>
        <el-divider></el-divider>
        <el-row>
          <el-row>
            <el-col :span="8">TEL:</el-col>
            <el-col :span="16">19920090852</el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <el-col :span="8">Wechart:</el-col>
            <el-col :span="16">helloyoee</el-col>
          </el-row>
        </el-row>
        <el-row></el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.aside-page {
  color: #708090;
  .info{
    position: relative;
    left: 2rem;
    top: 5rem;
  }
  a{
    text-decoration: none;
    &:link{
      color: #708090;
    }
    &:hover{
      color: #708090;
    }
    &:visited{
      color: #708090;
    }
    &:active{
      color: #708090;
    }
  }
  .aside-content {
    position: fixed;
    top: 12rem;
    img {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      position: relative;
      width: 15rem;
      left: 2rem;
      filter: grayscale(100%);
      transition: filter 1s;
      &:hover {
        filter: grayscale(1%);
        transition: filter 1s;
      }
    }
  }
}
</style>