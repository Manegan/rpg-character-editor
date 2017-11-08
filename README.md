# rpg-character-editor
Ce projet a pour but de permettre à ses utilisateurs de créer des templates de feuilles de personnages pour leur jeu de rôle.

Ce projet proposera aussi des templates de jdr existants comme Donjons&Dragons, FATE Core, FATE Accelerated Edition, Pathfinder.

## Installation

### Pré-requis
Node + npm (mes versions respectives : 6.10.0 et 4.3.0)

### Et après ?
Récupérer les sources (évidemment) <br/>
Entrer les commandes suivantes à la racine du projet pour installer la partie front du projet :
> npm i <br/>
  npm run production <br/>
  npm run hot

Sur votre navigateur préféré, accéder à l'url :
> http://localhost:8080

Pour la partie back (serveur) :

Si ce n'est pas déjà fait :
> npm i

Suivi de :
> npm run prodserver <br/>
  node dist/server/app.js

Le serveur tourne maintenant en local et l'api est accessible à l'adresse (par défaut) :
> http://localhost:3000

## But(s)
- Possibilité de créer un compte, de créer sa campagne, inviter des joueurs...
- Créer une campagne qui contient l'ensemble des choses que les joueurs peuvent posséder, e.g. les objets que les personnages peuvent avoir dans leur inventaires, les sorts qu'ils peuvent utiliser...
- Pouvoir créer sont template de personnages pour une campagne
- Utiliser les templates pour créer son personnages
- Sauvegarder son personnages et le récupérer ultérieurement
- Un mode MJ où il est possible de rédiger ses aventures et de stocker les feuilles des PNJs
