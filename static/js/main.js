//index banner
!(function () {
  $(document).ready(function () {
    if ($("#top-slide-banner").length) {
      var e = window,
        t = e.TouchSlide,
        a = e.Redirect;
      new t({
        slideCell: "#top-slide-banner",
        mainCell: ".container .list",
        titCell: ".dots",
        effect: "leftLoop",
        autoPage: !0,
        autoPlay: !0,
        interTime: 5e3,
        startFun: function () {
          var e;
          null === (e = window.defaultLazyLoadInstance) || void 0 === e || e.update();
        },
      });
    }
  });
})();
$(function () {
  (window.defaultLazyLoadInstance = new LazyLoad({ elements_selector: "img.lazy", data_src: "original", threshold: 200 })), (window.defaultLazyLoadlistInstance = new LazyLoad({ elements_selector: ".top-list img[data-original],.day_list img[data-original],.index-left-ul img[data-original],.choice-wrap img[data-original],.sales img[data-original]", data_src: "original", threshold: 200 }));
});

//data-fancybox
$(function () {
  if ($("[data-fancybox]").length) {
    $("[data-fancybox]").fancybox({
      loop: true,
      mobile: {
        clickSlide: function (current, event) {
          return current.type === "image" ? "close" : "close";
        },
      },
      iframe: {
        attr: {
          allow: "fullscreen",
        },
      },
    });
  }
});

//gamesDetail
$(function () {
  function detailsScrollLazy(params) {
    var scroH = $(document).scrollTop();
    var viewH = $(window).height();
    var contentH = $(document).height();
    if ((scroH + viewH) / contentH > 0.5) {
      if (window._dt_event_bus) {
        window._dt_event_bus.emit("details-scroll-lazy-loaded");
      }
      $(document).unbind("scroll", detailsScrollLazy);
    }
  }
  $(document).scroll(detailsScrollLazy);
  $("#languages_info").click(function () {
    $.fancybox.open({
      src: ".fancybox-languages",
      type: "inline",
      autoFocus: false,
      backFocus: false,
      touch: false,
      baseClass: "fancybox_custom_class",
    });
  });

  new LazyLoad({
    elements_selector: "#screen .lazy_screen,.tube-lazy",
    data_src: "original",
  });
  new LazyLoad({
    elements_selector: ".lazy1",
    data_src: "original",
  });

  var descriptionHeight = $(".above-info .card").height();

  if (descriptionHeight <= 420) {
    $(".description-more").hide();
  }
  showMore(".description-more");

  function showMore(element_class) {
    $(element_class).click(function () {
      var $end = $(this).find(".show-more-end");
      var $span = $(this).find("span");
      var $des = $(this).prev();
      $end.toggle();
      $des.toggleClass(function (i, c, d) {
        var isLimit = c.indexOf("limit") !== -1;
        $des.animate({ height: isLimit ? "auto" : "initial" }, 300);
        $span.toggleClass("active");
        return "limit";
      });
    });
  }

  var screenboxWidth = $(".details .screenbox").width();
  var screensWidth = $(".details .screen .b").width();
  if (screensWidth > screenboxWidth) {
    if ($("html").hasClass("ar_fix")) {
      $("#prev").addClass("go");
    } else {
      $("#next").addClass("go");
    }
  }

  ppScroll("#screen", "#prev", "#next", "go");

  function ppScroll(o, p, n, g) {
    o = $(o);
    p = $(p);
    n = $(n);
    var prevButton = p;
    var nextButton = n;
    var isArFix = $("html").hasClass("ar_fix");
    if (isArFix) {
      prevButton = n;
      nextButton = p;
    }

    var ul = o.find("div.b");
    var isLast = false;
    prevButton.click(function () {
      if (!o.queue("fx").length) {
        var left = o.scrollLeft() - o.width();
        if (isArFix) {
          left = o.scrollLeft() + o.width();
        }

        if ((isArFix && left >= 0) || (!isArFix && left <= 0)) {
          prevButton.removeClass(g).fadeTo("fast", 0);
          isLast = false;
        }
        o.animate({ scrollLeft: left + "px" });
      }
    });
    nextButton.click(function () {
      if (!prevButton.hasClass(g)) {
        prevButton.addClass(g).fadeTo("fast", 1);
      }
      if (!o.queue("fx").length) {
        var left = o.scrollLeft() + o.width();
        if (isArFix) {
          left = o.scrollLeft() - o.width();
        }
        if (isLast) {
          o.animate({ scrollLeft: "0px" });
          prevButton.removeClass(g).fadeTo("fast", 0);
          isLast = false;
        } else {
          o.animate({ scrollLeft: left + "px" });
          isLast = Math.abs(left) >= ul.width() - o.width();
        }
      }
    });
  }
});

//versions
$(function () {
  /* function dtReport(eventCode, eventValue) {
      return window._dt_event_bus && window._dt_event_bus.emit && window._dt_event_bus.emit(eventCode, eventValue);
    } */

  $(".ver_show_more").on("click", function () {
    var isShowMore = $(".ver_item_hidden").length;
    $(".ver_item_hidden, .ver_item_state")
      .removeClass(isShowMore ? "ver_item_hidden" : "ver_item_state")
      .addClass(isShowMore ? "ver_item_state" : "ver_item_hidden");

    $(this).text(isShowMore ? "Show Less" : "Show More");
    // dtReport("old_version_more", "");
    // $(this).attr("data-dt-type", isShowMore ? "show_less" : "show_more");
  });
});

//news
$(function () {
  if ($(".horizontal-article-list-container").length) {
    new Swiper(".horizontal-article-list-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 4,
      spaceBetween: 8,
      loopedSlides: 6,
      mousewheel: {
        releaseOnEdges: true,
        forceToAxis: true,
        invert: true,
      },
      loop: true,
      keyboard: {
        enabled: true,
      },
      lazy: {
        loadPrevNext: true,
      },
    });
  }
  if ($(".statistics-article-list-container").length) {
    new Swiper(".statistics-article-list-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 4,
      spaceBetween: 8,
      loopedSlides: 6,
      loop: true,
      mousewheel: {
        releaseOnEdges: true,
        forceToAxis: true,
        invert: true,
      },
      keyboard: {
        enabled: true,
      },
      loop: true,
      lazy: {
        loadPrevNext: true,
      },
    });
  }
  new LazyLoad({
    elements_selector: ".lazy",
    data_src: "original",
    threshold: 200,
  });

  (function () {
    $(".backToTop").click(function () {
      $("html, body").animate({ scrollTop: $(".article-container").offset().top }, 300);
    });
  })();
});

//search tab
var $webSearch = {
  shiftArticleOrder: function () {
    $(".search-app-order-btn").hide();
    $(".search-app-order-btn-" + articlesOrder).show();
    $(".search-app-order-options").hide();
    if (articlesOrder === "newest") {
      $(".sa-articles-newest").show();
      $(".sa-articles-most").hide();
    } else {
      $(".sa-articles-newest").hide();
      $(".sa-articles-most").show();
    }
  },
  showTabByType: function (switchType) {
    ["all", "apps", "articles"].forEach(function (type) {
      if (type !== switchType) {
        $(".sa-" + type + "-div").hide();
        $(".search-app-tab").removeClass("active");
      }
    });
    $(".sa-" + switchType + "-div").show();
    if (switchType === "articles") {
      $webSearch.shiftArticleOrder();
    }
    if (switchType === "all") {
      $(".single-app-recommend-card").show();
      $(".simple-recommend-card").show();
    } else {
      $(".single-app-recommend-card").hide();
      $(".simple-recommend-card").hide();
    }
    $(".search-app-tab-" + switchType).addClass("active");
  },
};

var articlesOrder = "newest";

$(".search-app-tab").click(function () {
  $webSearch.showTabByType($(this).data("type"));
});

$(".showmore-apps").click(function () {
  $webSearch.showTabByType("apps");
});

$(".showmore-articles").click(function () {
  $webSearch.showTabByType("articles");
});

$(".search-app-order").click(function () {
  $(".search-app-order-options").toggle();
});

$(".search-app-order-option").click(function () {
  articlesOrder = $(this).data("order");
  $webSearch.shiftArticleOrder();
});
