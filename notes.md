# Notes

## Setting up Node.js App with Express

1. Install Node.js,[Download for macOS](https://nodejs.org/en/)
1. Open the terminal and run `node -v to check that it's been installed
1. install NPM run `npm install npm@latest -g`
1. run `npm -v` to check that it's installed 
1. `cd` to sites directory - run `mkdir <dirname>`
1. `cd <dirname>` 
1. run `echo "# Intro" >> README.md`
1. to initialise the repository using git, run `git init`
1. run `git add README.md`
1. `git commit -m"initial commit"`
1. run `git remote add origin git@github.com:Marie-L/<repo_name>.git`
1. then `git push -u origin master`
1. to initialise the repository using NPM run, `npm init` to create the **package.json** file
1. complete the following fields in the npm interactive editor : name, version, description, entry point (`app.js`), git repository (autofill), author
1. to install run, `npm install express --save`
1. then `touch app.js`

## setup Express server in app.js

1. use express by adding nodes require statement `const express = require('express');` (the module is called express and it's the param passed into the parameter function) (the variable express can be used to access the methods and properties of the express module)
1. call express function and assign it to the app variable `const app = express();`
1. set up the development server using the listen method and pass in port number as param `app.listen(3000);`
1. start server run `node app.js`
1. in browser, type `localhost:3000` enter. if there's an error lIke `Cannot GET /` it's working but need to give express instructions on how to respond to requests - doesnt have any resources to return for this route

## Setting up routes

1. to create a route for the root, use the GET method (used to handle GET requests to a certain URL) on the app object,  first param is the location parameter, then as callback add require and request objects . the callback function runs when the client requests the route. The send method is called to send data to the client
```
app.get('/', (req, res)=> { 
     response.send('test');

});

```