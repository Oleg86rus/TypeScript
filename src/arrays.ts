const numbers = [1, 2, 3, 4]

const strs: string[] = []
const secondStrs: Array<string> = []

strs.push('1')
numbers.push(1)

const cars: unknown[] = []

cars.push({brand: 'Audi', wheels: 3})

const arrOfArr: string[][] = []
arrOfArr.push(['', ''])

function printArr(arr: unknown[]): void {
    arr.forEach((el, index, array) => {
        console.log(el, index)
    }) 
}