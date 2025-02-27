function abc(...xyz){
    xyz=xyz.toString().split(',')
for(var i of xyz){
    document.write(i+'<br>')
}
}
var lngth=+prompt('Enter length')
var arr=[]
arr.length=lngth
for(i=0;i<lngth;i++){
    arr[i]=+prompt(`Enter item ${i}`)
}
abc(arr)