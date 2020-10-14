const numbers = [3, 4, 5, 6, 7, 8];
const output = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);

}

function square(element){
    return element*element;
}

const square = element => element * element;
const sqaure = x => x * x; 

const result = numbers.map(x => x * x);

    return element + element;
const result = numbers.filter(x => x > 5);
const result = numbers.find(x => x > 4)

console.log(result);