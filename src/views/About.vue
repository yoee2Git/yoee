<template>
  <div class="page-about-content">
    <el-row :gutter="20">
      <el-col :span="24">
        <div>aaa</div>
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
.page-about-mail{
  position: relative;

  margin-top: 40%;
}
.page-about-text{
  position: relative;
  margin-top: 10px;
}
.sendMail {
  position: relative;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>