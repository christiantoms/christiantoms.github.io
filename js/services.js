console.log("INSIDE SERVICES");

appServices = angular.module("challengeServices", []);

appServices.service("catService", ["$http", function($http) {
	var url = "http://html5news.herokuapp.com/";
	var self = this;
	console.log("inside service def");

	this.retrieve = function(path) {
		return $http.get(url + path);
	};
	
	$http.get(url + "articles/categories").success(function(data) {
		self.catInfo = data;
		self.catMap = {};
		
		for(var i = 0; i < self.catInfo.length; i++) {
			self.catMap[self.catInfo[i]["shortName"]] = self.catInfo[i]["id"];
		}

	}).error(function(data) {
		console.log("god help us...[catService]");
	});
}]);

