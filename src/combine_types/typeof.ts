import {average} from '../types/basic/functions'

export {}


let str = 'Hello world'
type x = typeof str

type Fn = typeof average

const max: Fn = (...numbers) => Math.max(...numbers)
max(1, 2, 3, 4)
// max(1, 2, 3, 4, '') error

type returnFn = ReturnType<Fn>