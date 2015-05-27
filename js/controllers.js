console.log("inside controllers.js");

var HTMLControllers = angular.module("HTMLControllers", ["challengeServices"]);

HTMLControllers.controller("TopCtrl", ["$scope", "catService", function($scope, catService) {
	//Top level controller so we can handle page setup logic

	catService.getCatContent().then(function(response) {
		$scope.catInfo = response.data;
		console.log($scope.catInfo);
		$scope.catMap = catService.getFilteredCat($scope.catInfo);
	});
}]);

HTMLControllers.controller("HomeCtrl", ["$scope", "catService", function($scope, catService) {

	catService.retrieve("articles/featured").success(function(data) {
		$scope.homeNews = data; 
	}).error(function(data) {
		console.log("god help us. [HomeCtrl]");
	});
}]);

HTMLControllers.controller("ContentCtrl", ["$scope", "$routeParams", "catService", function($scope, $routeParams, catService) {
	console.log("contentctrl begun!");

	catService.getCatContent().then(function(response) {
		//$scope.categoryName = $routeParams.shortName;
		$scope.catInfo = response.data;
		console.log($scope.catInfo);
		$scope.catMap = catService.getFilteredCat($scope.catInfo);

		catService.retrieve("category/" + $scope.catMap[$routeParams.shortName]).success(function(data) {
			$scope.catNews = data;
			console.log($scope.catMap[$routeParams.shortName] + " <-------- that thing");
		}).error(function(data){
			console.log("god help us. [ContentCtrl catagory]");
		});
	});
	
	
}]);