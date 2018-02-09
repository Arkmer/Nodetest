$.ajax({
  type: 'GET',
  url: '/test',
}).done(function(data){
    $('h1').text(data);
  }).fail(function(error){
    console.log('The "/hello" ajax get request failed with error: ', error);
  });
