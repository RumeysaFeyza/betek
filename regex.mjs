
// regex: metinler içerisinde tekrar eden yapıları tespit etmeye yönelik kullanılan arama yapısıdır.
var text ="selam ben  Ali    Eren"

var pattern = / +/
console.log(text.split(pattern)) // [ 'selam', 'ben', 'Ali', 'Eren' ]

var text = "testasd test asdtest"

var pattern = /test/
console.log(text.split(pattern)) // [ '', 'asd ', ' asd', '' ]

var text = "testasd test asdtest"


// exec()
var pattern = /test/
console.log(pattern.exec(text)) // [ 'test', index: 0, input: 'testasd test asdtest', groups: undefined ]

// test():stringin içinden deseni bulabiliyorsa true bulamıyorsa false döner
16
var text = /test/
var pattern = /test/
console.log(pattern.test(text)) // true

var text =" atestasd test asdtest"

var pattern = /test/
console.log(text.match(pattern)) 
/* [
  'test',
  index: 2,
  input: ' atestasd test asdtest',
  groups: undefined
]
  */
 

var pattern = /test/g
console.log(text.match(pattern)) // [ 'test', 'test', 'test' ]




// matchAll bulduğu tüm testleri indeksleri ile döner
var text ="atestasd test asdtest"

var pattern =/test/g
for (let value of text.matchAll(pattern)) {
    console.log(value)
}
/* [ 'test', index: 1, input: 'atestasd test asdtest', groups: undefined ]
[ 'test', index: 9, input: 'atestasd test asdtest', groups: undefined ]
[
  'test',
  index: 17,
  input: 'atestasd test asdtest',
  groups: undefined
]
  */

// 1 bulduğu ilk indeksi döner
var text = "atestasd test asdtest"
var pattern = /test/
console.log(text.search(pattern))


// -1 bulamazsa bunu döner 
var text = "atestasd test asdtest"
var pattern = /teast/
console.log(text.search(pattern))


var text = "asd a ew"

var pattern = /a/
console.log(text.match(pattern)) // [ 'a', index: 0, input: 'asd a ew', groups: undefined ]


var text = "asd a ew"

var pattern = /^a/ // a ile başlama koşulu
console.log(text.match(pattern)) // [ 'a', index: 0, input: 'asd a ew', groups: undefined ]

var text = "asgdfklgmdlasd"
var pattern  = /asd$/
console.log(text.match(pattern)) // [ 'asd', index: 11, input: 'asgdfklgmdlasd', groups: undefined ]

var text = "asd asd"
var pattern = /^asd$/ 
console.log(text.match(pattern)) // null

// . herhangi bir karakteri alır demek
var text = "asd"
var pattern = /a./
console.log(text.match(pattern)) // [ 'as', index: 0, input: 'asd', groups: undefined ]

// \d herhangi bir sayı alır
var text = "a35"
var pattern = "a\d/"
console.log(text.match(pattern)) // a3 vermesi gerekiyor ama null veriyor ???

// \D digit olmayan herhangi bir değeri alır 
var text = "2a3"
var pattern = /\D/
console.log(text.match(pattern)) // [ 'a', index: 1, input: '2a3', groups: undefined ]

// | veya
var text = "ab"
var pattern = /ab|c/
console.log(text.match(pattern)) // [ 'ab', index: 0, input: 'ab', groups: undefined ]

//[  ]x

var text = "bx"
var pattern = /[abc]x/
console.log(text.match(pattern)) // [ 'bx', index: 0, input: 'bx', groups: undefined ]


// range de belirtilebilir
var text = "fx"
var pattern = /[a-g]x/
console.log(text.match(pattern)) // [ 'fx', index: 0, input: 'fx', groups: undefined ]

var text= "gx"
var pattern = /[^a-f]x/ // ^belirtilen aralıkta herhangi bir değer olamaz
console.log(text.match(pattern)) // [ 'gx', index: 0, input: 'gx', groups: undefined ]

// * koyduğumuzda tüm dijitleri alır hiç dijit olmasa da alır "d" normalde sadece bir tane değer alıyordu
var text = "a389"
var pattern = /a\d*/  
console.log(text.match(pattern)) // [ 'a389', index: 0, input: 'a389', groups: undefined ]

// + olursa hiç digit olmamasını kabul etmez null döner onun dışında yukardaki ile aynı
var text = "a543"
var pattern = /a\d+/
console.log(text.match(pattern)) // [ 'a543', index: 0, input: 'a543', groups: undefined ]

// bir sürü rakamdan sonra sonunu da belirleyebiliriz
var text = "a9238s"
var pattern = /a\d+s/
console.log(text.match(pattern)) // [ 'a9238s', index: 0, input: 'a9238s', groups: undefined ]

// ? 0 veya 1 kez alıyor

var text = "a65"
var pattern = /a\d?/
console.log(text.match(pattern)) // [ 'a6', index: 0, input: 'a65', groups: undefined ]

// {} içine yazılan sayı kadar alır 
var text = "a51234"
var pattern = /a\d{5}/
console.log(text.match(pattern)) // [ 'a51234', index: 0, input: 'a51234', groups: undefined ]

var text = "290  🤙"
var pattern = /\p{Emoji_Presentation}/u
console.log(text.match(pattern)) // [ '🤙', index: 5, input: '290  🤙', groups: undefined ]

// [\w] herhangi bir değer a dan wya sayılar dahil ğ değil

// e  mail aldığımız örnek


var text = "alieren-512@sirketadi.com.tr"
var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
console.log(text.match(pattern))