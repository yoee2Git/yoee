<template>
  <div class="center-content">
    <b-row>
      <b-col offset="8">
        <h2>v-slot 插槽</h2>
    <div
      class="code"
    >在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 这两个目前已被废弃但未被移除且仍在文档中的 attribute。</div>
    <div class="imgdv">
      <p>普通插槽</p>
      <img src="~@/assets/img/note/slot/slot1.png" alt />
      <br />
      <br />
      <img src="~@/assets/img/note/slot/slot.png" alt />
    </div>
    <div class="imgdv">
      <p>具名插槽</p>
      <i>默认的 slot name 是 default</i>
      <br>
      <img src="~@/assets/img/note/slot/slot2.png" alt />
      <br />
      <br />
      <img src="~@/assets/img/note/slot/slot3.png" alt />
    </div>

    <div class="imgdv">
      <p>作用域插槽</p>
      <div class="code">自 2.6.0 起有所更新。已废弃的使用 slot-scope attribute 的语法在这里。</div>
      <p>
        有时让插槽内容能够访问子组件中才有的数据是很有用的。例如，设想一个带有如下模板的
        <span class="txt-color-deeppink">&lt;current-user&gt;</span>组件：
      </p>
      <img src="~@/assets/img/note/slot/slot4.png" alt />
      <br />
      <p>我们可能想换掉备用内容，用名而非姓来显示。如下：</p>
      <br />
      <img src="~@/assets/img/note/slot/slot5.png" alt />
      <p>
        然而上述代码不会正常工作，因为只有
        <span class="txt-color-deeppink">&lt;current-user&gt;</span>组件可以访问到 user 而我们提供的内容是在父级渲染的。
      </p>
      <p>
        为了让
        <span class="txt-color-deeppink">&lt;user&gt;</span> 在父级的插槽内容中可用，我们可以将
        <span class="txt-color-deeppink">&lt;user&gt;</span> 作为
        <span class="txt-color-deeppink">&lt;slot&gt;</span>元素的一个 attribute 绑定上去：
      </p>
      <img src="~@/assets/img/note/slot/slot6.png" alt />
      <br>
      绑定在
      <span class="txt-color-deeppink">&lt;slot&gt;</span>元素上的 attribute 被称为插槽 prop。现在在父级作用域中，我们可以使用带值的
      <span class="txt-color-deeppink">&lt;v-slot&gt;</span> 来定义我们提供的插槽 prop 的名字：
      <br>
      <img src="~@/assets/img/note/slot/slot7.png" alt />

      <p>
        在这个例子中，我们选择将包含所有插槽 prop 的对象命名为
        <span class="txt-color-deeppink">&lt;slotProps&gt;</span>，但你也可以使用任意你喜欢的名字。
      </p>
      <i>于 2020-5-10 00:19</i>
    </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/note.scss";
.imgdv {
  overflow: scroll;
}
</style>