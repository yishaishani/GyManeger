$(document.getElementsById('#openingHours')).readyState(function(){
        getOpening();
    });

function getOpening() {
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = $.parseJSON(this.response)
            document.getElementById("openingHours").innerText = obj.map(function (a) { return a.DAY + a.HOURS + "\n" });
        }
    };

    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/OpeningHours/all", true);

    xhttp.send();
}