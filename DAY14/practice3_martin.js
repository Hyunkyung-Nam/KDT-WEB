let target;
$('td > p').on('click', function () {
    let date = $(this).text();
    $('#inputDate').val(date);

    target = this;
});

function writeSchedule() {
    let content = $('#inputContent').val();
    $(target).parent().append(`<span>${content}</span>`);

    $('#inputContent').val('');
    $('#inputDate').val('');
}
