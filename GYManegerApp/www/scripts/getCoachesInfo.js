function getCoachesInfo() {

    var UserName = document.getElementById("UserName").value;

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

        }
    };
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Coaches/" + UserName, true);
    xhttp.send();

}