interface IForm {
    name: string;
    password: string;
    age: number
}

// const form: IForm = {
//     name: 'Вася',
//     password: '123',
// }

type ModifierToStatus<T> = {
    [Property in keyof T]: {
        isValid: true
    } | {
        isValid: false,
        errorMessage: string,
    }
}

type AutoValidation = ModifierToStatus<IForm>;

const formValidation: AutoValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Must contain 5 symbols at least!' },
    age: { isValid: true },
}