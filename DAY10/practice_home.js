const animal1 = ['lion', 'tiger', 'rabbit', 'dog', 'cat', 'pig', 'chicken'];
const animal2 = ['cow', 'lion', 'chicken', 'cat', 'horse', 'sheep', 'tiger'];
let sameAnimal = [];
let differentAnimal = [];
let differentAnimal1 = [];
let differentAnimal2 = [];

sameAnimal = animal1.filter((elementOfAnimal1) => animal2.includes(elementOfAnimal1));
differentAnimal1 = animal1.filter((elementOfAnimal1) => !animal2.includes(elementOfAnimal1));
differentAnimal2 = animal2.filter((elementOfAnimal2) => !animal1.includes(elementOfAnimal2));

differentAnimal = differentAnimal1;
for (i = 0; i < differentAnimal2.length; i++) {
    differentAnimal.push(differentAnimal2[i]);
}

console.log(sameAnimal);
console.log(differentAnimal);
