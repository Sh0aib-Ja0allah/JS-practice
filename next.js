// starts from page 38 from the notebook : .........

// Working in the DOM subject : ..."Get & Set class"

    // InnerHtml :

myElement = document.querySelector(".jsdiv")

console.log(myElement.innerHTML)
console.log(myElement.textContent)

myElement.innerHTML = "text from <span>Main Js</span> file."
myElement.textContent = "text from <span>Main Js</span> file."

console.log(myElement.textContent)

document.images[0].src = "https://google.com" 
document.images[0].alt = "description"
document.images[0].title = "picture"  

myLink = document.querySelector(".link")

console.log(myLink.getAttribute("class"))
console.log(myLink.getAttribute("href"))

myLink.setAttribute("href", "https://twitter.com")
myLink.setAttribute("class", "twitter")
myLink.setAttribute("title", "twitter")

// check attributes : ...

console.log(document.getElementsByTagName("p")[1].attributes)

myp = document.getElementsByTagName("p")[1]

if (myp.hasAttribute("data-src")) {
    // console.log("found")
    if (myp.getAttribute("data-src" === "")) {
        myp.removeAttribute("data-src")
    }else{
        // console.log("not empty")
        myp.setAttribute("data-src", "new value")
    }
}else{
    console.log("notFound")
}

if (myp.hasAttributes()) {
    console.log(`has Attributes`)
}else{
    console.log(`Has no Attributes`)
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
    console.log(`DIV Has Attributes`)
}else{
    console.log(`DIV Has No Attributes`)
}

// creating elements in the DOM : ...

element = document.createElement("div")
attribute = document.createAttribute("data-custom")
text = document.createTextNode("product one")
comment = document.createComment("this is div")
element.className = "product"
// Add the created Attribute to the element : ...
element.setAttributeNode(attribute)
// Add a new Attribute to the element : ...
element.setAttribute("id", "test")
// Append text to element : ...
element.appendChild(text)
//Append comment to element : ...
element.appendChild(comment)

//Append element to body : ...
document.body.appendChild(element)

// .....................................

// create a nested elements : ...

newElement = document.createElement("div")
newHeading = document.createElement("h2")
newParagraph = document.createElement("p")

headingText = document.createTextNode("new Product title")
paragraphText = document.createTextNode("new Product description")
//Add heading text : ...
newHeading.appendChild(headingText)
//Add heading to the div element : ...
newElement.appendChild(newHeading)
//Add paragraph text : ...
newParagraph.appendChild(paragraphText)
//Add paragraph to the div element : ...
newElement.appendChild(newParagraph)
// Add a className Attribute to the newElement : ...
newElement.className = "newProduct"
// Add the newElement to the body : ...
document.body.appendChild(newElement)
// Add an id Attribute to the newElement : ...
newElement.id = "Product"

// [DOM] Deal with children : ...

ele = document.getElementsByClassName("jsdiv")

console.log(ele)
console.log(ele.children) // get all the elements 
console.log(ele.childNodes) // get all the elements with values

console.log(ele.firstChild) // get the first child in this element : ...
console.log(ele.lastChild) // get the last child in this element : ...
document.write("<hr>")

// ..............................................................

// [DOM Events] use events in the html and use it in the JS : ...

// Event (onclick) in JS that when the mouse clicks the button the console prints (clicked)

btn = document.getElementById("btn")

btn.onclick = function () {
    console.log("clicked")
}

// Event (onmouseenter) in JS that when the mouse entered the button the console prints (entered)

btn.onmouseenter = function () {
    console.log("entered")
}

// Event (onmouseleave) in JS that when the mouse leave the button the console prints (leaved)

btn.onmouseleave = function () {
    console.log("leaved")
}

// Event (onscroll) in JS that when the mouse scrolls the page the console prints (scrolled)

window.onscroll = function () {
    console.log("scrolled")
}

// Event (onresize) in JS that when the page got resized the console prints (resized)

window.onresize = function () {
    console.log("resized")
}

// ..................................................................................

// Validate form & prevent default : ...

document.getElementById("linko").onmouseenter = function (event) { 
    console.log(event)
}

// this prevents the link to go to it's distention and shows the Attributes of the event in the console : ...

document.getElementById("linko").onclick = function (event) { 
    console.log(event)
    event.preventDefault()
}

// 

userInput = document.getElementById("username")
ageInput = document.getElementById("age")

document.forms[0].onsubmit = function (e) {
    userValid = false
    ageValid = false

    console.log(userInput.value)
    console.log(userInput.value.length)

    if(userInput.value !== "" && userInput.value.length <= 10) {
        console.log("user valid")
        // userValid = true
    }

    if (ageInput !== "") {
        console.log("age valid")
        // ageValid = true
    }

    if(userValid == false || ageValid == false){
        e.preventDefault()
    }
}

// Event simulation : ...

// onload && focus : ...

age = document.getElementById("age")
username = document.getElementById("username")

window.onload = function () {
    age.focus()
}

// onblur && click : ...

username.onblur = function () {
    document.links[0].click()
}

// class list object & methods : ...

elo = document.getElementById("mydiv")

console.log(elo.classList)
console.log(typeof elo.classList)
console.log(elo.classList.contains("shoaib"))
console.log(elo.classList.contains("one"))

// CSS styling & StyleSheet : ...

// elo = document.getElementById("mydiv")

elo.style.color = "red"
elo.style.fontWeight = "bold"

elo.style.cssText = "background-color: blue; color: white; font-weight: bold;"

elo.style.removeProperty("color")
elo.style.setProperty("color", "black")

// [DOM] deal with elements : ...

// elo = document.getElementById("mydiv")

createp = document.createElement("p")

elo.before("hello form JS")

// elo.before(createp)

// createp.createTextNode("Hello World from createp element.")

elo.after("Hi guys")

elo.after(createp)

elo.append(" Hello my friend.")

elo.prepend("yeah man. ")

// elo.remove()

// .............................................................

// [DOM] cloning : ...

// myp = document.getElementById("tests").cloneNode(true)
// mydiv = document.getElementById("jsdiv")

// myp.id = "newtest"
// mydiv.appendChild(myp)

// .......................................................

// [DOM] Add Event listener : ...

know = document.getElementById("click")

// know.onclick = function () {
//     console.log("Oh yes I clicked you.")
// }

// // version one : ...

// know.onclick = here

function here () {
    console.log("Oh yes I clicked you.")
}

// // version two : ...

// common way is above : ...

// Event listener down below : ...

know.addEventListener("click", function () {
    console.log("oh yes I clicked you from Event Listener.")
})

know.addEventListener("click", here)

// ....................................................

// The start  of BOM "Browser Object Model" in JS : ...

console.log("The start  of BOM 'Browser Object Model' in JS")
document.write("The start  of BOM 'Browser Object Model' in JS (line 300).")

window.console.log("Good")
window.document.write("<br>")
window.document.write("Good")

// [BOM] alert : ...

// window.alert("Test from window.alert.")
// this.alert("Test form this.alert.")
// alert("Test from alert only.") // its a navigation just shows a massage and you can't do any thing until you close it 
// all the above commands run the same alert navigation : ...

// [BOM] confirm : ...
// is a question that will show to you after answering the click you answered will control the action : ...  

// confirmMsg = confirm("Are you sure?")
// console.log(confirmMsg)

// if (confirmMsg == true) {
//     console.log("Item deleted.")
// }else{
//     console.log("Item not deleted.")
// }

// [BOM] prompt : ...
// is a question that will show to you after answering the value you answered will control the action : ...  

// the common prompt with just a question : ...

// promptMsg = prompt("Good day for you?")
// console.log(promptMsg)

// Prompt with default massage : ... 

// promptMsg = prompt("Good day for you?", "write day with 3 characters")
// console.log(promptMsg) 

// [BOM] setTimeout : ...

// the common way : ...

// setTimeout(function () {
//     console.log("Massage after 3s.")
// }, 3000)

// In advanced way : ...

// setTimeout(sayMassage, 3000)

// function sayMassage () {
//     console.log("Hello I'm the massage.")
// }

// In advanced way with arguments : ...

// setTimeout(sayMassage, 3000, "Shoaib", 22)

// function sayMassage (user, hisAge) {
//     console.log(`Hello I'm the massage for ${user} that's his age is ${hisAge}.`)
// }

// [BOM] clearTimeout : ...

document.write("<hr>")

// create a button to use it as a stop component : ...

// button = document.createElement("button")
// button.id = "newButton"
// buttonText = document.createTextNode("click me to stop Timeout")
// button.appendChild(buttonText)
// document.body.appendChild(button)

// counter = setTimeout(sayMassage, 3000)

// function sayMassage () {
//     console.log("Hello I'm the massage.")
// }

// the use of clear Timeout : ... and it's used to idle the setTimeout work : ...

// button.onclick = function () {
//     clearTimeout(counter)
// }

// ..............................................................................

// [BOM] setInterval : ...

// the common way : ...

// setInterval(function () {
//     console.log("the Massage.")
// }, 2000)

// In advanced way : ...

// setInterval(sayHi, 2000)

// function sayHi () {
//     console.log("Hello I'm the new massage.")
// }

// In more advanced way with arguments : ...

// setInterval(sayHi, 3000, "Shoaib", 22)

// function sayHi (user, hisAge) {
//     console.log(`Hello I'm the massage for ${user} that's his age is ${hisAge}.`)
// }

// another way : ...

// div = document.createElement("div")
// div.id = "divId"
// div.style.color = "red"
// divText = document.createTextNode("10")
// div.appendChild(divText)

// document.body.appendChild(div)

// function countdown () {
//     div.innerHTML -= 1 
// }

// count = setInterval(countdown, 2000)

// [BOM] clearInterval : ...

// div = document.createElement("div")
// div.id = "divId"
// div.style.color = "red"
// divText = document.createTextNode("10")
// div.appendChild(divText)

// document.body.appendChild(div)

// function countdown () {
//     div.innerHTML -= 1 
//     if (div.innerHTML == 0) {
//         clearInterval(count)
//     }
// }

// count = setInterval(countdown, 2000)

// [BOM] window location object : ...

console.log(location)  // get all the attributes for my IP address : ...
console.log(location.href)

// location.href = "https://google.com"

// [BOM] window open & close : ...

// window.close() // it works just with you page that oped from JS only : ...

// Open : ...

/* 
_blank : it's opens the new page in a new web tab.
_self : it's opens the new page in the current web tab.
*/

// setTimeout(function () {
//     window.open("https://google.com","_blank")
// }, 2000)

// [BOM] window history object : ...

// console.log(history)

// history.back()

// .................................................

// [BOM] LocalStorage  : ...

// set : ...
window.localStorage.setItem("color", "gray")
window.localStorage.fontWeight = "bold"
window.localStorage["fontSize"] = "large"
// get : ...
window.localStorage.getItem("color")
window.localStorage.fontWeight
window.localStorage["fontSize"]
// remove : ...
// window.localStorage.removeItem("color")
// clear : ...
// window.localStorage.clear()
// set color page : ...
document.body.style.backgroundColor = window.localStorage.color

// .............................................................

// the start of destructuring : ...

console.log("The start  of destructuring in JS")
document.write("The start  of destructuring in JS (line 500).")

// let a = 1
// let b = 2
// let c = 3
// let d = 4

// friends = ["shoaib", "Ayed", "Hamzi", "Hani"]

// [a, b, c, d] = friends 

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

friends = ["shoaib", "Ayed", ["Hani", "Zakaria", ["Jadallah", "Hamzi"]]]
console.log(friends)

console.log(friends[0]) // Shoaib
console.log(friends[2][1]) // Zakaria
console.log(friends[2][2][0]) // Jadallah

let [, , [,x,[,y]]] = friends  // escaping : ... 

console.log(x) // Zakaria
console.log(y) // Hamzi

// Swapping values : ...

let book = "Book"
let video = "Video"
console.log(`book = ${book}`)
console.log(`video = ${video} `)
// save book in value stash : ...
stash = book
// changing values : ...
book = video
video = stash
console.log(`book = ${book}`)
console.log(`video = ${video} `)

// in another way : ...
// [book, video] = [video, book]
// See changes : ...
// console.log(`book = ${book}`)
// console.log(`video = ${video} `)

// Destructuring objects : ...

user = {
    Name  : "Shoaib",
    Age : 22, 
    country : "Palestine", 
    title : "developer"
}

console.log(user.Name)
console.log(user.Age)
console.log(user.country)
console.log(user.title)

Name = user.Name
Age = user.Age
country = user.country
title = user.title

console.log(Name)
console.log(Age)
console.log(country)
console.log(title)

// Destructuring functions parameters  :  ... 

obj = {
    N : "Shoaib",
    G : 22, 
    S : {
        Html : "HTML",
        CSS : "CSS",
    },
}
// common function : ...

// function ShowDetails (obj) {
//     console.log(obj.Name)
//     console.log(obj.Age)
//     console.log(obj.s.CSS)
// }

// function in destructuring way : ... 

function ShowDetails ({n, g, s : {css}}) {
    console.log(n)
    console.log(g)
    console.log(css)
}

// Map data type : ... 

// Array.from ( ) method : ... 

console.log(Array.from("Shoaib"))
console.log(Array.from("12345"))
// in the common function : ...

console.log(Array.from("12345", function (n) {
    return +n + +n
}))

// the same value but in arrow function : ...

console.log(Array.from("12345", (n) => +n + +n))

let myArray = [1, 1, 1, 2, 3, 4]

// let mySet = new set(myArray) // Does not work : ...

function testArgs () {
    return arguments
}

console.log(testArgs("Shoaib", "Ayed", "Ayman", 1, 2, 3)) // ["shoaib", "Ayed", "Ayman", 1, 2, 3]

function ArrayArgs () {
    return Array.from(arguments)
}

console.log(ArrayArgs("Shoaib", "Ayed", "Ayman", 1, 2, 3)) // ["shoaib", "Ayed", "Ayman", 1, 2, 3]

// Array.copyWithin( ) method : ...

array = ["Shoaib", 11, 22, "Ayed", 75, 99, "Ayman", 101, 188]

console.log(array)

array.copyWithin(3)
console.log(array)

array.copyWithin(2, 4)
console.log(array)

// Array.some ( ) method : ... 

// array = ["shoaib", 11, 22, "Ayed", 75, 99, "Ayman", 101, 188]

num = 5

// check = array.some(function (e) {
//     return e > 5
// })/

// in Arrow function : ...

// check = array.some((e) => e > 5)

// using this key : ...

check = array.some(function (e) {
    return e > this
    }, num)

    check = array.some(function (e) {
    return e === "Shoaib"
})

console.log(check)

// spread syntax : ...

console.log("Shoaib")    // Shoaib // print as usual ...
console.log(..."Shoaib")   // S h o a i b  //  بتحط مسافات بينهن
console.log([..."Shoaib"])  // ['S', 'h','o','a','i','b']  // print as an array ...

// ................................................................................

// Regular expression : ... 

myString = "Hello world, I'm Shoaib Jadallah shoaib."

regex = /Shoaib/

console.log(myString.match(regex)) // [Shoaib, index 16, input 'Hello world, I'm Shoaib Jadallah.']
console.log(myString.match(/Shoaib/))  // [Shoaib, index 16, input 'Hello world, I'm Shoaib Jadallah.']

Regex = /shoaib/
console.log(myString.match(Regex))  // ['shoaib', index: 33, input: "Hello world, I'm Shoaib Jadallah shoaib."]
console.log(myString.match(/shoaib/)) // ['shoaib', index: 33, input: "Hello world, I'm Shoaib Jadallah shoaib."]
Regex_i = /shoaib/i
console.log(myString.match(Regex_i))  // ['Shoaib', index: 17, input: "Hello world, I'm Shoaib Jadallah shoaib."]

// Regular expressions : (All about the Regular Expressions in the note book)...

// Form Validation (practice) : ...

document.getElementById("register").onsubmit = function () {
    phoneInput = document.getElementById("phone").value
    phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/ ; // (1234) 567-8910
    validationResult = phoneRe.test(phoneInput)

    console.log(validationResult)
    return false
}


