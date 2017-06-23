
function getTrainersInfo() {

    var username = document.getElementById("username").value;

    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = $.parseJSON(this.response)
            document.getElementById("FirstName-members").innerText += obj.map(function (a) { return  "  " + a.FirstName  });
            document.getElementById("LastName-members").innerText += obj.map(function (a) { return "  " + a.LastName });
            document.getElementById("Gender-members").innerText += obj.map(function (a) { return "  " + a.Gender });
            document.getElementById("Phone-Numbers-members").innerText += obj.map(function (a) { return "  " + a.PhoneNumber });
            document.getElementById("Email-members").innerText += obj.map(function (a) { return "  " + a.Email });
        }
    };
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Trainers/" + username, true);
    xhttp.send();

}
function getInfoToEdit() {
    var username = document.getElementById("username").value;

    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = $.parseJSON(this.response)
            document.getElementById("Edit-FirstName").value = obj.map(function (a) { return a.FirstName });
            document.getElementById("Edit-LastName").value = obj.map(function (a) { return a.LastName });
            document.getElementById("Edit-Gender").value = obj.map(function (a) { return a.Gender });
            document.getElementById("Edit-PhoneNumber").value = obj.map(function (a) { return a.PhoneNumber });
            document.getElementById("Edit-Email").value = obj.map(function (a) { return a.Email });
        }
    };
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Trainers/" + username, true);
    xhttp.send();
}

function editInfo() {
    var username = document.getElementById("username").value;
    var firstname = document.getElementById("Edit-FirstName").value;
    var lastname = document.getElementById("Edit-LastName").value;
    var gender = document.getElementById("Edit-Gender").value;
    var phonenumber = document.getElementById("Edit-PhoneNumber").value;
    var email = document.getElementById("Edit-Email").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/Trainers/" + username + "/" + firstname + "/" + lastname + "/" + gender + "/" + phonenumber, true);

    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ email }));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
        }
    }

    xhttp.send();

}