// ----------------- логарифм и возведение в степень 

// console.log(Math.log(25) / Math.log(5));//-логарифм из 25 по основанию 5 // =2
// console.log(Math.pow(5, 2));//возведение 5 во 2 степень // =25
// let a = arr.join(',');

// ----------------- конец логарифм и возведение в степень 

//--------------------------class
// class car {
//    shop = 'rodeo';
//    constructor(make, model, color) {
//       this.make = make;
//       this.model = model;
//       this.color = color;
//    }
// }
// let meren = new car('mercedes', 'gl', 'black');
// let opel = new car('opel', 'astra', 'grey');
// console.log(meren);
// console.log(opel);
//--------------------------конец class


//-----------------------------расширение классов

// class Transport {
    //     constructor(type, price, vendor, model) {
    //         this.type = type;
    //         this.price = price;
    //         this.vendor = vendor;
    //         this.model = model;
    //     }
    
    //     getInfo() {
    //         return `${this.vendor}, ${this.model}`;
    //     }
    
    //     getPrice() {
    //         return this.price.toLocaleString('ru-RU') + ' ₽';
    //     }
    // }
    
    // class Car extends Transport {
    //     constructor(type, vendor, model, doorsCount, price) {
    //         super(type, price, vendor, model);
    //         this.doorsCount = doorsCount;
    //         getInfo.bind(this);
    //     }
    //     getDoorsCount() {
    //         return `Кол-во дверей: ${this.doorsCount}`;
    //     }
    // }
    
    // class Bike extends Transport {
    //     constructor(type, vendor, model, maxSpeed, price) {
    //         super('bike', price, vendor, model);
    //         this.maxSpeed = maxSpeed;
    //     }
    
    //     getMaxSpeed() {
    //         return `Макс. скорость: ${this.maxSpeed} км/ч`;
    //     }
    // }
    
    // const bike = new Bike('Cross', 'Easy-Moto', 'Suzuki', 270, 500)
    // console.log(bike);
    // console.log(bike.getMaxSpeed());
    // console.log(bike.getInfo());
    // console.log(bike.getPrice());

//-----------------------------конец расширение классов

// const b = {};
// let c;
// b.r = 1;
// c = b;
// c.r = 2;
// console.log(b.r);
// console.log(c.r);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.filter(function (el) {
//    return el % 2;
// });
// console.log(result);

// let x = 7;
// console.log(x++);
// console.log(x++);

// console.log(0.1 + 0.2 - 0.2);

// let a = { name: 'vasya' };
// let b = { name: 'vasya' };
// console.log(a == b);


// ============================ функции


// function f1(a, b, c) {
//    console.log(a, b, c);
// }
// let f2 = f1.bind('fff', 'foo', 'ddd');
// f2('bar', 'baz');

/*
function go() {
   let name = 'forest';
   console.log(`run, ${name} ,run`);
}
go();

function go() {
   let name = 'forest';
   console.log('run, ' + name + ', run');
}
go();
*/

// let getMessage = (text, name) => {
//    let message = text + ',' + name + ' !';
//    return message;
// };
// console.log(getMessage('Привет', ' Вася'));


// function showNumber(num) {
//    console.log(num);
//    setTimeout(showNumber, 1000, ++num);
// };
// setTimeout(showNumber, 4000, 1);





// let x;
// x = 5 + 8;
// console.log("результат: " + x); // результат: 13
// x = 9 + 9;
// console.log(`результат: ${x}`); // результат: 18


// let ;
// do {
//    num++
// } while (num < 5);

// let num = 1;
// while (num < 3) {
//    console.log(`Число: ${num}`);
//    num++;
// }

// ---------рекурсия

// function calcSumm(numOne, numTwo) {
//    console.log(numTwo);
//    if (numTwo === 1) {
//       return numOne;
//    } else
//       return numOne * calcSumm(numOne, numTwo - 1)
// }
// console.log(calcSumm(2, 3));

// ---------рекурсия конец



// showName();
// function showName() {
//    console.log('Вася');
// }
// setInterval(showName, 5000);
// console.log('Коля');

// 'use strict'
// let showMess;
// if (2 > 1) {
//    showMess = function showMessage() {
//       console.log('Сообщение');
//    };
// };
// showMess();

// let firstPart = "likes";
// let userInfo = {
//    name: "Вася",
//    age: 30,
//    [firstPart + " jawascript"]: true, //Пробел после кавычки " jawascript" это пробел в следующей строчке "likes jawascript".
// };
// console.log(userInfo[firstPart + " jawascript"]);
// let key = 'name';
// console.log(userInfo[key]);

// let userInfo = {
//    name: 'ВАСЯ',
//    age: 30,
// }
// for (const key in userInfo) {
//    const value = userInfo[key];
//    console.log(value);
// }

// let userInfo = {
//    name: 'ВАСЯ',
//    age: 30,
//    showInfo() {
//       console.log(`${this.name}`)
//    }
// }
// let user = userInfo;
// userInfo.showInfo();

// let userInfo = {
//    name: 'ВАСЯ',
//    age: 30,
//    adress: {
//       cuontry: 'Russia',
//       city: 'Piter',
//    }
// }
// for (const key in userInfo) {
//    console.log(userInfo[key]);
// }





//====================================== числа




// let numOne = Math.round(1.005 * 1000) / 1000;
// console.log(numOne);

// let numTwo = parseFloat('135.58px');
// console.log(numTwo);

// let value = 58 + 'Фрилансер';
// if (isNaN(58 + 'Фрилансер')) {
//    console.log('Результат выражения NAN');
// };

// let num = Math.min(58, 39, -5, 86, 25);
// console.log(num);

// console.log(Math.floor(58.858));


// ===================================== строки


// let fls = 'Фрилансер';

// console.log(fls.includes('лан', 3));
// console.log(fls.toUpperCase());
// let t = fls.slice(3, 6)
// console.log(fls);
// console.log(t);

// let text = `привет я ${fls}`;
// console.log(text);

// let text = 123 + ' 456';
// console.log(text);



// ===================================== массивы push shift unshift splice


// let arr = ['Петя', 'Аня'];
// arr.push('Коля');
// console.log(arr);
// arr[1] = 'Катя';
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift('Пе', 'Ан');
// console.log(arr);
// let newArr = arr.splice(0, 1);
// console.log(newArr);
// console.log(arr);

// let str = 'Петя Аня';

// const strPetya = str.split(''); 
// let t = strPetya.splice(0, 5).join('')
// const t2 = strPetya.join('')
// const strPetya = str.split('',4).join(''); 
// const strAnya = str.split('').splice(5,3).join(''); 
// const strAnya = str.split('').reverse().join('').split('',3).reverse().join(''); 
// console.log(str); 
// console.log(strPetya); 
// console.log(strAnya); 
// console.log(t); 
// console.log(t2); 



// let arr = ['Петя', 'Катя', 'Вася'];
// arr.forEach(function (item, index, array) {
//    console.log(`${item} находится на ${index} в массиве ${array}`)
// });


// let arr = [9, 2, 8];
// let reduceValue = arr.reduce(function (previousValue, item, index, array) {
//    console.log(previousValue);
// });

// ================================ конец массивы push shift unshift splice

// ============================reduce yandex


// const guestsInfo = [
//     { name: "Саша", age: 19 },
//     { name: "Катя", age: 21 },
//     { name: "Миша", age: 17 },
//     { name: "Федя", age: 23 },
//     { name: "Клава", age: 22 }
// ]
// const data = guestsInfo;

// // const reducer = (pre,cur)=>pre+cur;
// function calcAvgAge(array) {
//     let sumAge = array.reduce((pre, cur) => pre + cur.age, 0) / array.length;
//     console.log(sumAge);

// }

// calcAvgAge(data);


// ============================
// ================================= прокрутка и координаты

// let scrollMain = document.documentElement;
// const scrollWith = scrollMain.clientWidth;
// console.log(scrollMain);
// console.log(scrollWith);

// ---------
// function scrollSlow() {
//    window.setTimeout(slowPosition, 2000);
//    // console.log(timeoutID);
// }
// scrollSlow();
// function slowPosition() {
//    window.scrollTo({
//       top: 50,
//       left: 0,
//       behavior: 'smooth',

//    });
// };

// ================================= конец прокрутка и координаты

// -----------прокрутка скролл

// window.setTimeout('window.scrollTo(0,50)', 2000);

// ----------- конец прокрутка скролл

// -----------координаты

// const banana = document.querySelector('.list__item-1 ');
// const bananaCo = banana.getBoundingClientRect();
// console.log(bananaCo);

// ----------- конец координаты

// -----------события

// const banana = document.querySelector('.list__item-1');
// const cont = document.querySelector('p');
// cont.addEventListener('click', function (event) {
//    if (event.which == 1)
//       console.log('hi=1');
//    else if (event.which == 2)
//       console.log('hi=2');
//    else if (event.which == 3)
//       console.log('hi=3');
// })

// function sayHello() {
//    cont.innerText = "foo"
// }
// function sayHello2() {
//    console.log('Hello=2');
// }


// cont.addEventListener('click', sayHello);
// cont.addEventListener('click', sayHello2);

// function makeCounter(v) {
//    let counter = 0;
//    return function () {
//       console.log(counter++)
//    }
// }
// makeCounter(1);

// ----------- конец события

//----------------- калькулятор append


// const cont = document.querySelector('.content');
// let form = document.querySelector('.form');
// let input1 = document.createElement('input');
// let input2 = document.createElement('input');
// let input3 = document.createElement('input');
// input1.placeholder = 'enter number';
// input2.placeholder = 'enter a sign';
// input3.placeholder = 'enter number';
// input1.style = ('display: block; margin: 20px 0 20px 0; outline: none; border-radius: 5px');
// input2.style = ('display: block; margin: 0 0 20px 0; outline: none; border-radius: 5px');
// input3.style = ('display: block; margin: 0 0 20px 0; outline: none; border-radius: 5px');
// form.append(input1);
// form.append(input2);
// form.append(input3);

// let regex = /[^0-9]/g;
// let reg = /[^*\-+/]/g;

// input1.oninput = function () {
//    this.value = this.value.replace(regex, '');
// }
// input2.oninput = function () {
//    this.value = this.value.replace(reg, '');
// }
// input3.oninput = function () {
//    this.value = this.value.replace(regex, '');
// }

// cont.onclick = function () {
//    let num1 = +input1.value;
//    let num2 = input2.value;
//    let num3 = parseFloat(input3.value);
//    if (num2 == '+') {
//       const result = num1 + num3;
//       cont.textContent = result;

//    } else if (num2 == "-") {
//       const result = num1 - num3;
//       cont.textContent = result;

//    } else if (num2 == '*') {
//       const result = num1 * num3;
//       cont.textContent = result;

//    } else if (num2 == '/') {
//       const result = num1 / num3;
//       cont.textContent = result;

//    } else {
//       cont.textContent = 'incorrect data';
//    }
//    input1.value = '';
//    input2.value = '';
//    input3.value = '';
// }

//---------------------калькулятор конец

// ----------------------------------- anna (палиндром)

// const a = 'anna';
// const b = a.split('').reverse().join('');
// if (a === b) {
//     console.log('ok');
// } else {
//     console.log('not ok');
// }

// ----------------------------------- конец anna (палиндром)

// --------------------------------------сортировка sort


// var stringArray = ['Голубая', 'Горбатая', 'Белуга'];
// var numericStringArray = ['80', '9', '700'];
// var numberArray = [40, 1, 5, 200];
// var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

// function compareNumbers(a, b) {
//    return a - b;
// }

// снова предполагаем, что функция печати определена
// console.log('stringArray:', stringArray.join());
// console.log('Сортировка:', stringArray.sort());

// console.log('numberArray:', numberArray.join());
// console.log('Сортировка без функции сравнения:', numberArray.sort());
// console.log('Сортировка с функцией compareNumbers:', numberArray.sort(compareNumbers));

// console.log('numericStringArray:', numericStringArray.join());
// console.log('Сортировка без функции сравнения:', numericStringArray.sort());
// console.log('Сортировка с функцией compareNumbers:', numericStringArray.sort(compareNumbers));

// console.log('mixedNumericArray:', mixedNumericArray);
// console.log('Сортировка без функции сравнения:', mixedNumericArray.sort());
// console.log('Сортировка с функцией compareNumbers:', mixedNumericArray.sort(compareNumbers));

// ------------------------------------ сортировка конец

// --------------------задание от пузункова про объем воды между линиями


// const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // 49
// const input2 = [1, 1]; // 1
// const input3 = [4, 3, 2, 1, 4]; // 16
// const input4 = [0, 0, 100]; // 2


// function maxArea(arr, step) {
//    let areas = [];
//    for (let i = 0; i < arr.length - 1; i++) {  ////0.1.2.3.4.5
//       for (let j = i + 1; j < arr.length; j++) { //1.3.5.7.9.11
//          areas.push(Math.min(arr[i], arr[j]) * (j - i));//1.2.3.4.5.6
//       }
//    }
//    return Math.max(...areas)
// }


// function maxArea(height) {
//    let area = [];
//    let left = 0;
//    let right = height.length;
//    for (let i = 0; i < height.length - 1; i++) {
//       if (left > right) {
//          left++;
//       } else {
//          right--;
//       }
//       const result = Math.min(height[i], height[i + 1]) * (right - left);
//       area.push(result)
//       console.log(area)
//    }
//    return Math.max.apply(null, area);
// }

// maxArea(input1)
// console.log(maxArea(input1));
// // console.log(input2, maxArea(input2));
// // console.log(input3, maxArea(input3));
// // console.log(input4, maxArea(input4));

// -------------------- конец задание от пузункова про объем воды между линиями

// ----------------------- for ,map , reduce и filter


// const arr = ['опель', 'мерс', 'бмв', 'крузак', 'аурус'];
// const arrNum = [2, 56, 23, 5, 17];
// for (i=0; i <= arr.length;i++) {
//    console.log('hi' + arr[i]);
// }
//----------------

// const copyArr = [];
// arr.forEach(function (el, index) {
//    copyArr.push(`марка ${el} принадлежит индексу ${index}`)
// })
// console.log(arr)
// console.log(copyArr)

//---------------------

// const newArrArrow = arr.map(el => `марка ${el} норм`);
// const newArr = arr.map(function (el, index) {
//    return `марка ${el} норм`
// });
// console.log(newArrArrow)
// console.log(newArr)

// const arrFilt = arrNum.filter((el) => el > 5)
// console.log(arrFilt)

//-------------

// const testRedu = arrNum.reduce(function (acc, el) {
//    // console.log(acc);
//    // console.log(el);

//    return acc + el;
// }, 1)
// console.log(testRedu)

//--------
// const meetups = [
//     { name: 'JavaScript', isActive: true, members: 100 },
//     { name: 'Angular', isActive: true, members: 900 },
//     { name: 'Node', isActive: false, members: 600 },
//     { name: 'React', isActive: true, members: 500 },
// ]
// const membersOnActiveMeetups = mee => mee
//     .filter(meetup => meetup.isActive)
//     .reduce((preVal, curVal) => preVal + curVal.members, 0) // строка которую, по заданию, требовалось дописать.
// console.log(membersOnActiveMeetups(meetups)); // 1500


// ----------------------- конец for ,map , reduce filter

// ----------------------- every

// function isBigEnough(element, index, array) {
//     console.log(element);
//     return element >= 5;
// }
// // [12, 5, 8, 130, 44].every(isBigEnough);   // false
// let a = [12, 54, 18, 130, 44].every(isBigEnough); // true
// console.log(a);

// ----------------------- конец every

// -------------------- задание от пузункова про скобочки

// let test = 'Синий кит'.indexOf('й  ит');
// console.log(test);
// let s1 = '(()';
// let s2 = '()[]{}';
// let s3 = '(]';
// let s4 = '({})';
// let s5 = '([)]';
// let s6 = '{[[]{}]()()';
// console.log(s6.length)

// let check = s6;
// let stack = [];

// let bracketsType = {
//    ')': '(',
//    ']': '[',
//    '}': '{',
// }

// function checkCloseBrackets(s) {
//    for (i = 0; i <= s.length - 1; i++) {
//       let result = ')]}'.indexOf(s[i]);
//       if (result == -1) {
//          stack.push(s[i]);
//          // console.log(stack);
//       } else if (bracketsType[s[i]] == stack[stack.length - 1]) {
//          stack.pop()
//       } else if (stack.length == 0) {
//          console.log('is valid')
//       } else if (stack.length !== 0) {
//          console.log('no valid')
//       }
//    }

// }
// checkCloseBrackets(check);
// console.log(stack.length);
// console.log(stack);

// const checkArray = s1;

// let stack = [];
// let bracketsType = {
//    ')': '(',
//    ']': '[',
//    '}': '{',
// };
// for (let i = 0; i <= checkArray.length - 1; i++) {
//    const resultIndexOf = ')]}'.indexOf(checkArray[i]);
//    // console.log(resultIndexOf);
//    if (resultIndexOf == -1) {
//       stack.push(checkArray[i]);
//    } else {
//       if (bracketsType[checkArray[i]] !== stack.pop())
//          return false;

//    };

// let s7 = 'привет мир';
// let s8 = {
//    num: 1,
//    numT: 45,
//    numF: 33,
// };

// s8[s7 + s1] = 'jr';
// console.log(s8);

// let isValid = function (s) {
//    const sMod = s.split('');
//    let result = [sMod[0]];
//    for (let i = 1; i < sMod.length; i++) {
//       if (result[0] == sMod[i]) {
//          // console.log(sMod[i]);
//          result.pop();
//       } else {
//          result.push(sMod[i]);
//          // console.log(sMod[i]);

//       }
//       // console.log(result);
//    }
// };

// isValid(s1)

// -------------------- конец задание от пузункова про скобочки


// ----------------split splice join-----------------
// Метод split('-') разбивает объект String на массив строк путём разделения строки указанной подстрокой.
// Метод join('-') объединяет все элементы массива (или массивоподобного объекта) в строку.
// Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.

// function testString(string) {
//     let c = string.split('');
//     const a = c[0].toUpperCase();
//     // console.log(a);
//     const b = c.splice(0, 1, a);
//     const e = c.join('');
//     // console.log(e);
//     // const e = b.join('');
//     return e;
// }
// console.log(testString('hello'));

// ---------------- конец split splice join-----------------


// ---------------- spread-----------------

// function test(a, b, c) {
//     return a + b + c;
// }
// const arr = [1, 2, 3];
// console.log(test(...arr)); // 6

// ---------------- конец spread-----------------

//----------------Деструктуризация-------------

// var a, b, rest;
// [a, b] = [1, 2];
// console.log(a); // 1
// console.log(b); // 2

// [a, b, ...rest] = [1, 2, 3, 4, 5];
// console.log(a); // 1
// console.log(b); // 2
// console.log(rest); // [3, 4, 5]

// ({a, b} = {a:1, b:2});
// console.log(a); // 1
// console.log(b); // 2

// ({ a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 });
// console.log(a); // 1
// console.log(b); // 2
// console.log(rest); // {c: 3, d: 4}
// console.log(rest.c); // 3
// // ES2016 - ещё не реализовано Firefox 47a01

// let ant = [1, 2, 3, 4, 5, 6, 7];
// let but = { ...ant };
// console.log(but); // {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7}
// function testRest(foo, bar, ...rest) {
//     console.log(foo, bar, rest); // 1 2 [3, 4, 5, 6, 7]
// }
// testRest(...ant)

//result.even = [
    // { 'name': 'vasa' }, 
    // [5, 6, 7], 
    // 99
// ]
// console.log(...result.even[1]); // 5 6 7

//----------------/ конец Деструктуризация-------------

//---------------отключаем событие правой кнопки мыши

// document.oncontextmenu = function () { // Используйте объект "document" вместо "window" для совместимости с IE8.
//     return false;
// };
//---------------/ конец отключаем событие правой кнопки мыши



//---------------------------fetch-----------------

// let a = fetch('https://swapi.dev/api/people/')
//     .then(re => re.json())
//     .then(res => console.log(res.results[0]));
// console.log(a);

//--------------------------end fetch-----------------

//--------------------------XMLHttpRequest--------------------

// let xhr = new XMLHttpRequest();
// xhr.open('get', 'https://swapi.dev/api/people/');
// xhr.responseType = 'json';
// xhr.onload = () => console.log(xhr.response.results[0]);
// xhr.send()

//--------------------------end XMLHttpRequest--------------------

// --------------------------Promise-----------------

// let prom = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('good')
//     }, 2000)
// })
//     .then(data => console.log(data))
//     .catch(er => console.error(er))
// console.log(prom);

// --------------------------end Promise-----------------

//================ Object.entries объект в массив циклом for in , Object.value , Object.keys

// const numO = {name: 'Vlad', age: 3, city: 'Piter'}
// const coun = [];
// for (let el in numO) {
//     // if (numO.hasOwnProperty(el)) {
//         coun.push(el)
//         // }
//     }

//-------------------------------

// const numO = { name: 'Vlad', age: 3, city: 'Piter' }
// // ключи объекта преобразуем в массив (ES6)
// console.log(Object.keys(numO)); // ['name', 'age', 'city']

// // значения объекта преобразуем в массив (ES8)
// console.log(Object.values(numO)); // ['Vlad', 3, 'Piter']

//---------------------------------

// const fruits = { "rise": 30, "banana": 10, "pineapple": 20, "watermelon": 100 };
// let fr = Object.entries(fruits);
// fr.sort();
// console.log(fr);

//---------------------------

// const fruits = { "rise": 30, "banana": 10, "pineapple": 20, "watermelon": 100 };
// const abjArr = Object.entries(fruits);
// console.log(abjArr);
// abjArr.forEach(([k, v]) => {
//     console.log(k, v);
// });
// for (let [key, value] of Object.entries(fruits)) {
//     console.log(`${key}:${value}`);
// }

//---------------

//================ конец Object.entries объект в массив циклом for in , Object.value , Object.keys


// ==============замыкание (два примера) раскоментировать в index.html <div class="inputs">

// function showHelp(help) {
//     document.getElementById('help').innerHTML = help;
// }

// function makeHelpCallback(help) {
//     return function () {
//         showHelp(help);
//     };
// }

// function setupHelp() {
//     var helpText = [
//         { 'id': 'email', 'help': 'Ваш адрес e-mail' },
//         { 'id': 'name', 'help': 'Ваше полное имя' },
//         { 'id': 'age', 'help': 'Ваш возраст (Вам должно быть больше 16)' }
//     ];

//     for (var i = 0; i < helpText.length; i++) {
//         var item = helpText[i];
//         document.getElementById(item.id).onfocus = makeHelpCallback(item.help);

//     }
// }
// setupHelp();

//-----------------------

// function makeAdder(x) {
//     console.log(x);
//     return function (y) {
//         return x + y;
//     };
// };

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);
// add5(2)
// add10(2)
// console.log(add5(2));  // 7
// console.log(add10(2)); // 12

// ==============конец замыкание

// ============== regexp регулярные выражения

// const regexp = /Сергей\./;
// const str = "Привет, меня зовут Сергей.!";
// const result = str.match(regexp);// ищем в str Сергей. 
// console.log(result); // ['Сергей.', index: 19, input: 'Привет, меня зовут Сергей.!', groups: undefined]
// // ==============конец regexp регулярные выражения


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// function n1(num) {
//     let arr1 = [];
//     for (let i = 0; i < num.length; i++) {
//         arr1[i] = num[i] * 2;
//     }
//     // let arr2 = num.reduce((pre, curr) => pre + curr)
//     arr1 = arr1.join('-');
//     // arr2 = arr1.split('-');
//     console.log(arr1);
//     document.getElementById('help').textContent = arr1;
//     // console.log(arr2);
// }
// n1(numbers)


