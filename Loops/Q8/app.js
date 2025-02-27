var arr=['cake','apple pie','cookies','chips','patties']
var choice=prompt('Enter item you want')
choice=choice.slice(0).toLowerCase()
var flag=false
for(i=0;i<=arr.length;i++){
    if(choice==arr[i]){
        flag=true
        document.write(`${choice} is available at index ${arr.indexOf(choice)} in our bakery`)
        break
    }
}
if(flag==false){
    document.write(`We are sorry ${choice} is not available in our bakery`)
}