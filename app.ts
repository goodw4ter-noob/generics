function identity<T>(data: T) {
    return data;
}

const num: Array<number> = [1, 2, 3];

async function test() {
    const a = await new Promise<number>((resolve, reject) => {
        resolve(1);
    });
}

const check: Record<string, boolean> = {
    drive: true,
    kpp: false,
}

function logMiddleWare<T>(data: T): T {
    console.log(data);
    return data;
}

// const res = logMiddleWare<number>(10);

function getSplittedHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, l);
}

function tostring<T>(value: T): string | undefined {
    // const res = value.toString();
    if (Array.isArray(value)) return value.toString();
    
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

const split: <T>(data: Array<T>) => Array<T> = getSplittedHalf;

interface ILogLine<T> {
    timeStamp: Date,
    data: T,
}

type LogLineType<T> = {
    timeStamp: Date,
    data: T,
}

const logLine: ILogLine<{ a: number }> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
}

// Ограничение дженериков 

// interface Vehicle {
class Vehicle {
    run!: number;
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}

// interface LCV extends Vehicle {
class LCV extends Vehicle {
    capacity!: number;
}

const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());

function logId<T extends string | number, Y>(id: T, data: Y): { id: T, data: Y } {
    console.log(id, data);
    return { id, data };
}

// УПРАЖНЕНИЕ

const data = [
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 3, name: 'Надя' },
];

interface obj {
    id: number,
    name: string
}

function sortById<T extends obj>(arr: T[], seq: 'desc' | 'asc'): T[] {
    const newArr = [...arr];

    switch (seq) {
        case 'desc':
            return newArr.sort((a, b) => b.id - a.id);

        case 'asc': 
            return newArr.sort((a, b) => a.id - b.id);
    }

}

// console.log(sortById(data, 'desc'));

class Resp<D, E> {
    data?: D;
    error?: E;

    constructor(data?: D, error?: E) {
        this.data = data;
        this.error = error;
    }

}

const response = new Resp<string, number>('data', 0);

class HTTPRes extends Resp<string, number> {
    code!: number;

    constructor(code: number, data: string, error: number) {
        super(data, error);
        this.code = code;
    }

}