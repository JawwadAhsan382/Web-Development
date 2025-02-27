var str1=prompt('Enter 1st word')
var str2=prompt('Enter 2nd word')
if(str1>str2){
    document.write(`${str1} is greater than ${str2}`)
}
else if(str1<str2){
    document.write(`${str2} is greater than ${str1}`)
}
else{
    document.write('Strings are equal')
}