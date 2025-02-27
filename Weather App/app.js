var weatherData=[
    {
        city:'Karachi',
        temperature:32,
        condition:'Sunny',
        humidity:60,
        windSpeed:10
    },
    {
        city:'Lahore',
        temperature:28,
        condition:'Cloudy',
        humidity:70,
        windSpeed:8
    },
    {
        city:'Islamabad',
        temperature:25,
        condition:'Rainy',
        humidity:80,
        windSpeed:5
    },
    {
        city:'Peshawar',
        temperature:35,
        condition:'Sunny',
        humidity:55,
        windSpeed:7
    },
    {
        city:'Quetta',
        temperature:20,
        condition:'Cloudy',
        humidity:65,
        windSpeed:11
    }
]
var getBtn=document.querySelector('.btn')
var getNav=document.querySelector('.nav')
var getAbc=document.querySelectorAll('.abc')
function theme(){
getBtn.style.backgroundColor='white'
getBtn.style.color='black'
getNav.style.backgroundColor='white'
for(i=0;i<getAbc.length;i++){
getAbc[i].style.color='black'
}
}