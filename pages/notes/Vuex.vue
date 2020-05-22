<template>
  <b-container fluid class="bv-example-row">
    <b-row>
      <!-- <b-col sm="6" offset-sm="0" md="6" offset-md="3" lg="6" offset-lg="5" xl="6" offset-xl="5"> -->
      <b-col sm="0" md="2" lg="2" xl="4"></b-col>
      <b-col sm="12" md="8" lg="7" xl="5">
        <h2>Vuex</h2>
        <hr />
        <br />
          <!-- Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具
          <a href="https://github.com/vuejs/vue-devtools" target="_blank" rel="noopener noreferrer">
            devtools extension
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              width="15"
              height="15"
              class="icon outbound"
            >
              <path
                fill="currentColor"
                d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
              />
              <polygon
                fill="currentColor"
                points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
              />
            </svg>
          </a>，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。
          #什么是“状态管理模式”？
        </div>
        <h4>什么是“状态管理模式”？</h4>
        <p>让我们从一个简单的 Vue 计数应用开始：</p>
        <img src="~@/assets/img/note/Vuex/2.png" />
        <p>这个状态自管理应用包含以下几个部分：</p>
        <ul>
          <li>state，驱动应用的数据源；</li>
          <li>view，以声明方式将 state 映射到视图；</li>
          <li>actions，响应在 view 上的用户输入导致的状态变化。</li>
        </ul>
        <p>以下是一个表示“单向数据流”理念的简单示意：</p>
        <img src="~@/assets/img/note/Vuex/flow.png" />
        <p>
          但是，当我们的应用遇到
          <strong>多个组件共享状态</strong> 时，单向数据流的简洁性很容易被破坏：
        </p>
        <ul>
          <li>多个视图依赖于同一状态。</li>
          <li>来自不同视图的行为需要变更同一状态。</li>
        </ul>
        <p>对于问题一，传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。</p>
        <p>对于问题二，我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。</p>
        <p>因此，我们为什么不把组件的共享状态抽取出来，以一个全局单例模式管理呢？在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！</p>
          <p>通过定义和隔离状态管理中的各种概念并通过强制规则维持视图和状态间的独立性，我们的代码将会变得更结构化且易维护。</p>-->
          <img src="~@/assets/img/note/vuex/vuex.png" />
          <!-- <h4>#什么情况下我应该使用 Vuex？</h4>
        <h6>Vuex 可以帮助我们管理共享状态，并附带了更多的概念和框架。这需要对短期和长期效益进行权衡。</h6>
        <p
          class="code"
          >如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。一个简单的 store 模式就足够您所需了。但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。</p>-->
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
</style>