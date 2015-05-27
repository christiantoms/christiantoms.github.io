console.log("inside app.js");

var app = angular.module("HTML5app", ["ngRoute", "HTMLControllers"]);

app.config(["$routeProvider", function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: "views/home.html",
		controller: "HomeCtrl"
	});
}]);