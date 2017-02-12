$(function() {
  // Start clock
  var clock = new Clock("clock");
  clock.startClock();

  var start = (new Date()).getTime();
  startTime();

  function startTime() {


    var currentTime = (new Date()).getTime();
    var totalTime = currentTime - start;

    $('.footer__time').html(formatTime(totalTime));
    var t = setTimeout(function() { startTime(); }, 1000 );
  }

  function formatTime(time) {
    var h = m = s = ms = 0;
    var newTime = '';

    h = Math.floor( time / (60 * 60 * 1000) );
    time = time % (60 * 60 * 1000);
    m = Math.floor( time / (60 * 1000) );
    time = time % (60 * 1000);
    s = Math.floor( time / 1000 );

    newTime = checkTime(h) + ':' + checkTime(m) + ':' + checkTime(s);
    return newTime;
  }

  function checkTime(i) {
      if (i<10) { i = "0" + i; }
      return i;
  }
});

$(document).ready(function(){

  $(".about-link").click(function(e){
    $('body').addClass('about-active');
    var text = $(".about-text");
    centerImage(text);

    $('.about').show();
    $('.slick-prev').hide();
    $('.slick-next').hide();

    $(".about").click(function(){
      $('body').removeClass('about-active');
      $(".about").hide();
      $('.slick-prev').show();
      $('.slick-next').show();
    });

  });

  function centerImage(text) {

    text.load(function(){
      var page_height = $(window).height();
      var text_height = text.height();
      var text_height_offset = ( page_height - text_height ) / 2;
      text.parent().css("margin-top", text_height_offset);
    });
  }

});