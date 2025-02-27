var date=new Date().getDay()
var arr=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
if(arr[date]=='Sun'||arr[date]=='Sat'){
    document.write(`It's Funday!`)
}
else{
document.write(`Today is ${arr[date]}`)
}