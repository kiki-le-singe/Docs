/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/article/article.tpl'
], function ($, _, Backbone, articleTpl) {
	'use strict';

	return Backbone.View.extend({
		tagName: 'div',
		// Compile our stats template
		template: _.template(articleTpl),

		initialize: function() {
			this.render();
		},

		render : function() {
			var article = this.options.article;

			this.$el.html(this.template({
				id : article.get('id'),
				title : article.get('title'),
				text : article.get('text')
			}));
			return this;
		}
	});
});