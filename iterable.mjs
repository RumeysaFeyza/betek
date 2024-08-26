// Iterators
/*
var obj = {
    "İstanbul": [
        "Ahmet",
        "Ali",
        "Ceren",
        "Mehmet",

    ],
    "Ankara": [
        "Ayşe",
        "Hakan",

    ]
}

obj[Symbol.iterator] = function() {

const cityKeys = Object.keys(this)
let cityIndex = 0;
let userIndex = 0;


   return{
    next: () => {

        if(cityIndex > cityKeys.length-1) {
            return {
                value: undefined,
                done: true
            }
        }
        const users =obj[cityKeys[cityIndex]]
        const user = users[userIndex]

        const isLastUser = userIndex >= users.length-1
        if(isLastUser) {
            cityIndex++
            userIndex = 0
    }
    else {
        userIndex++
    }
        return{
            value: user,
            done: false
        }
    }
   }


}


const iterator = obj[Symbol.iterator]()
console.log(iterator.next())    
console.log(iterator.next())    
console.log(iterator.next())    
console.log(iterator.next())    
console.log(iterator.next())    
console.log(iterator.next())    
console.log(iterator.next())    


for (let value of obj) {
    console.log(value)
}

// GENERATORS

function* test() {
    yield "a"
    yield "b"
    yield "c"
}
obj[Symbol.iterator] = test

const iterator = test()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

function* test() {
    yield "a"
    yield "b"
    yield "c"
}
function* test2() {
    yield 1
    yield* test()
    yield 2
}

const iterator = test2()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)


*/
// en başta iterable ile yapılan örneğin generators ile yapmak 

var obj = {
    "İstanbul": [
        "Ahmet",
        "Ali",
        "Ceren",
        "Mehmet",

    ],
    "Ankara": [
        "Ayşe",
        "Hakan",

    ]
}

obj[ Symbol.iterator] = function*() {

    const cityKeys = Object.keys(this)
    for(let city of cityKeys){
        for(let name of this[city]) {
            yield name
        }
        }
            

}
 console.log([...[1,2,3], ...obj])