let word: string | null = null

// @ts-ignore
let newnum: number;
newnum = 10;
if (num > 5) {
    word = 'abc'
}

console.log(word!.toUpperCase())

function printNameExc(name?: string) {
    const fullName: string = name!
}

interface Person {
    name: string,
    age: number,
    sex: 'female' | 'male'
}

export function printNameExc2(person?: Person) {
    console.log(person!.name)
}

const people: Person[] = [
    {
        name: 'Oleg',
        age: 31,
        sex: 'male'
    },
    {
        name: 'Coc',
        age: 31,
        sex: 'male'
    },
    {
        name: 'Dad',
        age: 31,
        sex: 'male'
    },
    {
        name: 'Kate',
        age: 31,
        sex: 'female'
    },
    {
        name: 'Mom',
        age: 31,
        sex: 'female'
    }
]

const femalePeople = people.find(person => person.sex === 'female')!