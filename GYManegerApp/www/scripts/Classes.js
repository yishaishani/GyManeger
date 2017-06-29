
function AddCoachesClasses()
{
    var UserName = document.getElementById("UserName").value;
    var StartTime = document.getElementById("StartDate").value + " " + document.getElementById("StartHours").value;
    var EndTime = document.getElementById("EndDate").value + " " + document.getElementById("EndHours").value;

    UserName += "2";
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
    document.getElementById("getIDClass").innerText = "";
    var UserName = document.getElementById("UserName").value;
    UserName += "2";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/CoachesSchedule/all/" + UserName, true);

    xhttp.send();
    xhttp.responseType = "json";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.response);
            var array = [obj.map(function (a) { return a.StartTime + "\n\n" })];
            var array2 = [obj.map(function (a) { return a.TranierUserName + "  \n\n" })];
            var array3 = [obj.map(function (a) { return a.ID + "  \n\n" })];
            for (i = 0; i < array[0].length; i++) {
                document.getElementById("getStartTime").innerText += array[0][i];
                document.getElementById("getTranierUserName").innerText += array2[0][i];
                document.getElementById("getIDClass").innerText += array3[0][i];
            }
        }
    }
};

function AddTrainersClasses() {
    var UserName = document.getElementById("chosenCoach").value;
    UserName += "2";
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
        document.getElementById("getTrainersStartTime").innerText = "";
        document.getElementById("getCoachesUserName").innerText = "";
        document.getElementById("getTrainersClassNumber").innerText = "";
        var UserName = document.getElementById("UserName").value;
        UserName += "1";
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://yishai-001-site1.atempurl.com/CoachesSchedule/allTrainers/" + UserName, true);

        xhttp.send();
        xhttp.responseType = "json";
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(this.response);
                var array = [obj.map(function (a) { return a.StartTime + "\n\n" })];
                var array2 = [obj.map(function (a) { return a.UserName + ":  \n\n" })];
                var array3 = [obj.map(function (a) { return a.ID + "    \n\n" })];
                for (i = 0; i < array[0].length; i++) {
                    document.getElementById("getTrainersStartTime").innerText += array[0][i];
                    document.getElementById("getCoachesUserName").innerText += array2[0][i];
                    document.getElementById("getTrainersClassNumber").innerText += array3[0][i];
                }
            }
        }
    };

function getCoachesForClasses() {
    document.getElementById("getCoachesForTheClasses").innerText = "";
    document.getElementById("FirstHiddenShow").style.display = 'block';
    var SecondDivToHiddenShow = document.getElementById("SecondHiddenShow");

    
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://yishai-001-site1.atempurl.com/Coaches/all", true);
        xhttp.send();
        xhttp.responseType = "json";
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(this.response);
                var array = [obj.map(function (a) { return a.FirstName + "\n" })];
                var array1 = [obj.map(function (a) { return a.UserName + "\n" })];
                for (i = 0; i < array[0].length; i++) {
                    document.getElementById("getCoachesForTheClasses").innerText += array[0][i];
                    document.getElementById("getCoachesUserNameForTheClasses").innerText += array1[0][i];
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
            var TrainersUserName = document.getElementById("UserName").value + "1";
            var xhttp2 = new XMLHttpRequest();
            
            xhttp2.open("POST", "http://yishai-001-site1.atempurl.com/TrainersSchedule/add/" + TrainersUserName, true);
            xhttp2.setRequestHeader("Content-type", "application/json");


            xhttp2.send(JSON.stringify({ StartTime , EndTime , ID , UserName }));
            xhttp2.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    alert("good!")
                }
            }
            var xhttp3 = new XMLHttpRequest();

            xhttp3.open("POST", "http://yishai-001-site1.atempurl.com/CoachesSchedule/UpdateID", true);
            xhttp3.setRequestHeader("Content-type", "application/json");


            xhttp3.send(JSON.stringify({ TrainersUserName, ID }));
            xhttp3.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    alert("good update!")
                }
            }
        }
    }
}

function DeleteClass() {
    document.getElementById("DivToDeleteClass").style.display = "none";
    document.getElementById("btn_ShowDeleteClasses").style.display = "block";
    var ID = document.getElementById("IDToDeleteClass").value;
    var TrainersUserName = 'empty';
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/CoachesSchedule/ID/" + ID, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           
            var xhttp3 = new XMLHttpRequest();
            xhttp3.open("POST", "http://yishai-001-site1.atempurl.com/CoachesSchedule/UpdateID", true);
            xhttp3.setRequestHeader("Content-type", "application/json");
            xhttp3.send(JSON.stringify({ TrainersUserName, ID }));
            xhttp3.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    alert("good update!")
                }
            }
            var xhttp2 = new XMLHttpRequest();
            xhttp2.open("DELETE", "http://yishai-001-site1.atempurl.com/TrainersSchedule/DeleteClass/" + ID, true);
            xhttp2.send();
            xhttp2.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    alert("Class delete!")
                }
            }
        }
    }
    
}

function ShowDeleteClass() {
    document.getElementById("DivToDeleteClass").style.display = "block"; 
    document.getElementById("btn_ShowDeleteClasses").style.display = "none";
}

function DeleteCoachClass() {
    document.getElementById("DivToDeleteCoachClass").style.display = "none";
    document.getElementById("btn_ShowDeleteCoachClasses").style.display = "block";
    var ID = document.getElementById("IDToDeleteCoachClass").value;
    var TrainersUserName = 'empty';
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://yishai-001-site1.atempurl.com/CoachesSchedule/ID/" + ID, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var xhttp3 = new XMLHttpRequest();
            xhttp3.open("DELETE", "http://yishai-001-site1.atempurl.com/CoachesSchedule/DeleteClass/" + ID, true);
            xhttp3.send();
            xhttp3.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    alert("Class delete from CoachesSchedule!")
                }
            }
            var xhttp2 = new XMLHttpRequest();
            xhttp2.open("DELETE", "http://yishai-001-site1.atempurl.com/TrainersSchedule/DeleteClass/" + ID, true);
            xhttp2.send();
            xhttp2.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    alert("Class delete from TrainersSchedule!")
                }
            }
        }
    }

}

function ShowDeleteCoachClass() {
    document.getElementById("DivToDeleteCoachClass").style.display = "block";
    document.getElementById("btn_ShowDeleteCoachClasses").style.display = "none";
}