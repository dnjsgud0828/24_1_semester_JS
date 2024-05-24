// //this를 입력을 안해주면 값이 안들어가서 undefined가 반환됨
// function Calculator(){
//     this.a = prompt("첫번째 값을 입력하세요", 0);
//     this.b = prompt("두번째 값을 입력하세요", 0);

//     this.sum = function() {return this.a + this.b};
//     this.mul = function() { return this.a * this.b};
// }

// let calculator = new Calculator();
// console.log(calculator.sum());
// console.log(calculator.mul());

// Function.prototype.defer = function(ms){setTimeout(this, ms)}

// function f() {
//     alert("hello!");
// }
// f.defer(1000);

// Function.prototype.defer = function(ms){
//     let f = this;
// //apply 매개변수 1. thisArg, 2. argsArray
// //왜 꼭 화살표함수가 들어가야 실행이 됨?
//     return function(...args){
//         setTimeout(()=>f.apply(null, args), ms)
//     }     
// }

// function f(a, b) {
//     alert(a+b);
// }
// f.defer(1000)(1,2);

// //코드를 자동으로 하나씩 증가시키는 방법?
// let figure = {
//     code: 1,
//     action : function(){
//         console.log(`${this}의 자세를 잡는 중`);
//     }
// }

// let a = Object.create(figure);
// let b = Object.create(figure);

// console.log(Object.getPrototypeOf(a));
// console.log(Object.getPrototypeOf(b));
// a.action();
// b.action();

// var outer = function(){
//     var a= 1;
//     var inner = function (){
//         return ++a;
//     }
//     return inner;
// }
// var outer2 = outer();
// console.log(outer2());
// console.log(outer2());

//setInterval 자체가 반복문
// function printNumbers(from, to){
//     let timeID = setInterval(()=> {
//         console.log(from);
//         if(from==to) clearInterval(timeID);
//         from++;    
//     }, 1000);
// }
// printNumbers(1, 30);

// let a =undefined;
// function f() {}
// console.log(a===f());

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What do you think of Node.js? ', (answer) => {
  // 입력값이 answer매개변수로 들어온다.
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});
