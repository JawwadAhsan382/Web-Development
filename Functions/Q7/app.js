function abc(a){
    for(i=a-1;i>0;i--){
        a=a*i
    }
    return a
}
var num=+prompt('Enter number')
document.write('Factorial of ',num,' is ',abc(num))