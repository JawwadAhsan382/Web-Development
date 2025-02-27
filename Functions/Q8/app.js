function abc(a,b){
    function xyz(x,y){
        var hyp2=Math.pow(x,2)+Math.pow(y,2)
        return hyp2
    }
    return Math.sqrt(xyz(a,b))
}
var num1=+prompt('Enter base length')
var num2=+prompt('Enter perpendicular length')
document.write(`The  hypotenuse of a right angled triangle with base=${num1} units and perpendicular=${num2} units is ${abc(num1,num2).toFixed(2)}`)