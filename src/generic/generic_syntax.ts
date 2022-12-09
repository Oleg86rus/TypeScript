// Array<string>
// string[]
// Promise<number>

type TypeFactory<T> = T
type XType = TypeFactory<string>
type XType2 = TypeFactory<number>
type XType3 = TypeFactory<boolean>

export function toArray<T>(...arg: T[]): T[] {
    return arg
}
toArray<number>(1, 2, 3)
toArray('as', 'add')


function headGenericS(value: string): string
function headGenericS(value: readonly  []): undefined
function headGenericS<T>(value: T[]): T
function headGenericS(value: any): any {
    return value[0]
}
headGenericS(['12q', 'qwer'])

const head = <T>(value: T[]): T => value[0]

interface ModelDataS<T> {
    title: string,
    value: T, // number [] boolean ....

}

const obj1: ModelDataS<number> = {
    title: 'asasa',
    value: 12
}

const obj2: ModelDataS<Array<number>> = {
    title: '12asdda',
    value: [12]
}
