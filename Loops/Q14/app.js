var scores=[12,45,3,22,34,50]
var ch=+prompt('Enter the number till you want to print')
var flag=false
for(j=0;j<scores.length;j++){
  if(ch==scores[j]){
    flag=true
    break
  }
}
if(flag==true){
  for(i=0;i<=scores.indexOf(ch);i++){
    document.write(scores[i],',')
  }
}
else{
  document.write(`${ch} is not in the list`)
}