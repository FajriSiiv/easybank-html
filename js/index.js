$(".ham").on("click", () => {
  $(".link").toggleClass("toggle");
  if ($(".link").hasClass("toggle")) {
    $(".ham-img").attr("src", "images/icon-close.svg");
  } else {
    $(".ham-img").attr("src", "images/icon-hamburger.svg");
  }
});
