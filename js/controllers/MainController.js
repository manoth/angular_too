// Main Controller

angular.module('myApp.controllers.MainController', ['myApp.services.ProductService'])
	.controller('MainController', function ($scope, ProductService) {
		/*
		$scope.products = [
			{id: 1, name: 'Angular'},
			{id: 2, name: 'Icon Framework'},
			{id: 3, name: 'NodeJS'},
			{id: 4, name: 'AngularJS'}
		];
		*/
		$scope.products = ProductService.getProduct();
		$scope.users = [];

		ProductService.getUsers()
			.then(function (users){
				//console.log(users);
				$scope.users = users;
			}, function (err){
				console.log(err);
			});
	});
