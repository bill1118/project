import React, { useEffect, useRef } from 'react';

function BirthdaySelector() {
    const monthSelectRef = useRef(null);

    useEffect(() => {
        const monthSelect = monthSelectRef.current;
        if (monthSelect) {
            // 清空现有选项
            monthSelect.innerHTML = '';

            const months = [
                { value: "1", text: "一月" },
                { value: "2", text: "二月" },
                { value: "3", text: "三月" },
                { value: "4", text: "四月" },
                { value: "5", text: "五月" },
                { value: "6", text: "六月" },
                { value: "7", text: "七月" },
                { value: "8", text: "八月" },
                { value: "9", text: "九月" },
                { value: "10", text: "十月" },
                { value: "11", text: "十一月" },
                { value: "12", text: "十二月" }
            ];

            const currentMonth = new Date().getMonth() + 1;

            months.forEach(month => {
                const option = document.createElement('option');
                option.value = month.value;
                option.textContent = month.text;
                if (parseInt(month.value) === currentMonth) {
                    option.selected = true;
                }
                monthSelect.appendChild(option);
            });
        }
    }, []);

    return (

        <select ref={monthSelectRef} name="month">
            <option value="">選擇月分</option>
        </select>

    );
}


