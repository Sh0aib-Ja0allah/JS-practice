// Date & time Introduction : ... 

dateNow = new Date ()
console.log("the date right now is : ")
console.log(dateNow)

seconds = Date.now() / 1000
console.log(`seconds = ${seconds}`)

minutes = seconds / 60
console.log(`minutes = ${minutes}`)

hours = minutes / 60 
console.log(`hours = ${hours}`)

days = hours / 24
console.log(`days = ${days}`)

years = days / 365
console.log(`years = ${years}`)

birthday = new Date ("Jan 11, 2001")

dateDiff = dateNow - birthday
console.log(`your Age is :${dateDiff / 1000 / 60 / 60 / 24 / 365}`)

console.log(dateNow)
console.log(dateNow.getTime())
console.log(dateNow.getDay()) // بعطي إحنا أي يوم بالأسبوع  index 0
console.log(dateNow.getDate()) // بعطي إحنا أي يوم بالشهر
console.log(dateNow.getMonth() + 1) // لانه بعطي الاشهر على شكل index 0
console.log(dateNow.getFullYear())
console.log(dateNow)


// Modules : ...

// Export [Modules] : 

export default  a = 10 ;
export let arr = [1, 2, 3, 4, 5] ;
export function saySomething ( ) {
    return "something" ;
}  // you will find it's Import in main.js

// import * as all from "./main"
// get import for all the exports from the file main.js

