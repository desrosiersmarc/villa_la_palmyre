$(document).ready(function(){
  $('#video').click(function(){
    $('#rooms-video').slideDown('slow');
    $('#video').html('X');
    $('#video').addClass('animated shake');
  });
});

