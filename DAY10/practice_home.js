let my_string = 'He11oWor1d';
let overwrite_string = 'lloWorl';
let s = 2;

function solution(my_string, overwrite_string, s) {
    let answer = my_string.split('');
    console.log(answer);
    let overwrite_arr = overwrite_string.split('');
    console.log(overwrite_arr);
    for (let i = 0; i < overwrite_arr.length; i++) {
        console.log(answer[s + i], overwrite_arr[i]);
        answer[s + i] = overwrite_arr[i];
        console.log(answer[s + i]);
    }
    answer = answer.toString().replace(',', '');
    return answer;
}

console.log(solution(my_string, overwrite_string, s));
