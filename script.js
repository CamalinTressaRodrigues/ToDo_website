var username = document.getElementById("username");
var password = document.getElementById("password");

function validate() {

     if (username.value === "admin" && password.value === "12345") {
         alert("Successfull");
         return true;
    } else {
         alert("Invalid username or password.");
         return false;
    }
}
