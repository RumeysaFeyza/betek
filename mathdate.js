
// MATH OBJESİ

// Ratgele sayı oluşturma 0 ve 1 arasında rastgele sayı oluşturur
var result = Math.random() // var result= Math.random()* 100 yaparsak 0 ve 99.9 arası sayı üretebil
console.log(result)

// sayı aşağı yuvarlansın istiyorsak "Math.floor" metodu kullanılır

var result = Math.floor(Math.random()* 100)
console.log(result)

// sayı aşağı yuvarlansın istiyorsak

var result = Math.ceil(51)
console.log(result)

// aşağı ya da yukarı değil de normal yuvarlama için  54.5 -> 55 , 54.3->54 gibi
 var result = Math.round(54.5)
 console.log(result)

 // Math.PI pi sayısını verir
 // Math.abs(-5) mutlak değer
 // Math.sqrt() karekök metodu
 // Math.cbrt() küpkök
 // Math.sign  girilen sayı pozitif mi negatif mi 
 // Math.max(5,7,9,8) maksimumu yani 9u verir
 //Math.min(5,6,7,3) minimumu yani 3ü verir


 // bir listedeki max ya da min değer için
 var list = [1,-1,5,3,8]
 var result= Math.min(...list)
 console.log(result)


 // DATE OBJESİ  DATE - UTC+3


 // 2024-08-19T11:44:38.247Z (UTC'ye göre aldı)
 var result = new Date() 
 console.log(result)


 // 2018-02-14T21:00:00.000Z
 var result = new Date("2/15/18")
 console.log(result)

 var result = Date.now() // 1724068415028 -> 1 ocak 1970'den bu yana geçen milisaniye
 console.log(result)
 

var result= new Date(8596)
console.log(result)


// ms cinsinden bugünün tarihini verir
var time = new Date()
var result = time.getTime()
console.log(result)


// kaçıncı ayda olduğumuzu verir
var time= new Date()
var result= time.getMonth() // ağustostayız ama 7 dedi saymaya 0 dan başlıyor
console.log(result)


// ayın kaçıncı gününde olduğumuzu verir
var time = new Date()
var result= time.getDate()
console.log(result)


// haftanın kaçıncı gününde olduğumuzu verir
var time = new Date()
var result= time.getDay()
console.log(result)

// bulunulan yıl
var time= new Date()
var result= time.getFullYear()
console.log(result)

//mevcut saat
var time= new Date()
var result = time.getHours()
console.log(result)

// mevcut dakika
var time = new Date()
var result= time.getMinutes()
console.log(result)

var result= `${time.getHours()} : ${time.getMinutes()}`
console.log(result)


// 2024-08-13T12:47:00.467Z tarih değiştirme
var time = new Date()
time.setDate(13)
console.log(time)

// 19 Ağustos şeklinde yazdık
var time = new Date() 
var result = time.toLocaleDateString("tr-TR", { day:"numeric", month:"long"})
console.log(result)

// toLocaleTimeString
// time stamp


//setTimeout  enn az 5 saniye sonra test yazdırcak

setTimeout(() => {
    console.log("test")
}, 5000)



var timeout = setTimeout(() => {
    console.log("Test")

}, 3000)
clearTimeout(timeout)

// setIntervel setTimeouta benzer ama setİntervel içerisine girilen her süre tekrar eder. yani her 3 saniye çalıştırılıyor.

function func() {
    console.log("test")
    clearInterval(interval)
}
var interval = setInterval(func, 3000)