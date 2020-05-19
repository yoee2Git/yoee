<template>
  <b-container fluid class="bv-example-row content">
    <b-row>
      <!-- <b-col sm="6" offset-sm="0" md="6" offset-md="3" lg="6" offset-lg="5" xl="6" offset-xl="5"> -->
      <b-col sm="0" md="2" lg="2" xl="3"></b-col>

      <b-col sm="12" md="8" lg="8" xl="6">
        <h2>JavaScript继承</h2>
        <hr />
        <br />
        <h4>1、原型链继承</h4>
        <p class="code">构造函数、原型和实例之间的关系：每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个原型对象的指针。</p>
        <img src="@/assets/img/note/继承/原型链继承.png" alt />

        <p>原型链方案存在的缺点：多个实例对引用类型的操作会被篡改。</p>
        <img src="@/assets/img/note/继承/继承2.png" alt />
        <h4>2、借用构造函数继承</h4>
        <p class="code">使用父类的构造函数来增强子类实例，等同于复制父类的实例给子类（不使用原型）</p>
        <img src="@/assets/img/note/继承/继承3.png" alt />

        <p>核心代码是SuperType.call(this)，创建子类实例时调用SuperType构造函数，于是SubType的每个实例都会将SuperType中的属性复制一份。</p>
        <i>缺点：</i>
        <ul>
          <li>只能继承父类的实例属性和方法，不能继承原型属性/方法</li>
          <li>无法实现复用，每个子类都有父类实例函数的副本，影响性能</li>
        </ul>
        <h4>3、组合继承</h4>
        <p class="code">组合上述两种方法就是组合继承。用原型链实现对原型属性和方法的继承，用借用构造函数技术来实现实例属性的继承。</p>
        <img src="@/assets/img/note/继承/继承4.png" alt />
        <br />
        <i>缺点：</i>
        <ul>
          <li>第一次调用SuperType()：给SubType.prototype写入两个属性name，color。</li>
          <li>第二次调用SuperType()：给instance1写入两个属性name，color。</li>
        </ul>
        <p>实例对象instance1上的两个属性就屏蔽了其原型对象SubType.prototype的两个同名属性。所以，组合模式的缺点就是在使用子类创建实例对象时，其原型中会存在两份相同的属性/方法。</p>

        <h4>4、寄生式继承</h4>
        <i>核心：在原型式继承的基础上，增强对象，返回构造函数</i>
        <img src="@/assets/img/note/继承/继承5.png" alt />
        <br />
        <i>缺点</i>
        <ul>
          <li>原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。</li>
          <li>无法传递参数</li>
        </ul>

        <h4>5、寄生组合式继承</h4>
        <p class="code">结合借用构造函数传递参数和寄生模式实现继承</p>
        <br />
        <img src="@/assets/img/note/继承/继承6.png" alt />
        <p>
        这个例子的高效率体现在它只调用了一次SuperType 构造函数，并且因此避免了在SubType.prototype 上创建不必要的、多余的属性。于此同时，原型链还能保持不变；因此，还能够正常使用instanceof 和isPrototypeOf()
      </p>
      <h4>
        ES6类继承extends
      </h4>
      <p class="code">
        <span class="txt-color-deeppink">extends</span> 关键字主要用于类声明或者类表达式中，以创建一个类，该类是另一个类的子类。其中 <span class="txt-color-deeppink">constructor</span> 表示构造函数，一个类中只能有一个构造函数，有多个会报出SyntaxError错误,如果没有显式指定构造方法，则会添加默认的 <span class="txt-color-deeppink">constructor</span> 方法，使用例子如下。
      </p>
              <img src="@/assets/img/note/继承/继承7.png" alt />

<hr>
<p class="code">
  Links
  <br>
<a target="_blank" href="https://segmentfault.com/a/1190000011917606" rel="nofollow noopener noreferrer">《javascript高级程序设计》笔记：继承</a>
<br>
  <a target="_blank" href="https://juejin.im/post/5bcb2e295188255c55472db0" rel="nofollow noopener noreferrer">JavaScript常用八种继承方案</a>
<br>
  <a target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create" rel="nofollow noopener noreferrer">MDN之Object.create()</a>
<br>
  <a target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes" rel="nofollow noopener noreferrer">MDN之Class</a>
</p>
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