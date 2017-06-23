$(document.getElementsById('#openingHours')).readyState(function(){
        getOpening();
    });

function getOpening() {
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.response);
            var array = [obj.map(function (a) { return a.DAY + "\n" })];
            var array1 = [obj.map(function (a) { return a.HOURS + "\n" })];
            for (i = 0; i < array[0].length; i++) {
                document.getElementById("dayHours").innerText += array[0][i];
                document.getElementById("openingHours").innerText += array1[0][i];
            }
        }
    };

    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/OpeningHours/all", true);

    xhttp.send();
}


function getOpeningHours() {

    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.response);
            var array = [obj.map(function (a) { return a.HOURS + "\n" })];
            document.getElementById("Edit-sunday").value = array[0][0];
            document.getElementById("Edit-monday").value = array[0][1];
            document.getElementById("Edit-tuesday").value = array[0][2];
            document.getElementById("Edit-wednesday").value = array[0][3];
            document.getElementById("Edit-thursday").value = array[0][4];
            document.getElementById("Edit-friday").value = array[0][5];
            document.getElementById("Edit-saturday").value = array[0][6];
           
        }
    };

    xhttp.open("GET", "http://localhost:56406/OpeningHours/all", true);

    xhttp.send();


}

function updatehours() {
    var sunday = document.getElementById("Edit-sunday").value;
    var monday = document.getElementById("Edit-monday").value;
    var tuesday = document.getElementById("Edit-tuesday").value;
    var wednesday = document.getElementById("Edit-wednesday").value;
    var thursday = document.getElementById("Edit-thursday").value;
    var friday = document.getElementById("Edit-friday").value;
    var saturday = document.getElementById("Edit-saturday").value;

    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://localhost:56406/OpeningHours/update", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    var str = JSON.stringify({ sunday, monday, tuesday, wednesday, thursday, friday, saturday });
    xhttp.send(str);
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response)
        }
    }
}