const jsonServer = require('json-server');
const server = jsonServer.create();
var path = require('path')
var express = require('express')

//Laad hier de todo's in
const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');

// Sample JWT token for demo purposes
const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2l0ZVBvaW50IFJ' +
  'lYWRlciJ9.sS4aPcmnYfm3PQlTtH14az9CGjWkjnsDyG_1ats4yYg';

// Use default middlewares (CORS, static, etc)
server.use(middlewares);

// Make sure JSON bodies are parsed correctly
server.use(bodyParser.json());

// Handle sign-in requests
server.post('/sign-in', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log('checking username and password');
  if (username === 'demo' && password === 'demo') {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
      name: 'Rients van Buren',
      token: jwtToken
    }));
  } else {
    res.send(422, 'Invalid username and password');
  }
});

server.use('/static', express.static(path.join(__dirname, 'public')))


// Protect other routes
server.use((req, res, next) => {
  if (isAuthorized(req)) {
    console.log('Access granted');
    next();
  } else {
    console.log('Access denied, invalid JWT, uri = ' + req.url);

    res.sendStatus(401);
  }
});

// API routes
server.use(router);

// Start server
server.listen(3000, () => {
  console.log('JSON Server is running');
});

// Check whether request is allowed
function isAuthorized(req) {
  let bearer = req.get('Authorization');
  if (bearer === 'Bearer ' + jwtToken) {
    return true;
  }
  return false;
}
