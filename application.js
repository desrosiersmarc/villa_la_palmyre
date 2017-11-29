$(document).ready(function(){
  $('#video').click(function(){
    $('#rooms-video').slideToggle('slow');
    $('#video').html('X');
    $('#video').addClass('animated shake');
  });
});

