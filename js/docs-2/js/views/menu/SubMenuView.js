/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/menu/sub-menu.tpl'
], function ($, _, Backbone, subMenuTpl) {
	'use strict';

	return Backbone.View.extend({
		tagName: 'ul',
		template: _.template(subMenuTpl),

		initialize: function() {
			// Rend la vue dès l'initialisation.
			this.render();
		},

		render : function() {

			// l'attribut sub_item a été passé en paramètre à partir de
			// la vue MenuView.js. Un attribut inconnu à backbone ce récupère
			// comme tel "this.options.sub_item". Sinon this.model, this.collection...
			this.$el.html(this.template({
				item_main_menu_id : this.options.item_main_menu_id,
				items : this.options.sub_item,
			}));
			return this;
		}
	});
});