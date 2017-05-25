
function SetUsername() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    $.ajax({
        url: "http://y0547387610-001-site1.ctempurl.com/Members/" + username + "/" + password
    });
  
}

function goHome() {

    window.location = "Coaches.html";
    
}

function setCoaches() {
    var firstName = document.getElementById("FirstName").value;
    var lestName = document.getElementById("LastName").value;
    var dayOfWork = document.getElementById("DayOfWork").value;

    $.ajax({
        url: "http://y0547387610-001-site1.ctempurl.com/Coaches/" + firstName + "/" + lestName + "/" + dayOfWork,

    });

}
