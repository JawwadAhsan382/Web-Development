function Up(str){
   var arr= str.split(' ')
   var test=''
   for(i=0;i<arr.length;i++){
    if(test.length<=arr[i].length){
        test=arr[i]
    }
   }
return test
}
document.write(Up(prompt('Enter text')))