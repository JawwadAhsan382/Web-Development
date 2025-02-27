var getName=document.getElementById('username')
var getRadio=document.getElementsByClassName('userradio')
var getLabel=document.getElementsByClassName('userlabel')
var getAddress=document.getElementById('useraddress')
var getEducation=document.getElementsByClassName('usereducation')
var getProfession=document.getElementsByClassName('userprofession')
var getResContainer=document.querySelector('.res-container')
var getShow=document.querySelector('.show')
var getHide=document.querySelector('.hide')
var getDefaultSelection=document.getElementsByClassName('defaultselection')
getResContainer.style.display='none'
var arr=[]
var getPop=document.querySelector('.population')
if(localStorage.getItem('users')!=null){
    arr=JSON.parse(localStorage.getItem('users'))
    getPop.innerText=arr.length
    for(i=0;i<arr.length;i++){
        getResContainer.innerHTML+=`<div class='abc'>
    <h4>Name:${arr[i].name}</h4>
    <h4>Gender:${arr[i].gender}</h4>
    <h4>Address:${arr[i].address}</h4>
    <h4>Education:${arr[i].education}</h4>
    <h4>Profession:${arr[i].profession}</h4>
    <button value=${i} class='btn btn-primary' onclick='del(this)'>Delete</button>
    </div>`
    }
}
function hide(){
    getResContainer.style.display='none'
    getShow.disabled=false
    getHide.disabled=true   
}
function show(){
    getResContainer.style.display='flex'
    getShow.disabled=true
    getHide.disabled=false
}
function del(e){
    getResContainer.innerHTML=''
    arr.splice(Number(e.value),1)
    getPop.innerText=arr.length
    localStorage.setItem('users',JSON.stringify(arr))
    for(i=0;i<arr.length;i++){
        getResContainer.innerHTML+=`<div class='abc'>
    <h4>Name:${arr[i].name}</h4>
    <h4>Gender:${arr[i].gender}</h4>
    <h4>Address:${arr[i].address}</h4>
    <h4>Education:${arr[i].education}</h4>
    <h4>Profession:${arr[i].profession}</h4>
    <button value=${i} class='btn btn-primary' onclick='del(this)'>Delete</button>
    </div>`
    }
}
function add(){
    var t1=getName.value
    if(t1!=''){
        t1=t1[0].toUpperCase()+t1.slice(1).toLowerCase()
        t1=t1.split(' ').filter(val=>{return val!=''}).join(' ')
    }
    var t2=Array.from(getLabel).filter((val,ind)=>{
        return getRadio[ind].checked
    })
    var t3=getAddress.value.toUpperCase()
    var t4=Array.from(getEducation).filter(val=>{
        return val.selected
    })
    var t5=Array.from(getProfession).filter(val=>{
        return val.selected
    })
    var flag=false
    if(t1==''||t2.length==0||t3==''||t4.length==0||t5.length==0){
        alert('Enter valid data')
    }
    else{
        if(localStorage.getItem('users')!=null){
            arr=JSON.parse(localStorage.getItem('users'))
            var t6=arr.filter(val=>{
                return val.name==t1 && val.gender==t2[0].innerText && val.address==t3 && val.education==t4[0].innerText && val.profession==t5[0].innerText
            })
            if (t6.length){
                alert('Data exist')
            }
            else{
                flag=true
            } 
        }
        else{
            arr=[]
            flag=true
        }
        if(flag){
            var obj=new Con(t1,t2[0].innerText,t3,t4[0].innerText,t5[0].innerText)
            arr.push(obj)
            getResContainer.innerHTML+=`<div class='abc'>
    <h4>Name:${arr[arr.length-1].name}</h4>
    <h4>Gender:${arr[arr.length-1].gender}</h4>
    <h4>Address:${arr[arr.length-1].address}</h4>
    <h4>Education:${arr[arr.length-1].education}</h4>
    <h4>Profession:${arr[arr.length-1].profession}</h4>
    <button value=${arr.length-1} class='btn btn-primary' onclick='del(this)'>Delete</button>
    </div>`
            getPop.innerText=arr.length
            localStorage.setItem('users',JSON.stringify(arr))
            getAddress.value=''
            getName.value=''
            Array.from(getRadio).forEach((val)=>{val.checked=false})
            Array.from(getDefaultSelection).forEach((val)=>{val.selected=true})
        }
    }
}
function Con(a,b,c,d,e){
    this.name=a
    this.gender=b
    this.address=c
    this.education=d
    this.profession=e
}