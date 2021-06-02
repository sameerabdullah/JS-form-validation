/** @format */

function validateFormname() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return true;
    }
}

function validateFormphone() {
    var n = document.forms["myForm"]["pnum"].value;
    var pnumb = /^?([0-9]{12})\)$/;
    if (pnumb !== n) {
        alert("Invalid Phone Number");
        return true;
    }
}

function validateFormcnic() {
    var nice = document.forms["myForm"]["CNIC"].value;
    var phoneno = /^?([0-9]{5})\)?[-]?([0-9]{7})[-]?([0-9]{1})$/;
    if (phoneno !== nice) {
        alert("Invalid CNIC");
        return true;
    }
}

function validateFormpass() {
    var inputtxt = document.forms["myForm"]["password"].value;
    var passw = /^?(=.*\d)?(=.*[a-z]{2})?(=.*[A-Z]{2})?(=.*[0-9]{2})?(=.*[!@#$%^&*]{2})$/;
    if (inputtxt !== passw) {
        alert("Invalid Password");
        return true;
    }
}