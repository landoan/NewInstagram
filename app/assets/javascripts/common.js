
$(window).load(function() {
/* Mansonry */
    // Animate loader off screen
  $(".se-pre-con").fadeOut(500);
  $('.picsBox').masonry({
  itemSelector: '.picBox',
  isFitWidth: true,
  isAnimated: true

  });

})