
// let arr = [];
let email = [];
let pass = [];
function DataStore() {
    let name = document.getElementById("name").value;
    // localStorage.setItem("name", name);
    email.push(document.getElementById("email").value);
    pass.push(document.getElementById("password").value);
    // let male = document.getElementById("male").checked;

    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("Passoerd", JSON.stringify(pass));

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    // let female = document.getElementById("female").checked;
    // if (female) {
    //     arr.push("Name :" + name, "Email :" + email, "Password :" + pass, "female :" + female);
    // }
    // else if (male) {
    //     arr.push("Name :" + name, "Email :" + email, "Password :" + pass, "male :" + male);
    // }

    //window.location.href = "login.html";
    console.log(email);
    console.log(pass)
    return false;
}


// login 

// document.getElementById("result").innerHTML = localStorage.getItem("name");



function login() {
    const Username = document.getElementById("emails").value;
    const Password = document.getElementById("passwords").value;

    let emails = JSON.parse(localStorage.getItem("email"));
    let passwords = JSON.parse(localStorage.getItem("Passoerd"));
    let isFound = false;

    console.log(emails);
    console.log(passwords);

    
    for (let i = 0; i < emails.length; i++) {
        if (Username === emails[i]) {
            isFound = i;
            break;
        }
    }
    if (isFound === false) {
        alert("user not found")
    } else if (passwords[isFound] === Password) {

        alert("login success");
        window.location.href = "./check.html"
       
    } 
    else {
        alert("Error Password or Username")
    }


    // if (emails === Username && passwords === Password) {
    //     console.log("WelCome");
    // }
    // else {
    //     console.log("Invalid");
    // }
    
    return false;
    
}
