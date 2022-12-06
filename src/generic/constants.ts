function len<T extends {length: number}>(arg: T) {
    return arg.length
}
// есть тип object
len('asdd')
len(['asd'])
len({length: 12})
// len({length: '12'})
// len(123)
// len(true)
const obj1 = { a: 1, length: 1 }
len(obj1)

