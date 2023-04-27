// gnb
$(function () {
  $(".gnb > li > a").on("mouseenter focus", function () {
    var gnbindex = $(".gnb > li > a").index($(this));
    $(".gnb .inner").removeClass("on");
    $(".gnb .inner:eq(" + gnbindex + ")").addClass("on");
  });
  $("header").on("mouseleave", function () {
    $(".gnb .inner").removeClass("on");
  });
});

$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $("header").addClass("on");
    } else {
      $("header").removeClass("on");
    }
  });
});

//글자 애니메이션 splitting
$(function () {
  Splitting();
});

// slick slider
$(function () {
  $(".visual .slide").slick({
    arrows: true,
    dots: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
  $('.slick-prev').text("prev")
});
