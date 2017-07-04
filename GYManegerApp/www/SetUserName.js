﻿var Flag = 0;
var strVerify = "Verification successful!"+'\n' + "you are taken to the next page..";
function SetUserName() {

    var UserName = document.getElementById("UserNameLOG").value;
    var Password = document.getElementById("PasswordLOG").value;
    UserName += Flag;

    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/Members/" + UserName, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("{\"Password\":\"" + Password  + "\"}");
{  }
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
};

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
                        document.getElementById("Alert-pop-Messege").innerText = strVerify;
                        document.getElementById("nextFromAlert").href = "#Main-Trainers";
                        window.location.href = "#Alert-pop";
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
    }


};
function FlagTrainersPage() {
    document.getElementById("NewMembers").innerText = "New Trainer";
    Flag = '1';
};
function FlagCoachesPage() {
    document.getElementById("NewMembers").innerText = "New Coach"
    Flag = '2';
};
function FlagManagerPage() {
    document.getElementById("NewMembers").innerText = "New Manager"
    Flag = '3';
};

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
