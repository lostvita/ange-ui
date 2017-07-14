#### 前言

一款提供动画运行机制的功能插件。

> 当前前端开发动画的方式比较多样，根据业务兼容性的需求可以选择使用css3、setTimeout、Promise或者requestAnimteFrame等方式去开发。相较于常用的css3和setTimeout，requestAnimteFrame具有什么样的优势，为什么要选择使用它？

首先，requestAnimFrame具有兼容问题，对IE而言，只兼容IE9及以上版本。其次：

- css3的动画控制性很弱，我们无法把控动画的整个过程
- setTimeout具有较大的性能问题，可读性和可维护性比较弱

#### 插件特点

该插件的主要特点如下：

- **定制性强**：该插件只提供一个运行动画的机制，具体的动画内容需要开发人员自行定制。
- **可控性强**：开发人员可以控制动画运行的整个过程：开始，进行和结束三个阶段，开发人员可根据需要自定义三个阶段的回调逻辑
- **过渡效果**：类似于css3中的ease过渡，在这个插件中，你可以定制任意过渡效果
- **较好的动画性能以及较小内存消耗**，详细可百度 requestAnimteFrame
- **不依赖任何第三方库**

#### API

- **new Animation()**：实例化动画对象
- **onProcess()**：定义动画内容
- **onFinished()**：动画结束后的回调
- **start()**：启动动画
- **easing()**：定义动画过渡效果

#### Usage（以摇摆的风筝为栗子）

**第一步：new一个Animation实例**

```javascript
var kite = new Animation($('.kiet'),2700);
```

**说明：**Animation接收两个参数，一个是dom节点，另一个是动画持续时间

**第二步：定制你的动画**

```javascript
kite.onProgress = function(p){
    var x = 25 * Math.sin(2 * p * Math.PI) + 'px';
    var y = 25 * Math.cos(2 * p * Math.PI) + 'px';
    this.doms.css('transform','translate('+ x +','+ y +')');
}
```

**说明：**该插件的onProgress API 用于定义动画内容，示例中使用正余弦是风筝摇摆

**第三部：启动动画**

```javascript
kite.start();
```

**说明：**调用start API 即可启动动画效果，当前情况下，动画只执行一个周期

**第四部：是否循环动画**

```javascript
kite.onFinished = function(){
    kite.start();
}
```

**说明：**如果需要循环的动画效果，调用 onFinished API ，在一个动画周期结束之后再次启动动画，达到循环的目的。