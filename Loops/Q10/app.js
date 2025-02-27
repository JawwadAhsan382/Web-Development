var arr=[24,2001,78,91,12]
var larg1=arr[0]
for(i=1;i<arr.length;i++){
    if(larg>arr[i]){
        larg=arr[i]
    }
}
document.write(`Array Items: ${arr} <br> The smallest number is ${larg}`)