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
  app.use(express.static(path.join(application_root, '../')));

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
  title: String,
  imgSrc: String,
  path: String
});

var Article = new mongoose.Schema({
  pid: String,
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

/**
 * Menus
 */
// Get a list of menu items
app.get('/menus', function(request, response) {
  return MenuModel.find(function(err, menus) {
    if (!err) {
      return response.send(menus);
    }
    return console.log(err);
  });
});

// Insert a new menu item.
app.post('/menus', function(request, response) {
  var menu = new MenuModel({
    title: request.body.title,
    imgSrc: request.body.imgSrc,
    path: request.body.path
  });

  menu.save(function(err){
    if (!err) {
      return console.log('created menu item');
    }
    return console.log(err);
  });

  return response.send(menu);
});

// jQuery.post('/menus', {
//   'title': 'PHP',
//   'imgSrc': 'images/menu/php.jpg',
//   'path': 'php'
// }, function(data, textStatus, jqXHR) {
//     console.log('POST response:');
//     console.dir(data);
//     console.log(textStatus);
//     console.dir(jqXHR)
// });

/**
 * Articles
 */
// Get a list of articles
app.get('/articles', function(request, response) {
  return ArticleModel.find(function(err, articles) {
    if (!err) {
      return response.send(articles);
    }
    return console.log(err);
  });
});

// Insert a new article.
app.post('/articles', function(request, response) {
  var article = new ArticleModel({
    pid: request.body.pid,
    title: request.body.title,
    text: request.body.text,
    created: request.body.created,
    changed: request.body.changed
  });

  article.save(function(err){
    if (!err) {
      return console.log('created article');
    }
    return console.log(err);
  });

  return response.send(article);
});

// jQuery.post('/articles', {
//   'pid': "52151e31152118890b000001",
//   'title': 'PHP 1',
//   'text': 'PHP 1',
//   'created': new Date(2013, 8, 21).getTime(),
//   'changed': new Date(2013, 8, 21).getTime()
// }, function(data, textStatus, jqXHR) {
//     console.log('POST response:');
//     console.dir(data);
//     console.log(textStatus);
//     console.dir(jqXHR)
// });
