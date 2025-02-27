function celciusToFahrenheit(x){
    return (9*x/5)+32
}
function fahrenheitToCelsius(y){
    return (y-32)*5/9
}
var tempCelsius=+prompt('Enter temperature in celsius')
document.write(`Input: ${tempCelsius} Celsius <br> Output: ${celciusToFahrenheit(tempCelsius)} Fahrenheit <br>`)
var tempFahrenheit=+prompt('Enter temperature in fahrenheit')
document.write(`Input: ${tempFahrenheit} Fahrenheit <br> Output: ${fahrenheitToCelsius(tempFahrenheit)} Celsius <br>`)