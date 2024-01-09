const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const operator = document.getElementById('operator');
let result = document.getElementById('result');

function calculate(value1, value2, operator) {
    value1 = Number(document.getElementById('value1').value);
    value2 = Number(document.getElementById('value2').value);
    operator = document.getElementById('operator').value;

    console.log(value1, value2, operator);
    if (operator === '+') {
        document.getElementById('result').value = value1 + value2;
    } else if (operator === '-') {
        document.getElementById('result').value = value1 - value2;
    } else if (operator === '*') {
        document.getElementById('result').value = value1 * value2;
    } else if (operator === '/') {
        document.getElementById('result').value = value1 / value2;
    } else {
        document.getElementById('result').value = '잘못된 연산자 입니다.';
    }
}
function reset() {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
    document.getElementById('operator').value = '';
    document.getElementById('result').value = '';
}
