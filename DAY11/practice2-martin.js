function writeFunc() {
    const writer = document.getElementById('writer').value;
    const content = document.getElementById('content').value;
    const tbody = document.getElementById('tbody');

    let tr = document.createElement('tr');

    let tdWriter = document.createElement('td');
    let tdContent = document.createElement('td');
    let tdDate = document.createElement('td');
    let tdNumber = document.createElement('td');

    const now = new Date();

    tdWriter.textContent = writer;
    tdContent.textContent = content;
    tdDate.textContent = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${Number(
        now.getHours()
    )}:${now.getMinutes()}`;
    tdNumber.textContent = tbody.childElementCount + 1;

    tr.append(tdNumber, tdWriter, tdContent, tdDate);
    tbody.append(tr);
}
