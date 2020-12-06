
let arr = [];
let email = "";
let pass = "";
function DataStore() {
    let name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    email = document.getElementById("email").value;
    localStorage.setItem("email", email);
    pass = document.getElementById("password").value;
    localStorage.setItem("Passoerd", pass);
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    if (female) {
        arr.push("Name :" + name, "Email :" + email, "Password :" + pass, "female :" + female);
    }
    else if (male) {
        arr.push("Name :" + name, "Email :" + email, "Password :" + pass, "male :" + male);
    }

    console.log(arr);
}


