function setCoaches() {
    var firstName = document.getElementById("FirstName").value;
    var lestName = document.getElementById("LastName").value;
    var dayOfWork = document.getElementById("DayOfWork").value;
   

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://y0547387610-001-site1.ctempurl.com/Coaches/" + firstName + "/" + lestName + "/" + dayOfWork, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
            window.location = "index.html"
        }
    }
           
}

function getCoaches() {
    //var li = document.createElement("li");
    var divCoaches = document.getElementById("getCoaches");
    
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";
    

       xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              
                var obj = $.parseJSON(this.response)
                document.getElementById("getCoaches").innerText = obj.map(function (a) { return a.FirstName + "\n" });
            }
       };
       xhttp.open("GET", "http://y0547387610-001-site1.ctempurl.com/Coaches/all", true);

       xhttp.send();
    
       
}
