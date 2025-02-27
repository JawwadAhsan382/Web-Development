var arr=['Apple','Banana','Mango','Orange','Strawberry']
for(var i=0;i<arr.length;i++){
    document.write(arr[i]+'<br>')
}
for(var j=0;j<arr.length;j++){
    document.write(`The index of ${arr[j]} is ${arr.indexOf(arr[j])} <br>`)
}