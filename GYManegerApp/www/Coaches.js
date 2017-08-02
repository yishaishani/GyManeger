function getCoachesInfo() {

    var UserName = document.getElementById("UserName").value;

    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = this.response;
            if (obj.map(function (a) { return a.Sunday })=="true")
                document.getElementById("day1").innerText = 'V';
            if (obj.map(function (a) { return a.Monday }) == "true")
                document.getElementById("day2").innerText = 'V';
            if (obj.map(function (a) { return a.Tuesday }) == "true")
                document.getElementById("day3").innerText = 'V';
            if (obj.map(function (a) { return a.Wednesday }) == "true")
                document.getElementById("day4").innerText = 'V';
            if (obj.map(function (a) { return a.Thursday }) == "true")
                document.getElementById("day5").innerText = 'V';
            if (obj.map(function (a) { return a.Friday }) == "true")
                document.getElementById("day6").innerText = 'V';
            if (obj.map(function (a) { return a.Saturday }) == "true")
                document.getElementById("day7").innerText = 'V';

        }
    };
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Coaches/" + UserName + "2" , true);
    xhttp.send();

}

function getCoachesInfoToEdit()
{
    var UserName = document.getElementById("UserName").value;
    var DayOfWork = "";
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = this.response;
            if (obj.map(function (a) { return a.Sunday }) == "true")
                DayOfWork += "a";
            if (obj.map(function (a) { return a.Monday }) == "true")
                DayOfWork += "b";
            if (obj.map(function (a) { return a.Tuesday }) == "true")
                DayOfWork += "c";
            if (obj.map(function (a) { return a.Wednesday }) == "true")
                DayOfWork += "d";
            if (obj.map(function (a) { return a.Thursday }) == "true")
                DayOfWork += "e";
            if (obj.map(function (a) { return a.Friday }) == "true")
                DayOfWork += "f";
            if (obj.map(function (a) { return a.Saturday }) == "true")
                DayOfWork += "g";

            document.getElementById("Edit-FirstName-Coaches").value = obj.map(function (a) { return a.FirstName });
            document.getElementById("Edit-LastName-Coaches").value = obj.map(function (a) { return a.LastName });
            document.getElementById("Edit-DayOfWork-Coaches").value = DayOfWork;
            document.getElementById("Edit-UserName-Coaches").value = UserName;

        }
    };
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Coaches/" + UserName + "2", true);
    xhttp.send();
}

function editCoachesInfo()
{
    var firstName = document.getElementById("Edit-FirstName-Coaches").value;
    var LastName = document.getElementById("Edit-LastName-Coaches").value;
    var DayOfWork = document.getElementById("Edit-DayOfWork-Coaches").value;
    var UserName = document.getElementById("Edit-UserName-Coaches").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/Coaches/update/" + firstName, true);
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.send("{\"LastName\":\"" + LastName + "\",\"DayOfWork\":\"" + DayOfWork + "\",\"UserName\":\"" + UserName + "2" + "\"}");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
            window.location = "#Main-Coaches"
        }
    }
}

function AddCoaches() {
    var firstName = document.getElementById("FirstName").value;
    var LastName = document.getElementById("LastName").value;
    var DayOfWork = document.getElementById("DayOfWork").value;
    var UserName = document.getElementById("UserName").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/Coaches/" + firstName, true);
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.send("{\"LastName\":\"" + LastName + "\",\"DayOfWork\":\"" + DayOfWork + "\",\"UserName\":\"" + UserName + "2" + "\"}");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
            window.location = "#Main-Manager"
            document.getElementById("FirstName").value = "";
            document.getElementById("LastName").value = "";
            document.getElementById("DayOfWork").value = "";
            document.getElementById("UserName").value = "";
            getCoachesInfo();
        }
    }

}

function delCoaches() {
    var UserName = document.getElementById("UserName-del").value;
    UserName += "2";
    var xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", "http://yishai-001-site1.atempurl.com/Coaches/" + UserName, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
            window.location = "#Main-Manager"
            document.getElementById("UserName-del").value = "";

        }
    };

}

function clearDivAllCoaches() {
    document.getElementById("getCoaches").innerText = "";
}

function getCoaches() {
    document.getElementById("getCoaches").innerText = "";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Coaches/all", true);
    xhttp.send();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = this.response;
            var array = [obj.map(function (a) { return a.FirstName + "\n" })];
            for (i = 0; i < array[0].length; i++) {
                document.getElementById("getCoaches").innerText += array[0][i];
            }
        }
    };

}