function calcFunc() {
    let value1 = Number(document.getElementById('value1').value);
    let value2 = Number(document.getElementById('value2').value);
    let op = document.getElementById('operator').value;
    let result = document.getElementById('result');
    let calResult = 0;

    if (op === '+') {
        calResult = value1 + value2;
    } else if (op === '-') {
        calResult = value1 - value2;
    } else if (op === '*') {
        calResult = value1 * value2;
    } else if (op === '/') {
        calResult = value1 / value2;
    }
    result.value = calResult;
}

function resetFunc() {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
    document.getElementById('operator').value = '';
    document.getElementById('result').value = '';
}
