/*

modül kavramı (kütüphane)
core modüller  // var os = require("os")
Third Party modüller -NPM -> node packege manager
Local modülleri
ES - CommonJS
import export


CommonJS, Node,js tarafından kullanılır. modüllerin senkron bir şekilde yüklenmesini sağlar. "require" fonksiyonu ile modül içe aktarılır
ve "module.exports" ile dışa aktırılır. CommonJS, sunucu tarafında çalıştığı için yükleme hızı genellikle problem değildir

ES tarayıcı tabanlı uygulamalar için daha uygundur. ESM import ve export anahtar kelimlerini kullanır
modüller asenkron bir şekilde yüklenir bu da onları taryıcı da daha verimli kılar




npm init -y 
npm install express


ES 

*/
//"C:/Users/RUMEYSA/OneDrive/Masaüstü/test/userData.js"
var data = require ("C:/Users/RUMEYSA/OneDrive/Masaüstü/test/userData.js")   // var data = require("./users/userData.js") aynı işi yapar users diye yeni dosya açıp userdatayı içine taşıdığımız takdirde!

console.log(data)
console.log(data.isim_al())

//named Exports sadece belirlenen isimle kullanılabilir
module.exports.name = "Ali Eren"

// Default Exports default export’ta ilgili fonksiyona herhangi bir isim verilebilir
module.exports = 10

