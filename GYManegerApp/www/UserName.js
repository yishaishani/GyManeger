var Flag = 0;
var strVerify = "Verification successful!"+'\n' + "you are taken to the next page..";
function SetUserName() {

    var UserName = document.getElementById("UserNameLOG").value;
    var Password = document.getElementById("PasswordLOG").value;
    UserName += Flag;

    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/Members/" + UserName, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("{\"Password\":\"" + Password  + "\"}");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("Alert-pop-Messege").innerText = this.response;
            switch (Flag) {
                case '1': {
                    document.getElementById("Add-UserName").value = UserName;
                    document.getElementById("nextFromAlert").href = "#Add-Trainers-pop";
                    window.location.href = "#Alert-pop";
                    break;
                }
                case '2': {
                    document.getElementById("UserName").value = UserName;
                    document.getElementById("nextFromAlert").href = "#Add-Coaches-pop";
                    window.location.href = "#Alert-pop";
                    break;
                }
                case '3': {
                    document.getElementById("Add-Manager-UserName").value = UserName;
                    document.getElementById("nextFromAlert").href = "#Add-Manager-pop";
                    window.location.href = "#Alert-pop";
                    break;
                }
            }
        }
    }
}

function verifyUserName() {

    var UserName = document.getElementById("UserName").value;
    var Password = document.getElementById("Password").value;

    var xhttp = new XMLHttpRequest();


    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.response == 'true') {
                switch (Flag) {
                    case '1': {
                        document.getElementById("Alert-pop-Messege").innerText = strVerify;
                        document.getElementById("nextFromAlert").href = "#Main-Trainers";
                        document.getElementById("nextFromAlert").onclick = "getTrainersInfo()";
                        $.mobile.changePage("file:///android_asset/www/index.html#Alert-pop");
                        break;
                    }
                    case '2': {
                        getCoachesInfo();
                        document.getElementById("Alert-pop-Messege").innerText = strVerify;
                        document.getElementById("nextFromAlert").href = "#Main-Coaches";
                        window.location.href = "#Alert-pop";
                        break;
                    }
                    case '3': {
                        getManagerInfo();
                        document.getElementById("Alert-pop-Messege").innerText = strVerify;
                        document.getElementById("nextFromAlert").href = "#Main-Manager";

                        window.location.href = "#Alert-pop";
                        break;
                    }
                }

            }
            else {
                document.getElementById("Password").value = "";
                document.getElementById("Alert-pop-Messege").innerText = "Worng usernamr or Password!";
                document.getElementById("nextFromAlert").href = "#Main";
                window.location.href = "#Alert-pop";
            }
        }
    };
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Members/" + UserName + Flag + "/" + Password, false);

    xhttp.send();

}

function FlagTrainersPage() {
    document.getElementById("NewMembers").innerText = "New Trainer";
    Flag = '1';
}

function FlagCoachesPage() {
    document.getElementById("NewMembers").innerText = "New Coach"
    Flag = '2';
}

function FlagManagerPage() {
    document.getElementById("NewMembers").innerText = "New Manager"
    Flag = '3';
}
