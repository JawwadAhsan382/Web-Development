function calculateSupply(x,y){
    var num=(estMaxAge-x)*365*y
    return Math.round(num)
}
var favSnack=prompt('Enter your favourite snack')
var age=+prompt('Your age')
var estMaxAge=85
var amountPerDay=+prompt('Enter amount per day')
document.write(`<h1>Lifetime Supply Calculator</h1> Favourite Snack: ${favSnack} <br> Current Age: ${age} <br> Estimated Maximum Age: ${estMaxAge} <br> Amount of Snacks Per Day: ${amountPerDay} <p>You will need ${calculateSupply(age,amountPerDay)} ${favSnack} to last you unitl the ripe old age of ${estMaxAge}</p>`)