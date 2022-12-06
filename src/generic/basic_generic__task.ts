export function append<T>(el: T, list: T[]): T[] {
    return list.concat(el)
}

append(1, [123, 23232, 322])
append('asd', ['asd', 231])