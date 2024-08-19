
// FOR DÖNGÜSÜ

for (var i= i>0; i<10; i++) {
    console.log(i)
}


var liste = ["Elma", "Armut", "Portakal", "Muz", "Kivi", "Karpuz", "Çilek"];
var i, listeUzunluk = liste.length;

for(i = 0; i < listeUzunluk; i++) {
  console.log(liste[i]);
}


// FOR OFF DÖNGÜSÜ
var list = ["istanbul","ankara", "Aydın"]
for (var eleman of list) {
    console.log(eleman)
}

var text = ("hello world")
for (var harf of text)
    console.log(harf)

// FOR DÖNGÜSÜ ÖRNEK

var count = 10
var text= " "
for (var i =1; i<= count; i++) {
    var add_text = "*".repeat(i)
    text+=`${add_text}\n`

}
console.log(text)



// while döngüsü
var i = 0
while (i <5) {
    console.log(i)
    i++
}


//DÖNGÜ ÖRNEĞİ
 var number = 1
 var found_list=[]
 for (var i =0; i<10; i++) {
    while (number %7 != 0 || number %9 != 0) {
        number++

    }
    found_list.push(number)
    number++
    console.log(found_list) 
}


// DO while döngüsü
//do {
//  code block to be executed
//}
// while (condition)
  

  //For Each döngüsü
  function test(e) {
    console.log(e)
  }
  var array = [1,2,3,4]
  array.forEach(test)


  // üstteki ile aynı işi yapıyor
var array =[1,2,3,4,5,6]
array.forEach(function (e) {
    console.log(e)
})
 // bu da bir yol "=>"" okla fonksiyon tanımlama
var array = [1,2,3,4,5]
array.forEach(e => {
    console.log(e)
})



// i verdiğimiz için indexleri de yazar
var array =[1,2,3,4,5,6]
array.forEach(function (e,i) {
    console.log(e,i)
})  


/*

// burası 4 kere dizi elemanaları yazdırıyor çünkü 4 eleman var  ( alt kısımdaki kod tek başına çalışıyor ama üsttekilerle beraber çalışmıyor)

["Ali", "Ayşe", "Mehmet", "Ece"].forEach((e,i,array) => {
    console.log(array)
})

*/


var array= [1,2,3,4]
// dizideki elemanı değiştirme yani yeni dizi 1 2 5 4
//array.forEach(e => {
   // console.log(e)
    //array[2]=5

//})
  
// başından eleman silme 2 3 4 
//array.shift()
//console.log(array)
 

//burası 1 2 4 çıktısını verdi
//array.forEach(e => {
   // console.log(e)
    // if (e==2) array.shift()
//})

    // foreach döngüsü durdurulamıyor
    // foreach döngüsü lenght hesaplarken ", ," arasında undefined görüyor ama ama for off döngüsü sayıyor


// dizi2den sonra FOR İN döngüsü
// for in döngüsü bizim nesnelerin keyleri arasında dönememizi sağlayan döngüdür

// a b c aldık
var nesne= {
    "a":1,
    "b":2,
    "c":3
}
for (var key of Object.keys(nesne)) {
    console.log(key)
} 
// for in döngüsüyle d e f yi aldık
var nesne= {
    "d":1,
    "e":2,
    "f":3
}
for (var key of Object.keys(nesne)) {
    console.log(key)
}


// döngü içinde bir değişiklik yapılırsa döngü bundan etkilenir ona göre çıktı verir
var nesne = {
    "a":1,
    "b":2,
    "c":3
}
for (var key in nesne) {
    if (key=="b") delete nesne ["c"]
    console.log(key,nesne[key])
}

