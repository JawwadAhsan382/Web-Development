var tab=+prompt('Enter Table Number')
var len=+prompt('Enter Table Length')
for(var i=1;i<=len;i++){
    document.write(`${tab}x${i}=${tab*i} <br>`)
}