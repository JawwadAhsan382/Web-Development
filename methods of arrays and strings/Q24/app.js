var str=prompt('Enter any word')
var vcount=0
var ccount=0
for(i=0;i<str.length;i++){
    if(str[i].toLowerCase()=='a'||str[i].toLowerCase()=='e'||str[i].toLowerCase()=='i'||str[i].toLowerCase()=='o'||str[i].toLowerCase()=='u'){
        vcount++
    }
    else{
        ccount++
    }
}
document.write(`String: ${str} <br> No of Vowels: ${vcount} <br> No of Consonants: ${ccount}`)