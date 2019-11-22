 //定义一个基数index
 var index = 0;

 // 点击往右移动，相对应图片改变
 $('.next').click(function () {
     // 每当点击时 index+1
     index++;
     console.log(index);
     $('.img').eq(index).fadeIn(500).siblings().fadeOut(500);
     if (index == $('.img').length) {
         index = 0;
         $('.img').eq(index).fadeIn(500).siblings().fadeOut(500);
     }
   
     $('span').eq(index).addClass('cr').siblings().removeClass('cr')
 })
 // 点击往左移动，相对应图片改变
 $('.pre').click(function () {
     // 每当点击时 index-1
     index--;
     $('.img').eq(index).fadeIn(500).siblings().fadeOut(500);
     if (index == -1) {
         index = $('.img').length - 1;
     }
     $('span').eq(index).addClass('cr').siblings().removeClass('cr')
 })

 //根据图片个数创建相对相应的小圆点
 for (var i = 0; i < $('.img').length; i++) { 
     $('.dot').append('<span class="cir"></span>')
     $('span').eq(0).addClass('cr');
 }
 // 小圆点点击时，相对应图片出现
 $('span').click(function () {
     index = $(this).index();
     $(this).addClass('cr').siblings().removeClass('cr')
     $('.img').eq(index).fadeIn(500).siblings().fadeOut(500);
 })

 // 定义一个时间，表示为定时器每隔 2s 执行一次
 var times = 5000;
 var timer = setInterval(play,times);

  function play() {
      //每调用一次 index+1
         index++;
         $('.img').eq(index).fadeIn(1000).siblings().fadeOut(1000);
         $('span').eq(index).addClass('cr').siblings().removeClass('cr')
         //判断当index大于图片数时
         if (index == $('.img').length) {
             index = 0;
             //让第一张图片变为有，其它依旧是 无，以此循环
              $('.img').eq(index).fadeIn(1000).siblings().fadeOut(1000);
              $('span').eq(index).addClass('cr').siblings().removeClass('cr')
         }
   }


// 添加鼠标事件，防止在点击轮播图时 与 定时器出现的冲突
$('#banner').hover(
 //    鼠标经过，定时器暂停
    function () {
    clearInterval(timer);
   },
 //鼠标离开，定时器开始
   function () {
       timer = setInterval(play,times)
   }
)