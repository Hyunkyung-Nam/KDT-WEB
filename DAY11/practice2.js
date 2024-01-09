function writeContent() {
    const writtereName = document.getElementById('write-name-id').value;
    const writterContent = document.getElementById('wrtie-content-id').value;
    const tbody = document.getElementById('tbody-id');

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');

    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const date = new Date().getDate();
    const hour = Number(new Date().getHours());
    const minutes = new Date().getMinutes();
    const getDayDateString = year + '-' + month + '-' + date + ' ' + hour + ':' + minutes;

    td1.textContent = tbody.childElementCount + 1;
    td2.textContent = writtereName;
    td3.textContent = writterContent;
    td3.className = 'tableContents';
    td4.textContent = getDayDateString;

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);

    tbody.append(tr);
}
