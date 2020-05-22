<template>
  <b-container fluid class="bv-example-row">
    <b-row>
      <!-- <b-col sm="6" offset-sm="0" md="6" offset-md="3" lg="6" offset-lg="5" xl="6" offset-xl="5"> -->
      <b-col sm="0" md="2" lg="2" xl="4"></b-col>

      <b-col sm="12" md="8" lg="7" xl="5">
        <h2>vue/vuex之Action</h2>
        <hr />
        <br />
        <p>Action 类似于 mutation，不同在于：</p>

        <ul>
          <li>Action 提交的是 mutation，而不是直接变更状态。</li>
          <li>Action 可以包含任意异步操作。</li>
        </ul>
        <p>让我们来注册一个简单的 action：</p>
        <img src="@/assets/img/note/vuexAction/1.png" alt />
        <p>
          <span>Action</span> 函数接受一个与
          <span>store</span> 实例具有相同方法和属性的
          <span>context</span> 对象，因此你可以调用
          <span class="txt-color-deeppink">context.commit</span> 提交一个
          <span>mutation</span> ，或者通过
          <span class="txt-color-deeppink">context.state</span> 和
          <span class="txt-color-deeppink">context.getters</span> 来获取
          <span>state</span> 和
          <span>getters</span> 。当我们在之后介绍到
          <a href="https://vuex.vuejs.org/zh/guide/modules.html">Modules</a> 时，你就知道
          <span>context</span> 对象为什么不是
          <span>store</span> 实例本身了。
        </p>
        <p>
          实践中，我们会经常用到 ES2015 的
          <a href="https://github.com/lukehoban/es6features#destructuring">参数解构</a> 来简化代码（特别是我们需要调用 commit 很多次的时候）：
        </p>
        <img src="@/assets/img/note/vuexAction/2.png" alt />

        <p class="code">Action 通过 store.dispatch 方法触发：</p>
        <img src="@/assets/img/note/vuexAction/3.png" alt />

        <p>
          乍一眼看上去感觉多此一举，我们直接分发
          <span class="txt-color-deeppink">mutation</span> 岂不更方便？实际上并非如此，还记得
          <span class="txt-color-deeppink">mutation</span> 必须同步执行这个限制么？
          <span class="txt-color-deeppink">Action</span> 就不受约束！我们可以在 action 内部执行异步操作：
        </p>
        <img src="@/assets/img/note/vuexAction/4.png" alt />
        <p>Actions 支持同样的载荷方式和对象方式进行分发：</p>
        <img src="@/assets/img/note/vuexAction/5.png" alt />

        <p>来看一个更加实际的购物车示例，涉及到调用异步 API 和分发多重 mutation：</p>
        <img src="@/assets/img/note/vuexAction/6.png" alt />

        <p>在组件中分发 Action</p>
        <p
          class="code"
        >你在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）：</p>
        <img src="@/assets/img/note/vuexAction/7.png" alt />

        <p>
          Action 通常是异步的，那么如何知道 action 什么时候结束呢？更重要的是，我们如何才能组合多个 action，以处理更加复杂的异步流程？
          <span>首先，你需要明白 store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise：</span>
        </p>
        <img src="@/assets/img/note/vuexAction/8.png" alt />
        <p>现在你可以：</p>
        <img src="@/assets/img/note/vuexAction/9.png" alt />
        <p>在另外一个 action 中也可以：</p>
        <img src="@/assets/img/note/vuexAction/10.png" alt />

        <p>
          最后，如果我们利用
          <a href="https://tc39.github.io/ecmascript-asyncawait/">async/await</a> ，我们可以如下组合 action：
        </p>
        <img src="@/assets/img/note/vuexAction/11.png" alt />

        <p
          class="code"
        >一个 store.dispatch 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。</p>
      </b-col>
      <b-col sm="0" md="2" lg="2" xl="3"></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
@import "~@/assets/css/note.scss";

img {
  width: 35rem;
}
</style>