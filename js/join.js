// 設定每個人對應的價格
const pricePerPerson = 12000;

// 取得下拉選單和價錢顯示的元素
const peopleSelect = document.getElementById('people');
const priceDisplay = document.getElementById('price');

// 當下拉選單變更時執行的函數
function updatePrice() {
    // 取得選定的人數
    const numberOfPeople = parseInt(peopleSelect.value);

    // 計算總價錢
    const totalPrice = numberOfPeople * pricePerPerson;

    // 更新頁面上的價錢顯示
    priceDisplay.textContent = `$${totalPrice}`;
}

// 綁定下拉選單的 change 事件
peopleSelect.addEventListener('change', updatePrice);

