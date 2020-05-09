<template>
  <b-container fluid class="bv-example-row">
    <b-row class="mb-12">
      <b-col sm="5" md="4" lg="4" xl="3" class="p-3">
        <b-col>
          <b-img rounded src="~@/assets/img/me.png" fluid alt="Fluid image"></b-img>
        </b-col>
        <b-list-group class="info">
          <b-list-group-item button>
            <b-row class="info-item">
              <b-col>Name:</b-col>
              <b-col>Yoee</b-col>
            </b-row>
          </b-list-group-item>
          <b-list-group-item button>
            <b-row class="info-item">
              <b-col>Eamli:</b-col>
              <b-col>yoeex@outlook.com</b-col>
            </b-row>
          </b-list-group-item>
          <b-list-group-item button>
            <b-row class="info-item">
              <b-col>Github:</b-col>
              <b-col>
                <b-link href="https://github.com/yoee2Git">github.com/yoee2Git</b-link>
              </b-col>
            </b-row>
          </b-list-group-item>
          <b-list-group-item button>
            <b-row class="info-item">
              <b-col>TEL:</b-col>
              <b-col>19920090852</b-col>
            </b-row>
          </b-list-group-item>
          <b-list-group-item button>
            <b-row class="info-item">
              <b-col>Wechart:</b-col>
              <b-col>Hiyoee</b-col>
            </b-row>
            <b-row></b-row>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col class="ml-auto p-3 bgc" sm="7" md="8" lg="8" xl="9">
        <b-jumbotron header="杨一" lead=":平平凡凡普通人,简简单单快活人!">
          <b-container class="bv-example-row content-info">
            <b-row align-h="end" class="content-info-item">
              <b-col cols="10">
                <span>Hello</span>
              </b-col>
            </b-row>
            <b-row align-h="end" class="content-info-item">
              <b-col cols="10">
                <div class="me-info">
                  I Am
                  <span class="my-name">Yoee</span>
                  <i></i> 杨一
                </div>
              </b-col>
            </b-row>
            <b-row align-h="end" class="content-info-item">
              <b-col cols="10">
                <div class="dev-info">
                  Website
                  <span class="dev-se">Developer</span>
                </div>
              </b-col>
            </b-row>
            <b-row align-h="center">
              <b-button
                class="meil-btn"
                href="#"
                squared
                variant="info"
                v-b-popover.hover.right="'Hi 这是我的邮箱连接地址'"
              >About</b-button>
            </b-row>
          </b-container>
        </b-jumbotron>
      </b-col>
    </b-row>
  </b-container>
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
.info {
  margin-top: 2rem;
  .info-item {
    height: 30px;
  }
}
.bgc {
  height: 100vh;
  padding: 30px;
  background-image: linear-gradient(
    to right,
    yellow,
    yellowgreen,
    rgb(0, 255, 157)
  );
  .jumbotron {
    background-color: transparent;
    display: flex;
    flex-direction: column;
  }
}
.content-info {
  position: relative;
  top: 2rem;
  color: rgb(94, 94, 94);
  font-size: 1.5rem;
  letter-spacing: 0.2rem;

  .content-info-item {
    padding: 1rem 0rem;
    .me-info,
    .dev-info {
      // word-break: keep-all; /* 不换行 */
      // white-space: nowrap; /* 不换行 */
      .my-name,
      .dev-se {
        color: rgb(253, 0, 0);
      }
    }
  }
  .meil-btn {
    position: relative;
    margin: 4rem;
  }
}

i {
  display: inline-block;
  vertical-align: middle;
  height: 2rem;
  width: 0px;
  margin: 0px 0.5rem;
  border: 0.35rem solid red;
  animation: blink 1.5s steps(1, end) infinite;
}

@keyframes blink {
  0% {
    border-color: rgba(0, 0, 0, 0);
  }
  50% {
    border-color: rgba(1, 1, 1, 1);
  }
  100% {
    border-color: rgba(0, 0, 0, 0);
  }
}
</style>
