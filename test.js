
var test =1
console.log(test)


var a = "test"
var b = "merhaba"
console.log(a +""+ b)

var a = "test"
var b = "merhaba"
var c = `${a}${b}`
console.log(c)



var a = "test"
var b = "merhaba"
var c = `${a} ${b} test3 ${2 + 5} test6`
console.log(c) 



var a = "merhaba"
console.log(a[4]) 



var a = "Merhaba Dünya!"
console.log(a.indexOf("r"))


var a = "merhaba dünya"
console.log(a.indexOf("a",5))


var a = "merhaba dünya"
console.log(a.lastIndexOf("a"))
console.log(a.lastIndexOf("a",11))


var a = "Merhaba Dünya!"
console.log(a.startsWith("Merha"))
console.log(a.startsWith("haba"))
console.log(a.endsWith("Dünya!"))
console.log(a.endsWith("Dün",11))  //10. indekse kadar bakar o yüzden n harfi dahil olur 
console.log(a.includes("Dün"))
console.log(a.includes("haba Dün"))
console.log(a.slice(1,3))
console.log(a.slice(3,7))
console.log(a.substring(1,4)) 
console.log(a.toUpperCase())
console.log(a.toLowerCase())


 //trim baştaki ve sondaki boşluk karakterini kaldırır

var a = "   test   "
console.log(a.trim())
console.log(a)




var a = " TEST"
console.log(a.slice(0,3))
console.log(a.slice(0,3).toLowerCase())
console.log(a.slice(0,3).toLowerCase().trim()) 



var a = "test"
console.log(a.length)





