var arr=['cake','apple pie','cookie','chips','patties']
var item=prompt('Enter item you want').toLowerCase()
var ind=arr.indexOf(item)
if(ind==-1){
    document.write('Item not found')
}
else{
    document.write(`${item} is found at index ${ind} in our bakery`)
}