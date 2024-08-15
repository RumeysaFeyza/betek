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


/* DO while döngüsü
do {
    code block to be executed
  }
  while (condition)
  */