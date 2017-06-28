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
        xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Trainers/" + UserName, true);
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
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Trainers/" + UserName, true);
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
    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/Trainers/" + UserName + "/" + firstname + "/" + lastname + "/" + gender + "/" + phonenumber, true);

    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ email }));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
        }
    }

    xhttp.send();

}

function addTrainers() {
    var firstname = document.getElementById("add-FirstName").value;
    var LastName = document.getElementById("add-LastName").value;
    var Gender = document.getElementById("add-Gender").value;
    var PhoneNumber = document.getElementById("add-PhoneNumber").value;
    var Email = document.getElementById("add-Email").value;
    var UserName = document.getElementById("add-UserName").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/Trainers/add/"  + firstname , true);

    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ LastName, Gender,  PhoneNumber , Email , UserName}));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
            window.location = "#Main-Maneger"
            document.getElementById("add-FirstName").value = "";
            document.getElementById("add-LastName").value = "";
            document.getElementById("add-Gender").value = "";
            document.getElementById("add-PhoneNumber").value = "";
            document.getElementById("add-Email").value = "";
            document.getElementById("add-UserName").value = "";
            getTrainersInfo();
        }
    }

    xhttp.send();
}

function delTrainers() {
    
    var UserName = document.getElementById("UserName-Trainers-del").value;

        var xhttp = new XMLHttpRequest();

        xhttp.open("DELETE", "http://yishai-001-site1.atempurl.com/Trainers/" + UserName, true);
        xhttp.send();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                alert(this.response);
                window.location = "#Main-Maneger"
                document.getElementById("UserName-Trainers-del").value = "";
            }
        };

    
}

function clearDivAllTrainers() {
    document.getElementById("getTrainers").innerText = "";
}