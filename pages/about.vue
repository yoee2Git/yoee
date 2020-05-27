<template>
  <b-container>
    <b-row class="inblack-move">
      <b-col md="6" offset-md="3">
        <div class="about-info">
          <p>一名努力想了解后端的 , 前端开发者</p>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" offset-md="3">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="您的邮箱:"
            label-for="input-1"
          >
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

          <b-button
            v-b-popover.hover.top="'我会尽快回复您'"
            title="H!"
            type="submit"
            variant="primary"
          >发送</b-button>
          <b-button type="reset" variant="danger">重置</b-button>
        </b-form>
          <span>{{ msg }}</span>
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
      msg:''
    };
  },
  methods: {
   async onSubmit(evt) {
      evt.preventDefault();
      let res = await this.$axios.post("/about/sendEmail", {
        title: this.ruleForm.title,
        email: this.ruleForm.email,
        desc: this.ruleForm.desc,
      });
      if(res.status === 200){
        this.mag = res.data.msg
      }
      console.log(res)
      setTimeout(() => {
        this.ruleForm.title = "";
        this.ruleForm.desc = "";
      })
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