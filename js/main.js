/* set animation for arrows in fourth Page when displayed on mobile device
 */
  $(".arrowDown").click(function() {
    $(".firstP").animate({ marginTop: "100%", opacity: 0 }, 300);
    $(".secondP").slideToggle(300);
  });
  $(".arrowUp").click(function() {
    $(".secondP").slideToggle(300);
    $(".firstP").animate({ marginTop: "0%", opacity: 1 }, 300);
  });


/* 3thPage works
The frame is a flex box
set their height the same as the that of the largest one  */

(function() {
  if (document.documentElement.clientWidth > 480) {
    var frames = $(".frame");
    var frameHeighArr = [];

    for (var i = 0, len = frames.length; i < len; i++) {
      frameHeighArr.push(frames[i].scrollHeight);
    }

    var maxHeight = Math.max(...frameHeighArr);
    for (var i = 0, len = frames.length; i < len; i++) {
      frames[i].style.height = maxHeight + "px";
    }
  } else {
    return;
  }
})();