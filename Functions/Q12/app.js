function area(x,y){
    return x*y
}
// document.write(`The area is ${area(4,5)} sq.units`)
var width
var height
document.write(`The area is of a triangle with width ${width=+prompt('Enter width')} units and height ${height=+prompt('Enter height')} units is ${area(width,height)} sq.units`)