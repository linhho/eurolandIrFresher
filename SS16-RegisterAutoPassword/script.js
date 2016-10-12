$(document).ready(function(){
    var keyList = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*ABCDEFGHIKLMNOPQRSTUVWXYZ";
    var tmp ='';
    var plength = 8;
    var emailValidateStatus, passValidateStatus, rePassValidateStatus = false;
    
    function generatePass(length) {
        //random pass
        for (i=0;i<length;i++){
            tmp += keyList.charAt(Math.floor(Math.random()*keyList.length));
        }
        return tmp;
    }

    function emailValidation(email) {    
        //check email validation
        test = email;
        var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return(email.test(test));
    }
    
    function passwordValidation(pass) {
        //check pass validation
        test = pass;
        var password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z0-9\d$@$!%*?&]{4,}/;
        return(password.test(test));
    }
    function rePasswordValidation(pass, rePass) {
        //check rePass validation
        test = rePass;
        pass = pass;
        if(test === pass) {
            return(true);
        }
        else {
            return(false);
        }
    }
    
    function enableRegisterButton() {
        //When email, pass and repass validate true, enable register button
        if(emailValidateStatus == true && passValidateStatus == true && rePassValidateStatus == true) {
            $("button#registerSubmit").removeAttr("disabled", "disabled");
            $("button#registerSubmit").addClass("btn-success");
        }
    }
    
    $('input#email').keyup(function() {
        //check email when enter char in textfield
        var email = $('input#email').val();
        if(emailValidation(email)) {
            $('#emailDiv').addClass("has-success").removeClass("has-error");
            emailValidateStatus = true;
            enableRegisterButton()
        }
        else {
            $('#emailDiv').addClass("has-error").removeClass("has-success");
            emailValidateStatus = false;
            enableRegisterButton()
        }
    });
    $('input#pass').keyup(function() {
        //check pass when enter char in textfield
        var pass = $('input#pass').val();
        if(passwordValidation(pass)) {
            $('#passDiv').addClass("has-success").removeClass("has-error");
            passValidateStatus = true;
            enableRegisterButton()
        }
        else {
            $('#passDiv').addClass("has-error").removeClass("has-success");
            passValidateStatus = false;
            enableRegisterButton()
        }
    });
    
    $('input#rePass').keyup(function() {
        //check repass when enter char in textfield
        var pass = $('input#pass').val();
        var rePass = $('input#rePass').val();
        if(rePasswordValidation(pass, rePass)) {
            $('#rePassDiv').addClass("has-success").removeClass("has-error");
            rePassValidateStatus = true;
            enableRegisterButton();
        }
        else {
            $('#rePassDiv').addClass("has-error").removeClass("has-success");
            rePassValidateStatus = false;
            enableRegisterButton();
        }
    });
        
    $("button#autoPass").click(function(e){
        //click button auto get password
        e.preventDefault();
        $("#rePassDiv").hide("slow");
        $("#pass").val(generatePass(plength)).attr('disabled', 'disabled');
        $(this).attr('disabled', 'disabled');
        rePassValidateStatus = true;
        passValidateStatus = true;
        $('#passDiv').addClass("has-success").removeClass("has-error");
        enableRegisterButton();
    });
    
    $("button#registerSubmit").click(function(e){
        //submit 
        e.preventDefault();
        // Check browser support
        if (typeof(Storage) !== "undefined") {
            // Store
            email = $('input#email').val();
            pass = $('input#pass').val();
            //local storage
            localStorage.setItem("email", email);
            localStorage.setItem("pass", pass);
            var notify = "Register sucessfully, email: "+localStorage.getItem("email")+" and password: "+localStorage.getItem("pass");
            alert(notify);
            
        } else {
            alert("Sorry, your browser does not support Web Storage...");
        }
        
    });
});
