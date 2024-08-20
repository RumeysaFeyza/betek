
var a = 5.3
console.log(a)

// sadece tam kısmı alma

var a = 5.3
console.log(parseInt(a))

// nan not number

var a = "test"
console.log(parseInt(a))

// non mı değil mi 
var a = "test"
a = parseInt(a)
console.log(isNaN(a))

var a = 5
a = parseInt(a)
console.log(isNaN(a))


// toFixed metodu virgülden sonra kaç basamak ayrıca yuvarlama yapar

var a = 3.1558
console.log(a.toFixed(0)) 


// MANTIKSAL OPERATÖRLER

var a = 10
var b = 2
var total = a + b
console.log(total)

var a = 10
var b = 2 
var total = a-b
console.log(total)

var a = 10 
var b= 2
var total = a*b
console.log(total) 

var a = 10
var b= 2
var total= a / b
console.log(total)



var a = 5
a++
console.log(a)



var a = 5
 a = a + 5 // a+=5 /= *= gibi şeyler de var
 console.log(a)
 


var a = 5
var b = 3
var total = a**b
console.log(total)



var total = 16 % 5
console.log(total)
