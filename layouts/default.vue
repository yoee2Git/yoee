<template>
  <div>
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
      <b-row class="ft">
      <b-col>
        <a href="http://beian.miit.gov.cn/state/outPortal/loginPortal.action">
        Copyright © 2020-2021 YOEE . 黔ICP备20003571号
        </a>
      </b-col>
    </b-row>
    </b-container>
    
  </div>
</template>

<style scoped>
.roter-to{
  display: flex;
  margin-left: 8rem;
}

.ft{
  background-color: #ddd;
  position: relative;
  padding: 50px;
  text-align: center;
}
</style>
