function setTodayLunar() {
    const today = moment();
    const lunar = today.lunar();

    // Add 1 to month since moment-lunar months are 0-based
    document.getElementById('month').value = lunar.month() + 1;
    document.getElementById('day').value = lunar.date();

    // Trigger calculation after setting the date
    showResult();
}

function showResult() {
    const today = moment();
    const lunar = today.lunar();
    const month = lunar.month() + 1;  // Add 1 since moment-lunar months are 0-based
    const day = lunar.date();

    // Display current lunar date
    const lunarMonths = ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "冬月", "腊月"];
    const lunarDays = ["初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十",
                      "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
                      "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十"];
    document.getElementById('lunarDate').innerHTML = `今日农历：${lunarMonths[month-1]} ${lunarDays[day-1]}`;

    resultList = ["大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡"]

    resultList = resultList.slice(month - 1)
    resultList = resultList.slice(day - 1)

    for (let i = 1; i <= 12; i++) {
        document.getElementById('row' + i).setAttribute('class', '')
    }

    for (let i = 1; i <= 12; i++) {
        document.getElementById('result' + i).innerHTML = resultList[i - 1]
        if (resultList[i - 1] == "大安") {
            document.getElementById('row' + i).setAttribute('class', 'table-success')
        }
        else if (resultList[i - 1] == "留连") {
            document.getElementById('row' + i).setAttribute('class', 'table-danger')
        }
        else if (resultList[i - 1] == "速喜") {
            document.getElementById('row' + i).setAttribute('class', 'table-success')
        }
        else if (resultList[i - 1] == "赤口") {
            document.getElementById('row' + i).setAttribute('class', 'table-danger')
        }
        else if (resultList[i - 1] == "小吉") {
            document.getElementById('row' + i).setAttribute('class', 'table-success')
        }
        else if (resultList[i - 1] == "空亡") {
            document.getElementById('row' + i).setAttribute('class', 'table-danger')
        }
        else {
            document.getElementById('stock' + i).innerHTML = "!"
        }
    }
}

// Call showResult when page loads
window.onload = showResult;
