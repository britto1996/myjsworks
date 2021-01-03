//print my age number on front end
let myAge = prompt("What is your age?")
console.log(myAge)
document.getElementById("yourAge").innerHTML = myAge

//deal with numbers and build a console calculator

let myNumber = prompt("press 1 for add 2 for sub 3 for div and 4 for mul")
if(myNumber==1){
    alert("addition")
}
else if(myNumber==2){
    alert("subtraction")
}
else if(myNumber==3){
    alert("division")
}
else{
    alert("multiplication")
}

/*
1.create a function
2.call a function
3.when my name is britto
4.return hello britto
*/
function myFun(){
    console.log("function is working")
}
myFun()

//function with arguments
function myName(name){
    return `hello ${name}`
}
let printMyGreeting = myName('britto')
console.log(printMyGreeting)

//how do we add two numbers together in a function

function mySum(num1,num2){
    result = num1 + num2
    console.log(result)
    return result
}
mySum(1,2)

//while and for loop
let num = 0
while(num<100){
    num+=1
    console.log(num)
}

for(num=1;num<=100;num++){
    console.log(num)
}

//data types

let number = 20 //number
let name = "btm"//string
let marvel = ["ironman","thor","hulk"]//array
let fuck = true//boolean
let sucks;//undefined
let myStudents = {myName:"britto",age:"23"}//objects


//learn more about strings

let myGirl = "rakul"

console.log(myGirl.length)
console.log(myGirl.indexOf("r"))
console.log(myGirl.slice(2,4))
console.log(myGirl.replace("rakul","kajal"))
console.log(myGirl.toUpperCase())
console.log(myGirl.toLowerCase())
console.log(myGirl.split(" - "))