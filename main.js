
var validUsers = {
    "booo": "ahhhhh",
    "man of turtles": "turtle man",
    "john pork ": "Johhnyporky"
};

function UserLogin() {
    var username = document.getElementById("username").value;          
    var password = document.getElementById("password").value;
    var loginMessage = document.getElementById("loginMessage");
      if (username === "") {
        window.alert("Please enter a username!");
        return;
    }
       if (password === "") {
        window.alert("Please enter a password!");
        return;
    }
    

    if (username in validUsers) {
        if (validUsers[username] === password) {         window.alert("Login successful! Welcome, " + username + "!");
     document.getElementById("loginContainer").style.display = "none";        document.getElementById("productContainer").style.display = "block";
        } else {        window.alert("Incorrect password!");
        }
    } else {      window.alert("Username not found!");
    }
}

function ClearLogin() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("loginMessage").innerHTML = "";
}

function UserLogout() {
   
 document.getElementById("loginContainer").style.display = "block";
 document.getElementById("productContainer").style.display = "none";

      ClearLogin();
 document.getElementById("Categorys").value = "";
 document.getElementById("AdvetiseCategory").innerHTML = "Category:";
}