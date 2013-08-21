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
			// Récupération du model passé depuis,
			// la fonction renderArticle dans views/article/ArticlesView.js
			var article = this.options.article;

			this.$el.html(this.template({
				// Récupération et passage des attributs du model,
				// au template article.tpl.
				id : article.get('id'),
				title : article.get('title'),
				text : article.get('text')
			}));
			return this;
		}
	});
});