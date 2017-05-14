
function setCoaches() {
    var firstName = document.getElementById("firstName").value;
    var lestName = document.getElementById("lestName").value;
    var dayOfWork = document.getElementById("dayOfWork").value;
   
    $.ajax({
        url: "http://y0547387610-001-site1.ctempurl.com/Trainers/" + firstName + "/" + lestName + "/" + dayOfWork,
    });
    
}

function getCoaches() {

}