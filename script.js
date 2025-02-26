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
    resultList = ["大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡"]

    month = document.getElementById('month').value
    day = document.getElementById('day').value

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
