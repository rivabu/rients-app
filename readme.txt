===repo===

https://github.com/rivabu/rients-app.git
rivabu/straal01

===urls===
prod url (gezipte content)

$ http://localhost:3000

$ http://localhost:4201

===opstarten---

ng serve

anders window

node json-server.js

===ng-generatie===
ng generate component directives/magic-eight-ball
ng generate service directives/magic-eight-ball
ng generate component directives/toggleParent --spec false -is
ng generate component forms/navbar --spec false -is

=== problemen met webpack ===

command npm ls webpack: geeft weer welke versies van webpack nu gebruikt wordt
$ npm ls webpack
rients-app@0.0.0 /Users/rivabu/aaa/angular5/rients-app
└─┬ @angular-devkit/build-angular@0.8.3
  └── webpack@4.20.2

installeren global package
$ npm install -g typescript
installeren nieuw package en de package.json meteen updaten
$ npm install concurrently --save-dev

check outdated
$ npm outdated
~/aaa/angular5/rients-app$ npm outdated
Package                      Current  Wanted   Latest  Location
@types/node                    8.9.5   8.9.5  10.11.3  rients-app
codelyzer                      4.2.1   4.2.1    4.4.4  rients-app

$ npm remove webpack -g
$ npm install webpack -g
$ nmp install webpack-cli -g
$ webpack
zorg ervoor dat er 1 webpack is..

===bouwen met webpack===
$ webpack --mode=production --display-error-details


===runnen scripts vanuit de package json===
$ npm run <command>
