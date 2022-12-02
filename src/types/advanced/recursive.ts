type NestedNumbers = number | NestedNumbers[]

const nums: NestedNumbers = [1, 2, [1, 2, [1, 2, [1, 2]]]]
nums.push(1)
nums.push([1, [1, 2, [1, 2]]])

// JSON

type JSONPrimitive = any
type JSONObject = { [k: string]: any }
type JSONArray = JSONValue[]
type JSONValue = JSONPrimitive | JSONObject | JSONArray

function isJSON(arg: JSONValue) {}

isJSON('hi')
isJSON(1)
isJSON({a: [123], v: {x: 1}})
isJSON([1, {x: ''}])