/*global define*/
define([
  'jquery',
  'underscore',
  'backbone',
  'models/article/ArticleModel'
], function ($, _, Backbone, ArticleModel) {
  'use strict';

  return Backbone.Collection.extend({
    model: ArticleModel,

    url: function() {
      return '/server/stubs/article.json';
      // return '/articles';
    }
  });

});