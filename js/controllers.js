console.log("inside controllers.js");

var HTMLControllers = angular.module("HTMLControllers", []);

HTMLControllers.controller("TopCtrl", ["$scope", "$http", function($scope, $http) {

	$http.get("http://html5news.herokuapp.com/articles/categories").success(function(data) {
		$scope.catInfo = data;
	}).error(function(data) {
		console.log('god help us. [TOP]');
	});
}]);

HTMLControllers.controller("HomeCtrl", ["$scope", "$http", function($scope, $http) {

	$http.get("http://html5news.herokuapp.com/articles/featured").success(function(data) {
		$scope.homeNews = data;
	});
}]);