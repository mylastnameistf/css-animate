# css-animate
A plugin of jQuery for manager animate's css3.
我是中国人，只会写中国字。
CSS3动画的一个jquery管理插件。受到VUE的动画写法启发。
有一个特点：在浏览器支持css3时执行定义的CSS3动画；在浏览器不支持CSS3时，不使用CSS3动画效果,一步到位！
有一个缺点：由于人懒，目前支持CSS3的写法只兼容了webkit,有空会把ms,moz,o等兼容写法补上。
还有一个缺点：代码属于草稿阶段有点乱。

用法示例：
var player = $("#player").cssAnimate({

    enter:'',//动画进入参数定义样式,例如是animate.css动画库的animated
    entering:'',//动画进入动作的定义样式，例如animate.css的fadeIn
    leave:'',//动画移除参数定义样式，例如animate.css的animated(可与enter定义不同)
    leaving:'',//动画移除动作定义样式，例如animate.css的fadeOut(可不与entering对应)
    hook:{//皆为可选
      beforeEnter：function(){},//执行动画之前执行，
      startEnter：function(){},//开始执行动画时执行，假如不支持CSS3，不会执行
      afterEnter：function(){},//动画执行完毕后执行，假如不支持CSS3，延时100ms执行
      beforeLeave：function(){},//动画移除前执行
      startLeave：function(){},//开始移除动画时执行，不支持CSS3不会执行
      afterLeave：function(){},//动画移除后执行
    }
});
player.enter();//如果支持CSS3立即执行动画，如果不支持延时100ms执行最终帧
player.leave();//如果支持CSS3立即执行动画，如果不支持延时100ms执行最终帧
