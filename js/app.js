var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider

		.when('/', {
			templateUrl : 'pages/home.html',
			controller 	: 'mainController' 
		})

		.when('/war', {
			templateUrl	: 'pages/war.html',
			controller  : 'warController'
		})
		.when('/resources', {
			templateUrl : 'pages/resources.html',
			controller 	: 'mainController'
		})
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller 	: 'aboutController'
		});
});

myApp.controller('mainController', function($scope){
	$scope.message = 'hi im working';
});

myApp.controller('aboutController', function($scope){
	$scope.message = 'ABOUT working';
});

myApp.controller('warController', function($scope){
	$scope.message = 'this is war!!!!';
});