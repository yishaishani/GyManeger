
function SetUsername() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var size = password.length;
    

    $.ajax({
        url: "http://y0547387610-001-site1.ctempurl.com/Members/" + username + "/" + password,
    });

    //function UserAction() {
    //    var xhttp = new XMLHttpRequest();
    //    xhttp.open("POST", "y0547387610-001-site1.ctempurl.com/Members/" + username, false);
    //    xhttp.setRequestHeader("Content-type", "application/json");
    //    xhttp.send(password);
    //    var response = JSON.parse(xhttp.responseText);
    //}
}