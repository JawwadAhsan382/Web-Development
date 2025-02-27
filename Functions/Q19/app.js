function palin(check){
    var xyz=''
    var abc=''
if((check.length%2)==0){
for(i=0;i<(check.length/2);i++){
    xyz=xyz+check[i]
}
for(j=(check.length-1);j>=(check.length/2);j--){
    abc=abc+check[j]
}
abc=abc.toLowerCase()
xyz=xyz.toLowerCase()
if(abc==xyz){
    return `${check} is palindrome`
}
else{
    return `${check} is not palindrome`
}
}
else{

    for(i=0;i<=(Math.floor(check.length/2));i++){
        xyz=xyz+check[i]
    }
    for(j=(check.length-1);j>=(Math.floor(check.length/2));j--){
        abc=abc+check[j]
    }
    abc=abc.toLowerCase()
    xyz=xyz.toLowerCase()
    if(abc==xyz){
        return `${check} is palindrome`
    }
    else{
        return `${check} is not palindrome`
    }

}
}
var word=prompt('Enter any word')
document.write(`Input: ${word} <br> Output: ${palin(word)}`)