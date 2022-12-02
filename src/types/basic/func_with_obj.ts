function printPoint(point: {x:string, y: string}): void {
    console.log(`Coordinate of the point is x: ${point.x} and y: ${point.y}`)
}

const obj = {
    x: '1',
    y: '2'
}
printPoint(obj)

const secondObj = {
    x: '1',
    y: '2',
    z: 4
}
printPoint(secondObj)

function printName(user: {
    firstName: string,
    lastName?: string
}): void {
    console.log(`Hello `, user.firstName.toUpperCase())
    if (user.lastName) {
        console.log(`Nice to meet you Mr. `, user.lastName.toUpperCase())
    }
}
printName({firstName: 'Oleg', lastName: 'Pototskiy'})