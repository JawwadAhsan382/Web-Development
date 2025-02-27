// var getUl=document.getElementById('book')
// function add(){
//     var getInp=document.getElementById('inp')
//     if(getInp.value==''){
//         alert('Enter valid value')
//     }
//     else{
//         var createLi=document.createElement('li')
//     var text=document.createTextNode(getInp.value)
//     var del=document.createElement('button')
//     del.appendChild(document.createTextNode('Delete'))
//     del.setAttribute('onclick','dele(this)')
//     var upd=document.createElement('button')
//     upd.appendChild(document.createTextNode('Update'))
//     upd.setAttribute('onclick','updt(this)')
//     createLi.appendChild(text)
//     createLi.appendChild(del)
//     createLi.appendChild(upd)
//     getUl.appendChild(createLi)
//     getInp.value=''
//     }
// }
// function delAll(){
//     getUl.innerHTML=''
// }
// function dele(e){
//     e.parentNode.remove()
// }
// function updt(a){
//     var abc=a.parentNode.firstChild.textContent
//     var rep=prompt('Enter updated value',a.parentNode.firstChild.textContent)
//     if(rep==''||rep==null){
//         a.parentNode.firstChild.textContent=abc
//     }
//     else{
//         a.parentNode.firstChild.textContent=rep
//     }
// }
var getUl=document.getElementById('book')
function add(){
    var getInp=document.getElementById('inp')
    if(getInp.value==''){
        alert('Enter valid value')
    }
    else{
    getUl.innerHTML+=`<li>${getInp.value} <button onclick="dele(this)">Delete</button> <button onclick="updt(this)">Update</button></li>`
    }
    getInp.value=''
}
function delAll(){
    getUl.innerHTML=''
}
function dele(e){
    e.parentNode.remove()
}
function updt(a){
    var abc=a.parentNode.firstChild.textContent
    var rep=prompt('Enter updated value',a.parentNode.firstChild.textContent)
    if(rep==''||rep==null){
        a.parentNode.firstChild.textContent=abc
    }
    else{
        a.parentNode.firstChild.textContent=rep
    }
}