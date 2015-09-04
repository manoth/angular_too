// Page One Controller

angular.module('myApp.controllers.PageOneController', [])
	.controller('PageOneController', function ($scope) {
		$scope.one = [
			{id: 1, name: 'PageOne Angular'},
			{id: 2, name: 'PageOne Icon Framework'},
			{id: 3, name: 'PageOne NodeJS'},
			{id: 4, name: 'PageOne AngularJS'}
		];
	});
