 angular.module('main', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider){
        console.log('hola');
        $routeProvider
        .when('/', {
            templateUrl: 'templates/index.html'
            ,controller: 'indexCtrl'
        })
        .when('/second', {
            templateUrl: 'templates/second.html'
            ,controller: 'secondCtrl'
        })
        .when('/charactersview', {
        templateUrl: 'templates/characters.html',
        controller: 'characterCtrl',
        })
        .when('/mycharactersview', {
        templateUrl: 'templates/mycharactersview.html',
        controller: 'characterCtrl',
        })
        .when('/newcharactersview', {
        templateUrl: 'templates/newcharactersview.html',
        controller: 'characterCtrl',
        })
        .when('/listplacesview', {
        templateUrl: 'templates/listplacesview.html',
        controller: 'huntingplacesCtrl',
        })
        .when('/newplaceview', {
        templateUrl: 'templates/newplaceview.html',
        controller: 'huntingplacesCtrl',
        })
        .when('/aboutmeview', {
        templateUrl: 'templates/aboutmeview.html',
        controller: 'aboutmeCtrl',
        })
        .otherwise({
            redirectTo: '/'
        });
    }]).controller('secondCtrl', ['$scope', function ($scope){
        $scope.helloWorld = "World Hello";
    }]);




