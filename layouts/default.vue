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
    <nuxt />
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
  width: 100%;
  overflow: scroll;
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
