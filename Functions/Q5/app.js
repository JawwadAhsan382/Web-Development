function abc(a,b,x){
    if(x=='+'){
        return a+b
    }
    else if(x=='-'){
        return a-b
    }
    else if(x=='*'){
        return a*b
    }
    else if(x=='/'){
        return a/b
    }
    else if(x=='%'){
        return a%b
    }
    else{
        return 'Undefined Operator'
    }
}
var num1=+prompt('Enter number 1')
var num2=+prompt('Enter number 2')
var op=prompt('Enter an operator')
document.write(abc(num1,num2,op))