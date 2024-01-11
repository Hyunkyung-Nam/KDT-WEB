function addClass() {
    $('#hi').addClass('font-size');
}
function removeClass() {
    // $('#hi').removeClass('font-size'); // 특정클래스 삭제
    $('#hi').removeClass(); //모든 클랙스가 다 삭제
}
function hasClass() {
    console.log($('#hi').hasClass('font-size')); //true/false 반환
}
function toggleClass() {
    $('#hi').toggleClass('bg-color');
}
function switchClass() {
    $('#hi').switchClass('color-blue', 'color-red', 1000); //1000이 1 초
}
