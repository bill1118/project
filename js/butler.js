// 確保 DOM 加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 一開始隱藏視窗
    const collapsible = document.getElementById('collapsible');
    collapsible.style.display = 'none';

    // 取得耳機圖標和收合視窗元素
    const headphoneIcon = document.getElementById('butler');
    const closeBtn = document.getElementById('close-btn');

    // 點擊耳機圖標後顯示/隱藏收合視窗
    headphoneIcon.addEventListener('click', function() {
        if (collapsible.style.display === 'none' || collapsible.style.display === '') {
            collapsible.style.display = 'block'; // 顯示視窗
        } else {
            collapsible.style.display = 'none'; // 隱藏視窗
        }
    });

    // 點擊關閉按鈕來隱藏視窗
    closeBtn.addEventListener('click', function() {
        collapsible.style.display = 'none'; // 隱藏視窗
    });
});