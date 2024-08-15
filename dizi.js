

var list = [8 ,"test", 12]

list.push("4")
list.push(3)
console.log(list.length)

//splice 45i sildi
var list = [8, 12 , 45 , "test" , 2]
list.splice(2,1)
console.log(list)

// verilen bir metni liste haline getirme 
//split boşluktan itibaren ayırdı
var test = "merhaba dünya nasilsin"
var response = test.split(" ")
console.log(response)

//split k den itibaren ayırdı
var ornek= "hukuk okuyorum"
var response = ornek.split("k")
console.log(response)

// dizi elemanı değiştirme
var list = ["ahmet" , "mehmet", "murat", "mert"]
list[2]= "efe"
console.log(list)
console.log(list.includes("murat"))
console.log(list.indexOf("mehmet"))

//splice parantezin içine yazılan birinci sayı kaçıncı indexten itibaren olduğunu ikinci sayı kaç tane silineceğiyle ilgili bilgi verir
var list = ["mehtap", "ahmet" , "murat", "mert"]
list.splice(1,2)
console.log(list)


// slice metodu ilk sayı kaçıncı indeksten itibaren olduğunu ikinci sayı kaçıncı indekse kadar olduğu ama burada liste eşitlemek de gerekiyor.
var list = ["murat","ayşe", "demir", "ilay", "ege","efe","can","sefa"]
list = list.slice(2,3)
console.log(list)

// splice ile ekelem yapabilme (1.indekse testi ekledik.)
var list = ["ahmet", "mehmet","murat", "mert"]
list.splice(1,0,"test")
console.log(list)



// arrayleri birbirine ekleme
var array=[4,5,6]
var array2=[5,5,6]

var response = array.concat(array2)
console.log(response)



var array=[4,5,6]
var array2=[5,5,6]

var response = array2.concat(array)
console.log(response)


var array=[4,5,6]
var array1=[1,2,3,4]
var array2=[5,5,6]
var array3=[2,8,9]
var response = array.concat(array, array1,array2,array3)
console.log(response)



// spread syntax ... 
var array = [2,3,4]
var array2 = [2,5,8]
var array1 = [5,8,9]

var response = [...array, ...array2 , ...array1]
console.log(response)



// join metodu arrayleri birleştirme
 var array =["rumeysa", "evine","gitmek","istiyor"]
 var response = array.join(" ")
 console.log(response)
 

var array = ["a","b","c","d"]
var responce = array.join("-")
console.log(responce)


// join 
var text = "istanbul, türkiye'nin en kalabalık şehridir"
var responce  = text.split(" ")

responce[0] = `${responce[0][0].toUpperCase()}${responce[0].slice(1)}`
responce[1]= `${responce[1][0].toUpperCase()}${responce[1].slice(1)}`
console.log(responce.join("  "))


// listeyi terse çevirme
var list = [10,5,8,9]
list.reverse()
console.log(list)


// pop listenin sonundan eleman silme
var list =[5,7,8]
list.pop()
list.pop()
console.log(list)



// shift metodu listenin başından eleman silme
var list = [5,8,9,6]
list.shift()
list.shift()
console.log(list)
 

// list push sona eleman ekler list unshift başa eleman ekler


