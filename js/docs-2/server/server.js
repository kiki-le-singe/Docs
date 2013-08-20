// Module dependencies.
var application_root = __dirname,
    express = require('express'), // Web framework
    path = require('path'), // Utilities for dealing with file paths
    mongoose = require('mongoose'); //MongoDB integration

// Create server
var app = express();

// Configure server
app.configure(function() {
  // parses request body and populates request.body
  app.use(express.bodyParser());

  // checks request.body for http method overrides
  app.use(express.methodOverride());

  // perform route lookup based on URL and HTTP method
  app.use(app.router);

  // where to serve static content
  app.use(express.static(path.join(application_root, 'site')));

  //show all errors in development
  app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

// Start server
var port = 4712;
app.listen(port, function() {
  console.log('Express server listening on port %d in %s node', port, app.settings.env);
});

/**
 * BDD
 */

// Connect to database
mongoose.connect('mongodb://localhost/docs_database');

// Schemas
var Menu = new mongoose.Schema({
  id: Number,
  title: String,
  imgSrc: String,
  path: String
});

var Article = new mongoose.Schema({
  pid: Number,
  id : Number,
  title : String,
  text : String,
  created: Date,
  changed: Date
});

// Models
var MenuModel = mongoose.model('Menu', Menu);
var ArticleModel = mongoose.model('Article', Article);

/**
 * Routes
 */
// Example
app.get('/api', function(request, response) {
  response.send('DOCS is running');
});

// Get a list of
app.get('/menus', function(request, response) {
  return MenuModel.find(function(err, menus) {
    if (!err) {
      return response.send(menus);
    }
    return console.log(err);
  });
});
