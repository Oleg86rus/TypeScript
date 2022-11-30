// nothing
let x = undefined
let z = null

// literal
let num = 108
let str = 'str'

// universal
let mm: any = 1
mm = 'str'
mm = []
mm.toUpperCase()

let xx: unknown = 2
if (typeof xx === 'string') xx.toUpperCase()