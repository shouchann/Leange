 // ページ内リンクのみ取得
 var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300,//スクロールする速さ
    header: '#header'//固定ヘッダーがある場合
   });

   $(function () {
    var $header = $("#menu");
    var scrollSize = 300; //超えると表示
    $(window).on("load scroll", function () {
      var value = $(this).scrollTop();
      if (value > scrollSize) {
        $header.addClass("scroll");
      } else {
        $header.removeClass("scroll");
      }
    });
  });

  $(function () {
    var $header = $("#home-btn");
    var scrollSize = 500; //超えると表示
    $(window).on("load scroll", function () {
      var value = $(this).scrollTop();
      if (value > scrollSize) {
        $header.addClass("btn");
      } else {
        $header.removeClass("btn");
      }
    });
  });
