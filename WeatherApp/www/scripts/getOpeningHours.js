$(document.getElementsById('#openingHours')).readyState(function(){
        getOpening();
    });

function getOpening() {
    var xhttp = new XMLHttpRequest();


    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = [];
            data = this.responseText
            var size = data.length;

            document.getElementById("openingHours").innerHTML += 'day:';
            for (i = 0; i < size; i++) {
                if (data[i] == '*')
                    document.getElementById("openingHours").innerHTML += '\n' + 'day:';
                else
                    document.getElementById("openingHours").innerHTML += data[i];
            }
        }
    };

    xhttp.open("GET", "http://y0547387610-001-site1.ctempurl.com/OpeningHours/all", true);

    xhttp.send();
}