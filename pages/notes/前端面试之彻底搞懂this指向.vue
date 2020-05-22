<template>
  <b-container fluid class="bv-example-row content">
    <b-row>
      <!-- <b-col sm="6" offset-sm="0" md="6" offset-md="3" lg="6" offset-lg="5" xl="6" offset-xl="5"> -->
      <b-col sm="0" md="2" lg="2" xl="4"></b-col>
      <b-col sm="12" md="8" lg="7" xl="5">
        <h2>前端面试之彻底搞懂this指向</h2>
        <hr />
        <br />
        <p class="code">
          this是JavaScript中的一个关键字，但是又一个相对比较特别的关键字，不像function、var、for、if这些关键字一样，可以很清楚的搞清楚它到底是如何使用的。
          this会在执行上下文中绑定一个对象，但是是根据什么条件绑定的呢？在不同的执行条件下会绑定不同的对象，这也是让人捉摸不定的地方。
          这一次，我们一起来彻底搞定this到底是如何绑定的吧！
        </p>
        <h4>一. 理解this</h4>
        <h6>1.1. 为什么使用this</h6>
        <p>在常见的编程语言中，几乎都有this这个关键字（Objective-C中使用的是self），但是JavaScript中的this和常见的面向对象语言中的this不太一样：</p>
        <ul>
          <li>常见面向对象的编程语言中，比如Java、C++、Swift、Dart等等一系列语言中，this通常只会出现在类的方法中。</li>
          <li>也就是你需要有一个类，类中的方法（特别是实例方法）中，this代表的是当前调用对象。</li>
          <li>但是JavaScript中的this更加灵活，无论是它出现的位置还是它代表的含义。</li>
        </ul>
        <p>使用this有什么意义呢？下面的代码中，我们通过对象字面量创建出来一个对象，当我们调用对象的方法时，希望将对象的名称一起进行打印。</p>
        <span>如果没有this，那么我们的代码会是下面的写法：</span>
        <ul>
          <li>在方法中，为了能够获取到name名称，必须通过obj的引用（变量名称）来获取。</li>
          <li>但是这样做有一个很大的弊端：如果我将obj的名称换成了info，那么所有的方法中的obj都需要换成info。</li>
        </ul>
        <img src="~@/assets/img/note/this/1.jpg" alt />
        <p>事实上，上面的代码，在实际开发中，我们都会使用this来进行优化：</p>
        <ul>
          <li>当我们通过obj去调用running、eating、studying这些方法时，this就是指向的obj对象</li>
        </ul>
        <img src="~@/assets/img/note/this/2.png" alt />
        <p>所以我们会发现，在某些函数或者方法的编写中，this可以让我们更加便捷的方式来引用对象，在进行一些API设计时，代码更加的简洁和易于复用。</p>
        <p>当然，上面只是应用this的一个场景而已，开发中使用到this的场景到处都是，这也是为什么它不容易理解的原因。</p>
        <h6>1.2. this指向什么</h6>
        <p>我们先说一个最简单的，this在全局作用域下指向什么？</p>
        <ul>
          <li>这个问题非常容易回答，在浏览器中测试就是指向window</li>
          <li>所以，在全局作用域下，我们可以认为this就是指向的window</li>
        </ul>
        <img src="~@/assets/img/note/this/3.jpg" alt />
        <p>
          但是，开发中很少直接在全局作用域下去使用this，通常都是在
          <strong>函数中使用</strong> 。
        </p>
        <p>所有的函数在被调用时，都会创建一个执行上下文：</p>
        <ul>
          <li>这个上下文中记录着函数的调用栈、函数的调用方式、传入的参数信息等；</li>
          <li>this也是其中的一个属性；</li>
        </ul>
        <p>我们先来看一个让人困惑的问题：</p>
        <p>定义一个函数，我们采用三种不同的方式对它进行调用，它产生了三种不同的结果</p>
        <img src="~@/assets/img/note/this/4.png" alt />
        <p>上面的案例可以给我们什么样的启示呢？</p>
        <dl>
          <dd>1.函数在调用时，JavaScript会默认给this绑定一个值；</dd>
          <dd>2.this的绑定和定义的位置（编写的位置）没有关系；</dd>
          <dd>3.this的绑定和调用方式以及调用的位置有关系；</dd>
          <dd>4.this是在运行时被绑定的；</dd>
        </dl>
        <p>那么this到底是怎么样的绑定规则呢？一起来学习一下吧</p>
        <h4>二. this绑定规则</h4>
        <p class="code">我们现在已经知道this无非就是在函数调用时被绑定的一个对象，我们就需要知道它在不同的场景下的绑定规则即可。</p>
        <h6>2.1. 默认绑定</h6>

        <p>什么情况下使用默认绑定呢？独立函数调用。</p>
        <p>独立的函数调用我们可以理解成函数没有被绑定到某个对象上进行调用；</p>
        <strong>案例一：普通函数调用</strong>
        <ul>
          <li>该函数直接被调用，并没有进行任何的对象关联；</li>
          <li>这种独立的函数调用会使用默认绑定，通常默认绑定时，函数中的this指向全局对象（window）；</li>
        </ul>
        <img src="~@/assets/img/note/this/5.jpg" alt />
        <br />
        <strong>案例二：函数调用链（一个函数又调用另外一个函数）</strong>
        <p>所有的函数调用都没有被绑定到某个对象上；</p>
        <img src="~@/assets/img/note/this/6.png" alt />
        <br />
        <strong>案例三：将函数作为参数，传入到另一个函数中</strong>
        <img src="~@/assets/img/note/this/7.png" alt />
        <p>我们对案例进行一些修改，考虑一下打印结果是否会发生变化：</p>
        <ul>
          <li>这里的结果依然是window，为什么呢？</li>
          <li>原因非常简单，在真正函数调用的位置，并没有进行任何的对象绑定，只是一个独立函数的调用；</li>
        </ul>
        <img src="~@/assets/img/note/this/8.png" alt />
        <h6>2.2. 隐式绑定</h6>
        <p>另外一种比较常见的调用方式是通过某个对象进行调用的：</p>
        <ul>
          <li>也就是它的调用位置中，是通过某个对象发起的函数调用。</li>
        </ul>
        <br />
        <strong>案例一：通过对象调用函数</strong>
        <ul>
          <li>foo的调用位置是obj.foo()方式进行调用的</li>
          <li>那么foo调用时this会隐式的被绑定到obj对象上</li>
        </ul>
        <img src="~@/assets/img/note/this/9.png" alt />
        <br />
        <strong>案例二：案例一的变化</strong>
        <ul>
          <li>我们通过obj2又引用了obj1对象，再通过obj1对象调用foo函数；</li>
          <li>那么foo调用的位置上其实还是obj1被绑定了this；</li>
        </ul>
        <img src="~@/assets/img/note/this/10.png" alt />
        <strong>案例三：隐式丢失</strong>
        <ul>
          <li>结果最终是window，为什么是window呢？</li>
          <li>因为foo最终被调用的位置是bar，而bar在进行调用时没有绑定任何的对象，也就没有形成隐式绑定；</li>
          <li>相当于是一种默认绑定；</li>
        </ul>
        <img src="~@/assets/img/note/this/11.png" alt />
        <strong>2.3. 显示绑定</strong>
        <p>隐式绑定有一个前提条件：</p>
        <ul>
          <li>
            必须在调用的
            <span class="txt-color-deeppink">对象内部</span> 有一个对函数的引用（比如一个属性）；
          </li>
          <li>如果没有这样的引用，在进行调用时，会报找不到该函数的错误；</li>
          <li>正是通过这个引用，间接的将this绑定到了这个对象上；</li>
        </ul>
        <p>
          如果我们不希望在
          <span class="txt-color-deeppink">对象内部</span> 包含这个函数的引用，同时又希望在这个对象上进行强制调用，该怎么做呢？
        </p>
        <ul>
          <li>JavaScript所有的函数都可以使用call和apply方法（这个和Prototype有关）。</li>
          <li>它们两个的区别这里不再展开；</li>
          <li>其实非常简单，第一个参数是相同的，后面的参数，apply为数组，call为参数列表；</li>
          <li>这两个函数的第一个参数都要求是一个对象，这个对象的作用是什么呢？就是给this准备的。</li>
          <li>在调用这个函数时，会将this绑定到这个传入的对象上。</li>
        </ul>
        <p>
          因为上面的过程，我们明确的绑定了this指向的对象，所以称之为
          <span class="txt-color-deeppink">显示绑定。</span>
        </p>
        <h6>2.3.1. call、apply</h6>
        <strong>通过call或者apply绑定this对象</strong>
        <p>显示绑定后，this就会明确的指向绑定的对象</p>
        <img src="~@/assets/img/note/this/12.png" alt />
        <h6>2.3.2. bind函数</h6>
        <strong>如果我们希望一个函数总是显示的绑定到一个对象上，可以怎么做呢？</strong>
        <p>方案一：自己手写一个辅助函数（了解）</p>
        <ul>
          <li>我们手动写了一个bind的辅助函数</li>
          <li>这个辅助函数的目的是在执行foo时，总是让它的this绑定到obj对象上</li>
        </ul>
        <img src="~@/assets/img/note/this/13.png" alt />
        <br />
        <i>方案二：使用Function.prototype.bind</i>
        <br />
        <img src="~@/assets/img/note/this/14.png" alt />
        <h6>2.3.3. 内置函数</h6>
        <p>有些时候，我们会调用一些JavaScript的内置函数，或者一些第三方库中的内置函数。</p>
        <p>这些内置函数会要求我们传入另外一个函数；</p>
        <p>我们自己并不会显示的调用这些函数，而且JavaScript内部或者第三方库内部会帮助我们执行；</p>
        <p>这些函数中的this又是如何绑定的呢？</p>
        <strong>案例一：setTimeout</strong>
        <p>setTimeout中会传入一个函数，这个函数中的this通常是window</p>
        <img src="~@/assets/img/note/this/15.png" alt />
        <p>为什么这里是window呢？</p>
        <p>这个和setTimeout源码的内部调用有关；</p>
        <p>setTimeout内部是通过apply进行绑定的this对象，并且绑定的是全局对象；</p>
        <strong>案例二：数组的forEach</strong>
        <p>数组有一个高阶函数forEach，用于函数的遍历：</p>
        <p>在forEach中传入的函数打印的也是Window对象；</p>
        <p>这是因为默认情况下传入的函数是自动调用函数（默认绑定）；</p>
        <img src="~@/assets/img/note/this/16.png" alt />
        <p>我们是否可以改变该函数的this指向呢？</p>
        <img src="~@/assets/img/note/this/17.jpg" alt />
        <img src="~@/assets/img/note/this/18.png" alt />
        <strong>案例三：div的点击</strong>
        <p>如果我们有一个div元素：</p>
        <i>注意：省略了部分代码!!!!!!!!</i>
        <img src="~@/assets/img/note/this/19.png" alt />
        <p>获取元素节点，并且监听点击：</p>
        <ul>
          <li>在点击事件的回调中，this指向谁呢？box对象；</li>
          <li>这是因为在发生点击时，执行传入的回调函数被调用时，会将box对象绑定到该函数中；</li>
        </ul>
        <img src="~@/assets/img/note/this/20.png" alt />
        <p>所以传入到内置函数的回调函数this如何确定呢？</p>
        <p>某些内置的函数，我们很难确定它内部是如何调用传入的回调函数；</p>
        <p>一方面可以通过分析源码来确定，另一方面我们可以通过经验（见多识广）来确定；</p>
        <p>但是无论如何，通常都是我们之前讲过的规则来确定的；</p>
        <h6>2.4. new绑定</h6>
        <p>JavaScript中的函数可以当做一个类的构造函数来使用，也就是使用new关键字。</p>
        <p>使用new关键字来调用函数时，会执行如下的操作：</p>
        <dl>
          <dd>1.创建一个全新的对象；</dd>
          <dd>2.这个新对象会被执行Prototype连接；</dd>
          <dd>3.这个新对象会绑定到函数调用的this上（this的绑定在这个步骤完成）；</dd>
          <dd>4.如果函数没有返回其他对象，表达式会返回这个新对象；</dd>
        </dl>
        <img src="~@/assets/img/note/this/21.png" alt />
        <strong>2.5. 规则优先级</strong>
        <p>学习了四条规则，接下来开发中我们只需要去查找函数的调用应用了哪条规则即可，但是如果一个函数调用位置应用了多条规则，优先级谁更高呢？</p>
        <p class="txt-color-deeppink">1.默认规则的优先级最低</p>
        <p>毫无疑问，默认规则的优先级是最低的，因为存在其他规则时，就会通过其他规则的方式来绑定this</p>
        <p class="txt-color-deeppink">2.显示绑定优先级高于隐式绑定</p>
        <p>显示绑定和隐式绑定哪一个优先级更高呢？这个我们可以测试一下：</p>
        <p>结果是obj2，说明是显示绑定生效了</p>
        <img src="~@/assets/img/note/this/22.png" alt />
        <p class="txt-color-deeppink">3.new绑定优先级高于隐式绑定</p>
        <p>结果是foo，说明是new绑定生效了</p>
        <img src="~@/assets/img/note/this/23.png" alt />
        <p class="txt-color-deeppink">4.new绑定优先级高于bind</p>
        <p>new绑定和call、apply是不允许同时使用的，所以不存在谁的优先级更高</p>
        <img src="~@/assets/img/note/this/24.png" alt />
        <img src="~@/assets/img/note/this/25.jpg" alt />
        <p>但是new绑定是否可以和bind后的函数同时使用呢？可以</p>
        <p>结果显示为foo，那么说明是new绑定生效了</p>
        <img src="~@/assets/img/note/this/26.png" alt />
        <p>优先级总结：</p>
        <strong class="code">new绑定 > 显示绑定（bind）> 隐式绑定 > 默认绑定</strong>
        <h3>三. this规则之外</h3>
        <p class="code">我们讲到的规则已经足以应付平时的开发，但是总有一些语法，超出了我们的规则之外。（神话故事和动漫中总是有类似这样的人物）</p>
        <strong>3.1. 忽略显示绑定</strong>
        <p>如果在显示绑定中，我们传入一个null或者undefined，那么这个显示绑定会被忽略，使用默认规则：</p>
        <img src="~@/assets/img/note/this/27.png" alt />
        <strong>3.2. 间接函数引用</strong>
        <p>
          另外一种情况，创建一个函数的
          <span class="txt-color-deeppink">间接引用</span>
          ，这种情况使用默认绑定规则。
        </p>
        <p>我们先来看下面的案例结果是什么？</p>
        <br />
        <i>(num2 = num1)的结果是num1的值；</i>
        <br />
        <img src="~@/assets/img/note/this/28.png" alt />

        <p>我们来下面的函数赋值结果：</p>
        <p>赋值(obj2.foo = obj1.foo)的结果是foo函数；</p>

        <p>foo函数被直接调用，那么是默认绑定；</p>

        <img src="~@/assets/img/note/this/29.png" alt />
        <strong>3.3. ES6箭头函数</strong>
        <p>在ES6中新增一个非常好用的函数类型：箭头函数</p>
        <p>这里不再具体介绍箭头函数的用法，可以自行学习。</p>
        <p>箭头函数不使用this的四种标准规则（也就是不绑定this），而是根据外层作用域来决定this。</p>
        <p>我们来看一个模拟网络请求的案例：</p>
        <p>这里我使用setTimeout来模拟网络请求，请求到数据后如何可以存放到data中呢？</p>
        <p>我们需要拿到obj对象，设置data；</p>
        <p>但是直接拿到的this是window，我们需要在外层定义：var _this = this</p>
        <p>在setTimeout的回调函数中使用_this就代表了obj对象</p>
        <img src="~@/assets/img/note/this/30.png" alt />
        <p>上面的代码在ES6之前是我们最常用的方式，从ES6开始，我们会使用箭头函数：</p>
        <p>为什么在setTimeout的回调函数中可以直接使用this呢？</p>
        <p>因为箭头函数并不绑定this对象，那么this引用就会从上层作用域中找到对应的this</p>
        <img src="~@/assets/img/note/this/31.png" alt />
        <p>思考：如果getData也是一个箭头函数，那么setTimeout中的回调函数中的this指向谁呢？</p>
        <p>答案是window；</p>
        <p>依然是不断的从上层作用域找，那么找到了全局作用域；</p>
        <p>在全局作用域内，this代表的就是window</p>
        <img src="~@/assets/img/note/this/32.png" alt />

        <h4>
          四. this面试题
        </h4>
        <strong>
          4.1. 面试题一：
        </strong>
        <img src="~@/assets/img/note/this/33.png" alt />
        <p>
          这道面试题非常简单，无非就是绕一下，希望把面试者绕晕：
        </p>
        <img src="~@/assets/img/note/this/34.png" alt />
        <strong>
          4.2. 面试题二：
        </strong>
        <img src="~@/assets/img/note/this/35.png" alt />
        <strong>
          4.3. 面试题三:
        </strong>
        <img src="~@/assets/img/note/this/36.png" alt />
        <strong>
          4.4. 面试题四：
        </strong>
        <img src="~@/assets/img/note/this/37.png" alt />


<br>
<br>
<br>



        <b-col sm="0" md="2" lg="2" xl="3"></b-col>
        <br />
        <hr />
        <span>from:</span>
        <a href="https://mp.weixin.qq.com/s/hYm0JgBI25grNG_2sCRlTA">coderwhy</a>
      </b-col>
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
strong {
  display: block;
}
img {
  width: 35rem;
}
h4 {
  margin-left: 0;
  width: 35rem;
  height: 3rem;
  line-height: 3rem;
  background-color: rgb(255, 123, 0);
  color: aliceblue;
}
</style>