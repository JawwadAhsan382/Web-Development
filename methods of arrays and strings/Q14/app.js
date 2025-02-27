var num=+prompt('Enter a float')
var str=num.toString()
for(i=0;i<str.length;i++){
    if(str[i]=='.'){
        document.write(`Number: ${num} <br> Result: ${str.slice(0,i)+str.slice(i+1)}`)
        break
    }
}