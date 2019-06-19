var routeModule = angular.module('routeModule', ['ui.router']);
routeModule.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider.state("home", {
		url: "/home",
		templateUrl: "template/home.html",
		controller: function($scope) {
			$scope.books = ["Java", "Bootstrap", "AngualrJS"];
		}
	});
	$stateProvider.state("about", {
		url: "/about",
		templateUrl: "template/about.html",
		controller: function($scope) {
			$scope.name = "Kan";
		}
	});
	$stateProvider.state("contact", {
		url: "/contact",
		templateUrl: "template/contact.html"
	});
});