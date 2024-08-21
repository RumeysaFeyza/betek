/*// bir promise 3 farklı durumda olabilir
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
const res = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Timeout Bitti")
        resolve(true)

    }, 3000);
})
res
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

*/