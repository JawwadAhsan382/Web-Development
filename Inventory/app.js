var name=prompt('Enter customer name')
var item1=prompt('Enter 1st item')
var price1=+prompt(`Enter price of ${item1}`)
var item2=prompt('Enter 2nd item')
var price2=+prompt(`Enter price of ${item2}`)
var item3=prompt('Enter 3rd item')
var price3=+prompt(`Enter price of ${item3}`)
var item4=prompt('Enter 4th item')
var price4=+prompt(`Enter price of ${item4}`)
var item5=prompt('Enter 5th item')
var price5=+prompt(`Enter price of ${item5}`)
var item6=prompt('Enter 6th item')
var price6=+prompt(`Enter price of ${item6}`)
var total=price1+price2+price3+price4+price5+price6
var discount
if(total>=30000){
    discount=total/100*30
}
else if(total>=20000){
    discount=total/100*20
}
else if(total>=10000){
    discount=total/100*10
}
else if(total>=5000){
    discount=total/100*5
}
else if(total>=3000){
    discount=total/100*3
}
else{
    discount=0
}
total=total-discount
document.write(
    `Name: ${name}
    <br>
    Item1: ${item1} <span>&rarr;</span> pkr ${price1}
    <br>
    Item2: ${item2} <span>&rarr;</span> pkr ${price2}
    <br>
    Item3: ${item3} <span>&rarr;</span> pkr ${price3}
    <br>
    Item4: ${item4} <span>&rarr;</span> pkr ${price4}
    <br>
    Item5: ${item5} <span>&rarr;</span> pkr ${price5}
    <br>
    Item6: ${item6} <span>&rarr;</span> pkr ${price6}
    <br>
    Discount: ${discount} pkr
    <br>
    Total: ${total} pkr
    <br>
    Thank you for shopping`
)