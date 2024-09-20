// 設定每個人群對應的價格
const pricePerAdult = 28000;
const pricePerChild = 22000;
const pricePerInfant = 9000;

// 取得下拉選單和價錢顯示的元素
const adultsSelect = document.getElementById('adults');
const childrenSelect = document.getElementById('children');
const infantsSelect = document.getElementById('infants');
const adultsPriceDisplay = document.getElementById('adultsPrice');
const childrenPriceDisplay = document.getElementById('childrenPrice');
const infantsPriceDisplay = document.getElementById('infantsPrice');
const totalPriceDisplay = document.getElementById('totalPrice');

// 當下拉選單變更時執行的函數
function updatePrice() {
    // 取得選定的每個人群數量
    const numberOfAdults = parseInt(adultsSelect.value);
    const numberOfChildren = parseInt(childrenSelect.value);
    const numberOfInfants = parseInt(infantsSelect.value);

    // 計算每個類別的總價錢
    const totalAdultsPrice = numberOfAdults * pricePerAdult;
    const totalChildrenPrice = numberOfChildren * pricePerChild;
    const totalInfantsPrice = numberOfInfants * pricePerInfant;

    // 計算全部總價錢
    const totalPrice = totalAdultsPrice + totalChildrenPrice + totalInfantsPrice;

    // 更新每個群體的價錢顯示
    adultsPriceDisplay.textContent = `$${totalAdultsPrice}`;
    childrenPriceDisplay.textContent = `$${totalChildrenPrice}`;
    infantsPriceDisplay.textContent = `$${totalInfantsPrice}`;

    // 更新全部總價錢顯示
    totalPriceDisplay.textContent = `$${totalPrice}`;
}

// 綁定三個下拉選單的 change 事件
adultsSelect.addEventListener('change', updatePrice);
childrenSelect.addEventListener('change', updatePrice);
infantsSelect.addEventListener('change', updatePrice);

// 初始化顯示價格
updatePrice();
