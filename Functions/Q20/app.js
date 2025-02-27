function Up(str){
    var flag=true
    var atr=''
for(i=0;i<str.length;i++){
if(flag==true){
atr=atr+str[i].toUpperCase()
flag=false
}
else{
    atr=atr+str[i].toLowerCase()
}
if(str[i]==' '){
    flag=true
}
}
return atr
}
document.write(Up(prompt('Enter text')))