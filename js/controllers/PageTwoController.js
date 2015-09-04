// Page Two Controller

angular.module('myApp.controllers.PageTwoController', [])
	.controller('PageTwoController', function ($scope) {
		$scope.two = [
			{id: 1, name: 'PageTwo Angular'},
			{id: 2, name: 'PageTwo Icon Framework'},
			{id: 3, name: 'PageTwo NodeJS'},
			{id: 4, name: 'PageTwo AngularJS'}
		];
	});
