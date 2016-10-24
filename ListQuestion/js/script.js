$(document).ready(function() {
    $('select').material_select();
    
    $( function() {
        $( "#Question_list" ).sortable();
        $( "#Question_list" ).disableSelection();
    } );
    $( function() {
        $( ".an_content" ).sortable();
        $( ".an_content" ).disableSelection();
    } );
});