$(function () {
    findYearFirstDay();
});

function findYearFirstDay() {
    let wantedYear = Number(prompt('원하는 해를 입력하세요(1583년 이후 년도만 입력가능)'));

    while (isNaN(wantedYear) || wantedYear < 1583) {
        wantedYear = Number(prompt('원하는 해를 입력하세요(1583년 이후 년도만 입력가능)'));
    }

    let wantedMonth = Number(prompt('원하는 달을 입력하세요(1~12 입력가능)'));

    while (isNaN(wantedMonth) || wantedMonth < 1 || wantedMonth > 12) {
        wantedMonth = Number(prompt('원하는 달을 입력하세요(1~12 입력가능)'));
    }

    drawCalender(wantedYear, wantedMonth, firstMonthDay(wantedYear, wantedMonth, firstYearDay(wantedYear)));
}

$('.inputBtnSection').click(function () {
    const date = $('#inputDate');
    const content = $('#inputContent');
    const inputCalenderContent = `<p>* ${content.val()}</p>`;

    $(`.day${date.val()}`).append(inputCalenderContent);
    $(`.day${date.val()}`).children().css({ 'font-size': '14px', color: 'black', 'text-align': 'left' });
    date.val('');
    content.val('');
});

function firstYearDay(year) {
    //원하는 년도의 1월 1일 알아내기
    let firstYearDay = 0;

    for (let i = 1583; i < year; i++) {
        //그레그리오력 1583년부터 사용 해당년의 1월 1일이 토요일
        i % 400 === 0 || (i % 4 === 0 && i % 100 !== 0) ? (firstYearDay += 2) : firstYearDay++;
    }

    return (firstYearDay + 6) % 7; //1월 1일이 토요일이기때문에 6을 더해줌.
}

function firstMonthDay(year, month, firstDateDay) {
    let firstMonthDay = firstDateDay;

    if (month === 1) {
        return firstMonthDay;
    }

    for (let i = 1; i < month; i++) {
        month !== 2
            ? (firstMonthDay += month % 7)
            : year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
            ? (firstMonthDay += (month % 7) + 1)
            : (firstMonthDay += month % 7);
    }

    return firstMonthDay % 7;
}

function monthDay(year, month) {
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        return 31;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    }
    //4의배수이면서 100의 배수가 아니거나 400의 배수이면
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) ? 29 : 28;
}

function drawCalender(year, month, firstday) {
    let lastday = monthDay(year, month);
    console.log(lastday);
    let tdNum = firstday;
    $('.calenderHead').text(`${year}년 ${month}월`);

    for (let i = 1; i <= lastday; i++) {
        //아이디랑 속성을 할당시켜줄거임
        if ((i - 1 + firstday) / 7 < 1) {
            let setId = `day${i}`;
            let setClass = `td:eq(${i - 1 + firstday})`;

            $('#calFistLine').children(setClass).addClass(setId);
            $('#calFistLine').children(setClass).text(i);
        } else if ((i - 1 + firstday) / 7 < 2) {
            let setId = `day${i}`;
            let setClass = `td:eq(${(i - 1 + firstday) % 7})`;

            $('#calSecondLine').children(setClass).addClass(setId);
            $('#calSecondLine').children(setClass).text(i);
        } else if ((i - 1 + firstday) / 7 < 3) {
            let setId = `day${i}`;
            let setClass = `td:eq(${(i - 1 + firstday) % 7})`;

            $('#calthirdLine').children(setClass).addClass(setId);
            $('#calthirdLine').children(setClass).text(i);
        } else if ((i - 1 + firstday) / 7 < 4) {
            let setId = `day${i}`;
            let setClass = `td:eq(${(i - 1 + firstday) % 7})`;

            $('#calFourthLine').children(setClass).addClass(setId);
            $('#calFourthLine').children(setClass).text(i);
        } else if ((i - 1 + firstday) / 7 < 5) {
            let setId = `day${i}`;
            let setClass = `td:eq(${(i - 1 + firstday) % 7})`;

            $('#calFifthLine').children(setClass).addClass(setId);
            $('#calFifthLine').children(setClass).text(i);
        } else if ((i - 1 + firstday) / 7 < 6) {
            let setId = `day${i}`;
            let setClass = `td:eq(${(i - 1 + firstday) % 7})`;

            $('#calSixthLine').children(setClass).addClass(setId);
            $('#calSixthLine').children(setClass).text(i);
        }
    }
}
