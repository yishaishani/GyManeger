var flag = 0;
function SetUsername() {
    
    var username = document.getElementById("usernameLOG").value;
    var password = document.getElementById("passwordLOG").value;

    
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/Members/" + username, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({password}));
   
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
            window.location.href = "#main-trainers";
        }
    }
}

function verifyUserName() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Members/" + username + "/" + password, true);

    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.response == 'true') {
                switch (flag) {
                    case 1: {
                        getTrainersInfo();
                        window.location.href = "#main-trainers";
                        break;
                    }
                    case 2: {
                        getCoachesInfo();
                        window.location.href = "#main-coaches";
                        break;
                    }
                    case 3: {
                        getManegerInfo();
                        window.location.href = "#main-maneger";
                        break;
                    }
                }

            }
            else {
                alert("worng usernamr or password!")
                document.getElementById("password").value = "";
            }
        }
    }


}
function flagTrainersPage() {
    flag = 1;
}
function flagCoachesPage() {
    flag = 2;
}
function flagManegerPage() {
    flag = 3;
}

function getAllTrainers() {
    document.getElementById("getTrainers").innerText = "";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Trainers/all", true);

    xhttp.send();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.response);
            var array =[obj.map(function (a) { return a.FirstName + "\n" })];
            for (i = 0; i < array[0].length; i++) {
                document.getElementById("getTrainers").innerText += array[0][i];
            }
        }
        }
    };

