$(function () {

    /* 상단 메뉴 */


    /* mid  메뉴 */
    //$('header .header_mid .menu_mid').hide();
    $('.ham').click(function () {
        $("header .header_mid .menu_mid").toggle();
    });

    /* 스크롤 이벤트 시작 */
    $(window).scroll(function () {
        let scTop = $(window).scrollTop();
        //nav
        //console.log(scTop);
        if (scTop > 28) {
            $('header nav ul.gnb>li>.sub_wrap').css('top', '82px');
        } else {
            $('header nav ul.gnb>li>.sub_wrap').css('top', '110px');
        }

        //article 컨텐츠 액션
        let utTop = $('article.youtube').offset().top - 700;
        let evTop = $('article.event').offset().top - 900;
        let mfTop = $('article.mid_full').offset().top - 900;
        let brTop = $('article.brand').offset().top - 900;

        if (scTop >= utTop) {
            $('article.youtube').addClass('on');
        } else {
            $('article.youtube').removeClass('on');
        };
        if (scTop >= evTop) {
            $('article.event').addClass('on');
        } else {
            $('article.event').removeClass('on');
        };
        if (scTop >= mfTop) {
            $('article.mid_full').addClass('on');
        } else {
            $('article.mid_full').removeClass('on');
        };
        if (scTop >= brTop) {
            $('article.brand').addClass('on');
        } else {
            $('article.brand').removeClass('on');
        };
    }); //스크롤 이벤트 end

    /* 메인비쥬얼 슬라이드 */
    let swiper = new Swiper(".ma_slide_wrap", {
        loop: true,
        loopedSlides: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        autoplay: {
            delay: 2800,
            disableOnInteraction: false,
        },

    });


    $('.main_visual .ma_slide_wrap .slide_btnlist .autoplay .auto_play').click(function () {
        swiper.autoplay.start();
        $(this).hide().siblings().show();
    });
    $('.main_visual .ma_slide_wrap .slide_btnlist .autoplay .auto_pause').click(function () {
        swiper.autoplay.stop();
        $(this).hide().siblings().show();
    });



    /* 제품 슬라이드 */
    let swiper2 = new Swiper(".product", {
        slidesPerView: 1,  //초기값 설정 모바일값이 먼저!!
        spaceBetween: 14,
        loop: true,
        loopedSlides: 1,
        //centeredSlides: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            //hide: true,
        },
        breakpoints: {
            1360: {
                slidesPerView: 4.3, //브라우저가 1360보다 클 때
                spaceBetween: 10,
            },
            1030: {
                slidesPerView: 3.2,
                spaceBetween: 10,
            },
            660: {
                slidesPerView: 2,
                spaceBetween: 10,
            },

        },
    });


    /* 오늘의 브랜드 tap */
    $('li.ab').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('section.brand_tab.ab').addClass('on').siblings().removeClass('on');
    });
    $('li.is').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('section.brand_tab.is').addClass('on').siblings().removeClass('on');
    });
    $('li.ip').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('section.brand_tab.ip').addClass('on').siblings().removeClass('on');
    });
});//ready end