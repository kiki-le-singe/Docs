#########
# Tools #
#########

Node : http://nodejs.org/
Node.js permet d'exécuter du javascript côté serveur.

NPM : https://npmjs.org/
C'est le Node Package Manager, qui permet de télécharger, d'installer, puis gèrer les dépendences, des modules.

Bower : http://bower.io/
C'est un gestionnaire de paquets Web.

mongoDB : http://www.mongodb.org/

########
# Libs #
########

Backbone : http://backbonejs.org/

Require : http://requirejs.org/

Requirejs-text : https://github.com/requirejs/text

Underscore : http://underscorejs.org/

#########
# Files #
#########

.bowerrc : 
Fichier permettant de configurer bower.

package.json : http://package.json.nodejitsu.com/
Fichier d'infos sur l'application, de configuration et des modules node à télécharger.

#######
# App #
#######

server/menu.json : Collection d'items du menu principal.

Le menu principal, peut-être imaginé comme une taxonomie dans drupal. On tagguera les articles par cette taxo.

server/article.json : Collection d' articles.

Le titre de l'article est utilisé comme sous items du menu princpal aux quels il est rattaché. C'est donc le sous menu.

Au clique sur le sous menu, qui est le titre de l'article, un appel ajax sera fait pour récupérer l'article voulu, grâce a son attribut id

voir project book_library_restful pour faire des requêtes, créer un serveur...
