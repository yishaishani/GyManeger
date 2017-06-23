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
            window.location.href = "#main-members";
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
                switch(flag){
                    case 1: {
                        getTrainersInfo();
                        window.location.href = "#main-members";
                             break;
                    }
                    case 2: {
                        getCoachesInfo();
                        window.location.href = "#main-coaches";
                        break;
                    }
                    case 3: {
                        //getTrainersInfo();
                        window.location.href = "#main-maneger";
                        break;
                    }
                }

            }
            else
                window.location.href = "#about-pop";
        }
    }


}
function flagMembers() {
    flag = 1;
}
function flagCoaches() {
    flag = 2;
}
function flagManeger() {
    flag = 3;
}

function getMembers() {
    var xhttp = new XMLHttpRequest();
    

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = [];
            data = this.responseText
            var size = data.length;

            document.getElementById("getMembers").innerHTML += 'name:';
            for (i = 0; i < size; i++) {
                if (data[i] == '*')
                    document.getElementById("getMembers").innerHTML += '\n' + 'name:';
                else
                    document.getElementById("getMembers").innerHTML += data[i];
            }
        }
    };

    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Members/all", true);

    xhttp.send();
}