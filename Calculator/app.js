function press(e){
    var getVal=document.querySelector('#inp')
    getVal.value+=e
}
function oper(){
    var getVal=document.querySelector('#inp')
    getVal.value=eval(getVal.value)
}
function clearAll(){
    var getVal=document.querySelector('#inp')
    getVal.value=''
}
function delT(){
    var getVal=document.querySelector('#inp')
    getVal.value=getVal.value.slice(0,-1)
}