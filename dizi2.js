// İLERİ SEVİYE DİZİ METOTLARI



// map metodu
var liste =[2,3,4,5,6]
liste = liste.map(e => e**2)
console.log(liste)

// örnek 2
var liste = [4,5,6,7]
liste = liste.map(e => ({"index" : e}))
console.log(liste)

// örnek 3
var liste = ["Ali", "Eren", "Ahmet","Mehmet"]
liste = liste.map((e,i) => `${i + 1}. ${e}`).join("\n")
console.log(liste)


// find metodu liste içinde belirli bir şarta göre istenilen elemeanı döndürür
// aşağıdaki kod ali ile başlayan ilk elemanı döndürür
var liste = ["Ali eren","Ahmet" , "Mehmet"]
var result = liste.find( e => e.startsWith("Ali"))
var result= liste.find(e=> e.length <7)
var result = liste.findIndex(e=> e.length< 7)

console.log(result)

// bura sıkıntılı
// var liste = ["mert", "murat", "Mehmet"]
// var result= liste.find()
// liste.indexOf("Ali Eren")

// console.log(result)



// filter finda benzer tek farkı bulduğu ilk sonucu değil bulduğu bütün sonuçları gönderir

var ages = [15,19,25,11,17,8,35]
ages = ages.filter(e => e>=18)

console.log(ages)

// sadece dizi olarak düşünmeden obje üzerinde values ya da entries diyerek de bir filtreleme yapabiliriz

// [ [ '1', 15 ], [ '3', 7 ], [ '8', 24 ], [ '9', 32 ] ]
var nesne = {
    "1" :15,
    "3":7,
    "8":24,
    "9":32
}
ages = Object.entries(nesne)  // ages= Object.values(nesne)

console.log(ages)



// [ '1', 15 ]
var nesne = {
    "1" :15,
    "3":7,
    "8":24,
    "9":32
}

ages= Object.entries(nesne).filter(e => e[1])
console.log(Object.entries(nesne)[0])


// [ [ '8', 24 ], [ '9', 32 ] ]
var nesne = {
    "1" :15,
    "3":7,
    "8":24,
    "9":32
}


ages= Object.entries(nesne).filter(e => e[1] >18)
console.log(ages)





// Sort metodu  Bu metod, dizinin elemanlarını alfabetik ya da numerik olarak sıralar
// direkt küçükten büyüğe sıralandı [ 1, 2, 3, 4, 7, 8 ] 
var liste = [3,1,8,4,2,7]
liste= liste.sort()

console.log(liste)


// burası alfabetik sıralar [ 'abc', 'bac', 'bca', 'dba' ]
var liste= ["bac","bca", "abc","dba"]
liste= liste.sort()

console.log(liste)

//hem sayı hem string verilirse önce sayı sonra string



// büyükten küçüğe sıralar
var liste = [3,1,7,5]
liste = liste.sort((a,b) => b-a)
console.log(liste)



//[ [ '2', 3 ], [ '1', 5 ], [ '4', 6 ], [ '3', 7 ] ]
var obj = {
    "1" :5,
    "2": 3,
    "3":7,
    "4":6
}
 result = Object.entries(obj).sort((a,b) => a[1]-b[1])
 console.log(result)



// kelimeleri uzunluklarına göre küçükten büyüğe sıraladı
var list =["dlşkds","abc","odpsfk","b"]
list = list.sort((a,b)=> a.length-b.length)
console.log(list)



// reduce metodu elemanları topladı 30 yazdı
var list = [1,3,6,9,11]
var result = list.reduce((response,currentvalue) => response + currentvalue, 0)
console.log(result)




// aşağıdaki iki kodda aynı işi yapar hangi harften kaç kez kullanıldığını hesaplar
var list =["a","b", "c","a","d","e","b","b","a","c","f"]

var result= list.reduce((response,current) => {
    if (!(current in response)) response [current] =1
    else response [current] +=1

    return response
}, {})
console.log(result)

var list =["a","b", "c","a","d","e","b","b","a","c","f"]
var result = list.reduce((response, current ) => {
    response[current] = (current in response) ? response[current] + 1 : 1
    return response
}, {})
console.log(result)


// tekrarlanmayı değil unique değerleir istiyoruz 1 2 3 7 8
var array = [1,3,1,7,3,2,8]

var result = array.reduce((response, current) => {
    if (!response.includes(current)) response.push(current)
    return response
}, [])
console.log(result)


//  Array.some() - Array.every  girilen koşulu en az bir kere sağlıyorsa some true döner sağlamıyorsa false 
// every ise girilen bütün değerlerin koşulu sağlamasını bekler
var liste= [5,8,10,14,20,3,25]
var result = liste.some(e => e>20)
console.log(result)

var liste= [5,9,7,74,85]
var result= liste. every(e => e>15)
console.log(result)