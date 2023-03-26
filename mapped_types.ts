type Modifier = 'read' | 'update' | 'create'; 

type UserRoles = {
    customers: Modifier;
    projects: Modifier;
    adminPanel: Modifier;
}

type ModifierToAccess<T> = {
    +readonly [Property in keyof T as `canAccess${string & Property}`]+?: boolean;
}

type UserAccessAuto = ModifierToAccess<UserRoles>;

// type UserAccess1 = {
//     customers?: boolean;
//     projects?: boolean;
//     adminPanel?: boolean;
// }

