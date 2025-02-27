function type(str){
    return typeof(str)
}
var test=function abc(){
    return 1
}
document.write(`Input: ${test} <br> Output: ${type(test)}`)