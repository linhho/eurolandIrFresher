$(document).ready(function(){
    /*
    * materialize css framework
    */
    $('.parallax').parallax(); //call parallax
    $('.scrollspy').scrollSpy({scrollOffset: 0}); //call scrollspy
    $(".button-sidenav-trigger").sideNav({
        menuWidth: 300, // Default is 240
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });// call side nav
    /*
    *click character avatar item
    */
    $('.character-avatar-list').children().click(function(){
        $('.character-avatar-list').children().css('opacity', 0.4);
        $(this).css('opacity', 1);
        $('.ch_info').hide();
        name = $(this).attr('character-name');
        $(name+'.ch_info').show();
    });
});