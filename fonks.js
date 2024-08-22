
function squared(n,x) {
    var square = n**2
    
    return square
}
console.log(squared(4))



// return loopdaki breaka benzer bazen durdurmak için kullanılır burada 3 verdiğinde consola bir şey yazmaz onun dışındaki değerleri yazar.
function denek(n){
    if(n==3) return
    console.log(n)
}
denek(4)


var yol = function(n) {
    return n**3
}
console.log(yol(2))


// okla => fonksiyon tanımlama
var loy = (n) => {
    return n+8
}
console.log(loy(5))



// 1
function test(x) {
    console.log(arguments[0])
}
test(1,2,3,4)



// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
function test(x) {
    console.log(arguments)
}
test(1,2,3,4)


// Recursive Functions fonksiyonun içinde aynı fonksiyonu bir kere daha çağırma işi
function recursive(x) {
    console.log(x)
    if (x>0 ) recursive(x-1)
}
recursive(10)


//callback functions
function square(n) {
    return n**2
}
function test(callback) {
    console.log("test")   //test

    var result = callback(2)
    console.log(result) // 4 

}

test(square)


// iç içe fonskiyonlar (Nested Functions) en tepede kullanılan fonksyonda tanımlanan her şey aşağıda kullanabilir ama aşağıda tanımlanan her şey yukarıda kullanılmaz

function test(){
    console.log("Test fonksiyonu çalıştı!")

    function nest_funct() {
        console.log("Test Func Çalıştı")
    }
    nest_funct()
}
test()







