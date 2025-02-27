var itemsArray=[
{name:"juice", price: "50", quantity:"3"},
{name:"cookie", price: "30", quantity:"9"}, 
{name:"shirt", price: "880", quantity: "1"},
{name:"pen", price:"100", quantity:"2"}
]
var total=itemsArray.reduce(function(acc,cv){
    document.write(`The price of ${cv.name} / ${cv.name}s is ${cv.price*cv.quantity} <br>`)
    return cv.price*cv.quantity+acc
},0)
document.write(`The grand total is: ${total}`)