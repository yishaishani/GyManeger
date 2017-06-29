function setCoaches() {
    var firstName = document.getElementById("FirstName").value;
    var LastName = document.getElementById("LastName").value;
    var DayOfWork = document.getElementById("DayOfWork").value;
    var UserName = document.getElementById("UserName").value;
    UserName += "2";

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/Coaches/" + firstName, true);
    xhttp.setRequestHeader("Content-type", "application/json");


    xhttp.send(JSON.stringify({ LastName, DayOfWork, UserName }));
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

function getCoaches() {
    document.getElementById("getCoaches").innerText = "";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Coaches/all", true);
    xhttp.send();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(this.response);
            var array =[obj.map(function (a) { return a.FirstName + "\n" })];
            for (i = 0; i < array[0].length; i++) {
                document.getElementById("getCoaches").innerText += array[0][i];
            }
            }
       };
  
}

function delCoaches(){
    var UserName = document.getElementById("UserName-del").value;
    UserName += "2";
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("DELETE", "http://yishai-001-site1.atempurl.com/Coaches/"+UserName, true);
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