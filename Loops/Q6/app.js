var arr=[]
var choice=+prompt('Enter number of items you want')
for(var i=0;i<choice;i++){
    arr[i]=prompt(`Enter item no ${i+1}`)
}
document.write(`Enter number of items: ${choice} <br> Items:<br><br>`)
for(var j=0;j<choice;j++){
    document.write(arr[j]+'<br>')
}