var str=prompt('Enter any word').toLowerCase()
var ind=prompt('Enter letter whose index is to be searched').toLowerCase()
for(i=0;i<str.length;i++){
    if(ind==str[i]){
        document.write(`${ind} is found at ${i} <br>`)
    }
}