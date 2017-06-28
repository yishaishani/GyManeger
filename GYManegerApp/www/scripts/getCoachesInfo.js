function getCoachesInfo() {

    var username = document.getElementById("username").value;

    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = $.parseJSON(this.response)
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
            //document.getElementById("day1").innerText = obj.map(function (a) { return a.Sunday });
            //document.getElementById("day2").innerText = obj.map(function (a) { return a.Monday });
            //document.getElementById("day3").innerText = obj.map(function (a) { return a.Tuesday });
            //document.getElementById("day4").innerText = obj.map(function (a) { return a.Wednesday });
            //document.getElementById("day5").innerText = obj.map(function (a) { return a.Thursday });
            //document.getElementById("day6").innerText = obj.map(function (a) { return a.Friday });
            //document.getElementById("day7").innerText = obj.map(function (a) { return a.Saturday });
        }
    };
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Coaches/" + username, true);
    xhttp.send();

}