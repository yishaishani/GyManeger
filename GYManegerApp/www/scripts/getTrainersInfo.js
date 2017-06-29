var flagTrainers = 0;
function getTrainersInfo() {
    if (!flagTrainers) {
        var UserName = document.getElementById("UserName").value;

        var xhttp = new XMLHttpRequest();
        xhttp.responseType = "json";
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var obj = $.parseJSON(this.response)
                document.getElementById("FirstName-Trainers").innerText += obj.map(function (a) { return "  " + a.FirstName });
                document.getElementById("LastName-Trainers").innerText += obj.map(function (a) { return "  " + a.LastName });
                document.getElementById("Gender-Trainers").innerText += obj.map(function (a) { return "  " + a.Gender });
                document.getElementById("Phone-Numbers-Trainers").innerText += obj.map(function (a) { return "  " + a.PhoneNumber });
                document.getElementById("Email-Trainers").innerText += obj.map(function (a) { return "  " + a.Email });
                flagTrainers = 1;
            }
        };
        xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Trainers/" + UserName + "1", true);
        xhttp.send();
    }
}
function getInfoToEdit() {
    var UserName = document.getElementById("UserName").value;

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
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Trainers/" + UserName + "1", true);
    xhttp.send();
}

function editInfo() {
    var UserName = document.getElementById("UserName").value;
    var firstname = document.getElementById("Edit-FirstName").value;
    var lastname = document.getElementById("Edit-LastName").value;
    var gender = document.getElementById("Edit-Gender").value;
    var phonenumber = document.getElementById("Edit-PhoneNumber").value;
    var email = document.getElementById("Edit-Email").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/Trainers/" + UserName + "1" + "/" + firstname + "/" + lastname + "/" + gender + "/" + phonenumber, true);

    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ email }));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
        }
    }

    xhttp.send();

}

function AddTrainers() {
    var firstname = document.getElementById("Add-FirstName").value;
    var LastName = document.getElementById("Add-LastName").value;
    var Gender = document.getElementById("Add-Gender").value;
    var PhoneNumber = document.getElementById("Add-PhoneNumber").value;
    var Email = document.getElementById("Add-Email").value;
    var UserName = document.getElementById("Add-UserName").value;
    UserName += "1";
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/Trainers/add/"  + firstname , true);

    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ LastName, Gender,  PhoneNumber , Email , UserName}));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
            window.location = "#Main-Manager"
            document.getElementById("Add-FirstName").value = "";
            document.getElementById("Add-LastName").value = "";
            document.getElementById("Add-Gender").value = "";
            document.getElementById("Add-PhoneNumber").value = "";
            document.getElementById("Add-Email").value = "";
            document.getElementById("Add-UserName").value = "";
            getTrainersInfo();
        }
    }

    xhttp.send();
}

function delTrainers() {
    
    var UserName = document.getElementById("UserName-Trainers-del").value;

        var xhttp = new XMLHttpRequest();

        xhttp.open("DELETE", "http://yishai-001-site1.atempurl.com/Trainers/" + UserName + "1", true);
        xhttp.send();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                alert(this.response);
                window.location = "#Main-Manager"
                document.getElementById("UserName-Trainers-del").value = "";
            }
        };

    
}

function clearDivAllTrainers() {
    document.getElementById("getTrainers").innerText = "";
}