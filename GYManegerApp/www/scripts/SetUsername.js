var Flag = 0;

function SetUserName() {

    var UserName = document.getElementById("UserNameLOG").value;
    var Password = document.getElementById("PasswordLOG").value;
    UserName += flag;

    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/Members/" + UserName , true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ Password }));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.response);
            switch (Flag) {
                case '1': {
                    document.getElementById("Add-UserName").value = UserName;
                    window.location.href = "#Add-Trainers-pop";
                    break;
                }
                case '2': {
                    document.getElementById("UserName").value = UserName;
                    window.location.href = "#Add-Coaches-pop";
                    break;
                }
                case '3': {
                    document.getElementById("Add-Maneger-UserName").value = UserName;
                    window.location.href = "#Add-Maneger-pop";
                    break;
                }
            }
        }
    }
}

function verifyUserName() {

    var UserName = document.getElementById("UserName").value;
    var Password = document.getElementById("Password").value;
    UserName += Flag;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Members/" + UserName + "/" + Password, true);

    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.response == 'true') {
                switch (Flag) {
                    case '1': {
                        getTrainersInfo();
                        window.location.href = "#Main-Trainers";
                        break;
                    }
                    case '2': {
                        getCoachesInfo();
                        window.location.href = "#Main-Coaches";
                        break;
                    }
                    case '3': {
                        getManegerInfo();
                        window.location.href = "#Main-Maneger";
                        break;
                    }
                }

            }
            else {
                alert("Worng usernamr or Password!")
                document.getElementById("Password").value = "";
            }
        }
    }


}
function FlagTrainersPage() {
    document.getElementById("NewMembers").innerText = "New Trainer";
    Flag = '1';
}
function FlagCoachesPage() {
    document.getElementById("NewMembers").innerText = "New Coach"
    Flag = '2';
}
function FlagManegerPage() {
    document.getElementById("NewMembers").innerText = "New Maneger"
    Flag = '3';
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

