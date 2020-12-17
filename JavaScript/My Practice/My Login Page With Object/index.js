var curentuser = JSON.parse(localStorage.getItem("curentuser"));
if ((curentuser) && (window.location.href === "file:///F:/Mobile%20App%20and%20Web/JavaScript/My%20Practice/My%20Login%20Page%20With%20Object/home.html")) {
    document.getElementById("name").innerHTML = curentuser.name;
    document.getElementById("email").innerHTML = curentuser.email;
    document.getElementById("password").innerHTML = curentuser.password;
    document.getElementById("gender").innerHTML = curentuser.gender;
}



var arr = [];
var IsFound = false;
function signsup() {
    var user = {
        sname: document.getElementById("sname").value,
        email: document.getElementById("semail").value,
        password: document.getElementById("spassword").value,
        sgender: document.getElementById("gender").value,
    }
    let getuser = localStorage.getItem("arr");
    if (getuser) {
        arr = JSON.parse(getuser);
    }
    else {
        arr = []
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i].email === user.email) {
            IsFound = true;
            break;
        }
    }
    if (IsFound) {
        alert("This Email is already Exits Please Enter any Other email:");

    }
    else {
        arr.push({
            name: user.sname,
            email: user.email,
            password: user.password,
            gender: user.sgender,
        });

    }

    localStorage.setItem("arr", JSON.stringify(arr));

    return false;


}




function logins() {
    var userdataget = JSON.parse(localStorage.getItem("arr"));
    let lemail = document.getElementById("your_email").value;
    let lpassword = document.getElementById("your_password").value;

    for (i = 0; i < userdataget.length; i++) {
        if ((userdataget[i].email === lemail) && (userdataget[i].password === lpassword)) {

            localStorage.setItem("curentuser", JSON.stringify(userdataget[i]));

            window.location.href = "home.html";
            break;
        }
        else {
            alert("Invalid");
        }
    }

    return false;


}
