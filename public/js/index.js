
var count = 1;
setInterval(function(){
  $('#dots').text(new Array(++count % 5).join('.'));
}, 500);


// lookup the gps location
navigator.geolocation.getAccurateCurrentPosition(function onSuccess(position){
  $('#error').text('Location found. Redirecting ...');

  var coords = position.coords;
  $('form [name=latitude]').val(coords.latitude);
  $('form [name=longitude]').val(coords.longitude);
  $('form').submit();
  
}, function onError(){
  $(document.body).text('You need to permit access to the GPS location.');
}, function onProgress(){

})
