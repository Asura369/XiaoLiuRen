
function showResult() {
    resultList = ["大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡", "大安", "留连", "速喜", "赤口", "小吉", "空亡"]
    
    month = document.getElementById('month').value
    day = document.getElementById('day').value

    one = resultList[month - 1]
    resultList = resultList.slice(month - 1)
    two = resultList[day - 1]
    resultList = resultList.slice(day - 1)

    for (let i = 1; i <= 12; i++) {
        document.getElementById('row' + i).setAttribute('class', '')  
    }

    for (let i = 1; i <= 12; i++) {
        document.getElementById('result' + i).innerHTML = resultList[i - 1]
        if (resultList[i - 1] == "大安") {
            document.getElementById('stock' + i).innerHTML = "守成"
        }
        else if (resultList[i - 1] == "留连") {
            document.getElementById('stock' + i).innerHTML = "小跌"
            document.getElementById('row' + i).setAttribute('class', 'table-danger')
        }
        else if (resultList[i - 1] == "速喜") {
            document.getElementById('stock' + i).innerHTML = "大涨"
            document.getElementById('row' + i).setAttribute('class', 'table-success')
        }
        else if (resultList[i - 1] == "赤口") {
            document.getElementById('stock' + i).innerHTML = "大跌"
            document.getElementById('row' + i).setAttribute('class', 'table-danger')
        }
        else if (resultList[i - 1] == "小吉") {
            document.getElementById('stock' + i).innerHTML = "小涨"
            document.getElementById('row' + i).setAttribute('class', 'table-success')
        }
        else if (resultList[i - 1] == "空亡") {
            document.getElementById('stock' + i).innerHTML = "大跌"
            document.getElementById('row' + i).setAttribute('class', 'table-danger')
        }
        else {
            document.getElementById('stock' + i).innerHTML = "!"
        }
    }

    
}
