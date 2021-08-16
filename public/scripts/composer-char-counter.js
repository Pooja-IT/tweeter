$(document).ready(function() {

  $("textarea").keyup(function() {
    const charcount = $(this).val().length;
    if (charcount <= 140) {
      $(this)
        .closest(".new-tweet")
        .find(".counter")
        .removeClass("negative-count")
        .text(140 - charcount);
    } else {
      $(this)
        .closest(".new-tweet")
        .find(".counter")
        .addClass("negative-count")
        .text(140 - charcount);
    }
  });
  // toggle button for getting to the top of the screen
  const buttonToTriggerScroll = ".scroll-to-top button";
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $(buttonToTriggerScroll).fadeIn();
    } else {
      $(buttonToTriggerScroll).fadeOut();
    }
  });
  $(buttonToTriggerScroll).click(function() {
    $(window).scrollTop(0);
    if ($(".new-tweet").is(":hidden")) {
      $(".new-tweet").show();
    }
    $("textarea").focus();
  });
});