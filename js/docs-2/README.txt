server/menu.json : Collection d'items du menu principal.

Le menu principal, peut-être imaginé comme une taxonomie dans drupal. On tagguera les articles par cette taxo.

server/article.json : Collection d' articles.

Le titre de l'article est utilisé comme sous items du menu princpal aux quels il est rattaché. C'est donc le sous menu.

Au clique sur le sous menu, qui est le titre de l'article, un appel ajax sera fait pour récupérer l'article voulu, grâce a son attribut id

voir project book_library_restful pour faire des requêtes, créer un serveur...
