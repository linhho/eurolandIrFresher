$(document).ready(function(){
    var keyList = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
    var tmp ='';
    plength = 8;
    function generatePass(length) {
        for (i=0;i<length;i++){
            tmp += keyList.charAt(Math.floor(Math.random()*keyList.length));
        }
        return tmp;
    }
    $("#autoPass").click(function(e){
        e.preventDefault();
        $("#rePassDiv").hide("slow");
        $("#pass").val(generatePass(plength)).attr('disabled', 'disabled');
        $(this).attr('disabled', 'disabled');
    });
});
