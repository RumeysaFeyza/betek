// Hoisting
// declare - Initialization (değer vermek) - Assignment(yeniden değer atamak)

/*
// asıl kod
console.log("test")
let a = 3
console.log(a)

// hoist edilen
let a // declare
console.log("test")
a = 3
console.log(a)
*/

// TDZ - Temporal Dead Zone ( geçici ölü bölge) herhangi bir değişkenin erişilemez olduğu bölgeden ilk inialize edilene kadar olduğu bölgeye verilen isim


// var, let ve constun aksine hoist edildiğinde yani en üstte declare edildiği zaman undefined olarak initiale ediliyor

// jsde fonksiyon tanımlandıktan önce de sonra da çağrılabilir

let a = 5

function print() {
    console.log(a)
    
    let a = 3
    
}
print()

// 1.a değişkeni declare edildi
// 2. print değişkenini declare ve initialize etti
// 3.print fonksiyonu çağrıldı
// 4. a = 3 yazılsaydı hata alınmazdı ama başında let olduğu için a değişkeni declare edildi (TDP)
   // declare edildi ama initialize edilmedi o yüzden kullanılmadı
// console.log(a)
// 6. ayı 3 değer ile initialize edecekti

// let yerine var yazılsaydı undefined alınırdı