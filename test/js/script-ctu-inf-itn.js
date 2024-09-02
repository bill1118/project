$(function () { /* document ready 一個js檔只要執行一次就可以 */


    // 滑動至頂
    $('#gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });

    // 折疊式菜單切換
    // 折疊式菜單切換
    $('.menu-icon').click(function () {
        $('#container-topbar .navigation .menu').toggleClass('active');
        
    });

});
