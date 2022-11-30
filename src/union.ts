type Status = 'ok' | 'loading' | 'error'

const staticX: Status = 'loading'

const arr: (string | number)[] = []

function printId(id: number | string): void {
    if (typeof id === 'string') {
        console.log(id.toUpperCase())
    }
}

function welcom(person: [string, string] | string): number | string {
    if (Array.isArray(person)) {
        console.log('hello ', person.join(' '))
        return 1
    } else {
        console.log('hello ', person)
        return person
    }
}