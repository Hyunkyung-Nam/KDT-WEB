$('.inputBtnSection').click(function () {
    const date = $('#inputDate');
    const content = $('#inputContent');
    const inputCalenderContent = `<p>* ${content.val()}</p>`;

    $(`#calenderDate${date.val()}`).append(inputCalenderContent);
    $(`#calenderDate${date.val()}`).children().css({ 'font-size': '14px', color: 'black', 'text-align': 'left' });

    date.val('');
    content.val('');
});
