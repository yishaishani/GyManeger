
function SetUsername() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
 
   
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://y0547387610-001-site1.ctempurl.com/Members/" + username + "/" + password, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
            window.location.href = "#main-members"
        }
    }
}


function getMembers() {
    var xhttp = new XMLHttpRequest();
    

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = [];
            data = this.responseText
            var size = data.length;

            document.getElementById("getMembers").innerHTML += 'name:';
            for (i = 0; i < size; i++) {
                if (data[i] == '*')
                    document.getElementById("getMembers").innerHTML += '\n' + 'name:';
                else
                    document.getElementById("getMembers").innerHTML += data[i];
            }
        }
    };

    xhttp.open("GET", "http://y0547387610-001-site1.ctempurl.com/Members/all", true);

    xhttp.send();
}