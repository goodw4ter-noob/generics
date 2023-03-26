interface Role {
    name: string;
}

interface Permission {
    endDate: Date;
}

interface User {
    name: string;
    roles: Role[];
    permission: Permission;
}

const newUser: User = {
    name: 'Вася',
    roles: [],
    permission: {
        endDate: new Date(),
    }
}

const roleNames = 'roles';

type rolesTypes = User['roles'];
type rolesTypes2 = User[typeof roleNames];

type roleType = User['roles'][number];

const roles = ['admin', 'user', 'customer'] as const;

type roleTypes = typeof roles[number]; // получаем union-type между 'admin', 'user', 'customer' 

type dateType = User['permission']['endDate'];

