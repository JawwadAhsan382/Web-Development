function summer(...abc){
    abc=abc.toString().split(',')
    var xyz=0
    for(j=0;j<abc.length;j++){
        xyz=xyz+parseFloat(abc[j])
    }
    return xyz
}
var arr=[]
arr.length=+prompt('Enter number of elements you want to add')
for(i=0;i<arr.length;i++){
    arr[i]=+prompt(`Enter element ${i}`)
}
document.write(`Entered array: ${arr} <br> Its sum: ${summer(arr)}`)