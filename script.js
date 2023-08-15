let email = document.getElementById("user_email");
let password = document.getElementById("user_password");
let login = document.getElementById("user_login");

login.addEventListener('click', function(){
    
    if(email.value === "user@email.com" && password.value === "password"){
        document.location = "dashboard.html"
    } else{
        alert("Email or Password is incorrect!");
    }
})