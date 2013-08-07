/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/article/article-title.tpl'
], function ($, _, Backbone, articleTitleTpl) {
	'use strict';

	return Backbone.View.extend({
		tagName: 'ul',
		className: 'sub-menu',
		// Compile our stats template
		template: _.template(articleTitleTpl),

		render : function() {
			this.$el.html(this.template({
				item_main_menu_id : this.options.item_main_menu_id,
				items_sub_menu : this.options.items_sub_menu
			}));
			return this;
		}
	});
});