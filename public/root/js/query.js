$(function() {
var menu = $("#menu"), pos = menu.offset();
$(window).scroll(function() {
if($(this).scrollTop() > (pos.top - 0) && menu.css('position') == 'static') { menu.addClass('fixed'); }
else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){ menu.removeClass('fixed'); }
})
});


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