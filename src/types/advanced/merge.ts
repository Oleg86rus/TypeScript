type Union1 = 'a' | 'b' | 'c' | 'd'
type Union2 = 'a' | 'e' | 'c' | 'i'
type Union3 = Union2 | Union1 // all variants
type Uniun4 = Union1 & Union2 // 'a' | 'c'

type Union5 = {a: string, b: string, c: number} & {a: string, t: boolean, z: null}

// const example: Union5 = {
// all keys
// }

type User = {
    readonly email: string,
    readonly login: string,
    password: string
}

type Person = {
    readonly firstName: string,
    lastName?: string,
    phone?: string,
    yearOfBirth?: number
}

type Employee = {
    contractStart: Date
} & User & Person

type oldDeveloper = {
    skills: string[],
    phone: string
    level?: 'junior' | 'middle' | 'senior',
    say(): void,
    code?: (arg: string) => void
} & Employee

// const newUser: oldDeveloper = {
//
// }
