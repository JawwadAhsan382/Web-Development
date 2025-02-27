var htmlHour=document.getElementById('hour')
var htmlMin=document.getElementById('min')
var htmlSec=document.getElementById('sec')
var htmlMilli=document.getElementById('milli')
var jsHour=0
var jsMin=0
var jsSec=0
var jsMilli=0
var invl
function start(){
    document.getElementById('srt').disabled=true
    document.getElementById('srt').style.opacity=0.5
    invl=setInterval(function(){
        jsMilli++
        htmlMilli.innerHTML=jsMilli
        if(jsMilli>=99){
            jsMilli=0
            jsSec++
        }
        htmlSec.innerHTML=jsSec
        if(jsSec>=59){
            jsSec=0
            jsMin++
        }
        htmlMin.innerHTML=jsMin
        if(jsMin>=59){
            jsMin=0
            jsHour++
        }
        htmlHour.innerHTML=jsHour
        },10)
}
function stop(){
    clearInterval(invl)
    document.getElementById('srt').disabled=false
    document.getElementById('srt').style.opacity=1
}
function reset(){
    clearInterval(invl)
    document.getElementById('srt').disabled=false
    document.getElementById('srt').style.opacity=1
    jsHour=0
    jsMin=0
    jsSec=0
    jsMilli=0
    htmlHour.innerHTML=jsHour
    htmlMin.innerHTML=jsMin
    htmlSec.innerHTML=jsSec
    htmlMilli.innerHTML=jsMilli
}