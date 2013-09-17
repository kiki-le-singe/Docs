/*global define*/
define([
  'jquery',
  'underscore',
  'backbone',
  'models/menu/MenuModel'
], function ($, _, Backbone, MenuModel) {
  'use strict';

  return Backbone.Collection.extend({
    model: MenuModel,

    url: function() {
      // return '/server/stubs/menu.json';
      return '/menus';
    }
  });

});