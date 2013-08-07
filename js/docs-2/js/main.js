/**
 * @file
 * js/main.js.
 * 
 * main.js est chargé automatiquement, grâce à
 * l'attribut data-main dans la balise script, par require.js.
 */

/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
		// lodash: {
		// 	exports: '_'
		// },
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		marionette: {
			deps: ['backbone'],
			exports: 'Backbone.Marionette'
		}
	},
	// La racine par défaut est dans le dossier js, car dans le fichier
	// index.html requirejs charge main.js dans le dossier /js
	paths: {
		jquery: 'libs/jquery/jquery',
		underscore: 'libs/underscore/underscore',
		// lodash: 'libs/lodash/lodash',
		backbone: 'libs/backbone/backbone',
    	marionette : 'libs/backbone.marionette/lib/backbone.marionette',
		text: 'libs/requirejs-text/text',
		tpl: 'libs/requirejs-tpl/tpl',
		// Définis ou se trouve les templates
		templates: 'templates'
	}
});

require([
	'backbone',
	'views/app',
	'routers/router'
], function (Backbone, AppView, AppRouter) {
	/*jshint nonew:false*/
	// Initialize routing and start Backbone.history()
	new AppRouter();
	Backbone.history.start();

	// Initialize the application view
	new AppView();
});