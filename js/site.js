$(function() {
  // Start clock
  var clock = new Clock("clock");
  clock.startClock();

  var start = (new Date()).getTime();
  startTime();

  // $(".quote-link").click(function(e) {
  //   e.preventDefault();
  //   $(this).toggleClass('close');
  //   $('.quote-block').toggle();
  // });

  // $('.about-link').click(function() {
  //   $('body').addClass('about-active');
  //   $('.home-link').addClass('close');
  // });

  // $('.home-link').click(function(e) {
  //   e.preventDefault();
  //   $(this).removeClass('close');
  //   $('body').removeClass('about-active');
  // });

  function startTime() {
    // var today=new Date();
    // var h=today.getHours();
    // var m=today.getMinutes();
    // var s=today.getSeconds();
    // m = checkTime(m);
    // s = checkTime(s);
    // $('.footer__time').html(h + ":" + m + ":" + s);
    // var t = setTimeout(function(){startTime();},500);

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

    $(".about").click(function(){
      $('body').removeClass('about-active');
      $(".about").hide();
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