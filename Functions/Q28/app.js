function calcCircumference(x){
    return 2*Math.PI*x
}
function calcArea(y){
    return Math.PI*y*y
}
var rad=+prompt('Enter radius of a circle')
document.write(`The circumference of a circle with radius ${rad} units is ${calcCircumference(rad)} units and area is ${calcArea(rad)} sq.units`)