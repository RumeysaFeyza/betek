
// BREAK STATEMENT
// aşağıdaki fonksiyon break görünce kırıldı devam etmedi 5'e kadar yazdırdı
for (var i= 0; i <10; i ++) {
    if (i==5) break
    console.log(i)
}

console.log("Bitti!")



// CONTİNUE STATEMENT
var ages = [15,19,21,13,27]
for (age of ages) {
    if (age < 18) continue

    console.log(age)
}

// LABEL etiket ilk döngü son döngü gibi şeylerde kullanılır.



