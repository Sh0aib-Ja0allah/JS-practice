console.log("Hello world.");
console.error("Error in js for shoaib jadallah.");
console.table(["shoaib", "Ayed", "Ayman"]);

console.log("Hello to %cJS %cworld.", "color: red; font-size: 30px", "color: green; font-size: 30px");
// this is data types in js down below.

console.log("data types in java script.")
console.log(typeof"object")    //string
console.log(typeof 5000)    //number
console.log(typeof [10,15,17])     //Array
console.log(typeof ["os", "java", "cpp"])     //array

//it can be with ; or you can esc it without it  ";"

console.log(typeof {name:"shoaib", age: 22, country: "palestine"});     //object
console.log(typeof true);       //boolean

console.log(typeof undefined)       //undefined
console.log(typeof null)      //null

// the variables in js down below :

var user = "shoaib"
console.log(user)

//or

age = 17
console.log(age)

// and you can use the variables from the html file like :

console.log(hello)

// hello.innerHTML  = "test"  // this can be used to change the value of any element in html file by js file.

// var user  = "shoaib"
// let user  = "shoaib"
// const user = " shoaib"

// concatenation :

let a = "hello"
let b = "shoaib"
// document.write(a + " " + b)

// the same thing in this : 

// document.write(a, " ", b);

// or

// document.write(`${a} ${b}`)

// this make b element in the next line

document.write(`${a}
${b} ${10*2}`)

console.log(`${a}
${b}`)

document.write("<hr>")

// template literals 

let title = "greeting"
let desc  = "Hello Shoaib in java script."

let markup = 
    `<div class="card"> 
        <div class="child">
            <h1>${title}</h1>
            <p>${desc}</p>
        </div>
    </div>`

document.write(markup)

x = 100, y = 100.5555
console.log(x.toString())

console.log(y.toFixed())
console.log(y.toFixed(2))

console.log(parseInt("100"))

console.log(Number.isInteger("2"))
console.log(Number.isInteger(2.5))
console.log(Number.isInteger(2))

// Math object ..

console.log("Math.round()")
console.log(Math.round(99.2))
console.log(Math.round(99.7))

console.log("Math.ceil()")
console.log(Math.ceil(99.2))
console.log(Math.ceil(99.9))

console.log("Math.floor()")
console.log(Math.floor(99.9))
console.log(Math.floor(99.2))

console.log("Math.min(19,2,5,7,13,20,99)")
console.log(Math.min(19,2,5,7,13,20,99))

console.log("Math.max(19,2,5,7,13,20,99)")
console.log(Math.max(19,2,5,7,13,20,99))

console.log("Math.pow(2,4)")
console.log(Math.pow(2,4))

console.log("Math.random()")
console.log(Math.random())

console.log("Math.trunc(99.5)")
console.log(Math.trunc(99.5))
console.log("Math.trunc(99.7)")
console.log(Math.trunc(99.7))

// start of string methods in java script : 
console.log("the start of string methods : ")

username = "Shoaib"

console.log(username)
console.log("console.log(username[1]) : ")
console.log(username[1])

console.log("console.log(username.charAt(1)) : ")
console.log(username.charAt(1))

console.log("console.log(username.length)")
console.log(username.length)

nextuser = "  Jadallah  "
console.log(nextuser.trim())
console.log(nextuser.length)

console.log(username.toUpperCase())
console.log(nextuser.toUpperCase())

console.log(username.toLowerCase())
console.log(nextuser.toLowerCase())

// removing spaces from the var and prints the letter with index 2 in upper case .
console.log(nextuser.trim().charAt(2).toUpperCase())

a = "Hello java programmer, welcome to java script."

// find in witch index the word "java" starts .
console.log(a)
console.log(a.indexOf("java"))  // 6
console.log(a.lastIndexOf("java"))  //  34

console.log(a.length)
console.log(a.slice(0))      // print all the string from index 0 to the last as default .
console.log(a.slice(2, 10))  // (llo java) prints from index 2 to index 10 and the last index does not included.
console.log(a.slice(-8))    // (script.)  print from the opposite" (you need to know the string length & where is the word).

newword = "Hello"
console.log(newword.repeat(5))    // prints the new word in the console five times 

console.log(a.split("")) // prints an array of chars ....
console.log(a.split(" "))   // prints an array of words ....
console.log(a.split("", 2))  // prints the first chars ....
console.log(a.split(" ", 2)) // prints the first two words ....

// a = "Hello java programmer, welcome to java script."

console.log(a.includes("java"))    // checks if there is a " java " word in the variable a or not
console.log(a.includes("Hello", 8))   //  checks if there is a " Hello " word in the variable a or not after index 8

// comparison operators .................

console.log(10 == "10") // compare value only
console.log(-100 == "-100") // compare value only

console.log(10 != "10") // compare if not equal .
console.log(-100 != "-100") // compare if not equal .

console.log(10 === "10") // compare value & type " false "
console.log(10 !== "10") // compare value & type " true "

console.log(10 > 20) // compare if 10 is greater than 20 " false "
console.log(10 < 20) // compare if 10 is smaller than 20 " true "

// Array ............

myList = ["Shoaib", "Jadallah", "Ali"]

console.log(myList)
console.log(myList[0])
console.log(myList[1][2])

console.log(`Hello my friend ${myList[2]}`)
console.log(typeof myList)      //it's an array but here the program call it an object 
// and in python called list ...

console.log(Array.isArray(myList))   // this function checks if this variable is an Array or not ...

console.log(myList.length)   // 3 elements ... and the index starts from 0

myList.unshift("Ayman", "Ayed")   // this function adds elements in the start of the array ... 
console.log(myList)

myList.push("Eman", "samah")   // this function adds elements at the end of the array ... 
console.log(myList)

numbers = [17, -100, 11, 200, 70]

console.log(numbers)
console.log(numbers.sort())
console.log(numbers.reverse())

// Loops ......................................... 

/* 1. For loop ...

    for ([1] [2] [3]){
        // block of code.
    } 

*/

for (i=0; i<10; i++){
    console.log(i)
}

employees = ["Shoaib", "Ayed", "Ayman", "Zakaria"]

for (i=0; i<employees.length; i++){
    console.log(employees[i])
}

 // code in js thats take the array called array and put the strings in it to the array called only names ...

array = [1, 2, 3, "Shoaib" , "Ayed", 5, "Ayman", 6, "Zakaria"]

onlynames = []

for (i = 0; i<array.length; i++){
    if (typeof array[i] === "string"){
        onlynames.push(array[i])
    }
}
console.log(array)
console.log(onlynames)

// Showing products practice :

products = ["Keyboard", "mouse", "pen", "pad", "iphone", "SSD", "HDD", "Monitor"]
colors = ["red", "green", "blue"]
count = 5

document.write(`<hr>`)
console.log(products)
document.write(`<h1>show ${count} products.</h1>`)

for (i=0; i<count; i++){
    document.write(`<div>`)
    document.write(`<h3> [${i + 1}]${products[i]}</h3>`)
    document.write(`</div>`)
    for(j=0; j<colors.length; j++){
        document.write(`<p>${colors[j]}</p>`)
    }
}

/*............................................
- while loop ...
*/




// ...........................................

/* functions ...

function .......... (){
    // Block of code.

}

.......... ( ) // calling the function .

*/
function greet (){
    console.log("Hello world")
}

greet()

// another Shape ...

names = ["Shoaib", "Ayed", "Ayman", "Zakaria"]

uservalue = "Shoaib"

function Helloing (value){
    console.log(`Hello ${value}`)
}

Helloing(uservalue)

for (i=0; i<names.length; i++){
    console.log(`${Helloing(names[i])}`)
}

// return function ...
num1 = 5, num2 = 6
function sum (num1, num2){
    return num1 + num2
}

console.log(sum(num1,num2))
console.log(sum(9,7))

// Function Ultimate Practice : ...

function info (un = "UN", age = "UN", rate = 0, show ="yes",  ...skills){
    document.write(`<div>`)
    document.write(`<h2>Welcome ${un}</h2>`)
    document.write(`<p>age : ${age}</p>`)
    document.write(`<p>Hour rate : $${rate}</p>`)
    if(show === "yes"){
        if (skills.length > 0){
            console.log("show skills")
            document.write(`<p>skills : ${skills.join(" | ")}</p>`)
        }else{
            console.log("there is no skills.")
            document.write(`<p>skills : there is no skills.</p>`)
        }
    }else{
        console.log("don't show skills")
        document.write(`skills is hidden.`)
    }
    document.write(`</div>`)
}

info("shoaib", 20, 20, "yes")

info("Fadi", 25, 30, "yes", "html", "css", "JS")

document.getElementById("show").onclick = function () {
    console.log("show by show button.")
}
// in the down below code function we called the built in function setTimeout to generate 
// a function in it as a parameter and the second parameter is (after what time) to do.

setTimeout(function (){
    console.log("good")
},2000)

// Nested Functions ...

function calculations (...num){
    sum = 0
    function summation () {
        for (i=0; i<num.length; i++){
            sum += num[i]
        } 
    }
    summation ()
    return sum
}

console.log(`this is the summation of (10,5,6) : ${calculations (10,5,6)}, using the nested functions.`)
//...............................................................
console.log("by another way :")

// example 2 (another way to code) :

function calculations (...num){
    sum = 0
    function summation () {
        for (i=0; i<num.length; i++){
            sum += num[i]
        } 
        return sum
    }
    return summation()
}

console.log(`this is the summation of (10,5,6) : ${calculations (10,5,6)}, using the nested functions.`)

// the Arrow function : 

calcsum = (num1,num2) => num1 + num2 // this is the arrow function ...
console.log(calcsum(5,6))

// names = ["Shoaib", "Ayed", "Ayman", "Zakaria"]

print = (names) => names // another Arrow function ...
console.log(print(names))

factorial = (nums) => {
    fact = 1
    for (i=1; i<=nums; i++){
        fact *=i
    }
    return fact
} // this is an Arrow function that returns the factorial of any inserted number ...
console.log(factorial(5))

//..............................................

// Higher order functions : ...

mynums = [1, 2, 3, 4, 5, 6]
newarray = []

for (i=0; i<mynums.length; i++){
    newarray.push(mynums[i]*2)
}
console.log(newarray)

// the same idea but with function map.

// addself = newarray.map(function (element, index, array){
//     // console.log(`current element : ${element}`)
//     // console.log(`current index : ${index}`)
//     // console.log(`array : ${array}`)
//     // console.log(`this : ${this}`)
//     return element + element
// }, 10)

// the same solution but using the arrow function ...

addself = mynums.map((element) => element + element)
console.log(addself)

// it can be like this ...

addself = mynums.map((element) => {
    return element + element
}) 
console.log(addself)
// now we use the calling function as parameter in another way down below :

function addition (element){
    return element + element
}

add = mynums.map(addition)
console.log(add)

/* practice :

swap cases 
Inverted numbers
Ignore boolean value

*/
swapping_cases = "Jadallah"
inverted_numbers = [1, -10, -20, 15, 100, -30]
ignore_numbers = "Jad19all540ah"

// swap cases : ...

sw = swapping_cases.split("").map(function (element){
    // condition ? true : false 
    return element === element.toUpperCase () ? element.toLowerCase () : element.toUpperCase ()
})
console.log(`Before swapping : ${swapping_cases}`)
console.log(`After Swapping : ${sw.join ("")}`)

// Inverted numbers : ...

inv = inverted_numbers.map(function (element){
    return - element
})
console.log(`the inverted numbers Before inverting is : ${inverted_numbers}`)
console.log(`the inverted numbers after inverting is : ${inv}`)

// Ignore numbers : ...

ign = ignore_numbers.split("").map(function (element){
    return isNaN(parseInt(element)) ? element : ""
}).join("")

console.log(ign)

// ......................................................

// filter : ...

// get the friends with name starts with A ...
friends = ["Ayed", "Shoaib", "Ayman", "Hani","Ahmad", "Hadi", "Zakaria"]
// get the even numbers only
numbrs = [11, 20, 5, 2, 13, 18, 9, 10, 6]

// test map VS filters : ...

// the Map function : ...
addMap = numbrs.map(function (element){
    return element + element
})
console.log(`Using the Map function : ${addMap}`)

// the Filter function : ...
addFilter = numbrs.filter(function (element){
    return element + element
})
console.log(`Using the Filter function : ${addFilter}`)

// Using filter returning all the names that starts with the letter ( A ) : ...
filterFriends = friends.filter(function (element){
    return element.startsWith("A")
})
console.log(filterFriends)

// Using filter returning all the numbers thats is even : ...

evenNumbers = numbrs.filter(function (element){
    return element%2 === 0 ? true : false
})
console.log(evenNumbers)

// Using filter get the words that have more than 4 characters : ...

sentence = " I Love Python & Java Script so that I dream  to be a front end Developer."

smallWords = sentence.split(" ").filter(function (element){
    return element.length <= 4
})

console.log(`before filtering : ${sentence}`)
console.log(`after filtering : ${smallWords.join(" ")}`)

// ......................................................
// foreach function & practice on it : ...

allLis = document.querySelectorAll("ul li")
allDivs = document.querySelectorAll("div")

allLis.forEach(element => {
    element.onclick = function (){
        //console.log(this)

        // remove class active from all elements in allLis ...
        allLis.forEach(element => {
            element.classList.remove("active")
        })
        // add active class to this element ...
        this.classList.add("active")
        // Hide all divs ...
        allDivs.forEach(function (element) {
            element.style.display = "none"
        })
    }
})

// .................................................

// Objects in Java Script ...

User = {
    // properties ...
    theName : "Shoaib",
    theAge : 23,
    // Methods ...
    sayHello : function () {
        console.log("Hello")
    },
}
console.log(User.theName)
console.log(User.theAge)
console.log(User.sayHello())

//Dot Notation VS Brackets Notation : ...

myVar = "country of"

Usee = {
    myName : "Shoaib",
    "country of" : "palestine",
}

console.log(Usee.myName) // Shoaib
console.log(Usee["country of"]) // palestine
console.log(Usee[myVar]) // palestine 

// Nested Object & Training : ...

shoaib = {

    hisName : "Shoaib",
    hisAge : 22,
    hisSkills : ["Html", "CSS", "JS"],
    available : false,
    address : {
        ksa : "nablus",
        palestine : {
            one : "Ramallah",
            two : "tubas",
        },
    },
    // methods ...
    checkAV : function () {
        if (shoaib.available == true){
            return "free or work."
        }else{
            return "not free."
        }
    },
}

console.log(shoaib.hisName)
console.log(shoaib.hisAge)
console.log(shoaib.hisSkills)
console.log(shoaib.hisSkills.join(" | "))
console.log(shoaib.hisSkills[2])
console.log(shoaib.address.ksa)
console.log(shoaib.address.palestine.one)
console.log(shoaib.checkAV())

// ...............................................

// Creating Objects : ...

object = {}
// OR
// object = new object ()
console.log(object)

object.age = 20
object.nam = "Shoaib Jadallah"
object["country"] = "palestine"

object.sayHello = function () {
    return "Hello"
}
console.log(object)
console.log(object.age)
console.log(object["country"])
console.log(object.sayHello())

// creating Object with create Method : ...

Us = {
    age : 40,
    doubleAge : function (){
        return Us.age * 2
    },

}
console.log(Us)
console.log(Us.age)
console.log(Us.doubleAge())

obj = Object.create({})
obj.a = 100
console.log(obj)

copyObj = Object.create(object)

console.log(`* the old age = ${copyObj.age}`)    // the value of age before editing it ...
copyObj.age = 27     // editing the value of age from 20 to 27 ...
console.log(copyObj)    
console.log(`* the new age = ${copyObj.age}`)     // the value of age after editing it ...
console.log(copyObj.sayHello())

// Creating Object with assign Method : ...

finalObject = Object.assign({}, obj, {prop : "new object"})

console.log(finalObject)

document.write("<hr>")

// deleting operators ...

Used = {
    named : "Zakaria",
    aged : 22
}
console.log(Used)       // {named : "Zakaria"}
console.log(Used.named)     // Zakaria
console.log(Used["named"])      // Zakaria

delete Used.named

console.log(Used)       // {}
console.log(Used.named)     // undefined
console.log(Used.named)     // undefined

console.log("#".repeat(15))

// down below code is an example of preventing the property from delete ...

freezedObj = Object.freeze({nameo : "Zakaria", ageo : 22})

console.log(freezedObj)     // { nameo : "Zakaria", ageo : 22}
console.log(freezedObj.nameo)      // Zakaria

delete freezedObj.nameo

console.log(freezedObj)     // {nameo : "Zakaria", ageo : 22}
console.log(freezedObj.nameo)     // Zakaria

// how to forLoop (for) item in the object : ...

NewUser = {
    Name : "Hani",
    Age : 22,
}

for (item in NewUser){
    console.log(`the ${item} value is : ${NewUser[item]}`)
}

// constructor : ...

function Phone (serial, color, price){
    this.serial = serial
    this.color = color
    this.price = price
}

phone1 = new Phone(1, "Red", 600)
phone2 = new Phone(2, "Green", 500)
phone3 = new Phone(3, "Black", 700)
List = [phone1, phone2, phone3]

// down below : ???

// for (i=0; i<List.length; i++){
//     for (item in i){
//         console.log(`the ${item} = ${i[item]}`)
//     }
// }

console.log(phone1.serial)
console.log(phone1.color)
console.log(phone1.price)

console.log(phone2.serial)
console.log(phone2.color)
console.log(phone2.price)

console.log(phone3.serial)
console.log(phone3.color)
console.log(phone3.price)

//  the inheritance : ...

class parent { 
    constructor (Nameo, email) {
        this.Nameo = Nameo
        this,email = email
    }
    say_Hello(){
        return `Hello ${this.Nameo}`
    }
    ShowEmail () {
        return `Email : ${this.email}`
    }
}

class child extends parent {
    constructor (Nameo, email, Ageo){
        super(Nameo, email)
        this.Ageo = Ageo
    }
    Massage(){
        return "you are the admin here."
    }
}

NewChild = new child ("Shoaib", "shoaib.jadallah@gmail.com", 22)

// ................................................................

// Here is the start of the DOM is JS : ...

IdElement = document.getElementById("first")
IdElements = document.getElementsByTagName("p")
classElement = document.getElementsByClassName("third")
myQuerySelectors = document.querySelector(".active")

console.log(IdElement)
console.log(IdElements[1])
console.log(classElement)
console.log(myQuerySelectors)
console.log(document.title)
console.log(document.body)
console.log(document.forms[0].one)


document.write(IdElement)
document.write(IdElements[1])
document.write(classElement)

IdElements[1].innerHTML = "Test"   // editing the value ... 

// here is until page 37 in the notebook : ................


// Import from final.js

// Import [Modules] : 
