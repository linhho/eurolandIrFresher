$(document).ready(function(){
    $('#addList').click(function(){
        $(this).hide('fast');
        $('#addListContent').show('fast');
    });
    $('#taskTextField').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
        {
            taskName = $(this).val();
            $('ul#todolist').append('<li class="task">'+taskName+'<a class="removeTask" href="#"><i class="material-icons right red-text">clear</i></a></li>').show('slow');
            $('#addListContent').hide('fast');
            $(this).val('');
            $('#addList').show('fast');
            return false;  
        }
    });

    $('ul#todolist').on('click', 'li a.removeTask i', function(e) {
        $(this).parent().parent().fadeOut("slow", function(){
            $(this).remove();
        });
    });
    $( function() {
        $( "#todolist" ).sortable();
        $( "#todolist" ).disableSelection();
      } );
});