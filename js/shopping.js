document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.option1'); // 選取所有商品項目
    const selectAllCheckbox = document.querySelector('input[name="all"]'); // 全選的 checkbox
    const totalPriceElement = document.querySelector('.option2 .total span'); // 總金額元素

    // 更新總金額
    const updateTotalPrice = () => {
        let totalPrice = 0;
        items.forEach(item => {
            const isChecked = item.querySelector('input[type="checkbox"]').checked; // 檢查是否選中
            const itemTotal = parseFloat(item.querySelector('.total span').textContent.replace('$', '')); // 取得每個商品的總價，移除 "$" 符號
            if (isChecked) {
                totalPrice += itemTotal; // 若選中，將其總價加入總金額
            }
        });
        totalPriceElement.textContent = `$${totalPrice}`; // 更新總金額顯示，並確保有 "$" 符號
    };

    // 遍歷每個商品項目
    items.forEach(item => {
        const plusBtn = item.querySelector('.plus'); // 加號按鈕
        const minusBtn = item.querySelector('.minus'); // 減號按鈕
        const quantityInput = item.querySelector('input[type="text"]'); // 數量輸入框
        const priceElement = item.querySelector('.price span'); // 單價顯示
        const totalElement = item.querySelector('.total span'); // 總價顯示
        const checkbox = item.querySelector('input[type="checkbox"]'); // 每個商品的 checkbox

        const price = parseFloat(priceElement.textContent.replace('$', '')); // 獲取單價，移除 "$" 符號

        // 更新商品總價
        const updateItemTotal = () => {
            const quantity = parseInt(quantityInput.value); // 取得數量
            const total = price * quantity; // 計算總價
            totalElement.textContent = `$${total}`; // 更新總價顯示，並確保有 "$" 符號
            updateTotalPrice(); // 更新最終總金額
        };

        // 加號按鈕點擊事件
        plusBtn.addEventListener('click', function () {
            quantityInput.value = parseInt(quantityInput.value) + 1; // 增加數量
            updateItemTotal(); // 更新商品總價和總金額
        });

        // 減號按鈕點擊事件
        minusBtn.addEventListener('click', function () {
            if (parseInt(quantityInput.value) > 1) { // 確保數量不小於 1
                quantityInput.value = parseInt(quantityInput.value) - 1; // 減少數量
                updateItemTotal(); // 更新商品總價和總金額
            }
        });

        // 商品 checkbox 的改變事件
        checkbox.addEventListener('change', function () {
            updateTotalPrice(); // 重新計算總金額
        });

        // 初始化總價
        updateItemTotal();
    });

    // 全選 checkbox 的改變事件
    selectAllCheckbox.addEventListener('change', function () {
        const isChecked = selectAllCheckbox.checked; // 檢查全選狀態
        items.forEach(item => {
            item.querySelector('input[type="checkbox"]').checked = isChecked; // 設置每個商品的選中狀態
        });
        updateTotalPrice(); // 更新總金額
    });

    // 初始化總金額
    updateTotalPrice();
});


