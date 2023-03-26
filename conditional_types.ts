const a1: number = Math.random() > 0.5 ? 1 : 0;

interface HTTPResponse<T extends 'success' | 'failed'> {
    code: number;
    data: T extends 'success' ? string : Error,
    // additionalData: T extends 'success' ? string : number,
}

const err: HTTPResponse<'failed'> = {
    code: 400,
    data: new Error('Bad Request'),
}

const succes: HTTPResponse<'success'> = {
    code: 200,
    data: 'ok',
}

class User10 {
    id!: number;
    name!: string;
}

class UserPersistent {
    dbId!: string;
}

function getUser(id: number): User10;
function getUser(dbId: string): UserPersistent;
function getUser(dbIdOrId: string | number): User10 | UserPersistent {
    if (typeof dbIdOrId === 'number') {
        return new User10();
    } else {
        return new UserPersistent();
    }
}

type USerOrUserPersistent<T extends string | number> = T extends number ? User10 : UserPersistent;

function getUserWithGeneric<T extends string | number>(id: T): USerOrUserPersistent<T> {
    if (typeof id === 'number') {
        return new User10() as USerOrUserPersistent<T>;
    } else {
        return new UserPersistent() as USerOrUserPersistent<T>;
    }
}

const res = getUserWithGeneric(1);
const res2 = getUserWithGeneric('qwe');