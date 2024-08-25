document.addEventListener('DOMContentLoaded', function() {
    const yearSelect = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    const startYear = 1900; // 可根據需要更改起始年份

    for (let year = currentYear; year >= startYear; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
});
