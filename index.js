// const math=require('./math')
// const math1=require('./test/emp')
// console.log(math);
// let result=math.subtraction(2,6);
// let result1=math.addition(2,6);
// let result2=math1.multiply(2,6);
// let result3=math1.divide(2,6);
// console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// let employe=[{
//     name:'mayank',
//     salary:30000,
//     age:21
// },{
//     name:'ayushi',
//     salary:50000,
//     age:21

// },{
//     name:'priya',
//     salary:9000,
//     age:18
// }]
const emp=require('./employeee')
let maximum1=emp.maxsal();
let maximum=emp.filtersal();
console.log(maximum);
console.log(maximum1);