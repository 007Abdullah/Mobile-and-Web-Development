


var arr = [];

function signup() {
    var firstName = document.getElementById("firstName").value;
    var midName = document.getElementById("midName").value;
    var lastName = document.getElementById("lastName").value;
    var rollNum = document.getElementById("rollNum").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var nationality = document.getElementById("nationality").value;
    var gender = document.getElementById("gender").value;
    debugger;
    var isFound = false;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].email === email) {
            isFound = true;
            break;
        }
    }
    if (isFound) {
        alert("Email Already Exit");
        return;
    }

    var newStudent = new Std1(
        firstName, midName, lastName,
        rollNum, email, password,
        phone, nationality, gender
    )

    arr.push(newStudent)


    var dashboard = document.getElementById("dashboard");

    var newDiv = document.createElement("div");
    newDiv.innerHTML = `${newStudent.getFullname()} have avergage ${newStudent.getAverage()} `

    dashboard.appendChild(newDiv)



    return false;
}