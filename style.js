 // ページ内リンクのみ取得
 var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300,//スクロールする速さ
    header: '#header'//固定ヘッダーがある場合
   });