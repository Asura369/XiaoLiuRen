// Maps current hour to traditional Chinese 时辰 (1-12)
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

// Converts 时辰 number to Chinese character with 时 suffix
function getLunarHourName(index) {
    const lunarHours = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
    return lunarHours[index - 1] + "时";
}

// Returns the time range for a given 时辰
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

// Calculates the 六壬 result based on lunar month, day, and hour
function getResultByLooping(month, day, hour) {
    const results = {
        1: "大安",
        2: "留连",
        3: "速喜",
        4: "赤口",
        5: "小吉",
        6: "空亡"
    };

    // First calculate month index (1-6)
    let currentIndex = month % 6;
    currentIndex = currentIndex === 0 ? 6 : currentIndex; // If remainder is 0, use 6
    console.log("Month Index:", currentIndex);

    // Add days and recalculate index (1-6)
    currentIndex += day;
    currentIndex = ((currentIndex - 1) % 6);
    currentIndex = currentIndex === 0 ? 6 : currentIndex; // If remainder is 0, use 6
    console.log("Day Index:", currentIndex);

    // Add hours and get final index (1-6)
    currentIndex += hour;
    currentIndex = ((currentIndex - 1) % 6);
    currentIndex = currentIndex === 0 ? 6 : currentIndex; // If remainder is 0, use 6
    console.log("Hour Index:", currentIndex);

    return results[currentIndex];
}

// descriptions for each result
const resultDescriptions = {
    "大安": `问感情，安稳和谐
            问工作，平稳安定
            问事业，不易冒进，易于守成。
            问股票，没有太大浮动问学习，学习成绩平稳。
            问身体，身体平安
            问家庭，家庭和睦
            问疾病，病灶在肝胃，或为眼疾
            问运势，易安稳，易正财，不易买彩票股票等偏财。`,

    "留连": `问感情，感情有波动，或过于平淡
            问工作，容易出现小人
            问事业，不易进，以守为主
            问股票，跌的可能性大，不过不会大跌
            问学习，与上次成绩差不多
            问身体，注意湿病
            问家庭，家里有难事。或为财上有困难
            问疾病，病灶在阴湿，或为阴虚阳亏
            问运势，可能有陷阱要诱惑你，一定要分辦清楚，不可轻易做决定`,

    "速喜": `问感情，热恋，如胶似漆
            问工作，有好事发生，鸿运当头
            问事业，易进，速进，抓住机遇
            问股票，大涨
            问学习，会得到理想的成绩
            问身体，注意精神上的疾病，如失眠，熬夜，还要注意上火
            问家庭，如火如茶，风风火火，不着家
            问疾病，病灶在头或心血管疾病，或流行性传染性疾病。烈性疾病
            问运势，运势很好，把握机遇`,

    "赤口": `问感情，吵架，冲动，容易分手
            问工作，急躁，口舌之争
            问事业，不是好时机，守进都不好，易退
            问股票，大跌
            问学习，不好，学生叛逆问身体，有疾病问家庭，经常吵架
            问疾病，病灶在脑，肺，呼吸道，可能是烈性疾病问运势，运势差，犯小人`,

    "小吉": `问感情，感情和谐，有小惊喜
            问工作，顺风顺水
            问事业，得到回报
            问股票，小涨
            问学习，得到心里满意的成绩
            问身体，无病
            问家庭，家庭和睦吉祥
            问疾病，无病，或病快好了
            问运势，吉利，逢凶化吉，吉祥`,

    "空亡": `问感情，感情平淡，或两人直接没有感情
            问工作，没有工作，或无意义的工作
            问事业，易退，不易进或守
            问股票，大跌
            问学习，成绩意外的不理想
            问身体，身体虚弱
            问家庭，可能要分家，或没有家庭
            问疾病，没有疾病，或不治之症，如癌症
            问运势，诸事不吉`
};

// Main function to display results
function showResult() {
    const today = moment();
    const lunar = today.lunar();
    const month = lunar.month() + 1; // Add 1 since moment-lunar months are 0-based
    console.log("month:", month);
    const day = lunar.date();
    console.log("day:", day);
    const currentHour = getCurrentLunarHour();
    console.log("currentHour:", currentHour);

    // Display Gregorian date with time
    document.getElementById('gregorianDate').innerHTML =
        `公历：${moment().format('YYYY年MM月DD日 HH:mm')}`;

    // Display lunar date with 时辰
    const lunarMonths = ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "冬月", "腊月"];
    const lunarDays = ["初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十",
                      "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
                      "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十"];
    document.getElementById('lunarDate').innerHTML =
        `农历：${lunarMonths[month-1]} ${lunarDays[day-1]} ${getLunarHourName(currentHour)}`;

    // Get result using the traditional looping method
    const result = getResultByLooping(month, day, currentHour);

    // Update current hour display
    document.getElementById('currentHour').innerHTML =
        `${getLunarHourName(currentHour)} (${getTimeRange(currentHour)})`;
    document.getElementById('currentResult').innerHTML = result;

    // Update the description display in showResult function
    const description = resultDescriptions[result]
        .split('\n')
        .map(line => line.trim())
        .filter(line => line)
        .map(line => `<div class="description-item">${line}</div>`)
        .join('');
    document.getElementById('resultDescription').innerHTML = description;

    // Apply styling based on result type (good/bad)
    const currentResult = document.getElementById('currentResult');
    currentResult.className = 'display-4 py-3 rounded';
    const resultTypes = {
        1: "大安",   // Good
        2: "留连",   // Bad
        3: "速喜",   // Good
        4: "赤口",   // Bad
        5: "小吉",   // Good
        6: "空亡"    // Bad
    };
    const resultIndex = Object.entries(resultTypes).find(([_, value]) => value === result)[0];
    currentResult.classList.add([1, 3, 5].includes(Number(resultIndex)) ? 'good' : 'bad');
}

// Update display every minute
setInterval(showResult, 60000);

// Initialize on page load
window.onload = showResult;
