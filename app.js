//import Express by using require Express module and assign to express var
 express = require ('express');

//create express application and assign to app var
const app = express();

//route
//get method on app object - root route
//params = location, anon callback (request,response)
app.get('/',(req,res) => {

 //sendFile method  on response object
 //request html file
res.sendFile('index.html', {root: __dirname})
});

//static server
app.use('/static', express.static('public'));

//set up dev server using listen method
// listening on port 3000
app.listen(3000);
console.log('Starting server on port 3000');