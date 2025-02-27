var flag=false
do{
    document.getElementById('ifr2').style.display='none'
        document.getElementById('ifr3').style.display='none'
        document.getElementById('ifr1').style.display='none'
        document.getElementById('im1').style.display='none'
}
while(flag==true)
function col(x){
    document.getElementById('scr').style.backgroundColor=x
    document.getElementById('im1').style.display='none'
    document.getElementById('ifr1').style.display='none'
        document.getElementById('ifr2').style.display='none'
        document.getElementById('ifr3').style.display='none'
}

function im(y){
    document.getElementById('scr').style.backgroundColor='transparent'
    document.getElementById('ifr1').style.display='none'
        document.getElementById('ifr2').style.display='none'
        document.getElementById('ifr3').style.display='none'
    document.getElementById('im1').style.display='inline'
    document.getElementById('im1').src=y
}
function xyz(a){
        document.getElementById('scr').style.backgroundColor='transparent'
    document.getElementById('im1').style.display='none'
    if(a==1){
        document.getElementById('ifr1').style.display='inline'
        document.getElementById('ifr2').style.display='none'
        document.getElementById('ifr3').style.display='none'
    }
    else if(a==2){
        document.getElementById('ifr2').style.display='inline'
        document.getElementById('ifr1').style.display='none'
        document.getElementById('ifr3').style.display='none'
    }
    else{
        document.getElementById('ifr3').style.display='inline'
        document.getElementById('ifr2').style.display='none'
        document.getElementById('ifr1').style.display='none'
    }
}