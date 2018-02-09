// Generic server.js file. Replace lines of code as needed. Below is simply
// a generic template from a previous project.

// Express code.
let express = require('express');
let app = express();
const test1 = require('./modules/test'); // This comes from our module and brings the whole function!
// Tells express where our static content is located.
app.use(express.static('server/public'));

// Can use any number from 1000 - 99999
// but don't choose 5432 which is the default for the database.
const port = 5000;
app.get('/test', // This matches the other url in the client. This is what links them!
    function(request, response){
  response.send(test1) // This test matches the one in line 7!
}); // This is where ajax takes me

// Start our server.
app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
})
