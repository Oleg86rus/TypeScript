function add(a: number, b:number): number
function add(a: string, b: string): string
function add(a: any, b: any): any {
    return a + b
}
add(1, 1)
add('s', 'a')

type asyncCb = (res: number) => number

// @ts-ignore
function asyncSum(a: number, b: number): Promise<number>
function asyncSum(a: number, b: number, cb: asyncCb): number
function asyncSum(a: number, b: number, cb: asyncCb): any {
    const res = a + b
    if (cb) {
        return cb(res)
    }
    return Promise.resolve(res)
}
asyncSum(1, 2)

// function head(value: string | number[] | boolean[]): string | number[] | boolean[] {
//     return value[0]
// }
function head(value: number[]): number
function head(value: boolean[]): boolean
function head(value: string): string
function head(value: any): any {
    return value[0]
}
const xxx = head('ssd')
const yyy = head([1,2,3])
const zzz = head([true, true])
