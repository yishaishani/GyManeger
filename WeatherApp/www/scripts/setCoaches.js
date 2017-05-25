function setCoaches() {
    var firstName = document.getElementById("FirstName").value;
    var lestName = document.getElementById("LastName").value;
    var dayOfWork = document.getElementById("DayOfWork").value;
   
    $.ajax({
        url: "http://y0547387610-001-site1.ctempurl.com/Coaches/" + firstName + "/" + lestName + "/" + dayOfWork,

    });
    
}

function getCoaches() {
    //var li = document.createElement("li");
    var divCoaches = document.getElementById("getCoaches");
    alert("hallo");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://y0547387610-001-site1.ctempurl.com/Coaches/all", true);
    xhttp.send();
       xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("getCoaches").innerHTML =
                this.responseText;
            }
        };
        
        
    //$.ajax({
    //    url: "http://y0547387610-001-site1.ctempurl.com/Coaches/all",  
    //});
}