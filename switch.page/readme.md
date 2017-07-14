#### 前言

一个涉及多个功能模块的单页应用，往往会用到切屏效果，当前常用的网上切屏插件可能有swiper等，那为什么还要开发这个插件呢？

- 网上这些插件对页面的侵入性很强，通常需要我们按照固定的父子布局关系，植入大量的css样式

- 组件过于强大，功能复杂，需要一定的学习成本
- 网上的切屏插件，基本是基于满屏或小于满屏的处理，但在我们实际业务中，设计稿一屏的高度有时候是大于屏幕一屏的高度，对于这种需求，这些插件好像就没能很好处理（表示没找到能很好处理这种需求的插件，如果你有，告诉我呗~）

#### 插件特点

该插件的主要特点如下：

- 完美处理设计稿一屏高度大于屏幕高度的需求
- 对整个切屏过程可操控，在切屏的不同阶段有对应的回调逻辑
- 兼容pc跟移动端
- 依赖jQuery/zepto库
- 目前该切屏插件只支持css3切换效果（Usage中提供一个css3类），后续考虑支持requestAnimteFrame切换

#### API

- **new Switchs(opts)**：实例化切屏对象
- **switchPage(delta)**：启动切屏效果
- **switchToPage(index)**：切到指定屏幕
- **switchPrevPage()**：切换到上一屏
- **switchNextPage()**：切换到下一屏
- **onProcess(argvs)**：切屏过程的回调逻辑
- **onFinished()**：切屏结束后的回调逻辑

#### Usage

下面的用法基于以下html布局

```html
<div id="J_pages" class="pages">
    <div class="page first">
    </div>
    <div class="page second">
    </div>
    <div class="page third">
    </div>
    <div class="page fouth">
    </div>
</div>
```

**第一步：new一个switchs实例**

```javascript
var switchs = new Switchs({
    $pages: $('#J_pages'),
    $page: $('.page'),
    pageNum: 4,
    during: 1000,
    css3: 'move'
});
```

**说明**：该 API 接受5个参数：

- $pages：页面容器dom节点
- $page：单页节点（用于获取页面高度，只要能准确获取单页高度的节点都可以）
- pageNum：页面数量
- during：切屏效果持续时间
- css3：切换效果类名

**第二步：监听鼠标滚动（PC端）或者滑动（移动端）事件并启动切换**

```javascript
// pc端切屏
$('body').on('mousewheel', function(event,delta) {
    switchs.switchPage(delta);
});
 
// 移动端切屏
Touch.on('.page-waper','swiping', function(ev) {
    var delta = ev.direction == 'up' ? -1 : 1;  // up向下
    switchs.switchPage(delta);
});
```

**说明**：switchPage API接受一个delta，该参数用于判断切屏方向，该参数的获取参考如上即可。**另，pc跟移动端滚动事件的监听，需要自行引入相关插件，示例中引用的是jquery.mousewheel.js（PC）和touch.js（移动端）**

**第三步：定义切屏过程中的回调逻辑（if you need~~~）**

```javascript
switchs.onProcess = function(args){
    me.statistic(args.currPage + 5);
}
```

**说明**：回调里面传递了一些数据，什么？它有哪些数据，快去尝试打印出来看看吧~~~~

**第四步：定义切屏结束后的回调逻辑（if you need too~~~）**

```javascript
switchs.onFinished = function(args){
    me.btnsAnim();
    me.navsAnim();
}
```

其他：如果你还有其他的需求，可根据提供的api去调用

#### 我是被遗忘的css3类

```css
.move{
    -webkit-transition: transform 1s ease-in;
    -moz-transition: transform 1s ease-in;
    transition: transform 1s ease-in;
}
```

**说明**：该类是定义切换的动画效果，可以直接复制使用

**注意**：css类中的动画持续时间应该跟第一步new过程传递的during值保持一致