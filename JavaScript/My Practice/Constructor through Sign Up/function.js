


function Std1(firstName, midName, lastName, rollNum, email, password, phone, nationality, gender) {
    if (firstName && midName && lastName && rollNum && email && password && phone && nationality && gender) {
        this.firstName = firstName;
        this.midName = midName;
        this.lastName = lastName;
        this.rollNum = rollNum;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.nationality = nationality;
        this.gender = gender;
        this.mask = [];
        this.signdate = new Date().getTime();
    }
    else {
        alert(`please provide firstName
        midName, lastName, rollNum,
        email, password, phone, 
        nationality, gender
        `);
        return;
    }
};
// prototype function jo har student kae liya same rahay ga
Std1.prototype.getFullname = function () {
    return `${this.firstName} ${this.midName}  ${this.lastName}`
}

Std1.prototype.percentage = function () {
    if (this.mask === 0) {
        return 0;
    }
    let calculatePercentage = "dfsd" // TODO: write code to calc percentage here
    return calculatePercentage;

}
Std1.prototype.getAverage = function () {
    if (this.mask.length === 0) {
        return 0;
    }
    let calculateAvg = "dfsd" // TODO: write code to calc Avg here
    return calculateAvg
}
// Std1.prototype.addMarks = function (newmarks) {
//     if (!newMark) {
//         alert("Please Proivde Mask");
//         return;
//     }
//     this.mask.push(newmarks);
//     return this.mark
// }
// Std1.prototype.getMarks = function () {
//     return this.mark
// }