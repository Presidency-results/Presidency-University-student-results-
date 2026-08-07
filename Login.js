function login(){

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;


if(username=="20241CSG0056" && password=="18022007"){

window.location="dashboard.html";

}

else{

document.getElementById("error").innerHTML=
"Invalid Username or Password";

}

}
