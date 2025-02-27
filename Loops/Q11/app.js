var arr=[24,2001,78,91,12]
var larg=arr[0]
var smal=arr[0]
for(i=1;i<arr.length;i++){
    if(larg<arr[i]){
        larg=arr[i]
    }
    if(smal>arr[i]){
        smal=arr[i]
    }
}
document.write(`Array Items: ${arr} <br> The largest number is ${larg} <br> The smallest number is ${smal}`)