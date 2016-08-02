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
        .when('/charactersscreen', {
        templateUrl: 'templates/characters.html',
        controller: 'characterCtrl',
        })
        .otherwise({
            redirectTo: '/'
        });
    }])
    .controller('indexCtrl', ['$scope', function ($scope){
        $scope.helloWorld = "Hello World";
    }])
    .controller('secondCtrl', ['$scope', function ($scope){
        $scope.helloWorld = "World Hello";
    }]);




