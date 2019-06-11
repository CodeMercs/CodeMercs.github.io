var loginModule = angular.module("loginModule", []);

loginModule.controller("UserController",function ($scope, $log){
	$scope.name = "login";
	$scope.passwd = "owopass";
	$scope.submit = function(){
		alert("Login Module");
	}
});

var registerModule = angular.module("registerModule", []);

registerModule.controller("UserController",function ($scope, $log){
	$scope.name = "register";
	$scope.passwd = "owopass";
	$scope.submit = function(){
		alert("Register Module");
	}
});

