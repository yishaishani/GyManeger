var flagManager = 0;
function getManagerInfo() {
    if (!flagManager) {
        var UserName = document.getElementById("UserName").value;
        UserName += "3";
        var xhttp = new XMLHttpRequest();
        xhttp.responseType = "json";
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var obj = $.parseJSON(this.response)
                document.getElementById("FirstName-Manager").innerText += obj[0].FirstName;
                document.getElementById("LastName-Manager").innerText += obj[0].LastName;
                document.getElementById("Phone-Numbers-Manager").innerText += obj[0].PhoneNumber;
                document.getElementById("Email-Manager").innerText += obj[0].Email;
                document.getElementById("UserName-Manager").innerText += obj[0].UserName;
                flagManager = 1;
            }
        };
        xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Manager/" + UserName, true);
        xhttp.send();
    }
}

function getManagerInfoToEdit() {
    var UserName = document.getElementById("UserName").value;
    UserName += "3";
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = $.parseJSON(this.response)
            document.getElementById("Edit-Manager-FirstName").value = obj[0].FirstName;
            document.getElementById("Edit-Manager-LastName").value = obj[0].LastName;
            document.getElementById("Edit-Manager-PhoneNumber").value = obj[0].PhoneNumber;
            document.getElementById("Edit-Manager-Email").value = obj[0].Email;
            document.getElementById("Edit-Manager-UserName").value = obj[0].UserName;
        }
    };
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Manager/" + UserName, true);
    xhttp.send();
}

function editManagerInfo() {
    var UserName = document.getElementById("UserName").value;
    var firstname = document.getElementById("Edit-Manager-FirstName").value;
    var lastname = document.getElementById("Edit-Manager-LastName").value;
    var phonenumber = document.getElementById("Edit-Manager-PhoneNumber").value;
    var email = document.getElementById("Edit-Manager-Email").value;
    UserName += "3";
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/Manager/" + UserName + "/" + firstname + "/" + lastname + "/" + phonenumber, true);

    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("{\"email\":\"" + email + "\"}");

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
        }
    }



}

function AddManager() {
    var firstname = document.getElementById("Add-Manager-FirstName").value;
    var LastName = document.getElementById("Add-Manager-LastName").value;
    var PhoneNumber = document.getElementById("Add-Manager-PhoneNumber").value;
    var Email = document.getElementById("Add-Manager-Email").value;
    var UserName = document.getElementById("Add-Manager-UserName").value;
    UserName += "3";
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/Manager/Add/" + firstname, true);

    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.send("{\"LastName\":\"" + LastName + "\",\"PhoneNumber\":\"" + PhoneNumber + "\",\"Email\":\"" + Email + "\",\"UserName\":\"" + UserName + "\"}");

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
            window.location = "#Main-Manager"
            document.getElementById("Add-Manager-FirstName").value = "";
            document.getElementById("Add-Manager-LastName").value = "";
            document.getElementById("Add-Manager-PhoneNumber").value = "";
            document.getElementById("Add-Manager-Email").value = "";
            getManagerInfo();
        }
    }

    xhttp.send();
}

function delManager() {

    var UserName = document.getElementById("UserName-Manager-del").value;
    UserName += "3";
    var xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", "http://yishai-001-site1.atempurl.com/Manager/" + UserName, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
            window.location = "#Main-Manager"
            document.getElementById("UserName-Manager-del").value = "";
        }
    };


}

function getAllManager() {
    document.getElementById("getManager").innerText = "";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Manager/all", true);

    xhttp.send();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.response);
            var array = [obj.map(function (a) { return a.FirstName + "\n" })];
            for (i = 0; i < array[0].length; i++) {
                document.getElementById("getManager").innerText += array[0][i];
            }
        }
    }
};

function clearDivAllManager() {
    document.getElementById("getManager").innerText = "";
}