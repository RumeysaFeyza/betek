
// stringten integere çevirme parseint metodu
var a = "3.14"
var total = parseInt(a)
console.log(total)

// stringten integer eçevirme parseFloat methodu
var a ="3.65"
var total = parseFloat(a)
console.log(total)

// number verildiği takdirde her şeyi değiştirebilir
var a = "3.45"
var total = Number(a)
console.log(total)

//not number
var a ="yazi"
var total = Number(a)
console.log(total)

// null değerini çevirme
var a= null
var total = Number(a)
console.log(total)

// undefined
var a = undefined
var total = Number(a)
console.log(total)



// X'ten stringe çevirme
var a = 15
var total = String(a)
//console.log(total)    
console.log(typeof total)

//nullu stringe çevirme
var a= null
var total = String(a)
console.log(total)

// null ve undefined da to string metodu kullanılmaz
var a = 89
var total= a.toString()
console.log(total)
console.log(typeof total)

 




// KOŞULLU İFADELER
var a = 5
console.log(a==5)

var b= 3
console.log(b==5)

var c = "5"
console.log(c==5)  // burada true döner stringi ve numberi eşitler eğer "===" sorgulaması yapırlırsa tür de sorgulanır bu koşulda string 5 ile integer 5 aynı şey olmaz ve false döner

// eşit değil mi ? "!="
console.log("test"!="test2")

// değeri ve tipi eşit değil mi? "!=="  


var condition1 = 4<4
var condition2= 5>2
console.log(condition1 && condition2)


 var condition= 5<3
 var condition1= 4>2
 var condition2= 1>8

 console.log(condition || condition1 || condition2 )

 

 // if else yapıları
 
 var age = 9

 if (age >=18) {
    console.log("oyun başlatıldı")
 }
 else if (age >= 14) {
    console.log("Yaşınız:14")

 }
 else {
    console.log("yaşınız tutmuyor")
 }



var age = 19
var response= (age>=18) ? "Oyun baslatildi" : "Yasiniz tutmuyor!"
console.log(response)



// Falsy values
if (true){
    console.log("hello world")
} 

if (false){
    console.log("rfu")
}
    




// SWITCH CASE YAPILARI



var input = 5

var day
switch (input) {
case 1: 
   day = "pazartesi"
   break
case 2:
   day= "sali"
   break
case 3:
   day = "çarşamba"
   break
case 4:
   day = "perşembe"
   break
case 5:
   day = "cuma"
   break
case 6:
   day= "cumartesi"
   break
case 7:
   day ="pazar"
   break

}

console.log(day)



