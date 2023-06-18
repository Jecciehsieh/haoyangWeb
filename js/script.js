// 換圖輪播
function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);

}

var bannerTimer = setInterval(bannerSwitcher, 5000);

$('nav .controls label').click(function () {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
});

// 啟用Jquery smoove
// 這段代碼因為顯示以下錯誤 Uncaught TypeError: $(...).smoove is not a function at script.js:17:14
// 所以我嘗試加了$(document).ready(function() { });
$(document).ready(function() {
    $('.smoove').smoove({
        offset:'30%'
    });
});

// 作品案例頁_Tabs切換功能
$(document).ready(function() {
    $('.tab-link').click(function(event) {
        event.preventDefault();

        var target = $(this).attr('href'); // 獲取目標元素的 id

        // 隱藏所有選項卡內容
        $('.tab-content').hide();

        // 顯示選中的選項卡內容
        $(target).show();

        // 讓容器跟著調整自己的高度
        let currentHeight = $(target).outerHeight(); // outerHeight() 包含了 padding 和 border 的高度
        let newHeight = currentHeight + 50; // 在 JavaScript 中進行計算
        $('#tab_all').height(newHeight); // 設定新的高度
    });
});
// 作品案例頁_選單hover
$(document).ready(function(){
    $('.project_menu li').hover(
        function() {
            $(this).find('.tabs_bar').toggleClass('bar-active');
        }
    );
});
// 作品案例頁_建築幕牆nav點擊彈出
$(function(){
    $('.tabs-2_button').click(function() {
        $('.side-menu-wrap').toggleClass('active');
    });
    // 當這些按鈕被點擊時，將移除 .side-menu-wrap 的 active 類
    $('.tabs-1_button, .tabs-3_button, .tabs-4_button, .tabs-5_button').click(function() {
        $('.side-menu-wrap').removeClass('active');
    });
});


//navbar轉換
$(document).ready(function() { 
    $(window).scroll(function() { 
    if($(this).scrollTop() > 200) {
        $('#topbar').addClass('white_topbar'); 
        $('.nav_item').addClass('nav_text_color'); 
        $('#nav_logo').html('<img src="./images/img_haoyang_logo_color.svg" alt="豪陽建築logo">'); 
        $('.white_outline_btn').addClass('nav_btn'); 
        $('.bar').addClass('bar_darkblue'); 

    } else {
        $('#topbar').removeClass('white_topbar'); 
        $('.nav_item').removeClass('nav_text_color'); 
        $('#nav_logo').html('<img src="./images/img_haoyang_logo_white.svg" alt="豪陽建築logo">');
        $('.white_outline_btn').removeClass('nav_btn'); 
        $('.bar').removeClass('bar_darkblue'); 
    }
    });
});

//navbar RWD hamburger
$(document).ready(function () {
    
    // 漢堡按鈕
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
        //點擊後navbar變白色底
        $('#topbar').addClass('white_topbar'); 
        $('.nav_item').addClass('nav_text_color'); 
        $('#nav_logo').html('<img src="./images/img_haoyang_logo_color.svg" alt="豪陽建築logo">'); 
        $('.white_outline_btn').addClass('nav_btn'); 
        $('.bar').addClass('bar_darkblue'); 
    });

});

// 首頁_服務流程動畫
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll_service = $(window).scrollTop();
        if (scroll_service > 800) {
            $('.process-1').find('.small').css("animation-name", "circle_small").show().css('opacity', '1');
            $('.process-1').animate({opacity: 1}, 1000);

            $('.process-2').find('.small').css("animation-name", "circle_small").show().css('opacity', '1');
            $('.process-2').delay(1000).animate({opacity: 1}, 1000);

            $('.process-3').find('.small').css("animation-name", "circle_small").show().css('opacity', '1');
            $('.process-3').delay(3000).animate({opacity: 1}, 1000);

            $('.process-4').find('.small').css("animation-name", "circle_small").show().css('opacity', '1');
            $('.process-4').delay(5000).animate({opacity: 1}, 1000);

            $('.svg-arrow_box-1').delay(500).animate({opacity: 1}, 1000).find('.svg-arrow-1').css("animation-name", "moveRight-1");
            $('.svg-arrow-3').delay(6000).animate({opacity: 1}, 1000);

            $('.process-5').find('.small').css("animation-name", "circle_small").show().css('opacity', '1');
            $('.process-5').delay(7000).animate({opacity: 1}, 1000);

            $('.process-6').find('.small').css("animation-name", "circle_small").show().css('opacity', '1');
            $('.process-6').delay(8000).animate({opacity: 1}, 1000);

            $('.process-7').find('.small').css("animation-name", "circle_small").show().css('opacity', '1');
            $('.process-7').delay(9000).animate({opacity: 1}, 1000);

            $('.svg-arrow_box-2').delay(7000).animate({opacity: 1},1500).find('.svg-arrow-2').css("animation-name", "moveRight-2").fadeIn(1000);
        }
    });
});
// 首頁_服務流程動畫_最初版本秒數 
// $(document).ready(function() {
//     $(window).scroll(function() {
//         var scroll_service = $(window).scrollTop();
//         if (scroll_service > 800) {
//             $('.process-1').find('.small').css("animation-name", "circle_small").show().css('opacity', '1');
//             $('.process-1').animate({opacity: 1}, 1000);

//             $('.process-2').find('.small').css("animation-name", "circle_small").show().css('opacity', '1');
//             $('.process-2').delay(2000).animate({opacity: 1}, 1000);

//             $('.process-3').find('.small').css("animation-name", "circle_small").show().css('opacity', '1');
//             $('.process-3').delay(4000).animate({opacity: 1}, 1000);

//             $('.process-4').find('.small').css("animation-name", "circle_small").show().css('opacity', '1');
//             $('.process-4').delay(6000).animate({opacity: 1}, 1000);

//             $('.svg-arrow_box-1').delay(1000).animate({opacity: 1}, 1000).find('.svg-arrow-1').css("animation-name", "moveRight-1");
//             $('.svg-arrow-3').delay(7000).animate({opacity: 1}, 1000);

//             $('.process-5').find('.small').css("animation-name", "circle_small").show().css('opacity', '1');
//             $('.process-5').delay(8000).animate({opacity: 1}, 1000);

//             $('.process-6').find('.small').css("animation-name", "circle_small").show().css('opacity', '1');
//             $('.process-6').delay(9000).animate({opacity: 1}, 1000);

//             $('.process-7').find('.small').css("animation-name", "circle_small").show().css('opacity', '1');
//             $('.process-7').delay(10000).animate({opacity: 1}, 1000);

//             $('.svg-arrow_box-2').delay(8000).animate({opacity: 1},1500).find('.svg-arrow-2').css("animation-name", "moveRight-2").fadeIn(1000);
//         }
//     });
// });

// 首頁_服務流程_RWD切換 
// 網頁一載入就偵測
$(document).ready(checkViewport);
// 視窗變更大小時再偵測一次
$(window).resize(checkViewport);
// 定義一個檢查視窗大小的函數，用來被偵測
function checkViewport() {
    var viewportWidth = $(window).width();
    if (viewportWidth <= 768) {
        // 手機或平板視圖小於768px
        $('.service_flowchart').show();
        $('.service_process_all').hide();
    } else {
        // 桌面視圖
        $('.service_flowchart').hide();
        $('.service_process_all').show();
    }
}




// 首頁_作品案例_slick輪轉 
$('.works_box').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    // slick的響應式
    responsive: [
        {
        breakpoint: 1535,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
});
// 原始_參考用
// $('.works_box').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     dots: true,
// });