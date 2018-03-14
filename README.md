# storetest

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

**webpack整合scss**

第一步
npm install node-sass --save-dev
npm install sass-loader --save-dev

当然了，使用样式的话，css-loader和style-loader也是必须的依赖包，如果没有安装，可以类似上述的方法安装
css-loader使你能够使用类似@import 和 url(…)的方法实现 require()的功能；
style-loader将所有的计算后的样式加入页面中；

.vue文件： @import "_test1.scss";

第二步，打开webpack.base.config.js在loaders里面加上
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }
    
第三步，在需要用到scss的地方写上
<style lang="scss" scoped>

</style>


//test1.scss
$color1:#aeaeae;
.div1{
  background-color:$color1;
}

//.vue文件
<style lang="scss" scoped>
  @import "../assets/_test1.scss";     //引入.scss的文件
  body{ font-size: 18px; text-align: center;}
  .red{ color: #fa0000}
</style>


Sass与Scss是什么关系?
Sass的缩排语法，对于写惯css前端的web开发者来说很不直观，也不能将css代码加入到Sass里面，因此sass语法进行了改良，Sass 3就变成了Scss(sassy css)。与原来的语法兼容，只是用{}取代了原来的缩进。
Less也是一种动态样式语言. 对CSS赋予了动态语言的特性，如变量，继承，运算， 函数.  Less 既可以在客户端上运行 (支持IE 6+, Webkit, Firefox)，也可在服务端运行 (借助 Node.js)。

.Sass和Less的工具库不同
Sass有工具库Compass, 简单说，Sass和Compass的关系有点像Javascript和jQuery的关系,Compass是Sass的工具库。在它的基础上，封装了一系列有用的模块和模板，补充强化了Sass的功能。
Less有UI组件库Bootstrap,Bootstrap是web前端开发中一个比较有名的前端UI组件库，Bootstrap的样式文件部分源码就是采用Less语法编写。

教程：
http://blog.csdn.net/leadn/article/details/78562873?locationNum=6&fps=1
