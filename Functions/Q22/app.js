function Up(str){
    var cnt=0;
   for(i=0;i<str.length;i++){
    if (str[i].toLowerCase()=='a'||str[i].toLowerCase()=='e'||str[i].toLowerCase()=='i'||str[i].toLowerCase()=='o'||str[i].toLowerCase()=='u'){
        cnt++
    }
   }
   return cnt
}
document.write(`No of vowels: ${Up(prompt('Enter text'))}`)