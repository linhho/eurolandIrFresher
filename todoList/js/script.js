$(document).ready(function(){
    $('#addListContent').hide();
    $('#addList').click(function(){
        $(this).hide();
        $('#addListContent').show();
    });
    $('#taskTextField').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
        {
            taskName = $(this).val();
            $('ul#todolist').append('<li>'+taskName+'</li>');
            $('#addListContent').hide();
            $('#addList').show();
            return false;  
        }
    });
});