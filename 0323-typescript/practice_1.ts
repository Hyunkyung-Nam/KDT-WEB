let olimpic_newgame: readonly [object, boolean] = [
    { name: '쇼트트랙', type: '혼성계주' },
    true,
];

interface Game {
    title: string;
    price: number;
    desc?: string;
    category: string;
    platform: string;
}

let heroGame_A: Game = {
    title: 'DC 언체인드',
    price: 50000,
    desc: 'DC 히어로 & 비런 각각의 개성은 물론, 액션의 재미까지!',
    category: '액션',
    platform: '모바일',
};

const sum1 = (num1: number, num2: number): number => {
    return num1 + num2;
};

console.log(sum1(5, 11));

function sum2(...a: number[]) {
    let sum = 0;
    a.map((value) => (sum += value));
    return sum;
}

console.log(sum2(1, 2, 3, 4, 10));

function arrElement<T>(arr: T[], index: number): boolean | T {
    if (arr.length - 1 < index) {
        return false;
    }

    return arr[index];
}

console.log(arrElement<string>(['a'], 1));
console.log(arrElement<number>([1, 2, 3, 4, 5], 2));
console.log(arrElement<string>(['a', 'b'], 0));
