
function AddCoachesClasses()
{
    var UserName = document.getElementById("username").value;
    var StartTime = document.getElementById("StartTime").value;
    var EndTime = document.getElementById("EndTime").value;

    var xhttp = new XMLHttpRequest();
    
    xhttp.open("POST", "http://yishai-001-site1.atempurl.com/CoachesSchedule/add", true);
    xhttp.setRequestHeader("Content-type", "application/json");


    xhttp.send(JSON.stringify({ UserName, StartTime, EndTime }));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("good!")
        }
    }

}

function getAllCoachesSchedule() {
    document.getElementById("getStartTime").innerText = "";
    document.getElementById("getTranierUserName").innerText = "";
    var UserName = document.getElementById("username").value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/CoachesSchedule/all/" + UserName, true);

    xhttp.send();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.response);
            var array = [obj.map(function (a) { return a.StartTime + "\n\n" })];
            var array2 = [obj.map(function (a) { return a.TranierUserName + ":  \n\n" })];
            for (i = 0; i < array[0].length; i++) {
                document.getElementById("getStartTime").innerText += array[0][i];
                document.getElementById("getTranierUserName").innerText += array2[0][i];
            }
        }
    }
};

function AddTrainersClasses() {
    var UserName = document.getElementById("chosenCoach").value;
    var FirstDivToHiddenShow = document.getElementById("FirstHiddenShow");
    var SecondDivToHiddenShow = document.getElementById("SecondHiddenShow");
   
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/CoachesSchedule/all/" + UserName, true);

    xhttp.send();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.response);
            var array = [obj.map(function (a) { return a.UserName + ":    \n\n" })];
            var array1 = [obj.map(function (a) { return a.StartTime + "    \n\n" })];
            var array2 = [obj.map(function (a) { return a.ID + "\n\n" })];
            var array3 = [obj.map(function (a) { return a.TranierUserName + "\n\n" })];
            for (i = 0; i < array[0].length; i++) {
                if (obj[i].TranierUserName == 'empty'){
                    document.getElementById("getSlotCoachesUserName").innerText += array[0][i];
                    document.getElementById("getSlotStartTime").innerText += array1[0][i];
                    document.getElementById("getSlotID").innerText += array2[0][i];
                }
            }
            FirstDivToHiddenShow.style.display = 'none';
            SecondDivToHiddenShow.style.display = 'block';
        }
    }
}

function getAllTrainersSchedule() {
        document.getElementById("getStartTime").innerText = "";
        document.getElementById("getTranierUserName").innerText = "";
        var UserName = document.getElementById("username").value;
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://yishai-001-site1.atempurl.com/CoachesSchedule/allTrainers/" + UserName, true);

        xhttp.send();
        xhttp.responseType = "json";
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(this.response);
                var array = [obj.map(function (a) { return a.StartTime + "\n\n" })];
                var array2 = [obj.map(function (a) { return a.UserName + ":  \n\n" })];
                for (i = 0; i < array[0].length; i++) {
                    document.getElementById("getTrainersStartTime").innerText += array[0][i];
                    document.getElementById("getCoachesUserName").innerText += array2[0][i];
                }
            }
        }
    };

function getCoachesForClasses() {
    document.getElementById("getCoachesForTheClasses").innerText = "";
    var FirstDivToHiddenShow = document.getElementById("FirstHiddenShow");
    var SecondDivToHiddenShow = document.getElementById("SecondHiddenShow");
    
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Coaches/all", true);
        xhttp.send();
        xhttp.responseType = "json";
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(this.response);
                var array = [obj.map(function (a) { return a.UserName + "\n" })];
                for (i = 0; i < array[0].length; i++) {
                    document.getElementById("getCoachesForTheClasses").innerText += array[0][i];
                }
                SecondDivToHiddenShow.style.display = 'none';
               
            }
        }

    }

function SaveClass() {
    var ID = document.getElementById("chosenNumberOfClass").value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/CoachesSchedule/ID/" + ID, true);

    xhttp.send();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.response);
            var StartTime = obj[0].StartTime;
            var EndTime = obj[0].EndTime;
            var UserName = obj[0].UserName;
            var ID = obj[0].ID;
            var TrainersUserName = document.getElementById("username").value;
            var xhttp2 = new XMLHttpRequest();
            
            xhttp2.open("POST", "http://yishai-001-site1.atempurl.com/TrainersSchedule/add/" + TrainersUserName, true);
            xhttp2.setRequestHeader("Content-type", "application/json");


            xhttp2.send(JSON.stringify({ StartTime , EndTime , ID , UserName }));
            xhttp2.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    alert("good!")
                }
            }
            
        }
    }
}