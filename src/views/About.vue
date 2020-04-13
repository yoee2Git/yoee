<template>
  <div class="page-about-content">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="page-text">
          <span>Hey!</span>
          <p>我是努力想想了解后端的<span class="i-info">前端开发者</span></p>
          <i>一起合作共事吧</i>
          <p>期待您@我的邮箱</p>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="page-about-mail">
      <el-col :span="24">
        <el-input type="email" autosize placeholder="请输入您邮箱" v-model="email"></el-input>
        <el-input
          type="textarea"
          :autosize="{ minRows: 8, maxRows: 10}"
          placeholder="想对我说些什么呢?"
          v-model="text"
          class="page-about-text"
        ></el-input>
      </el-col>
    </el-row>
    <div class="sendMail">
      <el-button>发送</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      email: "",
      text: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.page-about-content {
  margin: 0 auto;
  width: 50rem;
  position: relative;
  .page-text{
    position: absolute;
    top: 100px;
    left: 10rem;
    line-height: 2.5rem;
    font-size: 20px;
    .i-info{
      color: red;
    }
  }
  .page-about-mail {
    position: relative;
    margin-top: 45%;
  }
  .page-about-text {
    position: relative;
    margin-top: 20px;
  }
  .sendMail {
    position: relative;
    top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>