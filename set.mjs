// setler kümeler gibi düşünülebilir. arraylere benzer arraylerden tek farkı unique olmalıdır yani benzersiz değer tutan bir javascript nesnesidir.
// map objesinde olduğu gibi ekleme sırası her zaman korunur
// Set(0) {} --> içerisinde 0 adet eleman bulunduran boş bir küme
var kume = new Set()
console.log(kume)

// Set(4) { 'a', 'b', 'c', 'd' } --> a bir kere yaazıldı
var kume = new Set(["a","b","c","a","b","d"])
console.log(kume)

// Set(1) { 'a' }
// 1
var kume = new Set()
kume.add("a")
kume.add("b")
kume.delete("b")
console.log(kume)
console.log(kume.size) 

// içerisindeki bir değeri almak için önce arraye çevirmek gerek
// a
var kume = new Set()
kume.add("a")
kume.add("b")
console.log(Array.from(kume)[0]) // console.log([...kume][0])  <-- yine array yapar
console.log(kume.entries()) // [Set Entries] { [ 'a', 'a' ], [ 'b', 'b' ] }
console.log(kume.values()) // [Set Iterator] { 'a', 'b' }
console.log(kume.keys()) // [Set Iterator] { 'a', 'b' }   keys ve values aynı bu da kümelere özgü bir şey
console.log(kume.has("a")) // true

// illa liste girilmek zorunda değil string de girilebilir her harfi tek bir eleman olarak alınabilir

var a = {
    b:1,
    c:2,
    d:1,
    e:5
}

var result = new Set(Object.values(a))
console.log(result) // Set(3) { 1, 2, 5 }

// tekrar arraye çevirmek için
var result = Array.from(new Set(Object.values(a)))
console.log(result) // [ 1, 2, 5 ] 