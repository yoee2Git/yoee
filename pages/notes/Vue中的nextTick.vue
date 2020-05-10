<template>
  <div class="center-content">
    <h2>Vue中的nextTick</h2>
    <hr />
    <div
      class="code"
    >Vue中的nextTick涉及到Vue中DOM的异步更新，感觉很有意思，特意了解了一下。其中关于nextTick的源码涉及到不少知识，很多不太理解，暂且根据自己的一些感悟介绍下nextTick。</div>
    <p>示例了解下关于Vue中的DOM更新以及nextTick的作用。</p>

    <div class="imgdv">
      <img src="~@/assets/img/note/nextTick/1.png" alt />
      <img src="~@/assets/img/note/nextTick/2.png" alt />
    </div>
    <div class="dv">
      <h5>应用场景</h5>
    <p>下面了解下nextTick的主要应用的场景及原因。</p>
    <br>
    <hr>
    <ul>
      <li>在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中</li>
    </ul>
    <br>
    <span>在created()钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将DOM操作的js代码放进Vue.nextTick()的回调函数中。与之对应的就是mounted()钩子函数，因为该钩子函数执行时所有的DOM挂载和渲染都已完成，此时在该钩子函数中进行任何DOM操作都不会有问题 。</span>
<br>
    <ul>
      <li>在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。</li>
    </ul>
    <br>
    <br>
    </div>
    <i>具体原因在Vue的官方文档中详细解释</i>

    <div class="code">
      Vue 异步执行 DOM 更新。只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作上非常重要。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部尝试对异步队列使用原生的 Promise.then 和MessageChannel，如果执行环境不支持，会采用 setTimeout(fn, 0)代替。
    </div>
    <div class="code">
      例如，当你设置vm.someData = 'new value'，该组件不会立即重新渲染。当刷新队列时，组件会在事件循环队列清空时的下一个“tick”更新。多数情况我们不需要关心这个过程，但是如果你想在 DOM 状态更新后做点什么，这就可能会有些棘手。虽然 Vue.js 通常鼓励开发人员沿着“数据驱动”的方式思考，避免直接接触 DOM，但是有时我们确实要这么做。为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用Vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用。
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/note.scss";
.imgdv {
  padding: 0 50rem;
  img{
    width: 800px;
    padding-left: 15rem;
  }
}
</style>