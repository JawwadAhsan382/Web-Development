var userPass=prompt('Enter password')
document.write(`Entered password: ${userPass} <br>`)
var flag1=false
var flag2=false
if(userPass.length>=6){
    if(userPass[0]=='0'||userPass[0]=='1'||userPass[0]=='2'||userPass[0]=='3'||userPass[0]=='4'||userPass[0]=='5'||userPass[0]=='6'||userPass[0]=='7'||userPass[0]=='8'||userPass[0]=='9'){
        alert('Password can not contain number at 1st digit')
    }
    else{
        for(i=0;i<userPass.length;i++){
            if(userPass[i]=='a'||userPass[i]=='b'||userPass[i]=='c'||userPass[i]=='d'||userPass[i]=='e'||userPass[i]=='f'||userPass[i]=='g'||userPass[i]=='h'||userPass[i]=='i'||userPass[i]=='j'||userPass[i]=='k'||userPass[i]=='l'||userPass[i]=='m'||userPass[i]=='n'||userPass[i]=='o'||userPass[i]=='p'||userPass[i]=='q'||userPass[i]=='r'||userPass[i]=='s'||userPass[i]=='s'||userPass[i]=='t'||userPass[i]=='u'||userPass[i]=='v'||userPass[i]=='w'||userPass[i]=='x'||userPass[i]=='y'||userPass[i]=='z'||userPass[i]=='A'||userPass[i]=='B'||userPass[i]=='C'||userPass[i]=='D'||userPass[i]=='E'||userPass[i]=='F'||userPass[i]=='G'||userPass[i]=='H'||userPass[i]=='I'||userPass[i]=='J'||userPass[i]=='K'||userPass[i]=='L'||userPass[i]=='M'||userPass[i]=='N'||userPass[i]=='O'||userPass[i]=='P'||userPass[i]=='Q'||userPass[i]=='R'||userPass[i]=='S'||userPass[i]=='T'||userPass[i]=='U'||userPass[i]=='V'||userPass[i]=='W'||userPass[i]=='X'||userPass[i]=='Y'||userPass[i]=='Z'){
            flag1=true
            }
            if(userPass[i]=='0'||userPass[i]=='1'||userPass[i]=='2'||userPass[i]=='3'||userPass[i]=='4'||userPass[i]=='5'||userPass[i]=='6'||userPass[i]=='7'||userPass[i]=='8'||userPass[i]=='9'){
                flag2=true
            }
            if(flag1==true && flag2==true){
                break
            }
        }
        if(flag1==true && flag2==true){
            alert('Succesful!')
        }
        else{
            alert('Password must contain alphabets and numbers')
        }
    }
}
else{
    alert('Password must be of atleast 6 digits')
}