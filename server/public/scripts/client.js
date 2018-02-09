console.log('JS')
$(document).ready(onReady);

function onReady(){
  $('#bDoIt').on('click', fDoIt);
}

// This is the function that runs when you press the button! Go to line 14 in server.js
function fDoIt(){
  $.ajax({
    type: 'GET',
    url: '/test', // This matches the other url in the server. This is what links them!
  }).done(function(data){
      $('h1').text(data);
    }).fail(function(error){
      console.log('The "/hello" ajax get request failed with error: ', error);
  });
} // end fDoIt