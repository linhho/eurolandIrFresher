
var checked = false;

function passwordValidation(pass) {
    test = pass;
    //var password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    var password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z0-9\d$@$!%*?&]{4,}/;
    notify('passDiv',password.test(test));
    return(password.test(test));
}
function nameValidation(name) {
    test = name;
    var name = /^[a-zA-Z0-9]{6,}/;
    notify('nameDiv',name.test(test));
    return(name.test(test));
}
function emailValidation(email) {
    test = email;
    var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    notify('emailDiv',email.test(test));
    return(email.test(test));
}
function rePasswordValidation(rePass, pass) {
    test = rePass;
    pass = pass;
    if(test === pass) {
        notify('repassDiv',true);
        return(true);
    }
    else {
        notify('repassDiv',false);
        return(false);
    }
    
}

function validation() {
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    pass = document.getElementById('pass').value;
    rePass = document.getElementById('rePass').value;
    passwordValidation(pass);
    nameValidation(name);
    emailValidation(email);
    rePasswordValidation(rePass, pass);
    checked = true;
    notifyBoxRegister(nameValidation(name), emailValidation(email), passwordValidation(pass), rePasswordValidation(rePass, pass));
}

function notify(id, check) {
    var parent = document.getElementById(id);
    if(checked==true){
        parent.removeChild(parent.lastElementChild);   
    }
    var para = document.createElement('i');
    if(check==true) {
        para.setAttribute('class',"material-icons true");
        var node = document.createTextNode("check");
        para.appendChild(node);
    }
    else {
        para.setAttribute('class',"material-icons false");
        var node = document.createTextNode("clear");
        para.appendChild(node);
    }
    parent.appendChild(para);
}

function notifyBoxRegister(user, mail, pass, repass) {
    if(user==false || mail==false || pass==false || repass==false){
        var box = document.getElementsByClassName('registerDiv')[0];
        box.classList.add('notify');
        setTimeout(function(){ box.classList.remove('notify'); },500);
    }
    else{
        alert('Thêm mới tài khoản thành công');
    }
}