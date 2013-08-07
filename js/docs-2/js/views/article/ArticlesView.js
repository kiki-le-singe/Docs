/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'collections/article/ArticleCollection',
	'views/article/ArticleTitleView',
	'views/article/ArticleView'
], function ($, _, Backbone, ArticleCollection, ArticleTitleView, ArticleView) {
	'use strict';

	return Backbone.View.extend({

		initialize: function() {
			var self = this;
			self.collection = new ArticleCollection();

			// On récupère l'ensemble des models pour cette collection
			// depuis le serveur.
			self.collection.fetch({
				success : function() {
					// Depuis la MenuView.js on passe un paramètre type,
					// pour récupéré juste le sous menu : le titre de l'article.
					if (self.options.type == 'sub_menu') {
						self.renderSubMenu();
					}
					// Sinon on récupère l'article complet.
					else {
						self.renderArticle();
					}					
				},
				error : function() {
					console.log ('Error : ArticleCollection - article non récupéré.')
				}
			});
		},

		renderSubMenu : function() {
			var json = this.collection.toJSON(),
				// l'attribut item_main_menu_id a été passé en paramètre à partir de
				// la vue MenuView.js. Un attribut inconnu à backbone ce récupère
				// comme tel "this.options.item_main_menu_id". Sinon this.model, this.collection...
				itemMainMenuId = this.options.item_main_menu_id,
				// Trouve toutes les items de sous menu, qui sont en faite les
				// titres des articles, qui ont pour parent la bonne item
				// main menu (les articles sont taggués par une taxo, la liaison est faite par itemMainMenuId).
				itemsSubMenu = _.where(json, {pid : itemMainMenuId});

			// Si le menu principale a un sous menu,
			// alors on l'affiche.
			if (!_.isEmpty(itemsSubMenu)) {
				this.articleTitleView = new ArticleTitleView({
					item_main_menu_id : itemMainMenuId,
					items_sub_menu : itemsSubMenu					
				});

				// Ajoute les items de sous menu à son menu parent.
				$('.main-item-' + itemMainMenuId).append(this.articleTitleView.render().el);
				return this;	
			}
		},

		renderArticle : function() {
			var idArticle = this.options.id_article;

			this.articleView = new ArticleView({
				article : this.collection.get(idArticle)
			});

			$('#content').html(this.articleView.el);
			return this;
		}
	});
});