/*
// bir promise 3 farklı durumda olabilir
// 1) pending: promise bekliyor ilk durum tamamlanmamış veya reddedilmemiş
// resolve edildiyse 2) fulfilled duruma geçer promise başarılı olmuş
// 3) reject -> rejected İşlemin başarısız olduğu anlamına gelir


// Promise { true } çıktısını aldık
const result = new Promise ((resolve,reject) => {
    resolve(true)

})
console.log(result)

// true çıktısını aldık üstteki koda sadece await ekledik
const resul = await new Promise ((resolve,reject) => {
    resolve(true)

})
console.log(resul)

// reject edelim
//Bir Hata Oluştu!
const resu = await new Promise ((resolve,reject) => {
    reject("Bir Hata Oluştu!")

})
console.log(resul)



//awaiti sildikten sonra kodun aynı şekilde çalışmasını istiyorsak 3 metodumuz var
// 1) .then()
// 2) .catch()
// 3) finally

// 3 sn sonra alttaki iki yazı aynı an da gelir
//Timeout Bitti
//true
const ress = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Timeout Bitti")
        resolve(true)

    }, 3000);
})
ress
.then(value => console.log(value))

//console.log("Bitti!") bunu yazsaydık üstteki kodlar bu satırı bloklamazdı konsola ilk bitti yazısı sonra timeout ve true gelirdi





// hata olursa

// 3 sn sonra
// Timeout Bitti
//Hata
//Promise Bitti! 
const res = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Timeout Bitti")
        reject("Hata")
        resolve(true)

    }, 3000);
})
res
.then(value => console.log(value))
.catch(error => console.log(error))
.finally(() => {
    console.log("Promise Bitti!")
    })



// bir yerde await kullanabilmek için o fonksiyonun asenkron olduğunu belirtmek gerekiyor
// fonksiyonun başına async yazmak 
// bir yerde await işlemi yapılacaksa o işlemin üzerindeki İLK fonksiyonun async olduğunu belirtmek gerekiyor




// hepsi pending durumda await eklemek ya da asenkron yapmak durumu çözmez. 4 işlem var bitmeleri gerekiyor
//Promise { <pending> },
//Promise { <pending> },
//Promise { <pending> },
//Promise { <pending> }
var array = [1,2,3,4]
array = array.map(v=> new Promise ((resolve, reject) => setTimeout(() => resolve(v*2)), 1000))

console.log(array)


// yukarıdaki problemi çözmek için yöntem
// [ 2, 4, 6, 8 ]
var array = [1,2,3,4]
Promise.all(array.map(async v => new Promise((resolve, reject) => setTimeout(() => resolve(v*2)), 1000)))
.then(result => console.log(result))



// [ 2, 4, 6, 8 ]
var array=  [1,2,3,4]
array = await Promise.all(array.map(async v => new Promise((resolve,reject) => setTimeout(() => resolve(v*2)), 1000)))

console.log(array)



// promise.any ilk değeri resolve eder sonrasına bakmaz burada 1 i aldı resolve etti sonrasına bakmadı ve 2 yazdı yalnızca resolvu alır reject olsa almazdı
// 2
var array = [1,2,3,4]
array = await Promise.any(array.map(async v => new Promise((resolve, reject) => setTimeout(() => resolve(v*2)),1000)))

console.log(array)


//jste time metodu yok bir programın beklemesi için:
//3 saniye Beklendi
import {promisify} from "util"
var sleep = promisify(setTimeout)

sleep(3000)
 .then(() => console.log("3 saniye Beklendi"))

 
 // aşağıdaki kod üstteki ile aynı işi yapar
 //3 saniye beklendi!
 import { promisify } from "util"
 var sleep = promisify(setTimeout)

 await sleep(3000)
 console.log("3 saniye beklendi!")

 */