const obj = { a:1, b: 2, c:3, soma() { return a + b + c } }
// Passando Objeto pra JSON
console.log(JSON.stringify(obj))

// Passando JSON pra Objeto
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{"a": 1.8, "b": "string", "c": true, "d": {}, "e": [] }'))