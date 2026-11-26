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
// console.log(x) // undefined
// var x = 5;
// // let 不存在变量提升，y不能在声明之前使用
// console.log(y); // 5
// let y = 5;

// const
// const a = 1;
// // a = 2; // 会报错，const声明的变量不能被重新赋值
// console.log(a);

// *************** 解构 ***************

// 数组解构
// let arr = [1, 2, 3];
// let [x, y, z] = arr;
// // const [x, y, z] = arr;
// // x = 5; // 会报错，const声明的变量不能被重新赋值
// console.log(x, y, z); // 1 2 3

// 对象解构
// let person = {
//     name: 'John',
//     age: 30,
//     language: ['java', 'python', 'c++']
// }

// // let { name, age, language } = person;
// // console.log(name, age, language); // John 30 ['java', 'python', 'c++']
// // console.log(person.name, person.age, person.language);

// let { name: n, age: a, language: l } = person;
// console.log(n, a, l); // John 30 ['java', 'python', 'c++']

// 链判断
// let message = null;
// // // let firstName = message.body.user.firstName || 'default name';
// // let firstName = (message && message.body && message.body.user && message.body.user.firstName) || 'default name';
// let firstName = message?.body?.user?.firstName || 'default name';
// console.log(firstName);

// 参数默认值
// function add(a, b) {
//     b = b || 0; // 如果b没有传值，则默认赋值为0
//     return a + b;
// }
// console.log(add(2,3));
// console.log(add(2));

// function add2(a, b = 0) { // ES6中可以直接在参数中设置默认值
//     return a + b;
// }
// console.log(add2(2,3));
// console.log(add2(2));

// 箭头函数
// var print = function (obj) {
//     console.log(obj);
// }
// print('hello world');

// let print2 = (obj) => {
//     console.log(obj);
// }
// print2('hello world 222');

// let sum = function (a, b) {
//   return a + b;
// };

// let sum2 = (a, b) => a + b;

// console.log(sum(1, 2));
// console.log(sum2(1, 2));

// let sum3 = (a, b) => {
//   let result = a + b;
//   return result;
// };

// console.log(sum3(1, 2));

// 模版字符串
// let name = '张三';
// let age = 18;
// let info = `你好，我的名字是${name}，今年${age}岁。`;
// console.log(info);

//Promise
// const fethPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
// console.log(fethPromise);

// fethPromise.then((response) => {
//     console.log(`已收到响应: ${response.status}， type: ${response.type}`);
// })

// fethPromise.then((response) => {
//     const jsonPromise = response.json();
//     console.log(jsonPromise);
//     jsonPromise.then((json) => {
//         console.log(json[0].name);
//     })
// })

// let get = function (url, data) {
//   new Promise((resolve, reject) => {
//     $.ajax({
//       url: url,
//       type: "GET",
//       data: data,
//       success: function (res) {
//         resolve(res);
//         return res;
//       },
//       error: function (err) {
//         reject(err);
//       },
//     });
//   });
// };

// const getPromise = get("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
// console.log(getPromise);

// Async 函数

async function myFunction() {
  console.log("这是一个异步函数");
  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

  if (!response.ok) {
    throw new Error(`HTTP 请求错误! status: ${response.status}`);
  }

  const resultJson = await response.json();
  console.log(resultJson[0].name);
}

myFunction();
