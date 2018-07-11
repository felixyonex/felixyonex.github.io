//set animation for arrows in fourth Page when displayed on mobile device

  $(".arrowDown").click(function() {
    $(".firstP").animate({ marginTop: "100%", opacity: 0 }, 500);
    $(".secondP").slideToggle(500);
  });
  $(".arrowUp").click(function() {
    $(".secondP").slideToggle(500);
    $(".firstP").animate({ marginTop: "0%", opacity: 1 }, 500);
  });


