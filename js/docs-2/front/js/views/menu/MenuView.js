/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'collections/menu/MenuCollection',
	'text!templates/menu/menu.tpl',
	'views/article/ArticlesView'
], function ($, _, Backbone, MenuCollection, menuTpl, ArticlesView) {
	'use strict';

	return Backbone.View.extend({
		// Par défaut une vue backbone a comme tagName
		// une div, on le surcharge par une balise ul.
		tagName: 'ul',
		className: 'main-menu',
		// Compile our stats template
		template: _.template(menuTpl),

		initialize: function() {
			var self = this;
    		self.collection = new MenuCollection();

			// On récupère l'ensemble des models pour cette collection
			// depuis le serveur.
			self.collection.fetch({
				success : function() {
					self.render();
				},
				error : function() {
					console.log ('Error : MenuCollection - menu non récupéré.')
				}
			});
		},

		render : function() {

			// Pour chaque model
			this.collection.each(function(item) {
				var itemMainMenuId = item.get('id');

				// On ajoute à l'élément ul(this.$el)
				// le template menuTpl avec certaines options.
				this.$el.append(this.template({
					id : itemMainMenuId,
					title : item.get('title'),
					img_src : item.get('img_src'),
					path : item.get('path')
				}));

				// Appel de la vue des articles pour récupérer les titres,
				// qui servent en tant que sous menu.
				new ArticlesView({
					item_main_menu_id : itemMainMenuId,
					type : 'sub_menu'
				});
			}, this);

			return this;
		}
	});
});