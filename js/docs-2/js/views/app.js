/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'views/menu/MenuView'
], function ($, _, Backbone, MenuView) {
	'use strict';

	return Backbone.View.extend({
		initialize: function() {
			console.log('app.js');
			
			this.menuView = new MenuView();
			// Au cas ou l'envie d'afficher le menu sans le sous menu.
			// this.menuView = new MenuView({subMenu : true});
			$('#sidebar-left').html(this.menuView.$el);
		}
	});
});