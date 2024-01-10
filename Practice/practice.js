let arr = [0, 1, 2, 4, 3];
let queries = [
    [0, 4, 2],
    [0, 3, 2],
    [0, 2, 2],
];
var answer = [];
for (query of queries) {
    let index1 = query[0];
    let index2 = query[1];
    let compare = query[2];
    let solutionNum = compare;
    let count = 0;

    for (let i = index1; i <= index2; i++) {
        if (arr[i] > compare) {
            if (count === 0 || arr[i] < solutionNum) {
                solutionNum = arr[i];
                console.log(solutionNum);
            }
            count++;
        }
    }
    if (count === 0) {
        answer.push(-1);
    } else {
        answer.push(solutionNum);
    }
    count = 0;
}
console.log(answer);
