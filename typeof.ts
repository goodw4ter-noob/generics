let strOrNum: string | number;

if (Math.random() > 0.5) {
    strOrNum = 5;
} else {
    strOrNum = 'string';
}

let strOrNum2: typeof strOrNum;

const user = {
    name: 'Вася',
}

type keyOfUser = keyof typeof user;

enum Direction {
    Up = 'up',
    Down = 'down',
}

type d = keyof typeof Direction;