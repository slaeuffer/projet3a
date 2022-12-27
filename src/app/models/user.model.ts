export enum UserRole  {
    admin = "admin",
    orga ="orga",
    user = "user",
}

export interface User {
    id: number,
    name: string,
    surname: string,
    email: string,
    isDeleted: Boolean,
    role: UserRole,
}

