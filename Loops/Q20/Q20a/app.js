var num=+prompt('Enter number of stars')
for(i=1;i<=(num-1);i++){
  for(j=1;j<=num;j++){
    document.write('*')
  }
  document.write('<br>')
}