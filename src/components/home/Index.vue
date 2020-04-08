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
  left: 50%;
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  .hello{
    font-size: 30px;
  }
  .yoee{
    font-size: 50px;
    margin: 25px 0px;

    span{
      color: red;
    }
  }
  .dre{
    font-size: 30px;
    span{
      color: red;
    }
  }
}
</style>