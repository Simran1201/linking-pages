var attempt = 5; // Variable to count number of attempts.
// Below function Executes on click of login button.
function log(){
var username = document.getElementById("email").value;
var password = document.getElementById("password").value;
if ( username == "prasadsimran@gmail.com" && password == "simran117"){
alert ("Login successfully");
window.location ="log_page.html" ; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("email").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}