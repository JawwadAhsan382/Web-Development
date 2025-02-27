var user=prompt('Enter anything')
var updUser=user.slice(0,1).toUpperCase() + user.slice(1).toLowerCase()
document.write(`User Input: ${user} <br> Title Case: ${updUser}`)