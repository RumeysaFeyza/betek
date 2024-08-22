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
   return{
    next: () => {
        return{
            value: "test",
            done: false
        }
    }
   }


}


const iterator = obj[Symbol.iterator]()
console.log(iterator.next())    // { value: 'test', done: false }