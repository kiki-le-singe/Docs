/*global define*/
define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
  'use strict';

  return Backbone.Model.extend({
    defaults:   {
      title: "",
      imageSrc: "",
      path: ""
    },

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