function sum(a: number, b: number): number {
    return a + b
}
const sum2 = (a: number, b: number): number => a + b
const sum3 = function (a: number, b: number): number {
    return a + b
}
sum(2, 4)
sum2(2, 2)

function log(name: string, userId?: string): void {
    console.log('Hello ', name, ' with ID ', userId || 'anonym')
}
log('Oleg')

function crash(): never {
    throw new Error('crash!')
}
// crash()

export function average(...nums: number[]) {
    const sum = nums.reduce((current, total) => current + total, 0)
    return sum / nums.length
}

average(1, 2, 3, 4)