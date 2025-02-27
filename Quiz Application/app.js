var questions = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
]
var getMin=document.getElementById('min')
var getSec=document.getElementById('sec')
var timer=setInterval(function(){
    if(parseInt(getSec.innerText)>=10 && parseInt(getSec.innerText)<=59){
        if(parseInt(getSec.innerText)==10){
            getSec.innerText='0'+(parseInt(getSec.innerText)-1)
        }
        else{
            getSec.innerText=parseInt(getSec.innerText)-1
        }
    }
    else if(parseInt(getSec.innerText[0])==0 && parseInt(getSec.innerText[1])>0){
        getSec.innerText='0'+(parseInt(getSec.innerText[1])-1)
    }
    else if(parseInt(getSec.innerText[0])==0 && parseInt(getSec.innerText[1])==0){
        if(parseInt(getMin.innerText)>=10 && parseInt(getMin.innerText)<=59){
            getSec.innerText=59
            if(parseInt(getMin.innerText)==10){
                getMin.innerText='0'+(parseInt(getMin.innerText)-1)
            }
            else{
                getMin.innerText=parseInt(getMin.innerText)-1
            }
        }
        else if(parseInt(getMin.innerText[0])==0 && parseInt(getMin.innerText[1])>0){
            getSec.innerText=59
            getMin.innerText='0'+(parseInt(getMin.innerText[1])-1)
        }
        else if(parseInt(getMin.innerText[0])==0 && parseInt(getMin.innerText[1])==0){
            clearInterval(timer)
            timeOut()
        }
    }
},1000)
var getBody=document.querySelector('.body')
var getOpt1=document.querySelector('.opt1')
var getOpt2=document.querySelector('.opt2')
var getOpt3=document.querySelector('.opt3')
var getBtn=document.getElementById('btn')
getBtn.disabled=true
var n=0
var marks=0
var radios=document.getElementsByTagName('input')
var labels=document.getElementsByTagName('label')
var getOptBody=document.querySelector('.optionBody')
var getSuccess=document.getElementById('success')
var getFailure=document.getElementById('failure')
var getTimer=document.querySelector('.timer')
getBody.innerText=questions[n].question
getOpt1.innerText=questions[n].option1
getOpt2.innerText=questions[n].option2
getOpt3.innerText=questions[n].option3
function next(){
    getBtn.disabled=true
    for (i=0;i<radios.length;i++){
        if(radios[i].checked==true){
            if(labels[i].innerText==questions[n].correctOption){
                marks++
            }
            radios[i].checked=false
            break
        }
    }
        n++
if (n<questions.length){
    getBody.innerText=questions[n].question
getOpt1.innerText=questions[n].option1
getOpt2.innerText=questions[n].option2
getOpt3.innerText=questions[n].option3
}
else{
    clearInterval(timer)
    getTimer.style.display='none'
    if (marks*100/questions.length<50){
        getOptBody.innerHTML=`You are fail <br> <button class="btn btn-outline-success" onclick='location.reload()'>Try Again</button>`
        getFailure.style.display='inline'
    }
    else{
        getOptBody.innerHTML=`Congrats you are pass`
        getSuccess.style.display='inline'
    }
}   
}
function btnEn(){
    getBtn.disabled=false
}
function timeOut(){
    for (i=0;i<radios.length;i++){
        if(radios[i].checked==true){
            if(labels[i].innerText==questions[n].correctOption){
                marks++
            }
            radios[i].checked=false
            break
        }
    }
    getTimer.style.display='none'
    if (marks*100/questions.length<50){
        getOptBody.innerHTML=`You are fail <br> <button class="btn btn-outline-success" onclick='location.reload()'>Try Again</button>`
        getFailure.style.display='inline'
    }
    else{
        getOptBody.innerHTML=`Congrats you are pass`
        getSuccess.style.display='inline'
    }
}