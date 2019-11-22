$(document).ready(function () {
    var t
    // 将 index = -1 而不是 =0，是为了延长方法的执行，方便让第一张图片能停留时间更长些
    var index = -1
    var times = 3000 //每隔多久执行一次
    t = setInterval(play,times) // setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式
  
    function play() {
      index++
      if(index>3){index=0}//当图片执行大于4时，图片从第一张开始
      // eq() 选择器选取带有指定 index 值的元素。
      // fadeIn() 方法使用淡入效果来显示被选元素
      // fadeOut() 方法使用淡出效果来隐藏被选元素
      // siblings() 获得匹配集合中每个元素的同胞 若指定 ("className"),则改变其，若未指定("className"),则改变除其本身其它的值
      // 定义图片切换时需要 1s 显示效果
      $('.img').eq(index).fadeIn(1000).siblings().fadeOut(1000)
      // addClass() 方法向被选元素添加一个或多个类
      // removeClass() 方法从被选元素移除一个或多个类
       //定义小圆点样式
      $('.cir').eq(index).addClass('cr').siblings().removeClass('cr')
    }
  
  //点击小圆点时调用方法，切换图片
    $('.cir').click(function () {
      $(this).addClass('cr').siblings().removeClass('cr')
      // index() 方法返回指定元素相对于其他指定元素的 index 位置
      var index = $(this).index()
      //当点击小圆点时，图片需要0.6s显示出来
      $('.img').eq(index).fadeIn(600).siblings().fadeOut(600)
    })
  
    //当点击往左实现图片往左切换
    $('.pre').click(function () {
      index--
      // 如果往左达到最小时，直接从最后一张图片开始
      if(index<0){index=3}
      // 当图片切换时，小圆点样式跟随变化
      $('.img').eq(index).fadeIn(1000).siblings().fadeOut(1000)
      $('.cir').eq(index).addClass('cr').siblings().removeClass('cr')
    })
  
    //当点击往右实现图片往右切换
    $('.next').click(function () {
      index++
      // 如果往右达到最大时，直接从最第一张图片开始
      if(index>3){index=0}
      $('.img').eq(index).fadeIn(1000).siblings().fadeOut(1000)
      $('.cir').eq(index).addClass('cr').siblings().removeClass('cr')
    })
  
  // 当鼠标移动到整个轮播图上时，图片会暂停，方便切换图片操作时，不会出现反复调用的情况
    $('.banner').hover(
      function () {
  //       clearInterval() 方法可取消由 setInterval() 设置的 timeout
  //       clearInterval() 方法的参数必须是由 setInterval() 返回的 ID 值
        clearInterval(t)
      },
  //当鼠标移开时，图片必须继续切换，所以再次执行开始的方法
      function () {
        t = setInterval(play,times)
      }
    )
  })