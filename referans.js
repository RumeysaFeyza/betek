
// datada değişiklik yapılmadığı halde 15i sonradan eklemesine rağman konsola yazdırdı. yani etkiledi

var data = {
    name: "Ali",
    age: 18

}
var data2 = data
data2.x =15
console.log(data)

// datayı data2ye eşitlediğinde iksi aynı yeri referans gösteriyor biz bunu değiştirmek için data2yi dataya atamak yerine data data2ye kopyalansın istiyoruz
// bunun 2 tolu var biri ... (spread syntax), diğeri Assign


var data = {name: "Ahmet"}
// Spread Syntax
var data2 = { ...data }
data2.name = "Mehmet"

console.log(data)
console.log(data2)


// Assign
var data = {name: "Ahmet"}
var data2 = Object.assign({}, data)

data2.name ="Mehmet"

console.log(data)
console.log(data2)

/*
// burada false çıktısını aldık çünkü referans tiplerinde yapılan karşılaştırmalar değerlerini değil referans tiplerini karşılaştırır
// yani aynı adresi gösterip göstermiyor mu ona bakar o yüzden false döner
var data = { name: "Ahmet"}
var data2 = { name: "Ahmet"}

console.log(data==data2)
*/




// stringify metodu yani stringe çevirme

var data ={ name: "Ahmet"}
var data2 = { ...data}

var result = JSON.stringify(data)

console.log(result) // {"name":"Ahmet"} çıktısını alırız




// ahmetin adresi de mehmetin adresi de y oldu bunu çözmek için
var data = {
    name: "Ahmet",
    adress: { 
        street:"x street",
        no:5

    }

}

var data2= {...data}

data2.name= "mehmet"
data2.adress.street = "y street"

console.log(data)
console.log(data2)


