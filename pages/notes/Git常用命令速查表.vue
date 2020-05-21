<template>
    <b-container fluid="sm" class="note-content">
      <b-row>
        <b-col>
          <h2>Git 常用命令速查表</h2>
          <hr />
          <b-img src="~@/assets/img/note/gitimg.png" fluid alt="Fluid image"></b-img>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/note.scss";
.note-content{
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    
  }
}
  .tit{
    position: relative;
    top: 20px;
    background-color: #999;
  }
</style>