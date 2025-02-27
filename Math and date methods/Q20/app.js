var date=new Date()
var year15=new Date('1 jan,2015').getTime()
var total=Math.round((date.getTime()-year15)/1000)
alert(`On reference date ${date}, ${total} seconds had passed since begining of 2015`)