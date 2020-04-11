<template>
  <div class="note-conntent">
    <el-row class="note-row">
      <el-col :span="8">
        <el-card class="note-col">
          <img src="~@/assets/img/node/css.png" />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="note-col">
          <img src="~@/assets/img/node/js.png" />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="note-col">
          <img src="~@/assets/img/node/node.png" />
        </el-card>
      </el-col>
    </el-row>
    <el-row class="note-row">
      <el-col :span="8">
        <el-card class="note-col">
          <img src="~@/assets/img/node/vue.png" />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="note-col">
          <img src="~@/assets/img/node/ts.png" />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="note-col">
          <img src="~@/assets/img/node/flutter.png" />
        </el-card>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <div class="note-details">
      <h1>JavaScript</h1>
      <h4>重绘和回流。</h4>
      <p>我们首先来回顾一下渲染流水线的流程:</p>
      <img src="~@/assets/img/node/jsIMG/_1_7972639904937693877.jpg" alt />
      <p>
        跳过了生成布局树和建图层树的阶段，直接生成绘制列表，然后继续进行分块、生成位图等后面一系列操作。
        可以看到，重绘不一定导致回流，但回流一定发生了重绘。
        #合成
        还有一种情况，是直接合成。比如利用 CSS3 的transform、opacity、filter这些属性就可以实现合成的效果，也就是大家常说的GPU加速。
        #GPU加速的原因
        在合成的情况下，会直接跳过布局和绘制流程，直接进入非主线程处理的部分，即直接交给合成线程处理。交给它处理有两大好处:
        1. 能够充分发挥GPU的优势。合成线程生成位图的过程中会调用线程池，并在其中使用GPU进行加速生成，而GPU 是擅长处理位图数据的。
        2. 没有占用主线程的资源，即使主线程卡住了，效果依然能够流畅地展示。
        #实践意义
        知道上面的原理之后，对于开发过程有什么指导意义呢？
        1. 避免频繁使用 style，而是采用修改class的方式。
        2. 使用createDocumentFragment进行批量的 DOM 操作。
        3. 对于 resize、scroll 等进行防抖/节流处理。
        4. 添加 will-change: tranform ，让渲染引擎为其单独实现一个图层，当这些变换发生时，仅仅只是利用合成线程去处理这些变换，而不牵扯到主线程，大大提高渲染效率。当然这个变化不限于tranform, 任何可以实现合成效果的 CSS 属性都能用will-change来声明。这里有一个实际的例子，一行will-change: tranform拯救一个项目，点击直达。
      </p>
    </div>

    <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
      >UP</div>
    </el-backtop>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    goBack() {
      console.log("go back");
    }
  }
};
</script>

<style lang="scss" scoped>
.note-conntent {
  position: absolute;
  top: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .note-col {
    margin: 15px;
  }
  .note-row {
    :hover {
      box-shadow: 2px 2px transparent;
    }
  }
  img {
    width: 150px;
  }
}
.note-details {
  width: 800px;
  letter-spacing: 5px;
  line-height: 40px;
  img {
    width: 890px;
  }
}
</style>