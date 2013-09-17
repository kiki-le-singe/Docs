/**
 * @file
 * js/router.js.
 */

/*global define*/
define([
	'jquery',
	'backbone',
	'views/article/ArticlesView'
], function ($, Backbone, ArticlesView) {
	'use strict';

	var AppRouter = Backbone.Router.extend({
		routes: {
			// idItemSubMenu est en faite l'id de l'article.
      		"articles/:idItemMainMenu/:idArticle": 'displayArticle',
      		// Router par défault.
			'*actions': 'defaultAction'
		},

		defaultAction: function() {
			console.log('defaultAction');
		},

		displayArticle: function(idItemMainMenu, idArticle) {
			this.articleView = new ArticlesView({
				item_main_menu_id : idItemMainMenu,
				id_article : idArticle
			});
		}
	});

	return AppRouter;
});