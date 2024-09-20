document.addEventListener('DOMContentLoaded', function() {
    const collapsible = document.getElementById('collapsible');
    const headphoneIcon = document.getElementById('butler');
    const closeBtn = document.getElementById('close-btn');

    // 明確設置初始狀態為隱藏
    collapsible.style.visibility = 'hidden';

    // 點擊耳機圖標後顯示/隱藏收合視窗
    headphoneIcon.addEventListener('click', function() {
        if (collapsible.style.visibility === 'hidden') {
            collapsible.style.visibility = 'visible'; // 顯示視窗
        } else {
            collapsible.style.visibility = 'hidden'; // 隱藏視窗
        }
    });

    // 點擊關閉按鈕來隱藏視窗
    closeBtn.addEventListener('click', function() {
        collapsible.style.visibility = 'hidden'; // 隱藏視窗
    });
});