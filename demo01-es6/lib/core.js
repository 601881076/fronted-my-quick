// var 越域问题
// {
//   var a = 1;
//   let b = 2;

//   console.log(b);
  
// }
// console.log(a);
// console.log(b);

// var 重复声明
// var m = 1;
// var m = 2;
// let n = 3;
// // let n = 4; // 会报错。
// console.log(m);
// console.log(n);

// var 会变量提升，x可以不用先声明也可以正常打印
console.log(x) // undefined
var x = 5;
// let 不存在变量提升，y不能在声明之前使用
console.log(y); // 5
let y = 5;
