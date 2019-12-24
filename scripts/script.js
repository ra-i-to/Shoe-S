$(function(){
  $('#header-nav a,.header-nav-open a').click(function(){
    var idName = '#contents-' + $(this).text().toLowerCase();
    $('body, html').animate({ scrollTop: $(idName).offset().top }, 500);
    return false;
  });
  $('#top-button').click(function(){
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
  $('.header-nav-open').css({"right":"-"+$('.header-nav-open').width()+"px",
                             "transition-duration":"0.3s"});
  $('.nav-button').click(function(){
    if($('.header-nav-open').css('right') == '0px'){
      $('.header-nav-open').css({"right":"-"+$('.header-nav-open').width()+"px"});
    }else{
      $('.header-nav-open').css({"right":'0px'});
    }
  });
  $(document).click(function(event) {
    if(!$(event.target).closest('.header-nav-open').length) {
      if($('.header-nav-open').css('right') == '0px'){
        $('.header-nav-open').css({"right":"-"+$('.header-nav-open').width()+"px"});
      }
    } else {
    }
  });
});

$('.img-parallax').each(function(){
  var img = $(this);
  var imgParent = $(this).parent();
  function parallaxImg () {
    var speed = img.data('speed');
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();     
    var winBottom = winY + winH;
    if (winBottom > imgY && winY < imgY + parentH) {
      var imgBottom = ((winBottom - imgY) * speed);
      var imgTop = winH + parentH;
      var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
    }
    img.css({
      top: imgPercent + '%',
      transform: 'translate(-50%, -' + imgPercent + '%)'
    });
  }
  $(document).on({
    scroll: function () {
      parallaxImg();
    }, ready: function () {
      parallaxImg();
    }
  });
});