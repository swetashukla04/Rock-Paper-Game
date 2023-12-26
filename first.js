// function add7(n){
//     return n +7;
// }

// function multiply(n,m)
// {
//     return n*m;
// }

// function divide(n,m)
// {
//     return n/m;
// }

// function capital(name)
// {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }



// console.log(capital('leta'));

// console.log(divide(22,7));

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));


for (let i = 1; i <= answer; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

