(function($){
  $(function(){
    $('.modal-trigger').leanModal({
      in_duration: 200, // Transition in duration
      out_duration: 200, // Transition out duration
    });
    $('.slider').slider({
      full_width: true, 
      indicators: false
    });   
  });
  // end of document ready
})(jQuery); // end of jQuery name space

