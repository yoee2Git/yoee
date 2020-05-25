<template>
  <div class="content" ref="content">
    <b-navbar type="light" variant="light">
      <b-navbar-nav>
        <b-navbar-brand href="/">YOEE</b-navbar-brand>
        <div class="roter-to">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/note">Note</b-nav-item>
        </div>
      </b-navbar-nav>
    </b-navbar>
    <transition name="component-fade">
      <keep-alive>
      <nuxt />

      </keep-alive>
    </transition>
    <a href="#" class="back-top">
      <img src="~@/assets/img/backtop/backTop.png" alt="">
    </a>
    {{ $refs.content }}
    <b-container fluid class="ft">
      <b-row>
      <b-col>
        <a href="http://beian.miit.gov.cn">
        Copyright © 2020-2021 YOEE . 黔ICP备20003571号
        </a>
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  date(){
    return{
      
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  overflow: scroll;
  width: 100%;
  height: 100%;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: all .5s;
}
.component-fade-enter, .component-fade-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  // transform: translateY(30px);
}

.roter-to{
  display: flex;
  margin-left: 6rem;
}

.ft{
  margin-top:8rem;
  background-color: rgb(248, 248, 248);
  padding: .8rem 1rem;
  text-align: center;
  bottom: 0;

  bottom: 0;
  .col{
    padding: 0;
    margin: 0;
  }
  a{
    font-size: 12px;
    color: #666;
  }
}
.back-top{
  position: fixed;
  bottom: 2rem;
  right: 2.5rem;
  

  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(221, 221, 221, .8);
  img{
    width: 100%;
  }
}

</style>
