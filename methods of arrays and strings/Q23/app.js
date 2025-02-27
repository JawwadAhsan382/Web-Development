var str1=prompt('Enter a paragraph')
var str2=prompt('Enter word to find no of occurences')
var occ=0
var ind
for(i=0;i<str1.length;i=ind+1){
    ind=str1.toLowerCase().indexOf(str2.toLowerCase(),i)
    if(ind>=0){
        ++occ
    }
    else{
        break
    }
}
document.write(`Text: ${str1} <br> There are ${occ} occurence(s) of word '${str2}'`)