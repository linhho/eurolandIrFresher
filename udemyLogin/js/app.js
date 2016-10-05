//;(function () {

//}());

function loginAction(){
    var userName = document.getElementById("userName").value;
    var passWord = md5(document.getElementById("passWord").value);//hash password -- MD5
    
    //check username and password
    getJsonFile(userName, passWord);
}

function checkAccount(jsonData) {
    var userData = JSON.parse(jsonData.responseText);
    //abc = userData.users[2].pass;
    alert(JSON.parse(jsonData.responseText));
}


function getJsonFile(name, pass) {
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            checkAccount(this);
            //alert('hekki');  
            }
        };
        xhttp.open("GET", "users.json", true);
    xhttp.send();
}