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
      text: ""
    },

    urlRoot: function() {
      return '/server/stubs/article.json';
      // return '/articles';
    },

    initialize : function() {
      // console.log(this.get('childrens'));
    }
  });
});