// @ts-ignore

export interface ICar {
    wheels: number,
    brand: string,
    type: string,
    isNew?: boolean,
    name?: string

    [key: string]: unknown
}

const car: ICar = {
    wheels: 4,
    brand: 'BMW',
    type: 'sedan',
    // isNew: false
}

export const newCar: ICar = {
    wheels: 4,
    brand: 'Audi',
    type: 'sedan',
    isNew: true,
    name: 'A5'
}

newCar.go = true