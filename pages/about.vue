<template>
  <b-container>
    <b-row class="inblack-move">
      <b-col md="6" offset-md="3">
        <div class="about-info">
          <p>一名努力想了解后端的 , 前端开发者</p>
        </div>
      </b-col>
    </b-row>
    <b-row class="info">
      <b-col md="6" offset-md="3">
        <h5>前端开始之路:</h5>
        <p>
          Google于2018年12月4日,在Flutter Live活动中发布
          <a href="https://zh.wikipedia.org/zh-hans/Flutter">Flutter</a> 1.0,第一个“稳定”版本。(Flutter是由谷歌开发的开源移动应用软件开发工具包，用于为Android、iOS、 Windows、Mac、Linux、Google Fuchsia开发应用。一套代码,多端运行!!!)
          <br>
          <p>
            对于想开发一款自己的APP的同学来说,是非常振奋人心,充满期待的.
          </p>
        </p>
        <div>
          <hr>
          前端技术栈:{ [熟练] HTML(5),CSS(3) ,JavaScript/ES6,Vue.js(全家桶) }
          <br>
          <a href="http://taobao.yoees.com/">!淘宝首屏(部分):http://taobao.yoees.com/</a>
          <br>
          <a href="http://mi.yoees.com/">!小米官网:http://mi.yoees.com/</a>
          <br>
          <a href="http://m.meituan.yoees.com/#/">!美团(vue.js)web app:http://m.meituan.yoees.com/#/</a>
          <hr>
          后端技术栈:{ [熟悉] Node.js => (Express koa2(中间件) nuxt.js(SRR.服务器渲染) }
          <br>
          <a href="https://github.com/yoee2Git/meituan.git">!美团(nuxt.js, koa2) PC(暂未上线):https://github.com/yoee2Git/meituan.git</a>
          <br>
          <a href="http://yoees.com">YOEE(个人博客 nuxt.js &amp; Koa2)):http://yoees.com</a>
          <hr>
          团队协作/模块化: { Git &amp; Github, Webpack, [了解]Linux, Nginx | pm2(上线部署) }
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" offset-md="3">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="您的邮箱:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="ruleForm.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="邮件主题:" label-for="input-2">
            <b-form-input id="input-2" v-model="ruleForm.title" required placeholder="主题"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3">
            <b-form-textarea
              id="textarea"
              v-model="ruleForm.desc"
              placeholder="Enter something..."
              rows="10"
              max-rows="10"
            ></b-form-textarea>
          </b-form-group>

          <b-button v-b-popover.hover.top="'我会尽快回复您'" title="H!" type="submit" variant="primary">发送</b-button>
          <b-button type="reset" variant="danger">重置</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        email: "",
        title: "",
        desc: ""
      },
      show: true,
      msg: ""
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      let res = await this.$axios.post("/about/sendEmail", {
        title: this.ruleForm.title,
        email: this.ruleForm.email,
        desc: this.ruleForm.desc
      });
      if (res.status === 200) {
        this.mag = res.data.msg;
      }
      console.log(res);
      setTimeout(() => {
        this.ruleForm.title = "";
        this.ruleForm.desc = "";
      });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.ruleForm.title = "";
      this.ruleForm.desc = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.inblack-move {
  margin: 5rem 0;
  position: relative;
  .about-info {
    font-size: 1rem;
    position: absolute;
    p {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      display: inline-block;
    }
  }
  .about-info::after {
    content: "";
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 1.1rem;
    left: 0px;
    top: 3px;
    border-left: 1px solid black;
    background-color: #fff;
    animation: inblock 1s steps(1, end) infinite,
      move 35s steps(16, end) forwards;
  }
}
.info {
  margin-bottom: 2rem;
  p {
    text-indent: 2rem;
    margin: 1rem 0rem;
  }
  a{
    color: deeppink;
    margin: 1rem 0rem;
  }
}
@keyframes inblock {
  0% {
    border-left: 4px solid rgba(0, 0, 0, 0);
  }
  50% {
    border-left: 4px solid rgba(0, 0, 0, 1);
  }
  100% {
    border-left: 4px solid rgba(0, 0, 0, 1);
  }
}
@keyframes move {
  0% {
    left: 0;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}
</style>