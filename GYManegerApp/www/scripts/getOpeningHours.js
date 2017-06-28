$(document.getElementsById('#openingHours')).readyState(function(){
        GetOpening();
    });
var FlagOpen = 0;
function GetOpening() {
    if (!FlagOpen)
        {
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
                FlagOpen = 1;
            }
        }
    
    };

    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/OpeningHours/all", true);

    xhttp.send();
}
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

    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/OpeningHours/all", true);

    xhttp.send();


}

function updatehours() {
    var Sunday = document.getElementById("Edit-sunday").value;
    var Monday = document.getElementById("Edit-monday").value;
    var Tuesday = document.getElementById("Edit-tuesday").value;
    var Wednesday = document.getElementById("Edit-wednesday").value;
    var Thursday = document.getElementById("Edit-thursday").value;
    var Friday = document.getElementById("Edit-friday").value;
    var Saturday = document.getElementById("Edit-saturday").value;

    var xhttp = new XMLHttpRequest();
    var update = "update";
    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/OpeningHours/" + update, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    

    xhttp.send(JSON.stringify({Sunday, Monday ,Tuesday ,Wednesday, Thursday,Friday,Saturday }));
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response)
        }
    }
}