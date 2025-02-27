function ocur(str,x){
    var cnt=0
        for(i=0;i<str.length;i++){
            if(x.toLowerCase()==str[i].toLowerCase()){
                cnt++
            }
        }
    return cnt
}
var test=prompt('Enter a string')
var find=prompt('Enter a letter')
document.write(`Input: ${test}, ${find} <br> Output: ${ocur(test,find)} occurences of ${find}`)