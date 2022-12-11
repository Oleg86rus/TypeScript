export {}

type Side = 'top' | 'right' | 'bottom' | 'left'
type Margin = `margin${Capitalize<Side>}`
type Padding = `padding${'' | Capitalize<Side>}`

type Direction = 'down' | 'left' | 'right' | 'up'
type Position = 'top' | 'bottom'
type Entry = 'in' | 'out'
type FadeClassNames = `fade${Capitalize<Entry>}${Capitalize<'' | Direction | Position>}`

interface Car {
    brand: string,
    model: string,
    year: number
}

type CarFactory = {
    [K in keyof Car as `set${Capitalize<K>}`]: (car: Car, value: Car[K]) => void
}

type Style = 'none' | 'dotted' | 'dashed' | 'solid'
type Color = 'Red' | 'Green' | 'Blue' | 'Black' | 'White'

type BorderStyle = `${Style} ${Uncapitalize<Color>}`

let borderStyle1: BorderStyle = 'solid red'
let borderStyle2: BorderStyle = 'dashed white'