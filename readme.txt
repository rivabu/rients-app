opstarten

ng serve

anders window

node json-server.js

ng generate component directives directives/toggle --nospec

ng generate component directives/toggleParent --spec false -is
ng generate component forms/navbar --spec false -is


-- problemen met webpack

command npm ls webpack: geeft weer welke versies van webpack nu  gebruikt wordt
$ npm ls webpack
todo-app@0.0.0 /Users/rivabu/aaa/angular5/todo-app
└─┬ @angular-devkit/build-angular@0.8.3
  └── webpack@4.20.2

check outdated
npm outdated
~/aaa/angular5/todo-app$ npm outdated
Package                      Current  Wanted   Latest  Location
@types/node                    8.9.5   8.9.5  10.11.3  todo-app
codelyzer                      4.2.1   4.2.1    4.4.4  todo-app

nu npm remove webpack -g
nu npm install webpack -g
nu nmp install webpack-cli -g
nu webpack
zorg ervoor dat er 1 webpack is..

