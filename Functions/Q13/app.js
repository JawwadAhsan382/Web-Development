function arrSort(x){
    return x.sort()
}
var arr=[]
arr.length=+prompt('Enter length of array')
for(i=0;i<arr.length;i++){
    arr[i]=prompt(`Enter element no ${i}`)
}
document.write(`Input: ${arr} <br> Output: ${arrSort(arr)}`)