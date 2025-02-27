var age=+prompt('Enter your age')
var date=new Date()
date.setFullYear(date.getFullYear()-age)
document.write(`Your age is: ${age} <br> Your birth year is ${date.getFullYear()}`)