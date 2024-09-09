let scrolled = false;

const handleScroll = () => {
    const topbar = document.getElementById('container-topbar');
    if (window.scrollY > window.innerHeight * 1) {
        if (!scrolled) {
            scrolled = true;
            topbar.classList.add('scrolled'); // 為 header 元素添加 class
        }
    } else {
        if (scrolled) {
            scrolled = false;
            topbar.classList.remove('scrolled'); // 移除 class
        }
    }
};

function scrollToTop() {
    $('html, body').animate({ scrollTop: 0 }, 1000);  // 平滑滾動到頂部
}

// 添加滾動事件監聽
window.addEventListener('scroll', handleScroll);

// 在頁面卸載時移除滾動事件監聽
window.addEventListener('beforeunload', () => {
    window.removeEventListener('scroll', handleScroll);
});


$('.menu a').click(function () {
    let btn = $(this).attr('href');/* 返回取得屬性與值 */
    let pos = $(btn).offset();/* 抓與相對的座標位置 */
    $('html,body').animate({ scrollTop: pos.top }, 3000);

});


$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#gotop').stop().fadeTo('slow', 1);
    } else {
        $('#gotop').stop().fadeOut('slow');
    }
});


