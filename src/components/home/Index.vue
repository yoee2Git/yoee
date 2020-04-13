<template>
  <div class="hemo-index-page">
    <el-row>
      <el-col :span="10">
        <span class="hello">Hello</span>
      </el-col>
    </el-row>
    <el-col :span="10" class="hemo-index-me">
      <div class="yoee">
        I Am
        <span>Yoee</span> <i></i> 杨一
      </div>
    </el-col>
    <el-row>
      <el-col :span="10" class="dre">
        Website
        <span>Developer</span>
      </el-col>
    </el-row>
    <!-- <i></i> -->
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
@media screen and(min-width: 500px) and(max-width: 600px) {
  .hemo-index-page {
    display: none !important;
  }
}
.hemo-index-page {
  color: #708090;
  width: 100%;
  top: 45%;
  left: 35%;
  margin-left: 80px;
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  .hello {
    font-size: 42px;
  }
  .yoee {
    font-size: 70px;
    margin: 25px 0px;
    line-height: 8rem;
    span {
      color: red;
    }
  }
  .dre {
    font-size: 30px;
    span {
      color: red;
    }
  }
  i {
    display: inline-block;
    vertical-align:middle;
    height: 50px;
    width: 0px;
    margin: 0px 20px;
    border: 6px solid red;
    animation: blink 1.5s steps(1, end) infinite;
  }
}
@keyframes blink {
  0% {
    border-color: rgba(0, 0, 0, 0);
  }
  50% {
    border-color: rgba(70, 80, 90,1);
  }
  100% {
    border-color: rgba(0, 0, 0, 0);
  }
}
</style>