// map() metodu, dizi içerisindeki tüm elemanları bir işlemden geçirmek için kullanılır.
// Her bir eleman tek tek işlenir, değerleri değiştirilebilir, geriye ne döndürüleceği belirlenebilir.
// Ve sonunda ise  işlemden geçen öğelerden oluşan bir dizi geriye döner.



// Map(0) {}
var map = new Map()
console.log(map)


// Map(1) { 'a' => 1 }
var map = new Map()

map.set("a",1)
console.log(map)

// aya karşılık gelen değer
var map = new Map()
map.set("a",1)
map.set("b",2)
// map.clear()  bu her şeyi sıfırlar

map.delete("a") // map silme
console.log(map) //Map(1) { 'b' => 2 }
console.log(map.get("b")) // 2
console.log(map.get("c")) // undefined
console.log(map.has("b")) // true 
console.log(map.has("d")) // false
console.log(map.size) // 1 // mapin içindeki veri sayısı
console.log(map.keys()) //[Map Iterator] { 'b' }
console.log(Array.from(map.keys())) // [ 'b' ] dizi oldu
console.log(Array.from(map.values())) //[ 2 ]
console.log(Array.from(map.entries())) // [ [ 'b', 2 ] ]
console.log([...map]) // [ [ 'b', 2 ] ]
console.log([...map.keys()]) // [ 'b' ]
console.log([...map.values()]) // [ 2 ]


// 2 b
map.forEach((value, key) => {
    console.log(value,key)
})

for (var x of map) {
    console.log(x)     //[ 'b', 2 ]
}



// b
// 2
for (var [key,value] of map) {
    console.log(key)
    console.log(value)
}


// Map(2) { 'a' => 1, 'b' => 2 }
var map = new Map([["a",1], ["b",2]])
console.log(map)



// { a: 1, b: 2 }
var map = new Map ([["a",1], ["b",2]])
console.log(Object.fromEntries(map))

// map objesini klonlama
// klonlama yapıp a düzenlendi ama mapte de map3de de a değeri 3 oldu biz sadece 2 de olsun istiyoruz (bunun sebebi referans kavramı)
// Map(2) { 'a' => 3, 'b' => 2 } Map(2) { 'a' => 3, 'b' => 2 }
var map = new Map([["a",1], ["b",2]])
var map2 = map
map2.set("a",3)
console.log(map,map2) 

// 2. satırdaki map yerine new Map yazarsak ikisi aynı yeri referans göstermemiş olur klonlama yapılmış olur
//Map(2) { 'a' => 1, 'b' => 2 } Map(2) { 'a' => 3, 'b' => 2 }
var map = new Map([["a",1], ["b",2]])
var map = new Map(map)
map2.set("a",3)
console.log(map,map2)


/* objeler ve map objesi arasındaki fark
1) objelerde key kısmına yalbızca string ya da sembol değer atanabilir map objesinde key kısmı herhangi bir değer fonksiyon ve obje bile olabilir
2) maplerde her zaman eklenme sırasıyla kaydeder objelerde bu sıralamaya güvenmemek gerek
3) map objesinde saklanan verilerin sayısını almak çok basit .size diyorsunur bitiyo objelerde listeye çevirip lengtini almak gerekiyor
4) map objeleri iterable objeler üzerinde döngüyle dönüyorsunuz 
5) map objesinin dezavantıjı JSON.stringify ya da parse yapılmıyor yapmaya çalışıldığında boş alınıyor
 
*/  
// 
// Map(3) { 'b' => 1, 'a' => 2, 'd' => 3 } b a d şeklinde alırız
  var a = new Map()

  a.set("b",1)
  a.set("a",2)
  a.set("d",3)

  console.log(a)

