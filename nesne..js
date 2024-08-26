
// nesnelere giriş ilki {} çıktısını, ikincisi object tipini verir.

var nesne ={}
console.log(nesne)
console.log(typeof nesne)


var user ={
    name: "Ali Eren",
    age: 14,
    address: {
        street: "X street",
        no: 3

    },

}
console.log(user.age)
console.log(user.address)
console.log(user.address.no)
console.log(user["age"])



// nesnenin içine fonksiyon yazıp sonrasında çağırma ----->
// Test! yazdı 
 var user = {
    name: "Ali Eren",
    address: {
        street: "X street",
        no:3
    },
    test() {
        console.log("Test!")

    }   
 } 

user.test()


// nesnenin içerisinden property silme örn agei silelim
/*
{
    name: 'Ali Eren',
    address: { street: 'X street', no: 3 },
    test: [Function: test]
  } yazdı */
var user = {
    name: "Ali Eren",
    age: 15,
    address: {
        street: "X street",
        no:3,
    },
    test() {
        console.log("Test!")

    }   
 } 

delete user.age  // delete user["age"] de aynı işi yapar
console.log(user)




var user = {
    name: "Ali Eren",
    age: 15,
    address: {
        street: "X street",
        no:3,
    },
    test() {
        console.log("Test!")

    }   
 } 

 console.log(Object.keys(user)) // [ 'name', 'age', 'address', 'test' ]
console.log(Object.values(user)) // [ 'Ali Eren', 15, { street: 'X street', no: 3 }, [Function: test] ]


console.log(Object.values(user)[2]) // 2. indeks yani addressi --> { street: 'X street', no: 3 }





var user = {
    name: "Ali Eren",
    age: 15,
    address: {
        street: "X street",
        no:3,
    },
    test() {
        console.log("Test!")

    }   
 } 
console.log(Object.entries(user)) // hem keyler hem valuelar
console.log(Object.entries(user)[1]) // ['age',15] cıktısını verir yani 1. index



// OBEJCT 2


// user ıd köşeli parantez olmadan key kısmına yazılırsa idyi değil string kısmını verir
var user_id = "1234"
var data= { name: "ece", age:29 }

var users = {
    "34345": {name:"Ali", age:11},
    "67678":{name: "Ahmet", age:24},
    [user_id]: data

}
console.log(users)



var data = { 
    name:"Ali Eren",
    age:19
}
 
// adresle ilgili bilgi yok aratırsak ve hata mesajı almak istiyorsak normal kullanımın yanına ek olarak ? de kullanmamız gerekir

var street = (data.adress?.street) ? data.adress.street : "Adres Bulunamadı!"
console.log(street) // adres bulunamadı çıktısını verir


var street = (data?.["adress" ] ?.["street"]) ? data.adress.street : "Adres Bulunamadı!"
console.log(street)  // adres bulunamadı çıktısını verir street bulunsaydı veriyi döndürürdü




// iki nesneyi birbiriyle birleştirme
// ... spread syntax
var data1 = {name: "Ali"}
var data2 = { age:19}

var result = {...data1, ...data2}

console.log(result)  // { name: 'Ali', age: 19 }


// eğer birleştireceğimiz şeylerde aynı değer olsaydı override yapardı yani üstüne yazardı
var data1 = {name: "Ali" }
var data2 = {name: "Mehmet", age: 19}

var result = {...data1, ...data2}
console.log(result)   // { name: 'Mehmet', age: 19 } bu çıktıyı aldık sanırım alinin üstüne mehmet yazdı



var data1 = {name: "Ali" }
var data2 = {name: "Mehmet", age: 19}
var result = Object.assign(data2,data1)

console.log(result) // { name: 'Mehmet', age: 19 } çıktısını verdi alinni üstüne mehmeti ekledi  
                    // data2 başa data1 sonra yazılsaydı { name: 'Ali', age: 19 } çıktısını alırdı





// mutable - imutable (değiştirilebilir /değiştirilemez)
// propertyler değiştirilemez çoğu obje değiştirilebilir ama biz değiştirilemez hale getirebiliyoruz

var data = {
    name: "Ali",
    age: 19
}
data.y =3 // eklenir çünkü extensionstan önce girildi
 Object.preventExtensions(data) // data nesnesine yeni bir properti eklenmesi engellendi ama silinmesi yapılabilir!
 data.x=5 // eklenmeyecek
 console.log(data)

 // uzayıp uzamamasını kontrol edebileceğimiz bir metod var
 console.log(Object.isExtensible(data)) // büyüyebilir mi diye soruyor false dönüyor

 // seal işlemi hem büyümesini hem küçülmesini engelliyor
Object.seal(data)
delete data["name"]
data.x = 15
data.name = "Ahmet"
console.log(data)   // { name: 'Ahmet', age: 19, y: 3 }
                   // seal izin vermediği için aliyi silmedi ama sealden önce delete yaparsak siler. aynı şekilde xi ekleme de yapamadı
                  // amam mevcut property değiştirilebilir yani ahmeti görürüz
        
        
// Object.freeze(data)   HİÇBİR ŞEYE İZİN VERMEZ