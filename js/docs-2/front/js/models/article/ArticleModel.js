/*global define*/
define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
  'use strict';

  return Backbone.Model.extend({
    defaults:   {
      pid: "",
      id: "",
      title: "",
      text: "",
      created: new Date(2013, 8, 21).getTime(),
      changed: new Date(2013, 8, 21).getTime()
    },

    /*
    urlRoot: function() {
      return '/server/stubs/article.json';
      // return '/articles';
    },*/

    parse: function(response) {
      // La fonction "parse" nous permet d'éditer la reponse 
      // du serveur avant qu'elle soit passé au constructeur du Model. 
      // En effet dans mongoDB, un attribut "_id" est retourné et Backbone attend
      // l'attribut "id".
      response.id = response._id;
      return response;
    }
  });
});