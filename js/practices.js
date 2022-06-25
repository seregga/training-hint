
//>>>>>>>>>>>>>>>>> extends class b привязка контекста к методу класса

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
//     }
//     getInfo = this.getInfo.bind(this);
//     getDoorsCount = this.getDoorsCount.bind(this)
//     getPrice = this.getPrice.bind(this)

//     getDoorsCount() {
//         return `Кол-во дверей: ${this.doorsCount}`;
//     }
// }

// class Bike extends Transport {
//     constructor(type, vendor, model, maxSpeed, price) {
//         super('bike', price, vendor, model);
//         this.maxSpeed = maxSpeed;
//     }
//     getInfo = this.getInfo.bind(this);
//     getMaxSpeed = this.getMaxSpeed.bind(this)
//     getPrice = this.getPrice.bind(this)

//     getMaxSpeed() {
//         return `Макс. скорость: ${this.maxSpeed} км/ч`;
//     }
// }


// const transport = new Transport('Cross', '300', 'tr-land', 'tratata')
// console.log(transport);
// console.log(transport.getInfo());
// console.log(transport.getPrice());

// const bike = new Bike('Cross', 'Moto-Land', 'Suzuki', 270, 500)
// console.log(bike);
// console.log(bike.getMaxSpeed());
// console.log(bike.getInfo());
// console.log(bike.getPrice());

// const car = new Car('Sedan', 'Auto-Land', 'Skoda', 5, 1500)
// console.log(car);
// console.log(car.getDoorsCount());
// console.log(car.getInfo());
// console.log(car.getPrice());

//>>>>>>>>>>>>>>>>> конец extends class b привязка контекста к методу класса


// >>>>>>>>>>>>>>>>>> получить объект массивов, четного и нечетного >>>>>>>>>>>>>>>>>>>>>>>>>

// const numbers = [1, 2, 3, 4, 5, 6];
// separateArray(numbers);
// // // должен вернуть { even: [2, 4, 6], odd: [1, 3, 5] }

// function separateArray(array) {
//     let even = [], odd = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {
//             even.push(array[i]);
//         } else {
//             odd.push(array[i])
//         }
//     }
//     let res = { even: even, odd: odd }
//     console.log(res);
//     console.log(even);
//     console.log(odd);
// }

// >>>>>>>>>>>>>>>>>> конец получить объект массивов, четного и нечетного >>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>>>> поиск максимального числа в массиве >>>>>>>>>>>>>>>>>>>>>>>>>


// 'use strict'

// let arr = [-5, -11, -1, 18, -55, 27, -89];
// function getArrMaxValue(arr) {
//     let a = arr[0];
//     // console.log(a);

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > a) {
//             a = arr[i]
//             // console.log(a);
//         } else {
//             console.log(arr[i]);
//         }
//         // const element = array[i];

//     }
//     return a
// }
// console.log(typeof ('аксимальное число в данном массиве: ' + getArrMaxValue(arr)), 'аксимальное число в данном массиве: ' + getArrMaxValue(arr));

// >>>>>>>>>>>>>>>>>> конец поиск максимального числа в массиве >>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>>>> задача с практикума  >>>>>>>>>>>>>>>>>>>>>>>>>


// const result = {
//     even: [],
//     odd: []
// };
// const keysDict = {
//     "0": "even",
//     "1": "odd",
//     "name": 'vasa'
// };
// for (let i = 0; i < 10; i++) {
//     const key = keysDict[i % 2];
//     if (i > 3) {
//         break;
//     }
//     result[key] = [...result[key], i];// ...result[key] это все результаты в мвссиве и добавляем i в массив   (можно было result[key].push(i);)
// }
// delete result.even;
// console.log(result);

// >>>>>>>>>>>>>>>>>> конец задача с практикума  >>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>>>> задача с интервью на middle-developer  >>>>>>>>>>>>>>>>>>>>>>>>>

// let words = ['banana', 'orange', 'banana', 'apple', 'banana', 'orange', 'banana'];
// let num = [1, 2, 11, 17, 4, 5, 8, 9, 4];

// (function (arr) {
//     const result = [];
//     const temp = arr.reduce((pre, cur) => {

//         pre[cur] = (pre[cur] || 0) + 1;
//         return pre
//     }, {})
//     console.log(temp);
// }(words))

// >>>>>>>>>>>>>>>>>> конец задача с интервью на middle-developer  >>>>>>>>>>>>>>>>>>>>>>>>>

// const words = [1, 5, 5, 8, 10, 15];

// function num(params) {
//     return params != 8

// }
// const result = words.filter(num);

// console.log(result);

// let a = {
//     data: [
//         {
//             name: 'vasya',
//             photo: { large: '1', small: '2' },
//             age: 30
//         },
//         {
//             name: 'dims',
//             photo: { large: '3', small: '4' },
//             age: 30
//         }
//     ],
//     da: [
//         {
//             name: 'vasya',
//             photo: { large: '1', small: '2' },
//             age: 30
//         },
//         {
//             name: 'dims',
//             photo: { large: '3', small: '4' },
//             age: 30
//         }
//     ]
// };



// let b = Object.entries(a)
// console.log(a);
// console.log(b);


// const test = a.map((el, index) => {
//     // console.log(index);
//     return el.photo.large
// }).filter(el => {
//     return el > 1
// })






