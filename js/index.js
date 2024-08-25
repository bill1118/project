$('.menu a').click(function () {
    let btn = $(this).attr('href');/* 返回取得屬性與值 */
    let pos = $(btn).offset();/* 抓與相對的座標位置 */
    $('html,body').animate({ scrollTop: pos.top }, 3000);
});

$('#gotop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 1000);
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#gotop').stop().fadeTo('slow', 1);
    } else {
        $('#gotop').stop().fadeOut('slow');
    }
});