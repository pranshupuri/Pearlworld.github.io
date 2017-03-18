/*----------Fixed Header-------*/

$(function() {
var header = $("#header"), pos = header.offset();
$(window).scroll(function() {
if($(this).scrollTop() > (pos.top + 10) && header.css('position') == 'static') { header.addClass('fixed'); }
else if($(this).scrollTop() <= pos.top && header.hasClass('fixed')){ header.removeClass('fixed'); }
})
});


/*-------Scroll-------*/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});


/*--------Paralax---------*/
var pContainerHeight = $('#cover').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('#text').css({
      'transform' : 'translate(0px, '+ wScroll /3.5 +'%)'
    });

  }
});

