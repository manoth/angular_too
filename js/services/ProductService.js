
angular.module('myApp.services.ProductService', [])
.factory('ProductService', function ($q, $http) {

	var products = [
		{id: 1, name: 'AngularJS'},
		{id: 2, name: 'Icon Framework'},
		{id: 3, name: 'NodeJS'},
	];

	return {
		getProduct: function () {
			return products;
		},

		getUsers: function () {
			var q = $q.defer();
			$http({
				url: 'http://jsonplaceholder.typicode.com/users'
			})
			.success(function (data)	{
				q.resolve(data);
			})
			.error(function(data, status) {
				/* Act on the event */
				q.reject('Connection error' + status)
			});

			return q.promise;
		},
		name: 'Product'
	};
});