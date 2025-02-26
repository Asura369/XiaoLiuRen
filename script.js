function getCurrentLunarHour() {
    const hour = new Date().getHours();
    // Map hours to 时辰 (1-12)
    if (hour >= 23 || hour < 1) return 1;  // 子时 23:00-00:59
    if (hour >= 1 && hour < 3) return 2;   // 丑时 1:00-2:59
    if (hour >= 3 && hour < 5) return 3;   // 寅时 3:00-4:59
    if (hour >= 5 && hour < 7) return 4;   // 卯时 5:00-6:59
    if (hour >= 7 && hour < 9) return 5;   // 辰时 7:00-8:59
    if (hour >= 9 && hour < 11) return 6;  // 巳时 9:00-10:59
    if (hour >= 11 && hour < 13) return 7; // 午时 11:00-12:59
    if (hour >= 13 && hour < 15) return 8; // 未时 13:00-14:59
    if (hour >= 15 && hour < 17) return 9; // 申时 15:00-16:59
    if (hour >= 17 && hour < 19) return 10;// 酉时 17:00-18:59
    if (hour >= 19 && hour < 21) return 11;// 戌时 19:00-20:59
    return 12; // 亥时 21:00-22:59
}

function getLunarHourName(index) {
    const lunarHours = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
    return lunarHours[index - 1] + "时";
}

function getTimeRange(hourIndex) {
    const timeRanges = {
        1: "23:00-00:59",
        2: "01:00-02:59",
        3: "03:00-04:59",
        4: "05:00-06:59",
        5: "07:00-08:59",
        6: "09:00-10:59",
        7: "11:00-12:59",
        8: "13:00-14:59",
        9: "15:00-16:59",
        10: "17:00-18:59",
        11: "19:00-20:59",
        12: "21:00-22:59"
    };
    return timeRanges[hourIndex];
}

function showResult() {
    const today = moment();
    const lunar = today.lunar();
    const month = lunar.month() + 1;
    const day = lunar.date();
    const currentHour = getCurrentLunarHour();

    // Display current Gregorian date
    document.getElementById('gregorianDate').innerHTML =
        `公历：${moment().format('YYYY年MM月DD日 HH:mm')}`;

    // Display current lunar date and hour
    const lunarMonths = ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "冬月", "腊月"];
    const lunarDays = ["初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十",
                      "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
                      "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十"];
    document.getElementById('lunarDate').innerHTML =
        `农历：${lunarMonths[month-1]} ${lunarDays[day-1]} ${getLunarHourName(currentHour)}`;

    // Calculate result
    const calculation = (month + day + currentHour - 2) % 6;
    const resultIndex = calculation === 0 ? 6 : calculation;

    const results = ["大安", "留连", "速喜", "赤口", "小吉", "空亡"];
    const result = results[resultIndex - 1];

    // Update current hour display
    document.getElementById('currentHour').innerHTML =
        `${getLunarHourName(currentHour)} (${getTimeRange(currentHour)})`;
    document.getElementById('currentResult').innerHTML = result;

    // Set result color based on type
    const currentResult = document.getElementById('currentResult');
    currentResult.className = 'display-4 py-3 rounded';
    currentResult.classList.add([1, 3, 5].includes(resultIndex) ? 'good' : 'bad');
}

// Update result every minute to keep time current
setInterval(showResult, 60000);

// Call showResult when page loads
window.onload = showResult;
