//;(function () {

//}());

function loginAction(){
    var userName = document.getElementById("userName").value;
    var passWord = md5(document.getElementById("passWord").value);//hash password -- MD5
    
    //check username and password
    getJsonFile(userName, passWord);
}

function checkAccount(jsonData, name, pass) {
    var userData = JSON.parse(jsonData.responseText);
    var notify = "Username or password wrong";
    for(var i = 0; i < userData.users.length; i++){
        if(name == userData.users[i].name && pass == userData.users[i].pass){
            notify = "Login successfully";
          }
    }
    alert(notify);
}


function getJsonFile(name, pass) {
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            checkAccount(this, name, pass);
            //alert('hekki');  
            }
        };
        xhttp.open("GET", "users.json", true);
    xhttp.send();
}