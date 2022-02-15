class Transport {
    constructor(type, price, vendor, model) {
        this.type = type;
        this.price = price;
        this.vendor = vendor;
        this.model = model;
    }

    getInfo() {
        return `${this.vendor}, ${this.model}`;
    }

    getPrice() {
        return this.price.toLocaleString('ru-RU') + ' ₽';
    }
}

class Car extends Transport {
    constructor(type, vendor, model, doorsCount, price) {
        super(type, price, vendor, model);
        this.doorsCount = doorsCount;
        getInfo.bind(this);
    }
    getDoorsCount() {
        return `Кол-во дверей: ${this.doorsCount}`;
    }
}

class Bike extends Transport {
    constructor(type, vendor, model, maxSpeed, price) {
        super('bike', price, vendor, model);
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return `Макс. скорость: ${this.maxSpeed} км/ч`;
    }
}

// const bike = new Bike('Cross', 'Easy-Moto', 'Suzuki', 270, 500)
// console.log(bike);
// console.log(bike.getMaxSpeed());
// console.log(bike.getInfo());
// console.log(bike.getPrice());

const car = new Car('Sedan', 'Car-France', 'Reno', 4, 1000)
const carTest = car;
console.log(carTest);

console.log(car);
console.log(car.getDoorsCount());
console.log(car.getInfo());
console.log(car.getPrice());


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>