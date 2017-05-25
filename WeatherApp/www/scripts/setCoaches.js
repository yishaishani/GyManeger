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
        }
    }
           
}

function getCoaches() {
    //var li = document.createElement("li");
    var divCoaches = document.getElementById("getCoaches");
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://y0547387610-001-site1.ctempurl.com/Coaches/all", true);
    xhttp.send();

       xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var data = [];
                data = this.responseText
                var size = data.length;

                document.getElementById("getCoaches").innerHTML += 'name:';
                for (i = 0; i < size; i++) {
                    if (data[i] == '*')
                        document.getElementById("getCoaches").innerHTML += '\n'+'name:' ;
                    else
                        document.getElementById("getCoaches").innerHTML += data[i];
                }
            }
       };
    
        
}