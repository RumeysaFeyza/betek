
// senkron: bir işlem başlatılır işlem bitiriline kadar beklenir sonra diğer işleme geçilir restoran garson örneği
//javascript asenkron yapıdadır 
//asenkron  bir veya birden fazla işlem devam ederken başka bir yürütmeyi engelleme durumu yoktur




// eğer senkron çalışma mantığında bir dil olsaydı 3 saniye beklerdi timeout çalıştı yazısını görürdük ardından program bitti yazısını görürdük
// ilk başta program bitti yazısını sonra Timeout çalıştı yazısını görürüz
// bunun böyle olmasını istemiyorsak iki yol var biri callback diğeri promise


//Program Bitti!
//Timeout Çalıştı!
function test() {
    setTimeout(() => {
        console.log("Timeout Çalıştı!")

    },3000);
}
test()
console.log("Program Bitti!")



//Timeout Çalıştı
//Program Bitti!
function test (callback) {
    setTimeout(() => {
        console.log("Timeout Çalıştı")
        callback()
    }, 3000);    
    
}
test(() => console.log("Program Bitti!"))


// readfile -----> fs.readFile(path [,options], callback)
// Dosyayı asenkron olarak okumak için readFile metodu kullanılır.
// Dosyayı senkron olarak okumak için readFileSync metodu kullanılır.



// dosya okuma işlemi bitmeden bitti yazmaz ekrana senkron yapı örneği 
import fs from "fs"
const data = fs.readFileSync ("./z.txt", { encoiding: "utf-8" , flag: "r"})
console.log(data)
console.log("bitti!")

// bu işlemi asenkron yapıda görmek istiyorsak fs.readFile kullanılır
//burada önce bitti yazar sonra okuma işlemi yapar daha doğrusu okuma işlevi arkaplanda devam ederken bitti yazar
import fs from "fs"
fs.readFile("./test.txt", { encoiding: "utf-8", flag:"r"}, (err, data) => {
    if (err) return console.log(err)
    console.log(data)

})
console.log("bitti!")

