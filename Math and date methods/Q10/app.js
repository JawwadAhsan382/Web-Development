var think=Math.ceil(Math.random()*10)
var guess=+prompt('Enter a number between 1 & 10 to guess')
if(think==guess){
    document.write('You guessed right!')
}
else{
    document.write('Try again')
}