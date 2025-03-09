"use strict";

$(function () {
  // スムーススクロール
  if($("body").attr("id") == "home") {
    $('a[href^="#"]').on("click", function () {
      const speed = 600;
      let href = $(this).attr("href");
      let target = $(href == "#" || href == "" ? "html" : href);
      let position = target.offset().top;
      $("body,html").animate({ scrollTop: position }, speed, "swing");
      return false;
    });
  } else {
    let navLink = $(".header__nav-list > li > a");
    $.each(navLink, function(){
      $(this).on("click", function(e){
        e.preventDefault();
        let $this = $(this);
        let nowUrl = location.pathname;
        let nowUrlSplit = nowUrl.split("/").filter(n => n);
        let targetUrl = $this.attr("href");
        let targetUrlSplit = targetUrl.split("/").filter(n => n);
        let dir = "../".repeat(nowUrlSplit.length);
        let newUrl = dir + "index.html" + targetUrlSplit.join("/");

        location.href = newUrl;
      });
    });
  }

  // トップに戻るボタン
  $(window).on("scroll", function () {
    if (500 < $(this).scrollTop()) {
      $("#to-top").addClass("is-show");
    } else {
      $("#to-top").removeClass("is-show");
    }
    let scrollHeight = $(document).height();
    let scrollPosition = window.innerHeight + $(window).scrollTop();
    let footHeight = $(".footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
      $("#to-top").addClass("is-fixed");
    } else {
      $("#to-top").removeClass("is-fixed");
    }
  });
});
