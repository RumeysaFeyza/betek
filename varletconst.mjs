// var a = 5  fonksiyon içerisinde tanımlanan bir değişken fonksiyon dışında kullanılamaz return edilirse kullanılabilir
          // işin içine blok scope girince değişiyor örneğin if içinde değişken kullanılırsa blok dışında da kullanabilir
// let a = 5  içerisinde bulunduğu scope içerisinde erişilebilir
// const a = 5  içerisine bulunduğu scope içerisinde erişilebilir
// commonJS de yalnzıca a = 5 deyip de bir tanımlama yapabiliriz ES de olmaz

/* 
   let a = 3                     
   a = 5 
   */
// sıkıntı olmaz 5i yazarız konsola ama ikinci defa let, const ya da var yazamayız

// const yalnızca bir kez tanımlanır bir daha değiştirilemez sabittir değeri 

/*
 const a = 5
 a= 3
*/

/* bir obje ikinci defa tanımlanamaz ama içindeki propertyler değişebilir ikinci örnekteki gibi
const obj = {
"a":1
}
obj = {
"b":2
}
console.log(a)
*/  
const obj = {
    "a":1
}
obj["a"] =2
console.log(obj) // { a: 2 }

// arr = .... diyemeyiz ama içeriisndeki değerleri değiştirebiliriz
// [ 1, 2, 3, 5 ]
const arr = [1,2,3]
arr.push(5)
console.log(arr)

// Garbage Collector bir veri ne zaman ULAŞILAMAZ hale gelirse garbage collector o veriyi bellekten siler
// Memory Management 
// Memory Leak