/*
// Throw - Callback - Promise Rejections - EventEmitter

// Error Object

var error = new Error("Test Hatası!")
console.log(error)
console.log(error.message)
console.log(error.name)
console.log(error.stack)

// RangeError
// RangeError: toFixed() digits argument must be between 0 and 100
var a = 3.14
console.log(a.toFixed(200))


// ReferenceError
// ReferenceError: a is not defined
function test() {
    var a = 3

}
test()
console.log(a)



// TypeError
// undefined
var obje = {"name": "Ali Eren"}
console.log(obje.age)



//TypeError: Cannot read properties of undefined (reading 'a')
var obje = {"name": "Ali Eren"}
console.log(obje.age.a)


// SyntaxError
//yntaxError: missing ) after argument list
console.log(Math.max(1,3,5)



// hatalarla başa çıkma yöntemleri 
// try - catch - finally

// try bloğuna girdikten sonra throwdan sonra catch bloğuna heçer o yüzden console b yazmaz catcin içi okunduktan sonra gelen kodlar devam eder.
try {
    console.log("Başladı!")
    throw new Error("Test Hatası")

    console.log("b")
} catch (e) {
    console.log("Bir Hata Oluştu")
}

// try bloğunda hata olması durumunda catche gidiyor catchde hata olma ihtimaline karşı finally bloğu da olsa güzel olur

finally {
    console.log("Bitti!")
}
console.log("a")  // a yı yazar konsola yani bitti de buraya yazılabilir ama yukarıdaki sebepten dolayı finally metodu kullanmak iyidir

// process
process.exit("a") // processi sonlandırır bundan sonra yazılan kodlar çalışmaz
console.log("a")


// throw ile fırlatılan bir hata try catch bloğu tarafından yakalanmadığında emit ediliyor
// Bir Hata Yakalandı


process.on("uncaughtException" ,e=> {
    console.log("Bir Hata Yakalandı")

})
throw new Error("Test")




// Hata Catch Tarafından Yakalandı
// yani process.on("uncaughtException" try catch bloğu tarafından yakalanmamış hatalar da çalışıyor
process.on("uncaughtException" ,e=> {
    console.log("Bir Hata Yakalandı")

})

try {
throw new Error("Test")
} catch (e) {
    console.log("Hata Catch Tarafından Yakalandı")
}

*/

// CALLBACK
