interface Car {
    wheels: number,
    brand: string,
    type: string,
    isNew?: boolean,
    name?: string

    [key: string]: unknown
}

const car: Car = {
    wheels: 4,
    brand: 'BMW',
    type: 'sedan',
    // isNew: false
}

const newCar: Car = {
    wheels: 4,
    brand: 'Audi',
    type: 'sedan',
    isNew: true,
    name: 'A5'
}

newCar.go = true