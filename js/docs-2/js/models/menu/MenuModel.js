/*global define*/
define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
  'use strict';

  return Backbone.Model.extend({
    // defaults:   {
    //   id: "",
    //   title: "",
    //   image_src: "",
    //   path: "",
    //   childrens: [
    //     {
    //       id: "",
    //       title: ""
    //     }
    //   ]
    // },

    initialize : function() {
      // console.log(this.get('childrens'));
    }
  });
});