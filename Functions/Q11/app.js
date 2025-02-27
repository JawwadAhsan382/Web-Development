function abc(...xyz){
    xyz=xyz.toString().split(',')
    var res=0
for(var i of xyz){
    if(i>res){
        res=i
    }
}
return res
}
document.write(`${abc(1,9,4,8)} is greatest among entered values`)