function uniq(str){
    str=str.split('')
        for(i=0;i<str.length;i++){
            if(str[i]!=' '){
                for(j=i+1;j<str.length;j++){
                    if(str[i].toLowerCase()==str[j].toLowerCase()){
                        str.splice(j,1)
                        j--
                    }
                }
            }
        }
    return str.join('')
}
var test=prompt('Enter a string')
document.write(`Input: ${test} <br> Output: ${uniq(test)}`)