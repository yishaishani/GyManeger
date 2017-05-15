
function setCoaches() {
    var firstName = document.getElementById("firstName").value;
    var lestName = document.getElementById("lestName").value;
    var dayOfWork = document.getElementById("dayOfWork").value;
   
    $.ajax({
        url: "http://y0547387610-001-site1.ctempurl.com/Coaches/" + firstName + "/" + lestName + "/" + dayOfWork,

    });
    
}

function getCoaches() {
    //var li = document.createElement("li");
    //var divCoaches = document.getElementById("CoachesMain");
    alert("hallo");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("CoachesMain").innerHTML =
                this.responseText;
            }
        };
        xhttp.open("GET", "http://y0547387610-001-site1.ctempurl.com/Coaches/all", true);
        xhttp.send();
    

    //$.ajax({
    //    url: "http://y0547387610-001-site1.ctempurl.com/Coaches/all",  
    //});

}