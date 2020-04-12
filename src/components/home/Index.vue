<template>
  <div class="hemo-index-page">
    <el-row>
      <el-col :span="10">
        <span class="hello">Hello</span>
      </el-col>
    </el-row>
    <el-col :span="10">
      <div class="yoee">
        I Am
        <span>Yoee</span> || 杨一
      </div>
    </el-col>
    <el-row>
      <el-col :span="10" class="dre">
        Website
        <span>Developer</span>
      </el-col>
    </el-row>
    <i></i>
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
    &::before {
      position: relative;
      top: -4.5rem;
      left: 25rem;
      content: "";
      display: block;
      height: 30px;
      width: 0px;
      animation-name: iani;
      animation-duration: 5ms;
      animation-timing-function: ease-out;
      animation-iteration-count: infinite;
      @keyframes iani {
        0% {
          border: 6px solid black;
        }
        100% {
          border: 6px solid red;
        }
      }
    }
  }
}
</style>