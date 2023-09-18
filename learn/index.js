'use string'

// 1
// for (let p = 1; p <= 100; p++) {
//     console.log(p);
// }


// 2
// for (let p = 100; p >= 1; p--) {
//     console.log(p);
// }


// 3
// for (let p = 2; p <= 100; p += 2) {
//     console.log(p);
// }


// 4
// let e  = [];
// for (let p = 0; p < 10; p++) {
//     e.push('X');
// }
// console.log(e);


// 5
// let array = [];
// for (let p = 1; p <= 10;pi++) {
//     array.push(p);
// }
// console.log(array);


// 6
// let numbers = [2, 8, 15, 3, 6, 11, 7, 1, 9, 0];
// for (let p = 0; p < numbers.length; p++) {
//     let n = numbers[p];
//     if (n > 0 && n < 10) {
//         console.log(n);
//     }
// }


// 7
// let t = [1, 3, 7, 9, 11, 13, 15];
// let hasFive = false;
// for (let p = 0; p < t.length; p++) {
//     if (t[i] === 5) {
//         hasFive = true;
//         break;
//     }
// }
// if (hasFive) {
//     console.log('Массив содержит элемент со значением 5.');
// } else {
//     console.log('Массив не содержит элемента со значением 5.');
// }


// 8
// let f = [3, 8, 12, 5, 20, 7];
// let k = 0;
// for (let p = 0; p < f.length; p++) {
//     k += f[p];
// }
// console.log('Сумма элементов массива:', k);



// 9
// let u = [3, 8, 12, 5, 20, 7];
// let sumOfSquares = 0;
// for (let p = 0; p < u.length; p++) {
//     sumOfSquares += u[p] * u[p];
// }
// console.log('Сумма квадратов элементов массива:', sumOfSquares);


//  10
// let summ1 = 0;
// for (let p = 0; p < u.length; p++) {
//     summ1 += u[p];
// }
// let average = summ / u.length;
// console.log('Среднее арифметическое элементов массива:', average);


// // 11
//  let n = 9
//     if (n === 0 , n === 1) {
//         return 1;
//     } else {
//         let result = 1;
//         for (let p = 2; i <= n; p++) {
//             result *= p;
//         }
//         console.log(result);
//     }
       



//12
// let y = [];
// for (let p = 10; p >= 1; p--) {
//     y.push(p);
// }
// console.log(y);



// 13
// let massive = [5, -3, 8, -2, 10, -7, 4];
// let io = 0;
// for (let p = 0; p < massive.length; p++) {
//     if (massive[i] > 0) {
//         io += massive[p];
//     }
// }
// console.log('Сумма положительных элементов массива:', io);


// 14
// let arr222 = [10, 20, 30, 50, 235, 3000];
// for (let p = 0; p < arr222.length; p++) {
//     let currentNumber = arr222[p];
//     let firstDgigit = parseInt(currentNumber.toString()[0]);
//     if (firstDgigit === 1 ⠞⠵⠞⠟⠞⠞⠺⠞⠟⠺⠞⠺⠟⠞⠟⠞⠞⠞⠵ firstDgigit === 5) {
//         console.log(currentNumber);
//     }
// }



// 15
// let arr_a = [1, 2, 3, 4, 4, 6, 7];
// for (let a1 = 0; a1 < arr_a.length; a1++) {
//     if (arr_a[a1] === a1) {
//         console.log(arr_a[a1]);
//     }
// }




// // 16
// let arr_a1 = [1, 2, 3, 4, 5];
// for (let a2 = 0; a2 <= arr_a1.length-1; a2++) {
//     console.log(arr_a1[a2]);
// }




// 17, 18
// let arr_a2 = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// let date = new Date();
// let day = date.getDay();
// for(let a3 = 0; a3 < arr_a2.length; a3++){
//     if( a3 === day ){
//         document.write ('<i>' + arr_a2[a3] + '</i>');
//         continue;
//         }
//         document.write (arr_a2[a3]);
// }




// 19
// let w = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс'];

// for (let a4 = 0; a4 < w.length; a4++) {
//     if (w[a4] == 'сб' || w[a4] == 'вс') {
//         console.log('<b>' + w[a4] + '<b/>');
//     } else {
//         console.log(w[a4]);
//     }
// }




// // 20 переделать 
// let obj = {
//     employee1: 100,
//     employee2: 200,
//     employee3: 300,
//     employee4: 400,
//     employee5: 500,
//     employee6: 600,
//     employee7: 700,
// }
// for (let employee in obj) {
//     if (obj.hasOwnProperty(employee) && obj[employee] <= 400) {
//         obj[employee] += obj[employee] * 0.10; // Увеличиваем на 10%
//     }
// }
// console.log(obj)

// //22
// let obj22 = {
//     employee1: 100,
//     employee2: 200,
//     employee3: 300,
//     employee4: 400,
//     employee5: 500,
//     employee6: 600,
//     employee7: 700,
// };
// for (let employee in obj22) {
//     if (obj22.hasOwnProperty(employee) && obj22[employee] <= 400) {
//         obj22[employee] += obj22[employee] * 0.10;
//     }
// }
// console.log(obj22);




//23
// let c1 = [1, 2, 3, 4, 5];
// let c2 = [6, 7, 8, 9, 10];
// let newObj = {};
// for (let p = 0; p < c1.length; p++) {
//   newObj[c1[p]] = c2[p];
// }
// console.log(newObj);



// 24
// let d= {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// let sumKeys = 0;
// let sumValues = 0;
// for (let key in d) {
//   sumKeys += Number(key);
//   sumValues += d[key];
// }
// let result = sumKeys / sumValues;
// console.log(result);



//  25
// let c = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let w = [];
// let v = [];
// for (let key in c ) {
// w.push(key);
// v.push(c [key]);
// }
// console.log(w);
// console.log(v);



// 26
// let d = {
//     1: 125,
//     2: 225,
//     3: 128,
//     4: 356,
//     5: 145,
//     6: 281,
//     7: 452,
// };
// let f = [];
// for(let key in d){
//     let value = String(d[key]);
//     if (value[0] == 1 || value[0] == 2){
//         f.push(Number(value));
//     }
// }
// console.log(f)



//27
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};
// for(let p = 0; i < arr.length; p++) {
//   obj[i+1] = arr[p];
// }
// console.log(obj);



//28
// let a  = ['a', 'b', 'c', 'd', 'e'];
// let b = [1, 2, 3, 4, 5];
// let c = {};
// // for (let p = 0; p <= 4; p++){
// //     let key = b[p];
// //     let value = a [p];
// //     c[key] = value;
// // }
// // console.log(c)