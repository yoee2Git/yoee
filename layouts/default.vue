<template>
  <div class="content">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-navbar-brand href="#">YOEE</b-navbar-brand>
        <div class="roter-to">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/note">Note</b-nav-item>
        </div>
      </b-navbar-nav>
    </b-navbar>
    <transition name="component-fade">
      <nuxt />
    </transition>
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

<style lang="scss" scoped>
.content{
  overflow: scroll;
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
  margin-top:10rem;
  background-color: #ddd;
  padding: 1.5rem 2rem;
  text-align: center;

  bottom: 0;
  .col{
    padding: 0;
    margin: 0;
  }
}
</style>
