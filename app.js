"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function identity(data) {
    return data;
}
const num = [1, 2, 3];
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const a = yield new Promise((resolve, reject) => {
            resolve(1);
        });
    });
}
const check = {
    drive: true,
    kpp: false,
};
function logMiddleWare(data) {
    console.log(data);
    return data;
}
// const res = logMiddleWare<number>(10);
function getSplittedHalf(data) {
    const l = data.length / 2;
    return data.splice(0, l);
}
function tostring(value) {
    // const res = value.toString();
    if (Array.isArray(value))
        return value.toString();
    switch (typeof value) {
        case 'string':
            return value;
        case 'number':
        case 'symbol':
        case 'bigint':
        case 'boolean':
        case 'function':
            return value.toString();
        case 'object':
            return JSON.stringify(value);
        default:
            return undefined;
    }
}
// console.log(tostring(3));
// console.log(tostring(true));
// console.log(tostring(['a', 'b']));
// console.log(tostring({ a: 1 }));
// console.log(tostring(test));
// Ипользование дженериков с типами и интерфейсами
const split = getSplittedHalf;
const logLine = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
};
// Ограничение дженериков 
// interface Vehicle {
class Vehicle {
}
function kmToMiles(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
// interface LCV extends Vehicle {
class LCV extends Vehicle {
}
const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());
function logId(id, data) {
    console.log(id, data);
    return { id, data };
}
// УПРАЖНЕНИЕ
const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
function sortById(arr, seq) {
    const newArr = [...arr];
    switch (seq) {
        case 'desc':
            return newArr.sort((a, b) => b.id - a.id);
        case 'asc':
            return newArr.sort((a, b) => a.id - b.id);
    }
}
// console.log(sortById(data, 'desc'));
class Resp {
    constructor(data, error) {
        this.data = data;
        this.error = error;
    }
}
const response = new Resp('data', 0);
class HTTPRes extends Resp {
    constructor(code, data, error) {
        super(data, error);
        this.code = code;
    }
}
