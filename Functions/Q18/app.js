function abc(xyz){
    return parseFloat(xyz.toString().split('').reverse().join(''))
}
var num=+prompt('Enter any number')
document.write(`Input: ${num} <br> Output: ${abc(num)}`)