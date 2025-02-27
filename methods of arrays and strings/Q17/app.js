var userName=prompt('Enter user name')
var flag=true
for(i=0;i<userName.length;i++){
    if(userName[i]=='@' || userName[i]=='.' || userName[i]==',' || userName[i]=='!'){
        flag=false
        alert('Username can not contain special characters')
    break
    }
}
if(flag==true){
    alert('Username accepted')
}