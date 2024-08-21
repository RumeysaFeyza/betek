import { EventEmitter } from "events"

var emitter = new EventEmitter()

function clicked(a,b) {
    console.log("Clicked!", a,b)
}
function clicked2(a,b) {
    console.log("Clicked 2")
}
emitter.addListener("Click", clicked) // emitter.on("click,clicked")
emitter.addListener("Click", clicked2) //emitter.on("click,clicked2")

//emitter.once("tek", () => console.log("Tek Çağrıldı!"))

emitter.emit("click",3,5)
