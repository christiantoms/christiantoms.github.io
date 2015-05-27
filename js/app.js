console.log("inside app.js");

var app = angular.module("HTML5app", ["ngRoute", "HTMLControllers", "challengeServices"]);

app.config(["$routeProvider", function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: "views/home.html",
		controller: "HomeCtrl"
	}).when('/:shortName', {
		templateUrl: "views/content.html",
		controller: "ContentCtrl"
	});
}]);