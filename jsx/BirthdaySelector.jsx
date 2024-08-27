function BirthdaySelector() {
    const [years, setYears] = React.useState([]);
    const [months, setMonths] = React.useState([]);
    const [days, setDays] = React.useState([]);

    React.useEffect(() => {
        const currentYear = new Date().getFullYear();
        const startYear = 1900;
        const yearsArray = [];
        for (let i = currentYear; i >= startYear; i--) {
            yearsArray.push(i);
        }
        setYears(yearsArray);

        const monthsArray = [
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
        setMonths(monthsArray);
    }, []);

    const handleMonthChange = (e) => {
        const month = e.target.value;
        const daysInMonth = new Date(2024, month, 0).getDate(); // 计算月份天数
        const daysArray = [];
        for (let i = 1; i <= daysInMonth; i++) {
            daysArray.push(i);
        }
        setDays(daysArray);
    };

    return (
        <div className="birthday-selector">
            <select name="year">
                <option value="">請選擇年分</option>
                {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
            <select name="month" onChange={handleMonthChange}>
                <option value="">請選擇月分</option>
                {months.map(month => (
                    <option key={month.value} value={month.value}>{month.text}</option>
                ))}
            </select>
            <select name="day">
                <option value="">請選擇日期</option>
                {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                ))}
            </select>
        </div>
    );
}