var flagManeger = 0;
function getManegerInfo() {
    if (!flagManeger) {
        var UserName = document.getElementById("add-Maneger-UserName").value;

        var xhttp = new XMLHttpRequest();
        xhttp.responseType = "json";
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var obj = $.parseJSON(this.response)
                document.getElementById("FirstName-Maneger").innerText += obj.map(function (a) { return "  " + a.FirstName });
                document.getElementById("LastName-Maneger").innerText += obj.map(function (a) { return "  " + a.LastName });
                document.getElementById("Phone-Numbers-Maneger").innerText += obj.map(function (a) { return "  " + a.PhoneNumber });
                document.getElementById("Email-Maneger").innerText += obj.map(function (a) { return "  " + a.Email });
                document.getElementById("UserName-Maneger").innerText += obj.map(function (a) { return "  " + a.UserName });
                flagManeger = 1;
            }
        };
        xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Maneger/" + UserName, true);
        xhttp.send();
    }
}
function getManegerInfoToEdit() {
    var UserName = document.getElementById("UserName").value;

    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = $.parseJSON(this.response)
            document.getElementById("Edit-Maneger-FirstName").value = obj.map(function (a) { return a.FirstName });
            document.getElementById("Edit-Maneger-LastName").value = obj.map(function (a) { return a.LastName });
            document.getElementById("Edit-Maneger-PhoneNumber").value = obj.map(function (a) { return a.PhoneNumber });
            document.getElementById("Edit-Maneger-Email").value = obj.map(function (a) { return a.Email });
            document.getElementById("Edit-Maneger-UserName").value = obj.map(function (a) { return a.UserName });
        }
    };
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Maneger/" + UserName, true);
    xhttp.send();
}

function editManegerInfo() {
    var UserName = document.getElementById("UserName").value;
    var firstname = document.getElementById("Edit-Maneger-FirstName").value;
    var lastname = document.getElementById("Edit-Maneger-LastName").value;
    var phonenumber = document.getElementById("Edit-Maneger-PhoneNumber").value;
    var email = document.getElementById("Edit-Maneger-Email").value;
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/Maneger/" + UserName + "/" + firstname + "/" + lastname + "/" + phonenumber, true);

    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ email }));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
        }
    }



}

function addManeger() {
    var firstname = document.getElementById("add-Maneger-FirstName").value;
    var LastName = document.getElementById("add-Maneger-LastName").value;
    var PhoneNumber = document.getElementById("add-Maneger-PhoneNumber").value;
    var Email = document.getElementById("add-Maneger-Email").value;
    var UserName = document.getElementById("add-Maneger-UserName").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/Maneger/add/" + firstname, true);

    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ LastName, PhoneNumber, Email, UserName }));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
            window.location = "#Main-Maneger"
            document.getElementById("add-Maneger-FirstName").value = "";
            document.getElementById("add-Maneger-LastName").value = "";
            document.getElementById("add-Maneger-PhoneNumber").value = "";
            document.getElementById("add-Maneger-Email").value = "";
            getManegerInfo();
        }
    }

    xhttp.send();
}

function delManeger() {

    var UserName = document.getElementById("UserName-Maneger-del").value;

    var xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", "http://yishai-001-site1.atempurl.com/Maneger/" + UserName, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
            window.location = "#Main-Maneger"
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