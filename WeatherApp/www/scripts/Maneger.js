var flagManeger = 0;
function getManegerInfo() {
    if (!flagManeger) {
        var username = document.getElementById("username").value;

        var xhttp = new XMLHttpRequest();
        xhttp.responseType = "json";
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var obj = $.parseJSON(this.response)
                document.getElementById("FirstName-maneger").innerText += obj.map(function (a) { return "  " + a.FirstName });
                document.getElementById("LastName-maneger").innerText += obj.map(function (a) { return "  " + a.LastName });
                document.getElementById("Phone-Numbers-maneger").innerText += obj.map(function (a) { return "  " + a.PhoneNumber });
                document.getElementById("Email-maneger").innerText += obj.map(function (a) { return "  " + a.Email });
                document.getElementById("UserName-maneger").innerText += obj.map(function (a) { return "  " + a.UserName });
                flagManeger = 1;
            }
        };
        xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Maneger/" + username, true);
        xhttp.send();
    }
}
function getManegerInfoToEdit() {
    var username = document.getElementById("username").value;

    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = $.parseJSON(this.response)
            document.getElementById("Edit-maneger-FirstName").value = obj.map(function (a) { return a.FirstName });
            document.getElementById("Edit-maneger-LastName").value = obj.map(function (a) { return a.LastName });
            document.getElementById("Edit-maneger-PhoneNumber").value = obj.map(function (a) { return a.PhoneNumber });
            document.getElementById("Edit-maneger-Email").value = obj.map(function (a) { return a.Email });
            document.getElementById("Edit-maneger-UserName").value = obj.map(function (a) { return a.UserName });
        }
    };
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Maneger/" + username, true);
    xhttp.send();
}

function editManegerInfo() {
    var username = document.getElementById("username").value;
    var firstname = document.getElementById("Edit-maneger-FirstName").value;
    var lastname = document.getElementById("Edit-maneger-LastName").value;
    var phonenumber = document.getElementById("Edit-maneger-PhoneNumber").value;
    var email = document.getElementById("Edit-maneger-Email").value;
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/Maneger/" + username + "/" + firstname + "/" + lastname + "/" + phonenumber, true);

    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ email }));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
        }
    }



}

function addManeger() {
    var firstname = document.getElementById("add-maneger-FirstName").value;
    var LastName = document.getElementById("add-maneger-LastName").value;
    var PhoneNumber = document.getElementById("add-maneger-PhoneNumber").value;
    var Email = document.getElementById("add-maneger-Email").value;
    var UserName = document.getElementById("add-maneger-username").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/Maneger/add/" + firstname, true);

    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ LastName, PhoneNumber, Email, UserName }));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
            window.location = "#main-maneger"
            document.getElementById("add-maneger-FirstName").value = "";
            document.getElementById("add-maneger-LastName").value = "";
            document.getElementById("add-maneger-PhoneNumber").value = "";
            document.getElementById("add-maneger-Email").value = "";
            document.getElementById("add-maneger-username").value = "";
        }
    }

    xhttp.send();
}

function delManeger() {

    var userName = document.getElementById("UserName-maneger-del").value;

    var xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", "http://yishai-001-site1.atempurl.com/Maneger/" + userName, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
            window.location = "#main-maneger"
            document.getElementById("UserName-Maneger-del").value = "";
        }
    };


}

function getAllManeger() {
    document.getElementById("getManeger").innerText = "";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Maneger/all", true);

    xhttp.send();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.response);
            var array = [obj.map(function (a) { return a.FirstName + "\n" })];
            for (i = 0; i < array[0].length; i++) {
                document.getElementById("getManeger").innerText += array[0][i];
            }
        }
    }
};



function clearDivAllManeger() {
    document.getElementById("getManeger").innerText = "";
}