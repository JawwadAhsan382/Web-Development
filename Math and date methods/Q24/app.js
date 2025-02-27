var cusName=prompt('Enter customer name')
var units=+prompt('Enter number of units')
var charge=+prompt('Enter charge per unit')
var netAmount=units*charge
var latePayment=netAmount/100*10
var grossAmount=netAmount+latePayment
var date=new Date().getMonth()
var arr=['January','February','March','April','May','June','July','August','September','October','November','December']
document.write(`<h1>K-Electric Bill</h1> Customer Name: ${cusName} <br> Month: ${arr[date]} <br> Number of Units: ${units} <br> Charges Per Unit: ${charge.toFixed(2)}
<br><br> Net Amount Payable within Due Date: ${netAmount.toFixed(2)} <br> Late Payment Surcharge: ${latePayment.toFixed(2)} <br> Gross Amount Payable within Due Date: ${grossAmount.toFixed(2)} <br>`)