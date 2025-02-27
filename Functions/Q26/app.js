// function calculateAge(x,y){
//     return `${y-x-1} or ${y-x}`
// }
// var birthYear=+prompt('Enter your birth year')
// var currentYear=+prompt('Enter current year')
// document.write('<h1>The Age Calculator</h1>')
// document.write(`Current Year: ${currentYear} <br> Birth Year: ${birthYear} <br><br> You are either ${calculateAge(birthYear,currentYear)} years old`)

//Bonus
function calculateAge(x){
    var y=new Date().getFullYear()
    return `${y-x-1} or ${y-x}`
}
var birthYear=+prompt('Enter your birth year')
document.write('<h1>The Age Calculator</h1>')
document.write(`Current Year: ${new Date().getFullYear()} <br> Birth Year: ${birthYear} <br><br> You are either ${calculateAge(birthYear)} years old`)