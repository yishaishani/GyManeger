
function SetUsername() {
    var username = document.getElementById(username);
    var password = document.getElementById(password);
 
    

    $.ajax({
        url: '"http://y0547387610-001-site1.ctempurl.com/Members/" + username + "/" + password',
    });

    //function UserAction() {
    //    var xhttp = new XMLHttpRequest();
    //    xhttp.open("POST", "y0547387610-001-site1.ctempurl.com/Members/" + username, false);
    //    xhttp.setRequestHeader("Content-type", "application/json");
    //    xhttp.send(password);
    //    var response = JSON.parse(xhttp.responseText);
    //}
}