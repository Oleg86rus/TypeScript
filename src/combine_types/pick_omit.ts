export {}

type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei'

type Names = Record<string, number>
type BrandNames = Record<WellKnownBrands, string>

// const myBrands: BrandNames = {
//     apple: ''
// }

interface Todo {
    id: string,
    title: string,
    description: string,
    completed: boolean,
    createdAt: number
}

type SimpleTodo = Pick<Todo, 'id' | 'title' | 'completed'>

const todo1: SimpleTodo = {
    id: 'asda',
    title: 'adsa',
    completed: false
}

type SimpleTodo2 = Omit<Todo, 'description' | 'createdAt'>

const todo2: SimpleTodo2 = {
    id: '123',
    title: 'asd',
    completed: true
}

type NewTodo = Pick<Todo, 'title'>