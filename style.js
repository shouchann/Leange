 // ページ内リンクのみ取得
 var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300,//スクロールする速さ
    header: '#header'//固定ヘッダーがある場合
   });

   function FixedAnime() {
	var headerH = $('#menu').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){//headerの高さ以上になったら
			$('#menu').addClass('fixed');//fixedというクラス名を付与
		}else{//それ以外は
			$('#menu').removeClass('fixed');//fixedというクラス名を除去
		}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});