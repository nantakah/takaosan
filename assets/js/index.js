$(document).ready(function(){
  $('.menubtn').on('click', function(){
    $('#globalnav').slideToggle();
    $('html, body').toggleClass('hidden');
    return false;
  });

  $('.mainvisual__images').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true
  });
});

