$('.menu a').click(function () {
    let btn = $(this).attr('href');/* 返回取得屬性與值 */
    let pos = $(btn).offset();/* 抓與相對的座標位置 */
    $('html,body').animate({ scrollTop: pos.top}, 3000);
    
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#gotop').stop().fadeTo('slow', 1);
    } else {
        $('#gotop').stop().fadeOut('slow');
    }
});


function scroll(){
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollP = (scrollPosition / windowHeight) * 100;
    
    if (scrollP> 20) {        
        console.log('y');
        textElement.classList.add('changeColor'); 
    } else {
        console.log('n');
        textElement.classList.remove('changeColor'); 
    }
    // handleScroll = (event) =>{
    //     console.log('Scrolled!', event.target.scrollTop);
    // }
}



window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollP = (scrollPosition / windowHeight) * 100;
    

    if (scrollP> 20) {        
        console.log('y');
        textElement.classList.add('changeColor'); 
    } else {
        console.log('n');
        textElement.classList.remove('changeColor'); 
    }
});


/* 彈跳視窗 */
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("btn");
// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//     modal.style.display = "block";
// }

// span.onclick = function() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

