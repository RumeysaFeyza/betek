
var e1 = "ekmek". slice(0,3)
var e2 = "pasta".slice(0,3)
var e3 = "borek".slice(0,3)


var response = `${e1}-${e2}-${e3}`.toUpperCase()
console.log(response)


var num = 6
var response
if(typeof num !="number") response= "Lütfen bir sayi giriniz"
else if (num %2 == 0) response = `${num}= cift sayi`
else if (num %2 == 1) response = `${num}=tek sayi`

console.log(response)

var week_day = 12
var expression = week_day %12 ==0 ? 12 : week_day %12

var response
switch (expression) {
    case 1: response = "ocak"
      break
    case 2: response = "şubat"
      break
    case 3: response= "mart"
     break
    case 4: response ="nisan"
      break
    case 5: response = "mayıs"
      break
    case 6: response = "haziran"
      break
    case 7: response = "temmuz"
      break 
    case 8 : response = "ağustos"
      break
 
    case 9 : response = "eylül"
      break
    case 10: response = "ekim"
      break
    case 11: response= "kasim"
      break
    case 12: response = "aralık"


}
   console.log(response)

  
   // Fonksiyonlar Örnek

   function call_back_function(result) {
    var text = (result == true) ? "Girilen Sayi Çift" : "Girilen Sayi tek"
    console.log(text)
 

   }

   function cift_mi (x, callback) {
    var result = (x %2 ==0) ? true:false
    callback(result)
   }
   cift_mi(4, call_back_function)
   

   // recursive örneği
   function recursive_fac(x) {

    if (x==0 ) return 1
    else return x * recursive_fac(x-1)
   }
   console.log(recursive_fac(6))

  
