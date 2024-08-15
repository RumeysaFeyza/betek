
var e1 = "ekmek". slice(0,3)
var e2 = "pasta".slice(0,3)
var e3 = "borek".slice(0,3)


var response = `${e1}-${e2}-${e3}`.toUpperCase()
console.log(response)


var num = "k"
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