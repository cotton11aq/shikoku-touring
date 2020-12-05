// ハンバーガーメニュー
$(function () {
  $(function () {
    $('#menu_icon').on('click', function () {
      $('header').toggleClass('open');
    });
  });
});

// トップページ以下でのハンバーガーの色変更
var mvh = $('.mv').height();

$(window).scroll(function () {
  var top = $(window).scrollTop();
  if (mvh > top) {
    $('#menu_icon div span').css('background-color', '#fff');
  } else {
    $('#menu_icon div span').css('background-color', '#000');
  }
});


// ハンバーガーをクリックしたときの色変更
$('#menu_icon').on('click', function () {
  $('#menu_icon div span').toggleClass('isActive');
})

// 下へスクロール
$('.nav_toggle').on('click', function () {
  $('.nav_toggle, .nav').toggleClass('show');
});

// スムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
    //スクロールのスピード
    var speed = 1000;
    //リンク元を取得
    var href = $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    var position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

// トリガー01
$(function () {
  $(".spot-dropdown").hide();
  $(".spot-btn-more").click(function () {
    $(".triger01").prev().slideToggle();
    $(".spot-btn-more").toggleClass("close");
  });
});

// トリガー02
$(function () {
  $(".spot02-dropdown").hide();
  $(".spot02-btnmore").click(function () {
    $(".triger02").prev().slideToggle();
    $(".spot02-btnmore").toggleClass("close");
  });
});

// トリガー03
$(function () {
  $(".spot-dropdown").hide();
  $(".spot-btn-more03").click(function () {
    $(".triger03").prev().slideToggle();
    $(".spot-btn-more03").toggleClass("close");
  });
});

// トリガー04
$(function () {
  $(".spot02-dropdown").hide();
  $(".spot02-btnmore04").click(function () {
    $(".triger04").prev().slideToggle();
    $(".spot02-btnmore04").toggleClass("close");
  });
});

// トリガー05
$(function () {
  $(".spot-dropdown").hide();
  $(".spot-btn-more05").click(function () {
    $(".triger05").prev().slideToggle();
    $(".spot-btn-more05").toggleClass("close");
  });
});

// トリガー06
$(function () {
  $(".spot02-dropdown").hide();
  $(".spot02-btnmore06").click(function () {
    $(".triger06").prev().slideToggle();
    $(".spot02-btnmore06").toggleClass("close");
  });
});

// トリガー07
$(function () {
  $(".spot-dropdown").hide();
  $(".spot-btn-more07").click(function () {
    $(".triger07").prev().slideToggle();
    $(".spot-btn-more07").toggleClass("close");
  });
});

// マップアイコンのフェードイン
$(window).scroll(function () {
  // クラスを追加するwindowの位置を設定
  var scrollTop = $(this).scrollTop();
  var scrollBottom = scrollTop + $(this).height();
  var effectPos = scrollBottom + 200;

  // eachでliを順番に処理
  $("li").each(function (i) {
    if (effectPos > $(this).offset().top) {
      var that = this;

      // 0.2s毎にずれて表示
      setTimeout(function () {
        $(that).addClass("fadein");
      }, 200 * i); //200
    }
  });
});

// トップページフェード
$(function(){
  $(".main02-text").css({opacity:'0'});
  setTimeout(function(){
      $(".main02-text").stop().animate({opacity:'1'},1000);
  },2000);
});

// トップページサークルフェード
window.onload = setTimeout(function(){
  document.getElementById('wrap').classList.add('is-show')
},1500);

// トップページパララックス
jQuery( window ).bind( 'scroll', function() {
  scrolled = jQuery( window ).scrollTop();
  weight1 = 0.3;
  jQuery( '.parallax1' ).css( 'top', 0 - scrolled * weight1 + 'px' );
});

// トップページパララックス（2ページ目以降）
jQuery( window ).bind( 'scroll', function() {
  scrolled = jQuery( window ).scrollTop();
  weight1 = 0.3;
  jQuery( '.parallax2' ).css( 'top', 0 - scrolled * weight1 + 'px' );
});

// スマホスライドショー
$(function(){
  //（１）ページの概念・初期ページを設定
  var page=0;
  
  //（２）イメージの数を最後のページ数として変数化
  var lastPage =parseInt($(".top-slidesp img").length-1);
  
  //（３）最初に全部のイメージを一旦非表示にします
  $(".top-slidesp img").css("display","none");
  
  //（４）初期ページを表示
  $(".top-slidesp img").eq(page).css("display","block");
  
  //（５）ページ切換用、自作関数作成
  function changePage(){
  $(".top-slidesp img").fadeOut(1000);
  $(".top-slidesp img").eq(page).fadeIn(1000);
  };
  
  //（６）～秒間隔でイメージ切換の発火設定
  var Timer;
  function startTimer(){
  Timer =setInterval(function(){
    if(page === lastPage){
      page = 0;
      changePage();
      }else{
      page ++;
      changePage();
    };
  },3000);
  }
  //（７）～秒間隔でイメージ切換の停止設定
  function stopTimer(){
  clearInterval(Timer);
  }
  
  //（８）タイマースタート
  startTimer();
  
  /*オプションを足す場合はここへ記載*/
});

// pcスライドショー
$(function ($) {
  $('.top-slidepc').bgSwitcher({
    images: ['assets/img/top/pc/karusuto-min.jpg','assets/img/top/pc/riturin-min.jpg','assets/img/top/pc/sadamisaki-min.jpg','assets/img/top/pc/kazurabashi-min.jpg','assets/img/top/pc/ashizurimisaki-min.jpg','assets/img/top/pc/naruto-min.jpg','assets/img/top/pc/shikoku01-min.jpg','assets/img/top/pc/shikoku02-min.jpg','assets/img/top/pc/shikoku03-min.jpg','assets/img/top/pc/shikoku04-min.jpg'],
    interval: 3000,
    loop: true,
    shuffle: false,
    effect: "fade", // fade,blind,clip,slide,drop,hide
    duration: 1000,
    easing: "swing" // linear,swing
  });
});

//スポットフェードイン
$(window).scroll(function (){
  $('.fade').each(function(){
    var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 50){
        $(this).addClass('scrollin');
    }
  });
});

// ページ読み込みフェードイン（2ページ目以降）
$('.index02').append(
  '<style>.index02{display:none;}'
  );
$(window).on("load", function() {
$('.index02').delay(100).fadeIn("slow");
});

// スマホブラウザの高さ固定
$('.parallax1').css('height',$(window).height());
$('.parallax2').css('height',$(window).height());